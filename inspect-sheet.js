const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

async function inspectSheet() {
    try {
        const keyPath = path.join(process.cwd(), 'servide_account.json');
        if (!fs.existsSync(keyPath)) {
            console.error('Error: servide_account.json not found!');
            return;
        }

        const auth = new google.auth.GoogleAuth({
            keyFile: keyPath,
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        // Extracted from URL: https://docs.google.com/spreadsheets/d/10YOtuYU_huk1h1L781kAGbDlGJ2ha1hvb2n7bwOMcu4/edit?gid=0#gid=0
        const spreadsheetId = '10YOtuYU_huk1h1L781kAGbDlGJ2ha1hvb2n7bwOMcu4';

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'A1:Z5', // Fetch first 5 rows to see headers and data
        });

        const rows = response.data.values;
        if (rows.length) {
            console.log('Sheet Schema detected:');
            console.log('Headers:', rows[0]);
            console.log('Sample Data:', rows[1]);
        } else {
            console.log('No data found.');
        }
    } catch (error) {
        console.error('Error fetching sheet:', error.message);
        if (error.response) {
            console.error('Details:', error.response.data);
        }
    }
}

inspectSheet();
