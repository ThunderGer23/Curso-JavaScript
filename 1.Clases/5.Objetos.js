/*
*              Objetos Literales
*   Este tipo de dato se le denomina no primitivo
*   u objeto y es similar a Java en ese aspecto, es
*   decir, cualquier tipo de dato que no sea primitivo
*   es un objeto por defecto, los objetos son distintos
*   ya que trabajan con valores por referencia, similar
*   a los apuntadores en C, así mismo tienen la forma
*   de los diccionarios de Python.
*
* */

let Alumno = {
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
}

/*  Objetos literales están conpuestos por
*       -Llaves/Banderas
*       -Valores de la llave o bandera
*
*   En el ejemplo anterior, las llaves(o banderas)
*   serian [name, last_name, age, etc, etc] y sus respectivos
*   valores están asignados para cada uno luego de
*   los puntos dobles
*
* */

//Multiples formas de acceder a las propiedades del objeto
console.log(Alumno.name);
console.log(Alumno['name']);
//Y de concatenar valores con Strings
console.log(`${Alumno.name} tiene ${Alumno.age} años`);
console.log(Alumno.name, 'tiene', Alumno.age, 'años', 'vive en', Alumno.address.state);

//Borrando Llaves o banderas
console.log(Alumno.address);
delete Alumno.address;
console.log(Alumno.address);
//Asignando nuevas Llaves o banderas
Alumno.stateCivil = 'Soltero';
console.log(Alumno);

//Convirtiendo valores del objeto a un Array
const languagesProgramming = Object.entries(Alumno.languagesProgramming);
console.log(languagesProgramming);

//Bloqueando propiedades de las llaves del objeto
Object.freeze(Alumno);
Alumno.card = 'Banamex';
delete Alumno.work;
Alumno.work = 'Oracle Development';
delete Alumno.languagesProgramming;
delete Alumno.languagesProgramming.C;
console.log(Alumno);

//Obteniendo Llaves
const llaves = Object.getOwnPropertyNames(Alumno);
//Obteniendo propiedades
const propiedades = Object.values(Alumno);
//Obteniendo descripción y valores de las propiedades de cada llave
const describe = Object.getOwnPropertyDescriptors(Alumno);
console.log(describe);
console.table({llaves,propiedades});

