const usuarios = [
    {
        "id": 1,
        "nombre": "",
        "pass": "",
        "telefono": "",
        "reservarciones": [
            {
                "habitacion": "",
                "categoria": "",
                "capacidad": "",
                "precio": ""
            }
        ],
        "tarjetas": [
            {
                "numero": "",
                "codigo": "",
                "fecha": "",
                "telefono": ""
            }
        ],
    }
];

const actual = {};

/* ¿Qué se hará en este script?
    · Solicitar el arreglo.
    · Devolver el arreglo.
    · Agregar usuarios.
    · Eliminar usuarios.
    · Editar usuarios.
    · Buscar usuarios.
    · Guardar actual.
        El usuario actual es al que se le harán todos los movimientos. Ej.
        Cambio el nombre, entonces: Actual --> id = 1 --> Busca en el arreglo usuarios
        --> Lo encontré --> Sustituye los datos en el arreglo por los que están en actual.
        Lo mismo con borrar usuario, es de gran ayuda: Actual --> id = 1 --> Busca en el arreglo
        --> Lo encontré --> Borra del arreglo --> Actual = {}.
*/

export function agregarUsuario(nuevoUsuario) {
    // Mando el objeto completo. Aquí solo se agrega
    usuarios.push(nuevoUsuario);
}