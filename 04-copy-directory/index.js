const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');
const process = require('process');

const dirFrom = path.join(__dirname, 'files');
const dirTo = path.join(__dirname, 'files-copy');

fsPromises
  .mkdir(dirTo, { recursive: true });

fsPromises
  .readdir(dirFrom, { withFileTypes: true })
  .then((files) => {
    files.forEach(filename => {
      let fromFilePath = path.join(dirFrom, filename.name);
      let toFilePath = path.join(dirTo, filename.name);

      fs.copyFile(fromFilePath, toFilePath, (err) => {
        if (err) process.stdout.write(err);
      });
    });
  });
