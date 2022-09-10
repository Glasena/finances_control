import fs from 'fs';
import dateString from '../../../utils/dateString';
import valueString from '../../../utils/valueString';
import TransactionsRepository from '../../database/repositories/Transactions/transactions.repository';
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

            const segmento = line.substring(13, 14);

            // Tratativa para outras linhas
            if (segmento != 'E'){
              continue;
            }
            
            const date = dateString(line.substring(142, 150));
            const value = valueString(line.substring(150, 168));
            const cred_deb = line.substring(168, 169);
            const description = line.substring(201, 239);

            const transaction = await TransactionsRepository.create({
              value,
              description,
              date,
              cred_deb,
            });

            await TransactionsRepository.save(transaction);

            console.log(transaction);

          }
          
          

    }

}

export default ImportTransaction;