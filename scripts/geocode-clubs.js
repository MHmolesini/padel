const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

// Simple fetch implementation for Node.js
// using built-in fetch if available (Node 18+)
// Otherwise we'd need 'node-fetch' but let's assume modern Node given Next 14.

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function geocodeAddress(address) {
    try {
        // Use OpenStreetMap Nominatim
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`;
        // User-Agent is required by Nominatim TOS
        const headers = { 'User-Agent': 'PadelMediaHunter/1.0' };

        const res = await fetch(url, { headers });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (data && data.length > 0) {
            return {
                lat: parseFloat(data[0].lat),
                lng: parseFloat(data[0].lon)
            };
        }
    } catch (e) {
        console.error(`Error geocoding ${address}:`, e.message);
    }
    return null; // Not found
}

async function run() {
    try {
        const keyPath = path.join(process.cwd(), 'servide_account.json');

        const auth = new google.auth.GoogleAuth({
            keyFile: keyPath,
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        // Spreadsheet ID from the user: 10YOtuYU_huk1h1L781kAGbDlGJ2ha1hvb2n7bwOMcu4
        const spreadsheetId = '10YOtuYU_huk1h1L781kAGbDlGJ2ha1hvb2n7bwOMcu4';

        console.log('Fetching clubs from Sheet...');
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'A2:G1000',
        });

        const rows = response.data.values || [];
        const clubs = [];

        // Load existing cache if exists to avoid re-geocoding everything
        let cache = {};
        const cachePath = path.join(process.cwd(), 'public', 'locations.json');
        if (fs.existsSync(cachePath)) {
            try {
                const raw = fs.readFileSync(cachePath);
                const existingData = JSON.parse(raw);
                existingData.forEach(c => {
                    // Cache key is Name - Address. 
                    // Since we are changing address format, this might miss some cache hits, but that's okay for re-running.
                    cache[`${c.nombre}-${c.address}`] = { lat: c.lat, lng: c.lng };
                });
                console.log(`Loaded ${Object.keys(cache).length} cached locations.`);
            } catch (e) { }
        }

        console.log(`Processing ${rows.length} rows...`);

        // HEADERS: Barrio (0), Domicilio (1), Tel (2), Nombre (3), Canchas (4), Tech (5), Zona (6)

        for (const row of rows) {
            const barrio = row[0] || '';
            const domicilio = row[1] || '';
            const nombre = row[3] || 'Sin Nombre';
            const zona = row[6] || 'Argentina';

            // Clean address logic
            // 1. Remove (...) from Domicilio and Barrio
            const cleanDomicilio = domicilio.replace(/\(.*?\)/g, '').trim();
            const cleanBarrio = barrio.replace(/\(.*?\)/g, '').trim();

            // Construct cleaner search query: "Street, City, Province, Argentina"
            const queryAddress = `${cleanDomicilio}, ${cleanBarrio}, ${zona}, Argentina`;

            // Generate cache Key
            const cacheKey = `${nombre}-${queryAddress}`;

            let coords = cache[cacheKey];

            if (!coords) {
                console.log(`Geocoding: ${queryAddress}`);
                coords = await geocodeAddress(queryAddress);
                await delay(1100);

                // Fallback: Try without Barrio if failed
                if (!coords) {
                    const fallback = `${cleanDomicilio}, ${zona}, Argentina`;
                    // console.log(`Retry: ${fallback}`);
                    coords = await geocodeAddress(fallback);
                    await delay(1100);
                }
            }

            if (coords) {
                clubs.push({
                    nombre,
                    address: queryAddress,
                    lat: coords.lat,
                    lng: coords.lng,
                    stats: `Canchas: ${row[4] || 0}`
                });
            } else {
                console.warn(`Could not locate: ${queryAddress}`);
            }

            // Save incrementally every 10 rows
            if (clubs.length % 10 === 0) {
                fs.writeFileSync(cachePath, JSON.stringify(clubs, null, 2));
            }
        }

        fs.writeFileSync(cachePath, JSON.stringify(clubs, null, 2));
        console.log(`Saved ${clubs.length} locations to ${cachePath}`);

    } catch (error) {
        console.error('Fatal error:', error);
    }
}

run();
