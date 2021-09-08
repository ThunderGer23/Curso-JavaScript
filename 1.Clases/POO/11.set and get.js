/*                  SET y GET
*   Como ya hemos visto en otros lenguajes
*   utilizar set y get nos da la posibilidad
*   de establecer como privados ciertos parametros
*   de nuestros objetos, así como también tener
*   un tratamiento especial para ciertas
*   propiedades del objeto, como lo es, llevar
*   X valor a uppercamelcase o lowercamelcase.
*
* A partir de este punto debe comenzar a pensarse en
* un conjunto de elementos para integrar un sistema
* en el cual, js estaría encargado de llevar un tratamiendo
* adecuado para ciertos parametros que se reciben de front
* antes de ser enviados a nuestra bd.
*
* Y aunque no se tiene una sintaxis estandarizada de
* la composición de las clases, en este caso se establecera
* como lo visto en otros lenguajes, sin embargo tome
* en cuenta que eso no lo excluira de realizar diferentes
* patrones y diseños durante el mantenimiento o producción
* de un sistema.
* */


class Persona {
    nombre = '';
    edad = '';
    frase = '';
    //El estandar es que todas las variables a utilizar
    // con set y get se asignen de la siguiente manera
    _comida = '';

    constructor(nombre, edad, frase) {
        this.nombre = nombre;
        this.edad = edad;
        this.frase = frase;
        //El paso de parametros y
        // this es obligatorio
    }

    set setComidaFav(comida){
        this._comida = comida.toUpperCase();
    }

    get getComidaFav(){
        return `Mi comida favorita es ${this._comida}`;
    }

    Saludar(){
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años, ${this.frase}`);
    }

    SaludoCompleto(){
        this.Saludar();
        console.log(`Vivo en Mexico`);
    }
}

const Gerardo = new Persona('Gerardo', '23', 'Codigo codigo codigo');
Gerardo.SaludoCompleto();
Gerardo.setComidaFav = 'Pizza';
console.log(Gerardo.getComidaFav);