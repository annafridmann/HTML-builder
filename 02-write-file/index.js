const fs = require('fs');
const path = require('path');
const readline = require('readline');


const { stdin, stdout } = process;
const newFileName = 'destination.txt';
const newFileWay = path.join(__dirname, newFileName);
let writableStream = fs.createWriteStream(newFileWay);
const rl = readline.createInterface(stdin);

const stopWrite = () =>{
    writableStream.end();
    rl.close();
    process.exit();
}

stdout.write('Напиши что то:\n');
stdin.on('data', data => {
    writableStream.write(data);

    if (data.toString() === 'exit\r\n'){
        process.on('exit', () => 
            console.log('удачи'));
            stopWrite();
    }
});
rl.on('close', () =>{console.log('удачи')});
process.on('SIGINT', stopWrite);