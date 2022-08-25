import inquirer from 'inquirer';
import 'colors';

const menu = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
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
        ],
    },
];

const inquirerMenu = async () => {
    console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una opción   '.white);
    console.log('===========================\n'.green);
 
    const { opcion } = await inquirer.prompt( menu );
    return opcion;
};
 
const pausa = async () => {

    await inquirer.prompt( {
        type: 'input',
        name: 'input',
        message: `Presione ${ 'Enter'.green } para continuar`
    });
    console.log('\n');
}

export { inquirerMenu, pausa };