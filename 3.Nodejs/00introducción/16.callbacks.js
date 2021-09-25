/*          Callbacks
*
* Los callbacks no son más que funciones
* que se van a mandar como parametro ejecutar
* después, en cierto tiempo determinado.
*
* */

const getName = (name) => {
    const user = {
        id: 1,
        name
    };

    setTimeout(()=>{
        console.log(user);
    }, 12);
};

getName('ThunderGer');

const getUserName = (name, callback) => {
    const user1 = {
        id: 1,
        name
    };

    setTimeout(()=>{
        callback(user1);
    },11);
};

getUserName('ThunderGer', (user) =>{
    //console.log('--------------')
    console.log(user.id);
    console.log(user.name);
    console.log(user)
    //console.log('--------------')
});

/*      Trabajar con callback's puede resultar problematico
*   ya que desde un inicio debe considerarse la velocidad de
*   procesamiento del equipo y la cantidad de código a ejecutar
*   pero ese no es el verdadero problema con los callbacks
*   hay cosas peores que la muerte y que los errores en el código
*   una de ellas es no poder saber si existe un error o hacerle
*   saber al programa que algo esta mal.
*
* */

const empleados = [
    {
        id: 1,
        nombre: 'Mike'
    },
    {
        id: 2,
        nombre: 'Claudio',
    },
    {
        id: 3,
        nombre: 'Itzel'
    }
];

const getEmpleado = (id, c) => {
    const em = empleados.find(e=>e.id === id);//?.nombre;
    (em) ? c(null, em) : c(`Empleado ${id} no existe`);
}

getEmpleado(3, (err, empleado) => {
    console.log((err) ? `Error: ${err}`: empleado);
});