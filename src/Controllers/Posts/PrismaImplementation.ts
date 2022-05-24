import { PrismaClient } from "@prisma/client";
import { IPostRepo, Post } from "../../repositories/IPostRepo";

class PrismaImplementation implements IPostRepo{
    constructor(
        private adapter: PrismaClient
    ){}
    
    async createPost(payload: Post): Promise<void> {
        await this.adapter.post.create({
            data: {
                author: payload.author,
                content: payload.content,
                description: payload.description
            }
        }).catch((err) => {
            if (err instanceof Error){
                throw new Error(err.message)
            }

            throw new Error(`Unexpected error: ${err}`)
        })
        
    }

    async readPost(id: string): Promise<Post> {
        const post = await this.adapter.post.findUnique({
            where: {
                id: id
            }
        })

        if (!post) {
            throw new Error("This post can't be reached, are you sure its ID is correct?")
        }

        return post
        
    }

    async readPosts(author: string): Promise<Post[]> {
        const posts = this.adapter.post.findMany({
            where: {
                author: author
            }
        })

        if (!posts) {
            throw new Error("This posts can't be reached, are you sure its author name is correct?")
        }

        return posts
    }

    async deletePost(id: string): Promise<void> {
        await this.adapter.post.delete({
            where: {
                id: id
            }
        }).catch((err) => {
            if (err instanceof Error){
                throw new Error(err.message)
            }

            throw new Error(`Unexpected error: ${err}`)  
        })
    }

    async updatePostContent(id: string, newContent: string): Promise<void> {
        await this.adapter.post.update({
            where: {
                id: id
            },
            data: {
                content: newContent
            }
        }).catch((err) => {
            if (err instanceof Error){
                throw new Error(err.message)
            }

            throw new Error(`Unexpected error: ${err}`)
        })
    }

    async updatePostDescription(id: string, newDescription: string): Promise<void> {
        await this.adapter.post.update({
            where: {
                id: id
            },
            data: {
                description: newDescription
            }
        }).catch((err) => {
            if (err instanceof Error){
                throw new Error(err.message)
            }

            throw new Error(`Unexpected error: ${err}`)
        })
    }

}

export { PrismaImplementation }