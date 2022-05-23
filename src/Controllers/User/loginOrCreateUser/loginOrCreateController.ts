import { Request, Response } from "express";
import { LoginOrCreateCase } from "./loginOrCreateCase";

class LoginOrCreateController {
    constructor(
        private loginOrCreateCase: LoginOrCreateCase
    ){}

    async run(request: Request, response: Response){
        const {id, username, account_type} = request.body

        try {
            const res = await this.loginOrCreateCase.run({
                id,
                username,
                account_type
            })
            return response.status(201).send(res)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).send({Message: "This user already exists"})
            }
            return response.status(500).send({Message: "Unexpected error"})
        }
    }
}

export { LoginOrCreateController }