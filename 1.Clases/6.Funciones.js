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

/*
*   Funciones en JavaScript 
*
*Las funciones en JavaScript no son muy diferentes a
*las que manejamos en otros lenguajes, su principal objetivo
*es centralizar las funciones del software en el que se
*esta trabajando
* */

const algo = function Ejemplo(name) {
    console.log("Holi ", name);
    return 1;
}
console.log(algo('Claudio'));

//Lambda functions / funciones flecha
const algo3 = (name) => {
    let c = a + b;
    return c;
};

const algo2 = (alumno) => `Holi ${alumno.name} de semestre ${alumno.semester}`;

console.log(algo2(Alumno));
