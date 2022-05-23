import { Request, Response } from "express";
import { GetBlogByAuthorCase } from "./getBlogByAuthorCase";

class GetBlogByAuthorController{
    constructor(
        private getBlogCase: GetBlogByAuthorCase
    ){}

    async run(reques: Request, response: Response){
        const author = reques.params.author
        try {
            const blog = await this.getBlogCase.run({author})
            return response.send(blog)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).send({Message: error.message})
            }

            return response.status(500).send({Message: "Unexpected error"})
        }
    }
}

export { GetBlogByAuthorController }