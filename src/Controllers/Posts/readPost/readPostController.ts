import { Request, Response } from "express";
import { ReadPostCase } from "./readPostCase";

class ReadPostController {
    constructor(
        private readPostCase: ReadPostCase
    ){}

    async run(request: Request, response: Response){
        const id = request.params.id
        try {
            const post = await this.readPostCase.run(id)
            return response.send(post)
        } catch (error) {
            if (error instanceof Error){
                return response.status(400).send({Message: error.message})
            }
            return response.status(500).send({Message: "Unexpected error"})
        }
    }
}

export { ReadPostController }