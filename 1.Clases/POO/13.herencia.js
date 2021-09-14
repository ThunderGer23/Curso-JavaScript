class Persona {
    nombre;
    edad;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludo(){
        console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

class Estudiante extends Persona {
    boleta;
    semestre;

    constructor(nombre, edad, boleta, semestre) {
        super(nombre, edad);
        this.boleta = boleta;
        this.semestre = semestre;
    }

    saludo() {
        super.saludo();
        console.log(`Estudiante de ${this.semestre} semestre y boleta ${this.boleta}`);
    }
}

const Itzel = new Estudiante('Itzel','23','2012010286', '10');
Itzel.saludo()