/*
*   Este tema es bastante importante en este y en
*   todos los lenguajes con los que trabajes y de
*   hecho es la equivalente a los temas de
*   apuntadores en lenguaje C y C++
*
*   El paso por valor es lo que ya veniamos manejando
*   anteriormente, es decir, asignar valores a una
*   variable y manipularla a voluntad, sin embargo
*   el paso por referencia hace alución más a su
*   dirección de memoria que a su valor.
*
*   Ejemplos:
* */

let a = 10;
let b = a;
a++;
console.table({a, b});

/*
*   Entonces, nosotros podemos decir que todos los
*   tipos de dato primitivos hacen paso por valor, sin
*   embargo los datos no primitivos hacen paso por
*   referencia.
* */

let Claudio = {
    nombre: 'Claudio',
    edad: 22
};
let Arturo = Claudio;
Arturo.nombre = 'Arturo';
Claudio.trabajo = 'Profesor';
console.table({Claudio, Arturo});

/*
*   Esto es un problema serio en la programación y surge
*   debido a que en realidad, los valores no primitivos
*   no trabajan con valores, trabajan con las direcciones
*   de memoria.
*
*   ┌─────────┬───────┬─────────┬──────┬────────────┐
*   │ Objeto  │ Direc │ nombre  │ edad │  trabajo   │
*   ├─────────┼───────┼─────────┼──────┼────────────┤
*   │ Claudio │ 0xb00 │'Arturo' │  22  │ 'Profesor' │
*   │ Arturo  │ 0xb00 │'Arturo' │  22  │ 'Profesor' │
*   └─────────┴───────┴─────────┴──────┴────────────┘
*
*   ┌─────────┬──────┬───────┐
*   │ (index) │ Direc│ Values│
*   ├─────────┼──────┼───────┤
*   │    a    │ 0xb00│  11   │
*   │    b    │ 0xb01│  10   │
*   └─────────┴──────┴───────┘
*
*   Para solucionarlo podemos hacer lo siguiente
* */

let Mike = {...Claudio}; // Este es el operador spread
Mike.nombre = 'Mike';
Mike.edad = 24;
Mike.trabajo = 'Kha?';
console.table({Claudio, Arturo, Mike});

/*
*   Este efecto sucede de igual forma en los Arrays
* */

let Itzel = ['Itzel', '24', 'Estudiante'];
let Gerardo = Itzel;
Gerardo[0] = 'Gerardo';
console.table({Itzel, Gerardo});

//Y funciona de manera similar
let Erick = [...Itzel];
Erick[0] = 'Erick';
Erick[2] = 'Trabajador';
console.table({Itzel, Gerardo, Erick});

//Otra forma OldSchool de hacerlo es la siguiente
let Mena = Itzel.slice();
Mena[0] = 'Ximena';
console.table({Itzel, Gerardo, Erick, Mena});

//Verificar velocidad con:
console.time('P2');
let mena = Itzel.slice();
console.timeEnd('P2');

console.time('P1');
let erick = [...Itzel];
console.timeEnd('P1');