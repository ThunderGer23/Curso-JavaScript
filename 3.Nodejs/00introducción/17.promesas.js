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

//1
getEmpleado(1)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err))

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario) ? resolve(salario) : reject(`No existe salario para el: ${id}`);
    });
};

//2
getSalario(5)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));

//Concatenación de promesas

let id = 1;
getEmpleado(3)
    .then(empleado => {
    nombre = empleado;
    return getSalario(id);
})
    .then(
        salario => console.log(`El empleado: ${nombre} tiene un salario: ${salario}`)
    )
    .catch(err => console.error(err));
