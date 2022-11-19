//Importacion de clases
import {cliente} from '../cliente.js';
import {cuentaCorriente} from '../cuentaCorriente.js';


const Cliente = new cliente();
Cliente.nombreCliente = 'Leonardo';
Cliente.dniCliente = '12345666';
Cliente.rutCliente = '15666';

const cuentaDeLeonardo = new cuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = Cliente;

console.log(cuentDeLeonardo);

let saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual: '+saldo);

saldo = cuentaDeLeonardo.depositoCuenta(100);
console.log('el saldo actual es :'+saldo);

saldo = cuentaDeLeonardo.retirarCuenta(100);
console.log('El saldo actual es: '+saldo);

saldo = cuentaDeLeonardo.depositoCuenta(45);
console.log('el saldo actual es: '+saldo);
