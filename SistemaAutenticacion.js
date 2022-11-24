export class SistemaAutenticacion {
    static login(usuario, clave){
        if ("autenticable" in usuario 
        && usuario.autenticable instanceof Function) // ("autenticable" in usuario) = si autenticable esta dentro de un objeto y (autenticable instanceof Function)= autenticable es una funcion
            return usuario.autenticable(clave);
        else
        return false;
    }
}