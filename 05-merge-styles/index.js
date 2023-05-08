const fs = require('fs');
const process = require('process');
const path = require('path');

const bundle = path.join(__dirname, 'project-dist', 'bundle.css');
const folderPathFrom = path.join(__dirname, 'styles');
const writableStream = fs.createWriteStream(bundle);


fs.promises
  .readdir(folderPathFrom, { withFileTypes: true })
  .then((names) => {
    names.forEach(file => {
      let filePathFrom = path.join(__dirname, 'styles', file.name);

      if (file.isFile() && path.extname(filePathFrom) === '.css') {

        const readableStream = fs.createReadStream(filePathFrom);

        readableStream.on('data', (chunk) => {
          writableStream.write(chunk.toString() + '\n');
        });
      }
    });
  });