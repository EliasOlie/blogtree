import UpdatePostContentDTO from "./updatePostContentDTP";
import { IPostRepo } from "../../../repositories/IPostRepo";

class UpdatePostContentCase {
    constructor(
        private postRepo: IPostRepo
    ){}

    async run(data: UpdatePostContentDTO){
        await this.postRepo.updatePostContent(data.id, data.newContent).catch((err) => {
            throw new Error(err.message)
        })
    }
}

export { UpdatePostContentCase }