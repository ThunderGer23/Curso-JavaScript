/*
*           Estructuras de control
*
* Las estructuras de control, le permiten a nuestro código
* escojer un flujo de ejecución en base a los valores de
* nuestras variables, existen varias estructuras, entre ellas:
*
* If, If-else, switch, do, do-while, for, for-in, foreach, for of
* */

// La sentencia if

let a = 15;

if (a > 10){
    console.log(a+' mayor a 10');
}else {
    console.log(a+' menos a 10');
}

//Como pueden ver la sintaxis es identica a otros lenguajes
//          Operador ternario
/*
*    El operador ternario nos permite reducir
*    considerablemente la cantidad de lineas de
*    código a usar para un simple if-else
* */

(a > 10) ? console.log(a+ ' mayor a 10') : console.log(a+ ' menor a 10');
//la linea anterior realiza exactamente el mismo proceso que el if clasico que vimos antes
//Sin embargo, hay otra forma en la cual podemos ahorrarnos un poco más de código
console.log(a + ((a > 10) ?' mayor a 10':' menor a 10'));

/*
*           Sentencia Switch
*La sentencia switch es muy similar al if clasico
*su finalidad es realizar una evaluación de la variable
*sin la necesidad de tanto código y haciendo el proceso
*un tanto más rápida, sin embargo así como tenemos el uso
*del operador ternario para el if, podemos usar un objeto
* para el manejo más efectivo de un switch
* */
let b = 13;
switch (b) {
    case b > 1:
        console.log(b);
        break;
    case b > 15:
        console.log(b);
        break;
    case b === a:
        console.log('Holi');
        break;
}
//Como dije anteriormente esto puese ser sustituido por un objeto
let c = 1;
const B = {
    13: console.log(b),
    14: console.log(b),
    2: console.log(b),
    1: ()=>{
        console.log('Vale 1')
    }
};

B[c]();

/*
*                     Do-while
*
* Este tipo de ciclos también son clasicos de otros lenguajes
* y su sintaxis es la misma.
* */
let j = 0;
do {
    console.log(j)
    j++;
}while(j <= 3);

while(j <= 9){
    console.log(j)
    j++;
}

/*
*       For for-in foreach for-of
*
* */

for (let i in B) {
    console.log(i)
}

let C = [1,3,'holi', 4, 5.3, true];
for (let i of C) {
    console.log(i)
}
for (const i in C) {
    console.log(i)
}