import GetUserDTO from "./getUserDTO";
import { IUserRepo } from "../../../repositories/IUserRepo";

class GetUserCase {
    constructor(
        private userRepo: IUserRepo
    ){}

    async run(data: GetUserDTO) {
        const userExists = await this.userRepo.getUser(data.id)

        if(!userExists) {
            throw new Error("This user does not exists")
        }

        return userExists
    }

}

export { GetUserCase }