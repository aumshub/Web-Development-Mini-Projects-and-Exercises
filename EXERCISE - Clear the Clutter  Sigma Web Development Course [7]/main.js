const fs = require('fs')
const path = require('path')

function creatingFiles() {

    const files = ['name.jpg', 'name.png', 'this.pdf', 'jalpan.zip', 'kush.zip', 'cat.jpg', 'harry.pdf']

    const unorganizedDir = 'clutterGenerated folder' // name of the test folder

    // create directory if it doesn't exist
    if (!fs.existsSync(unorganizedDir)) {
        (fs.mkdirSync(unorganizedDir));
    }

    // create each files in directory
    files.forEach(file => {
        const filePath = path.join(unorganizedDir, file);
        fs.writeFileSync(filePath, 'This is an empty file.');
    });

    console.log('Test files created successfully in the unorganized folder!');
}

function organizingFiles() {


    const baseDir = process.cwd();  // get current working directory
    const allFiles = fs.readdirSync(baseDir);
  
    const unorganizedDir = 'clutterGenerated folder' // it is create only at up just keep it in mind thats why
    const organizedDir = 'organized folder'
    const directories = ['PNG', 'PDF', 'JPG', 'ZIP']; // array of directory

    if (!fs.existsSync(organizedDir)) {
        fs.mkdirSync(organizedDir)
    }

    directories.forEach(subDirectory => {
        const subDirPath = path.join(organizedDir, subDirectory);
        // create directory if doesn't exist    
        if (!fs.existsSync(subDirPath)) {
            fs.mkdirSync(subDirPath)
        }
    });

    // Read all files in the unorganized folder
    const unorganizedFiles = fs.readdirSync(unorganizedDir);
    // console.log(unorganizedFiles);

    // get file extensions
    unorganizedFiles.forEach(file => {
        const isFile = fs.lstatSync(path.join(baseDir, file)).isfile();
        
        file = file.trim(); // Remove extra spaces  eg:' cat.jpg ';
        const ext = path.extname(file)
        //    console.log(ext);

        let targetDirectory = '';

        // Categorize files based on their extension
        switch (ext) {
            case '.jpg':  // if .jpg ext
            case '.jpeg':
                targetDirectory = 'JPG'; // then add .jpg ext in the Jpg directory
                break;
            case '.png':
                targetDirectory = 'PNG'
                break;
            case '.pdf':
                targetDirectory = 'PDF';
                break;
            case '.zip':
                targetDirectory = 'ZIP';
                break;

            default:
                console.log(`Skipping unsupported file: ${file}`);
                return;    // Skip files with unsupported extensions
        }

        // Construct the source and destination file paths
        const oldPath = path.join((unorganizedDir), file)
        const newPath = path.join(organizedDir, targetDirectory, file)

        // Move the file to the corresponding directory
        if (fs.existsSync(oldPath)) {
            fs.renameSync(oldPath, newPath);
            console.log(`Moved ${file} to ${targetDirectory}`);
        } else {
            console.error(`File ${file} not found in ${unorganizedDir}`);
        }
    }); // for each loop closes here.

    console.log('Files organized successfully!');

}

// creatingFiles()
// organizingFiles()
