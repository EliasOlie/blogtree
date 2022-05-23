import { Request, Response } from "express";
import { UpdateUserNameCase } from "./updateUserNameCase";

class UpdateUserNameController {
    constructor(
        private updateUserNameCase: UpdateUserNameCase
    ){}

    async run(request: Request, response: Response){
        const payload = request.body

        try {
            this.updateUserNameCase.run(payload)
            return response.send()
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).send({Message: error.message})
            }
            return response.status(500).send({Message: "Unexpected error"})
        }
    }
}

export { UpdateUserNameController }