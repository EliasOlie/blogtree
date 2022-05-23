import { IBlogDTO } from "./getBlogByIdDTO";
import { IBLogRepo } from "../../../repositories/IBlogRepo";

class GetBlogByIdCase {
    constructor(
        private blogRepo: IBLogRepo
    ){}

    async run(data: IBlogDTO) {
        const blog = await this.blogRepo.getBlogById(data.id)
        if (!blog) {
            throw new Error(blog)
        }

        return blog
    }
}
export { GetBlogByIdCase }