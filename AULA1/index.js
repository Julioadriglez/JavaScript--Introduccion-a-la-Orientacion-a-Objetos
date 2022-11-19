//Importacion de clases
import {cliente} from '../cliente.js';
import {cuentaCorriente} from '../cuentaCorriente.js';


const Cliente = new cliente();
Cliente.nombreCliente = 'Leonardo';
Cliente.dniCliente = '12345666';
Cliente.rutCliente = '15666';

const cuentDeLeonardo = new cuentaCorriente();
cuentDeLeonardo.numero = '1';
cuentDeLeonardo.agencia = '001';
cuentDeLeonardo.cliente = Cliente;

console.log(cuentDeLeonardo);

let saldo = cuentDeLeonardo.verSaldo();
console.log('El saldo actual: '+saldo);

saldo = cuentDeLeonardo.depositoCuenta(100);
console.log('el saldo actual es :'+saldo);

saldo = cuentDeLeonardo.retirarCuenta(100);
console.log('El saldo actual es: '+saldo);

saldo = cuentDeLeonardo.depositoCuenta(45);
console.log('el saldo actual es: '+saldo);
