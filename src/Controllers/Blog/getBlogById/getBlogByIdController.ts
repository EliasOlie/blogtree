import { Request, Response } from "express";
import { GetBlogByIdCase } from "./getBlogByIdCase";

class GetBlogByIdController {
    constructor(
        private getBlogIdCase: GetBlogByIdCase
    ){}

    async run(request: Request, response: Response){
        const id = request.params.id
        try {
            const blog = await this.getBlogIdCase.run({id})
            return response.send(blog)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).send({Message: error.message})
            }
            return response.status(500).send({Message: "Unexpected error"})
        }
    }
}

export { GetBlogByIdController }