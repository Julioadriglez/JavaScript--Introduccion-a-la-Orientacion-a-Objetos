//Importacion de clases
import {cuentaCorriente} from '../cuentaCorriente.js';
import {cliente} from '../cliente.js'

const cuentDeLeonardo = new cuentaCorriente();

let saldo = cuentDeLeonardo.verSaldo();
console.log('El saldo actual: '+saldo);

saldo = cuentDeLeonardo.depositoCuenta(100);
console.log('el saldo actual es :'+saldo);

saldo = cuentDeLeonardo.retirarCuenta(100);
console.log('El saldo actual es: '+saldo);

saldo = cuentDeLeonardo.depositoCuenta(45);
console.log('el saldo actual es: '+saldo);
