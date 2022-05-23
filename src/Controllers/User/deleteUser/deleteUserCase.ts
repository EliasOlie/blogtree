import { IUserRepo } from "../../../repositories/IUserRepo";
import DeleteUserDTO from "./deleteUserDTO";

class DeleteUserCase {
    constructor(
        private userRepo: IUserRepo
    ){}

    async run(data: DeleteUserDTO){
        await this.userRepo.deleteUser(data.id).catch((err) => {
            throw new Error(err)
        })
    }
}

export { DeleteUserCase }