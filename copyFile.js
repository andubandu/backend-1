const fs = require('fs/promises');

const sourcePath = './data.txt';
const destinationPath = './copy.txt';

async function copyFile() {
    try {
        const data = await fs.readFile(sourcePath, 'utf8');
        await fs.writeFile(destinationPath, data);
        console.log('File copied successfully.');
    } catch (err) {
        console.error('Error:', err);
    }
}

copyFile();
