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
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado) ? resolve(empleado) : reject(`Empleado ${id} no existe`);
    });
};

getEmpleado(1)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err))

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario) ? resolve(salario) : reject(`No existe salario para el: ${id}`);
    });
};

getSalario(2)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));