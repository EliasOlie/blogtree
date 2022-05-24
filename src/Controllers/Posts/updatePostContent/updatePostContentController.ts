import { Request, Response } from "express";
import { UpdatePostContentCase } from "./updatePostContentCase";

class UpdatePostContentController {
    constructor(
        private updatePostContentCase: UpdatePostContentCase
    ){}

    async run(request: Request, response: Response){
        const { id, newContent } = request.body
        
        try {
            await this.updatePostContentCase.run({id, newContent})
            return response.send()
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).send({Message: error.message})
            }

            return response.status(500).send({Message: "Unexpected error"})
            
        }
    }
}

export { UpdatePostContentController }