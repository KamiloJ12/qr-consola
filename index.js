import { inquirerMenu, pausa, leerInput } from './helpers/inquirer.js';
import Usuario from './models/usuario.js';
import Qr from './helpers/qr.js';
import 'colors';

const main = async () => {
    await menu1();
}

const menu1 = async () => {

    let opt = 0;
    let choices = [
        {
            value: 1,
            name: `${ '1.'.green } Registrarse`
        },
        {
            value: 2,
            name: `${ '2.'.green } Iniciar Sesion`
        },
        {
            value: 3,
            name: `${ '3.'.green } Salir`
        }
    ];
    do {    
        opt = await inquirerMenu(choices);
        switch ( opt ) {
            case 1:
                {
                    let nombre = await leerInput('Ingrese el nombre: ');
                    let correo = await leerInput('Ingrese el correo: ');
                    let password = await leerInput('Ingrese la contraseña: ');
                    let usuario = new Usuario(nombre, correo, password);
                    console.log( usuario );
                }
                break; 
            case 2:
                {
                    let correo = await leerInput('Ingrese el correo: ');
                    let password = await leerInput('Ingrese la contraseña: ');
                    if( correo === 'correo' && password === 'clave' ) {
                        await menu2();
                    }
                    console.log(correo, password);
                }
                break; 
        }
        await pausa();
    } while ( opt !== 3 )

}

const menu2 = async () => {

    let opt = 0;
    let choices = [
        {
            value: 1,
            name: `${ '1.'.green } Generar codigo qr`
        },
        {
            value: 2,
            name: `${ '2.'.green } Historial`
        },
        {
            value: 3,
            name: `${ '3.'.green } Salir`
        }
    ];
    do {
        opt = await inquirerMenu(choices);
        switch ( opt ) {
            case 1:
                let url = await leerInput('Ingrese la Url: ');
                await Qr.create( url );
                break;
        }
        await pausa();
    } while ( opt !== 3 )
}

main();