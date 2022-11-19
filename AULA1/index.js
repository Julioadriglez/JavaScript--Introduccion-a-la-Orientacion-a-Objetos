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

console.log(cuentaDeLeonardo);

let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoCuenta(100);
console.log('el saldo actual es (cuentaDeLeonardo) :'+saldo);


const cliente2 = new cliente();
cliente2.nombreCliente = 'Maria';
cliente2.dniCliente = '66145431';
cliente2.rutCliente = '44565';

const cuentaMaria = new cuentaCorriente();
cuentaMaria.numero = '';
cuentaMaria.agencia = '002';
cuentaMaria.cliente = Cliente;

cuentaDeLeonardo.transferirParaCuenta(100,cuentaMaria)

const saldoMaria = cuentaMaria.verSaldo();
console.log('El saldo actual (cuentaMaria) '+saldoMaria)

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('el saldo actual es (cuentaDeLeonardo) :'+saldoLeonardo);
