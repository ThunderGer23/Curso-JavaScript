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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id);//?.nombre:algo
    (empleado) ? callback(null, empleado) : callback(`Empleado ${id} no existe`);
}

getEmpleado(2, (err, empleado) => {
    console.log((err) ? `Error: ${err}`: empleado);
});