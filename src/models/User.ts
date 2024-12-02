export interface User{
    id: string,
    name: string,
    email: string,
    passwordHash: string //Não armazenar senhas puras
    role: `admin` | 'customer' //Papel do usuario
    createdAt: Date
}

export class UserModel { 
    constructor(private user: User){}

    isAdmin(): boolean {
        return this.user.role === 'admin'
    }

    toSafeObject(): Omit<User, 'passwordHash'> {
        const {passwordHash, ...safeUser} = this.user
        return safeUser
    }
}