const fs = require('fs/promises');

const directoryPath = '.';
const outputPath = './structure.txt';

async function listFilesAndFolders() {
    try {
        const files = await fs.readdir(directoryPath, { withFileTypes: true });
        const output = files.map(file => {
            if (file.isDirectory()) {
                return `Folder - ${file.name}`;
            } else {
                return `File - ${file.name}`;
            }
        }).join('\n');
        
        await fs.writeFile(outputPath, output);
        console.log('Directory structure written to structure.txt');
    } catch (err) {
        console.error('Error:', err);
    }
}

listFilesAndFolders();
