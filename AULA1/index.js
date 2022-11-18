
//Definición de clases.
class cliente {
    nombreCliente;
    dniCliente;
    rutCliente
}

class cuentaCorriente{
    numero;
    saldo;
    agencia;

    constructor() {
        this.saldo = 0;
        this.numero = '';
        this.agencia = '';
    }

    depositoCuenta(valor){
        this.saldo += valor;
    }
    retirarCuenta(valor){
        this.saldo -= valor;
    }
}
