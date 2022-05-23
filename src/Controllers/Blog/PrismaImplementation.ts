import { PrismaClient } from "@prisma/client";
import { Blog, IBLogRepo } from "../../repositories/IBlogRepo";

class PrismaImplementation implements IBLogRepo {
    constructor (
        private adapter: PrismaClient
    ){}

    async getBlogById(id: string): Promise<Blog> {
        const blog = await this.adapter.blog.findUnique({
            where: {
                id: id
            }
        }).catch((err) => {
            throw new Error(err)
        })

        return blog!
    }

    async getBlogByAuthor(author: string): Promise<Blog> {
        const blog = await this.adapter.blog.findFirst({
            where: {
                author: author
            }
        }).catch((err) => {
            throw new Error(err)
        })

        return blog!
    }
}

export { PrismaImplementation }