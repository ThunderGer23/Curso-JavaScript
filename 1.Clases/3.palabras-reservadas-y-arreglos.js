/*
*                     Palabras Reservadas
*
*   Estas palabras se les llamas así, porque solo pueden usarse
*   en ciertas circunstancias de la sintaxis, ya sea para declarar
*   ciertos valores o para realizar acciones especificas, por
*   ejemplo habíamos dicho que para declarar variables dentro del
*   lenguaje, tenemos que usar la palabra reservada 'let' así como
*   'const' para las constantes, estás palabras son únicas para ese
*   proposito, no pueden usarse como nombres de variables, funciones
*   o métodos de otras cosas.
*
*   Otras palabras reservadas pueden ser:
*
*   break, case, catch, class, continue, do, else, if, return, new, for
*   finally, import, in, exports, extends, debugger, default, delete, super
*   switch, this, try, typeof, void, yield, enum, package, public, static,
*   protected, await, true, false, NaN, name, alert, Math, valueOf
*
*   Y muchas otras más que seguramente no puse aquí XD.
*
*                          Arreglos
*
*   Los arreglos, al igual que en otros lenguajes son un conjunto de valores,
*   sin embargo, en js, no tienen porque ser del mismo tipo, es decir, pueden
*   o no tener valores en común o relación entre ellos.
*
*   La sintaxis de los objetos suele ser la misma en todos los lenguajes
*
*   let Juegos = ['Atari', 35, 1992, 'Multijugador'];
*
*   Y como podemos observar un arreglo puede tener valores de distintos tipos
*   para este ejemplo tenemos strings y numericos pero puede ser cualquier otro.
* */

//Arreglo vacio
let Arreglo = new Array(10);

//Arreglo con valores definidos
let Arreglo1 = ['Constantes Numericas', 'PI = ', 3.1416, 'e = ', 2.756791, 'Constante gravitacional', 9.81];
console.table({Arreglo1});

/*
*   Trabajar con arreglos suele ser muy útil en javascritp así como en otros
*   lenguajes ya que nos permite realizar tareas con los valores internos de
*   dicho elemento, estas tareas pueden facilitar mucho el trabajo a la hora
*   de desarrollar.
*
*   Pro ejemplo, existen multiples formas de imprimir los valores almacenados
*   en nuestro arreglo, así como anteriormente mostramos 2 sintaxis para crear
*   dichos arreglos.
* */

console.log(Arreglo1[4]);