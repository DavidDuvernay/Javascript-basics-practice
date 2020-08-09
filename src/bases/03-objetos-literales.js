const persona = {
    nombre: 'David',
    apellido: 'Duvernay',
    edad: 24,
    direccion: {
        ciudad: 'New York',
        zip: 654654654,
        lat: 14.6546,
        lng: 34.654654654,
    }
};

console.table(persona);

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.table(persona2);