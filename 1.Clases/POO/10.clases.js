/*
//              Clases en JS
//
// Al igual que en otros lenguajes, en js surgio la
// necesidad de poder desarrollar código más eficiente
// y el modelo de POO no pudo quedar fuera de este
// lenguaje de programación, aunque su verdadero potencial
// vino luego de ES6 ya que anterior a ello y como ya hemos
// visto, JS era un lenguaje muy diferente a lo que
// conocemos hoy en día
*/

//crear multiples objetos con la misma estructura se
// volvería tedioso para el sistema así como poco
// eficiente.
const Siviana = {
  name: 'Siviana',
    edad: 18
};

const Pedro = {
  name: 'Pedro',
    edad: 22
};

//En js existe this al igual que en Java y
// funciona de la siguiente manera
const Arturo = {
  name: 'Arturo',
  edad: 23,
  Saludar(){
    console.log(`Hola mi nombre es ${name}`);
  }
};

//La palabra reservada this. hace referencia
// al propio objeto, es decir, es una forma
// de decirle al programa(según este ejemplo)
// 'tu nombre'
const Itzel = {
  name: 'Itzel',
  edad: 24,
  Saludar(){
    console.log(`Hola mi nombre es ${this.name}`);
  }
};
Itzel.Saludar();

//    En primer instancia las clases no eran como las conocemos
// y tenemos que ver como eran antes de un mundo rosa en js dado
// que a la fecha es relativamente común encontrarlas en código
// y secciones de documentación o ejemplos del programa
function Persona(nombre, edad){
  this.nombre = nombre;
  this.edad = edad;
  this.Saludar = () =>{
    console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
  }
}

const Mike = new Persona();
Mike.Saludar();

class Persona1 {
  nombre = '';
  edad = '';
  frase = '';

  constructor(nombre, edad, frase) {
    this.nombre = nombre;
    this.edad = edad;
    this.frase = frase;
    //El paso de parametros y
    // this es obligatorio
  }
  Saludar(){
    console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años, ${this.frase}`);
  }
  SaludoCompleto(){
    this.Saludar();
    console.log(`Vivo en Mexico`);
  }
}
const Claudio = new Persona1('Claudio', '24', 'shincuentaynuebe');
Claudio.Saludar();
const Gerardo = new Persona1('Gerardo', '23', 'Codigo codigo codigo');
Gerardo.SaludoCompleto();