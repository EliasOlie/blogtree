import UpdatePostDescriptionDTO from "./updatePostDescriptionDTP";
import { IPostRepo } from "../../../repositories/IPostRepo";

class UpdatePostDescriptionCase {
    constructor(
        private postRepo: IPostRepo
    ){}

    async run(data: UpdatePostDescriptionDTO){
        await this.postRepo.updatePostDescription(data.id, data.newDescription).catch((err) => {
            throw new Error(err.message)
        })
    }
}

export { UpdatePostDescriptionCase }