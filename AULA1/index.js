//Importacion de clases
import {Cliente} from '../cliente.js';
import {cuentaCorriente} from '../cuentaCorriente.js';


const cliente = new Cliente('Leonardo', '12345666', '15666');
const cliente2 = new Cliente('Maria', '66145431', '44565');

const cuentaDeLeonardo = new cuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente;

console.log(cuentaDeLeonardo.cliente);

let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoCuenta(100);
console.log('el saldo actual es (cuentaDeLeonardo) :'+saldo);

const cuentaMaria = new cuentaCorriente();
cuentaMaria.numero = '2';
cuentaMaria.agencia = '002';
cuentaMaria.cliente = cliente2;

console.log(cuentaMaria.cliente);

cuentaMaria.cliente = 0;

console.log(cuentaMaria.cliente);
/* cuentaDeLeonardo.transferirParaCuenta(100,cuentaMaria)

const saldoMaria = cuentaMaria.verSaldo();
console.log('El saldo actual (cuentaMaria) '+saldoMaria)

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('el saldo actual es (cuentaDeLeonardo) :'+saldoLeonardo);
 */