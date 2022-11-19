//definicion de clases
export class cuentaCorriente{
    cliente;
    numero;
    agencia;
    #saldo;

    constructor() {
        this.cliente = null;
        this.#saldo = 0;
        this.numero = '';
        this.agencia = '';
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
}

