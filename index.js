import { inquirerMenu, pausa } from './helpers/inquirer.js';
import 'colors';

const main = async () => {

    let opt = 0;
    do {
        opt = await inquirerMenu();
        await pausa();
    } while ( opt !== 3 )
}

main();