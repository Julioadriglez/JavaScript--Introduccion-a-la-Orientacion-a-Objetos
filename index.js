//Importacion de clases
import { Cliente } from './cliente.js';
import { Director } from './Empleados/Director.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

//const cliente2 = new Cliente('Maria', '66145431', '44565');

const empleado = new Empleado('juan Perez', '456982', 10000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado, '12345'))
const gerente = new Gerente('Pedro Rivas', '459623', 12000);
//const director = new Director('elena Moreno', '4512134', 15000);
empleado.asignarClave('12305');
console.log(SistemaAutenticacion.login(empleado,'12305'));
const cliente = new Cliente('Leonardo', '12345666', '15666');
cliente.asignarClave('11111');
console.log(SistemaAutenticacion.login(empleado,'11111'));

