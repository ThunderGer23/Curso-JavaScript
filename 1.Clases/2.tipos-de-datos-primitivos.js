/*
* Como ya hemos visto en clases pasadas tenemos constantes y variables
* sin embargo no hablamos de los tipos de variables que podemos tener
* en nuestro lenguaje, a estos se le llama:
*
* Valores Primitivos:
*
*   Boolean -> Aceptan 'true'/'false' como valores por defecto
*   Null -> Esta es una variable que no tiene valor alguno
*   Undefined -> Una variable declarada que aún no se le asigna valor
*   Number -> Estos son todos los valores como 5, 3.14, 2.7561423
*   String -> Estas son todas aquellas cadenas de texto creadas de
*               manera indistinta con '' o con "".
*   Symbol -> Es un valor único que no es igual a ningún otro valor
*/

let Boolean = true;
let Boolean1 = false;

let String = 'ThunderGer.com';
let String1 = "Gerardo Baeza";
let String2 = `Otro string`;

//Para conocer que tipo de variable estamos manejando podemos usar
console.log(typeof String);
console.log(typeof Boolean1);

let Number = 5;
let Number1 = 3.14;
let Number2 = 2.7563;

let Undefined;
let Null = null;

console.log(Undefined);
console.log(Null);

let symbol = Symbol('a');
let symbol1 = Symbol('b');
let symbol2 = Symbol('c');
let symbol3 = Symbol('a');

console.log(symbol);
console.log(symbol === symbol1);
console.log(symbol === symbol3);