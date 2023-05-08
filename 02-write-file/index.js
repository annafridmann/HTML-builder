const fs = require('fs');
const { stdin, stdout } = process;
let writableStream = fs.createWriteStream(
    'destination.txt' 
);

stdout.write('Напиши что то:\n');
stdin.on('data', data => {
    writableStream.write(data);

    if (data.toString() === 'exit\r\n'){
        process.on('exit', () => 
        console.log('удачи'));
        process.exit();
    }
});