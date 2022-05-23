import GetBlogByAuthorDTO from "./getBlogByAuthorDTO";
import { IBLogRepo } from "../../../repositories/IBlogRepo";

class GetBlogByAuthorCase {
    constructor(
        private blogRepo: IBLogRepo
    ){}

    async run(data: GetBlogByAuthorDTO){
        const blog = await this.blogRepo.getBlogByAuthor(data.author)
        
        if (!blog) {
            throw new Error(blog)
        }

        return blog
    }
}

export { GetBlogByAuthorCase }