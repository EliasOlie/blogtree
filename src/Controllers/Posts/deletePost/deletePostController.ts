import { Request, Response } from "express";
import { DeletePostCase } from "./deletePostCase";

class DeletePostController {
    constructor(
        private deletePostCase: DeletePostCase
    ){}

    async run(request: Request, response: Response){
        const id = request.params.id
        try {
            await this.deletePostCase.run(id)
            return response.send()
        } catch (error) {
            if (error instanceof Error){
                return response.status(400).send({Message: error.message})
            }
            return response.status(500).send({Message: "Unexpected error"})
        }
    }
}

export { DeletePostController }