export class Medicamento{
    static contadorId=0;
    #id;
    #nombre;
    #precio;
    #stock;
    constructor(nombre, precio, stock){
        this.#id = ++Medicamento.contadorId;
        this.#nombre = nombre;
        this.#precio = precio;
        this.#stock = stock;
    }

    getId(){
        return this.#id;
    }
    
    getNombre(){
        return this.#nombre;
    }
    
    getPrecio(){
        return this.#precio;
    }
    
    getStock(){
        return this.#stock;
    }
    
    setStock(cantidad){
        this.#stock = cantidad;
    }

    mostrarDetalles(){
        console.log(`ID Medicamento: ${this.#id}, Nombre: ${this.#nombre}, Precio: ${this.#precio}, Stock: ${this.#stock}`)
    }

   
}