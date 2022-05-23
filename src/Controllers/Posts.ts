import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

class PostsController {
    constructor(
        public adapter: PrismaClient
    ) {}

    async createPost(req: Request, res: Response){
        const {author, description, content} = req.body
        await this.adapter.post.create({
            data: {
                author: author,
                description: description,
                content: content
            }
        })
        return res.status(201).send()
    }

    async readPost(req: Request, res: Response){
        const postID = req.params.id
        const data = await this.adapter.post.findUnique({
            where: {
                id: postID
            }
        })

        return res.send(data)
    }

    async readPosts(req: Request, res: Response){
        const author = req.params.author
        const data = await this.adapter.post.findMany({
            where: {
                author: author
            }
        })

        return res.send(data)
    }
}

export { PostsController }