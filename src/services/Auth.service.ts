import { authRepositoryInstance } from "../repository/auth.repository";

class AuthService {

    constructor(private authRepository = authRepositoryInstance) { }

    async isExistsUser(token: string) {
        const tokeFound = await this.authRepository.isExistsUser(token)
        return tokeFound
    }

}

export const authServiceInstance = new AuthService()