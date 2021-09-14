class Rectangulo {
    _base;
    _altura;
    #area;

    constructor(base, altura){
        this._base = base;
        this._altura = altura;
        this.#area = base*altura;
    }
    get getArea(){
        return this.#area;
    }
}

const rectangulo = new Rectangulo(3,4);

console.log(rectangulo)
console.log(rectangulo.getArea);