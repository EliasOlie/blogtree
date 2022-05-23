import { Request, Response } from "express";
import { GetUserCase } from "./getUseCase";

class GetUserController {
    constructor(
        private getUserCase: GetUserCase
    ) {}

    async run(request: Request, response: Response) {
        const id = request.params.id

        try {
            const res = await this.getUserCase.run({id})

            return response.status(200).send(res)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).send({Message: error.message})
            }
            return response.status(500).send({Message: "Unexpected error"})
        }
    }
}

export { GetUserController }