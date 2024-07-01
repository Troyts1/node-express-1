const fs = require('fs');
const axios = require('axios');
const path = require('path'); 

fs.readFile("urls.txt", "utf8", async function(err, data) {
    if (err) {
        console.log("Error reading the file:", err);
        process.exit(1);
    }
    const urls = data.split('\n').filter(url => url.trim() !== '');
    try {
        await Promise.all(urls.map(async function (url){
            try {
                const response = await axios.get(url);
                const hostname = new URL(url).hostname;
                const Filename = path.join(__dirname, `${hostname}.html`);
                await fs.promises.writeFile(Filename, response.data);
                console.log(`Saved ${url} to ${Filename}`);
            } catch (err) {
                console.error(`Error fetching ${url}:`, err);
            }
        }));
    } catch (err) {
        console.error('Error processing the URLs:', err);
    }
});