import { IPostRepo } from "../../../repositories/IPostRepo";
import CreatePostDTO from "./createPostDTO";

class CreatePostCase {
    constructor(
        private postRepo: IPostRepo
    ){}

    async run(payload: CreatePostDTO){
        await this.postRepo.createPost(payload).catch((err) => {
            throw new Error(err.message)
        })
    }
}

export { CreatePostCase }