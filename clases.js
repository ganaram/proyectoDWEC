class Usuario{
    constructor(username, passwd, email, DNI){
        this.username = username;
        this.passwd = passwd;
        this.email = email;
        this.DNI = DNI;
    }

    set username(username){
        this._username = username;
    }
    set passwd(passwd){
        this._passwd = passwd;
    }
    set correo(correo){
        this._email = email;
    }
    set DNI(DNI){
        this._DNI = DNI;
    }

    get username(){
        return this._username;
    }
    get passwd(){
        return this._passwd;
    }
    get email(){
        return this._email;
    }
    get DNI(){
        return this._DNI;
    }
}
