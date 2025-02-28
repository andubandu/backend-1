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

async function readRandomFiles() {
    try {
        const randomFile1Content = await fs.readFile('./random1/randomFile1.txt', 'utf8');
        const randomFile2Content = await fs.readFile('./random2/randomFile2.txt', 'utf8');
        console.log('Content of randomFile1.txt:', randomFile1Content);
        console.log('Content of randomFile2.txt:', randomFile2Content);
    } catch (err) {
        console.error('Error reading random files:', err);
    }
}

listFilesAndFolders();
readRandomFiles(); 
