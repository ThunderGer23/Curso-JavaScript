/*          Ansyc y Await
* Estos siempre van de la mano con las
* promesas pues su trabajo principal es
* decirle al programa que debe esperar
* la respuesta de una promesa.
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

const salarios = [
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 3000
    }
];

const getEmpleado = (id) => {
    return new Promise((res, rej) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado) ? res(empleado) : rej(`Empleado ${id} no existe`);
    });
};

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario) ? resolve(salario) : reject(`No existe salario para el: ${id}`);
    });
};

/***************************************************************/
const id= 1;
const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${empleado} es de: ${salario}`
    }catch (e) {
        throw e;
    }
}

getInfoUsuario(id).then(msg =>{
    console.log(msg);
}).catch(err =>{
    console.log(err);
})
/***************************************************************/