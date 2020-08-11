// Desestructuaración

const persona  = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const retornarPersona = (usuario) => {
    const { nombre, edad, clave } = usuario;
    
    console.log(edad, nombre, clave);
};

const retornarPersona2 = ({ nombre, edad, rango = 'Capitán' }) => {
    
    console.log(nombre, edad, rango);
};

const useContext = ({ nombre, edad, rango = 'Capitán', clave }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.1212,
            lng: -12.3232,
        },
    }
};

const { nombreClave, anios}  = useContext( persona );

const coordenadas = () => ({
    latlng: {
        lat: 12.1212,
        lng: -12.3232,
    }    
});

const { latlng } = coordenadas();
const { lat, lng } =latlng;

retornarPersona(persona);
retornarPersona2(persona);

console.log(nombreClave, anios);
console.log(lat, lng);