export class Cuenta {
    #cliente;
    #saldo;
    constructor(tipo,cliente, numero, agencia, saldo) {
        this.tipo = tipo;
        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    set cliente(valor){
        if(valor instanceof Cliente)
        this.#cliente = valor;
    }

    get cliente(){
        return this.#cliente;
    }

    depositoCuenta(valor){
        if(valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarCuenta(valor){
        _retirarCuenta(valor,0);
    }

    _retirarCuenta(valor, comision){ //con "_" el metodo se hace privado
        valor = valor *(1 + (comision/100));
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
    prueba() {
        console.log('Metodo padre');
    }
}
