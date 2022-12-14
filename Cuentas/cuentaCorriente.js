//definicion de clases
import { Cuenta } from "./Cuenta.js";
export class cuentaCorriente extends Cuenta{ //extends se usa para heredar caracteristicas de la clase padre (en este caso de Cliente) a la(s) clase(s) hija(s)(en este caso cuentaCorriente) 
   
    static cantidadCuentas = 0;

    constructor(cliente, numero, agencia, saldo) {
        super(cliente,numero,agencia,0);
        cuentaCorriente.cantidadCuentas ++;
    }
    retirarCuenta(valor){
        super._retirarCuenta(valor, 5);
    }
}

