import { google } from 'googleapis';
import path from 'path';
import process from 'process';

export interface Club {
    barrio: string;
    domicilio: string;
    telefono: string;
    nombre: string;
    canchas: number;
    techadas: boolean;
    zona: string;
}

export async function getClubs(): Promise<Club[]> {
    try {
        const keyPath = path.join(process.cwd(), 'servide_account.json');

        // In strict environments, we might want to check fs.existsSync, but next.js server components can usually access this.
        // If running in Vercel/Cloud, this usually requires ENV vars instead of a file, but for local use as requested:

        const auth = new google.auth.GoogleAuth({
            keyFile: keyPath,
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Spreadsheet ID from the user: 10YOtuYU_huk1h1L781kAGbDlGJ2ha1hvb2n7bwOMcu4
        const spreadsheetId = '10YOtuYU_huk1h1L781kAGbDlGJ2ha1hvb2n7bwOMcu4';

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'A2:G1000', // Skip header (A1)
        });

        const rows = response.data.values;
        if (!rows || rows.length === 0) {
            return [];
        }

        return rows.map((row) => {
            // Mapping based on inspected headers:
            // 0: Barrio, 1: Domicilio, 2: Tel/WhatsApp, 3: Web (Name), 4: Canchas, 5: Techadas, 6: Zona
            const canchasRaw = row[4];
            // Clean "–" or empty strings to 0
            const canchas = (canchasRaw && canchasRaw !== '–' && !isNaN(parseInt(canchasRaw)))
                ? parseInt(canchasRaw)
                : 0;

            return {
                barrio: row[0] || '',
                domicilio: row[1] || '',
                telefono: row[2] || '',
                nombre: row[3] || 'Sin Nombre', // Index 3 seems to be the Name based on inspection
                canchas: canchas,
                techadas: row[5] === 'Si' || row[5] === 'Sí' || row[5] === 'si',
                zona: row[6] || '',
            };
        });
    } catch (error) {
        console.error('Error fetching clubs from sheets:', error);
        return [];
    }
}
