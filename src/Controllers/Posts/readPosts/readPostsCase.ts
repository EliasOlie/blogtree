import { IPostRepo } from "../../../repositories/IPostRepo";
import ReadPostsDTO from "./readPostsDTO";

class ReadPostsCase {
    constructor(
        private postRepo: IPostRepo
    ){}

    async run(data: ReadPostsDTO) {
        const posts = await this.postRepo.readPosts(data.author)
        return posts
    }
}

export { ReadPostsCase }