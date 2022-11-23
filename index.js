//Importacion de clases
import {Cliente} from './cliente.js';
import { Cuenta } from './Cuenta.js';
import {CuentaAhorro} from './CuentaAhorro.js';
import {cuentaCorriente} from './cuentaCorriente.js';
import { CuentaNomina } from './CuentaNomina.js';

const cliente = new Cliente('Leonardo', '12345666', '15666');
const cliente2 = new Cliente('Maria', '66145431', '44565');

const cuentaDeLeonardo = new cuentaCorriente( cliente, '1', '001');
const cuentaMaria = new cuentaCorriente(cliente2, '2','002');

const cuentaAhorroDeLeonardo = new CuentaAhorro(cliente,'9985', '001', 0);

const cuentaNominaLeonardo = new CuentaNomina(cliente, '098', '001',0)

cuentaNominaLeonardo.depositoCuenta(150);
console.log(cuentaNominaLeonardo);

cuentaNominaLeonardo.retirarCuenta(50);
console.log(cuentaNominaLeonardo.verSaldo())


