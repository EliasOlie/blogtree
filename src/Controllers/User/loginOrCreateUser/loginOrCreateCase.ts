import LoginOrCreateDTO from "./loginOrCreateDTO";
import { IUserRepo } from "../../../repositories/IUserRepo";

class LoginOrCreateCase {
    constructor(
        private userRepo: IUserRepo
    ){}

    async run(payload: LoginOrCreateDTO){
        const user = await this.userRepo.createOrLoginUser(payload)

        if(!user){
            throw new Error(user)
        }

        return user
    }
}

export { LoginOrCreateCase }