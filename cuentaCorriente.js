//definicion de clases
import { Cliente } from "./cliente.js";
export class cuentaCorriente{
    #cliente;
    numero;
    agencia;
    #saldo;

    set cliente(valor){
        if(valor instanceof Cliente)
        this.#cliente = valor;
    }

    get cliente(){
        return this.#cliente;
    }

    constructor(cliente, numero, agencia) {
        this.cliente(cliente);
        this.#saldo = 0;
        this.numero = numero;
        this.agencia = agencia;
    }

    depositoCuenta(valor){
        if(valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }
    retirarCuenta(valor){
        if(valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }
    verSaldo () {
        return this.#saldo;
    }
    transferirParaCuenta(valor, cuentaDestino){
        this.retirarCuenta(valor);
        cuentaDestino.depositoCuenta(valor);
    }
}

