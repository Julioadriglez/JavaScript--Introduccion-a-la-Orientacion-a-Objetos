export class Cuenta {
    #cliente;
    #saldo;
    constructor(cliente, numero, agencia, saldo) {
        if(this.constructor == Cuenta){
            throw new Error('No se deben instanciarl objetos de la clase Cuenta'); //muestra un error  cuando se usa Clase Cuenta en consola
            
        }
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

    retirarCuenta(valor){ //Es un metodo abstracto que teoricamente sirve pero no aplica ninguna comision y sea plica un error para que no suceda esto
        throw new Error('Debe implementar el método retirarCuenta en su clase');
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
