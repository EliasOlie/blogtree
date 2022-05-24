import { Request, Response } from "express";
import { UpdatePostDescriptionCase } from "./updatePostDescriptionCase";

class UpdatePostDescriptionController {
    constructor(
        private updatePostDescriptionCase: UpdatePostDescriptionCase
    ){}

    async run(request: Request, response: Response){
        const { id, newDescription } = request.body
        
        try {
            await this.updatePostDescriptionCase.run({id, newDescription})
            return response.send()
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).send({Message: error.message})
            }

            return response.status(500).send({Message: "Unexpected error"})
            
        }
    }
}

export { UpdatePostDescriptionController }