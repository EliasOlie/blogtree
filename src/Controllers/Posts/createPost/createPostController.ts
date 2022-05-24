import { Request, Response } from "express";
import { CreatePostCase } from "./createPostCase";

class CreatePostController {
    constructor(
        private createPostCase: CreatePostCase
    ){}

    async run(request: Request, response: Response){
        const { author, content, description } = request.body
        try {
            await this.createPostCase.run({
                author,
                content,
                description
            })

            return response.status(201).send()
        } catch (error) {
            if (error instanceof Error){
                return response.status(400).send({Message: error.message})
            }
            return response.status(500).send({Message: "Unexpected error"})
        }
    }
}

export { CreatePostController }