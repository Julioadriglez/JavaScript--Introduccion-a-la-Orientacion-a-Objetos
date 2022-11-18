//definicion de clases
export class cuentaCorriente{
    numero;
    #saldo;
    agencia;

    constructor() {
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

