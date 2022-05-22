import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

interface IBlogPayload {
    author: string
    user?: any
}

class BlogsController {
    constructor (
        public adapter: PrismaClient
    ){}

    async createBlog(blogPayload: IBlogPayload){
        await this.adapter.blog.create({
            data: {
                author: blogPayload.author,
            }
        })
    }

    async getBlog(req: Request, res: Response){
        const id = req.params.id
        const blog = await this.adapter.blog.findUnique({
            where: {
                id: id
            }
        })

        return res.send(blog) 
    }

    async getBlogByAuthor(req: Request, res: Response) {
        const author = req.params.author
        
        const blog = await this.adapter.blog.findFirst({
            where: {
                author: author
            }
        })

        return res.send(blog) 
    }

}

export { BlogsController }