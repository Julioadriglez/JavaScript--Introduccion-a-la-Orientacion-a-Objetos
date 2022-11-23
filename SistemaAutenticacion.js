export class sistemaAutenticacion {
    login(empleado, clave){
        if (empleado.clave == clave)
            return true;
        return false
    }
}