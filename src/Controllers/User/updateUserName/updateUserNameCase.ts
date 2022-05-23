import UpdateUserNameDTO from "./updateUserNameDTO";
import { IUserRepo } from "../../../repositories/IUserRepo";

class UpdateUserNameCase {
    constructor(
        private userRepo: IUserRepo
    ){}

    async run(payload: UpdateUserNameDTO) {
        await this.userRepo.updateUserName(
            payload.id,
            payload.newName
        ).catch(err => {
            return err
        })
    }
}

export { UpdateUserNameCase }