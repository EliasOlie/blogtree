import { Request, Response } from "express";
import { DeleteUserCase } from "./deleteUserCase";

class DeleteUserController {
    constructor(
        private deleteUserCase: DeleteUserCase
    ){}

    async run(request: Request, response: Response){
        const id = request.params.id
        try {
            await this.deleteUserCase.run({id})
            response.send()
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).send({Message: error.message})
            }
            return response.status(500).send({Message: "Unexpected error"})
        }
    }
}

export { DeleteUserController }
