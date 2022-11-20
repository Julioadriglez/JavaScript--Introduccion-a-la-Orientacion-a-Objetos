//Importacion de clases
import {Cliente} from '../cliente.js';
import {cuentaCorriente} from '../cuentaCorriente.js';


const cliente = new Cliente('Leonardo', '12345666', '15666');
const cliente2 = new Cliente('Maria', '66145431', '44565');

console.log(cliente);
console.log(cliente2);

const cuentaDeLeonardo = new cuentaCorriente(cliente, '1', '001');
const cuentaMaria = new cuentaCorriente(cliente2, '2','002');

let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoCuenta(100);

console.log(cuentaCorriente.cantidadCuentas);

