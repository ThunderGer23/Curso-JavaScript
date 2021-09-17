/*              Node.js
* Lenguaje de backend que otorga acceso
* al sistema de archivos del equipo y
* brinda información del SO así como de
* los procesos del equipo.
*
* Antes de comenzar es importante recordar
* como trabaja Javascript.
* */

console.log('Inicio del Código');

setTimeout(()=>{
    console.log('Primer Timeout');
}, 2000);

setTimeout(()=>{
    console.log('Segundo Timeout');
}, 0);

setTimeout(()=>{
    console.log('Tercer Timeout');
})

console.log('Fin del Código');


/*          Explicación de la ejecución
*                  del programa
*
* Para poder entender de manera adecuada este
* simple código hay que entender que las líneas
* que hemos ejecutado, no forman parte de js puro
* por defecto, son modificaciones que vienen con
* el propio nodejs y que sirven para realizar
* ciertas acciones en back, sin embargo eso
* también implica nuevas cosas a lo que ya
* estabamos acostumbrados a utilizar
*
*       =>              =>              =>
* .____________.  .____________.  .____________.
* | Call Stack |  | Node API's |  | Callbacks  |
* |            |  |            |  |            |
* |            |  |            |  |            |
* |____________|  |____________|  |____________|
*               <==             <==
*
* */



