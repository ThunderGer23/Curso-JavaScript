/*
*   Las funciones lambda facilitan el trabajo a la hora
*   de querer enviar muchos parametros en una función
* */
const Alumno = {
    name: 'Gerardo',
    lastName: 'Baeza',
    age: 24,
    address: {
        cp: 55090,
        street: '1',
        number: '14',
        suburb: 'Obrera Jajalpa',
        state: 'Ecatepec de Morelos'
    },
    levelStudent: 'Universidad',
    collegeCourse: 'Telemática',
    semester: '8vo',
    work: 'Google Development',
    languages: ['Español', 'Ingles'],
    languagesProgramming: {
        C: '90%',
        CMore: '80%',
        Java: '100%',
        Kotlin: '100%',
        Go: '45%',
        HTML: '85%',
        CSS: '70%',
        Javascript: '85%',
        Typescript: '65%',
        Ruby: '20%'
    }
};

const alumno = (name,...args) => {
    /*...args es propio de las funciones lambda
    * en las funciones normales existe 'arguments'*/
    return ({ name, args });
    /*Se puede retornar un objeto de manera más
    * elegante con esa sintaxis, no es necesario
    * especificar el nombre de las llaves y los valores
    * Así mismo se agrega () para retornar el objeto
    * y uno una función que refleje un undefined*/
}
/*
*   ...args -> args en realidad puede tener cualquier
*   otro nombre aunque por estandar usamos args, lo
*   realmente importante/interesante es el operador rest (...)
*   el cual no genera el array con los parametros enviados.
*
*   De igual manera nos ayuda a la hora de filtrar el retorno
*   de valores en nuestra función, pudiendo hacer lo siguiente
* */
//Podemos retornar el objeto de una función
const Empleado = alumno(Alumno.name, Alumno.lastName, Alumno.age, Alumno.work);
//O filtrar solo ciertos parametros/llaves
const {nombre, apellido, edad, trabajo} = alumno(Alumno.name, Alumno.lastName, Alumno.age, Alumno.work);
console.log(Empleado);
console.log(nombre);
