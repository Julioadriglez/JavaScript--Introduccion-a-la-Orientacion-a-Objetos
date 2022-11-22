//Importacion de clases
import {Cliente} from './cliente.js';
import {CuentaAhorro} from './CuentaAhorro.js';
import {cuentaCorriente} from './cuentaCorriente.js';

const cliente = new Cliente('Leonardo', '12345666', '15666');
const cliente2 = new Cliente('Maria', '66145431', '44565');

const cuentaDeLeonardo = new cuentaCorriente('Corriente', cliente, '1', '001');
const cuentaMaria = new cuentaCorriente('Corriente', cliente2, '2','002');

const cuentaAhorroDeLeonardo = new CuentaAhorro('Ahorro', cliente,'9985', '001', 0);

/* console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoCuenta(150);
cuentaDeLeonardo.retirarCuenta(70);
console.log(cuentaDeLeonardo.verSaldo())
console.log(cuentaAhorroDeLeonardo); */
cuentaDeLeonardo.prueba();


