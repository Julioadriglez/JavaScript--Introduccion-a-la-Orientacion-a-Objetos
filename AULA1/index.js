class cliente {
    nombreCliente;
    dniCliente;
    numeroCuenta;
    saldoCuenta;
}
const cliente1 = new cliente();
cliente1.nombreCliente = "José";
cliente1.dniCliente = "12354";
cliente1.numeroCuenta = "1231234";
cliente1.saldoCuenta = 1500;

const cliente2 = new cliente();
cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "75984";
cliente2.numeroCuenta = "84436363";
cliente2.saldoCuenta = 5400;

const cliente3 = new cliente();
cliente3.nombreCliente = "Gerardo";
cliente3.dniCliente = "48965";
cliente3.numeroCuenta = "7498563";
cliente3.saldoCuenta = 1500;

const nombreCliente = "Leonardo";
const dniCliente = "13804050";
const numeroCuenta = "123434343";
const saldoCuenta = 1000;

const nombreCliente2 = "Leonardo";
const dniCliente2 = "13804050";
const numeroCuenta2 = "123434343";
const saldoCuenta2 = 1000;

console.log(nombreCliente,dniCliente, numeroCuenta, saldoCuenta);
console.log(cliente1, cliente2, cliente3);