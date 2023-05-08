const path = require('path');
const fs = require('fs');
const folderDir = path.join(__dirname, 'secret-folder');

fs.readdir(folderDir, { withFileTypes: true }, (err, data) => {
  const fileInfo = data.filter((file) => !file.isDirectory());
  fileInfo.map((file) => {
    const filePath = path.join(folderDir, file.name);
    fs.stat(filePath, (err, data) => {
      const [name, ext] = path.basename(filePath).split('.');
      console.log(`${name} - ${ext} - ${data.size / 1000} kb`);
    });
  });
});