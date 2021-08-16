/*
*       Formas que tenemos de crear arreglos
*
*   const  arr = new Array(10);
*
*       Esta forma es poco usual y recordemos que
*       nuestro arreglo se crearía vacio por defecto
*
*   const  arr1 = [];
*
*       Esta forma también crea un arreglo vacio pero
*       a diferencia de la anterior, es de tamaño 0 por
*       defecto y al ser constante no nos permitira modificar
*       dicho valor durante la ejecución.
*
*   La instrucción anterior para crear un arreglo vacio no es erronea
*   en si, ya que es normal crear arreglos vacios por defecto, sin embargo
*   es muy común usar la palabra reservada let para crearlos y poder
*   modificar contenido o tamaño durante la ejecución del programa, entonces
*   nos quedamos con 2 formas de crear arreglos:
*
*   let arr = [];
*   let videoJuegos = ['Mario Bros 3', 'Megaman', 'Tetris', 'Snake'];
* */
//Creamos un arreglo
let videoJuegos = ['Mario Bros 3', 'Megaman', 'Tetris', 'Snake'];
//Podemos ver el contenido del arreglo con:
console.log({videoJuegos});
//Mostrar solo ciertos campos del mismo mediante:
console.log(videoJuegos[0]);

/*
*   A diferencia de otros lenguajes, en JS, no es un estandar que los arreglos
*   sean un conjunto de datos del mismo tipo, por ende es muy común ver lo
*   siguiente en nuestros códigos.
* */

let cosas = [                               //-> Este es un arreglo que contiene
    true,                                   //-> Un boolean
    123,                                    //-> Un entero
    'ThunderGer',                           //-> Un string
    1+2,                                    //-> Otro entero que se obtiene de una operacion
    function () {                           //-> Una funcion anonima
        console.log('simple function');
    },
    ()=>{                                   //-> Una funcion lambda
        console.log('lambda function');
    },
    {                                       //-> Un Objeto
        a:1,
        b:2
    },
    ['X', 'Megaman', 'Zero', 'Dr. Light',[  //-> Otro arreglo de Strings, que contiene otro arreglo de Strings más pequeño
        'Dr. Willy',
        'Woodman'
    ]]
];
//Para imprimir el arreglo completo podemos ejecutar
console.log(cosas);
//Para acceder a todos estos datos podemos hacer lo siguiente
console.log(cosas[6]);

console.log(cosas[6].a);
console.log(cosas[6].b);
console.log(cosas[7][2]);
console.log(cosas[7][4][1]);