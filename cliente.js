//definición de clases
export class Cliente {
    nombreCliente;
    dniCliente;
    rutCliente;
    #clave;

    constructor(nombreCliente, dniCliente, rutCliente){
        this.nombreCliente = nombreCliente; //inicializacion de atributos
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.#clave = '';
    }
    asignarClave(clave){
        this.#clave = clave;
    }
    autenticable(clave){
        return true;
    }
}