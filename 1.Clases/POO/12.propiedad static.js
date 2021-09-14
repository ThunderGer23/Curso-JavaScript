/*          Propiedad static
* Esta propiedad puede ser un poco dificil de
* comprender, sin embar su uso suele ser común
* a la hora de aplicar un debuggin del sistema
* dado que nos permitirá validar la ejecución
* de manera correcta de una clase sin necesidad
* de instanciar un objeto de la misma
* */

class Persona {
    static nombre = '';
    static edad = '';
    static frase = '';
    //El estandar es que todas las variables a utilizar
    // con set y get se asignen de la siguiente manera
    _comida = 'Pizza';

    constructor(nombre, edad, frase, comida = 'Pozole') {
        this.nombre = nombre;
        this.edad = edad;
        this.frase = frase;
        this._comida = comida;
        //El paso de parametros y
        // this es obligatorio
    }

    set setComidaFav(comida){
        this._comida = comida.toUpperCase();
    }

    static get getComidaFav(){
        return `Mi comida favorita es ${this._comida}`;
    }

    static Saludar(nombre, edad, frase){
        console.log(`Mi nombre es ${nombre} y tengo ${edad} años, ${frase}`);
    }

    static SaludoCompleto(){
        this.Saludar();
        console.log(`Vivo en Mexico`);
    }
}

Persona.Saludar('Erick', '37', 'Hola');