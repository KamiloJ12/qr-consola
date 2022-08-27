import inquirer from 'inquirer';
import 'colors';

const menu = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
    }
];

const inquirerMenu = async ( choices = []) => {
    console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una opción   '.white);
    console.log('===========================\n'.green);
    menu[0].choices = choices;
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

const leerInput = async ( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
    const { desc } = await inquirer.prompt( question );
    return desc;
}

export { inquirerMenu, pausa, leerInput };