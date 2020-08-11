// Funciones en JS

const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludarArrFunc = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludarArrFuncSHort = (nombre) => `Hola, ${nombre}`;

const getUser = () => {
    return {
        uid: 'QWERTY',
        username: 'Nombre de usuario',
    }
};

const getUserShort = () => ({
        uid: 'QWERTY',
        username: 'Nombre de usuario',
    });

const getUssuarioActivo = (nombre) => ({
        uid: 'QWERTY',
        username: nombre,
    });

console.log(saludar('David'));
console.log(saludar);
console.log(saludarArrFunc('David en arrFunc'));
console.log(saludarArrFuncSHort('David en ArrFuncSHort'));
console.table(getUser());
console.table(getUserShort());
console.table(getUssuarioActivo('David'));