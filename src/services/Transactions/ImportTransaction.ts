import fs from 'fs';
const readline = require('readline');

interface File {
    file: object
}

class ImportTransaction {

    public async execute({file}: File) {
        
        const stream = fs.createReadStream(file.path);

        const rl = readline.createInterface({
            input: stream,
            crlfDelay: Infinity
          });

          for await (const line of rl) {

            // Each line in input.txt will be successively available here as `line`.

            //console.log(`Line from file: ${line}`);
            console.log(line.substring(150, 168));
          }        

    }

}

export default ImportTransaction;