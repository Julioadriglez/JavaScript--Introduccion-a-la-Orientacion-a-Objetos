import {Cuenta} from './Cuenta.js';
export class CuentaNomina extends Cuenta{
    constructor(cliente, numero, agencia,saldo) {
        super(cliente, numero, agencia, saldo);
    }
    retirarCuenta(valor){
        super._retirarCuenta(valor, 1)
    }
}