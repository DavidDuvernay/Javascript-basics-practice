
const nombre = 'David';
const apellido = 'Duvernay';

const nombreCompleto  = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre ) {
    return `Hello ${nombre}`; 
}

console.log(`Este es un texto ${getSaludo(nombre)} `)