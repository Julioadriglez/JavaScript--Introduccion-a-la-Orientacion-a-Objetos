//Importacion de clases
import { Cliente } from './cliente.js';
import { CuentaAhorro } from './Cuentas/CuentaAhorro.js';
import { cuentaCorriente } from './Cuentas/cuentaCorriente.js';
import { CuentaNomina } from './Cuentas/CuentaNomina.js';
import { Director } from './Empleados/Director.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';

const cliente = new Cliente('Leonardo', '12345666', '15666');
const cliente2 = new Cliente('Maria', '66145431', '44565');

const empleado = new Empleado('juan Perez', '456982', 10000);
const gerente = new Gerente('Pedro Rivas', '459623', 12000);
const director = new Director('elena Moreno', '4512134', 15000);

console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());

