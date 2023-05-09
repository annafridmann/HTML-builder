const fs = require('fs');
const path = require('path');

const { stdin, stdout } = process;
const newFileName = 'destination.txt';
const newFileWay = path.join(__dirname, newFileName);
let writableStream = fs.createWriteStream(newFileWay);

stdout.write('Напиши что то:\n');
stdin.on('data', data => {
    writableStream.write(data);

    if (data.toString() === 'exit\r\n'){
        process.on('exit', () => 
            console.log('удачи'));
            process.exit();
    }
});