import { Request, Response } from "express";
import { ReadPostsCase } from "./readPostsCase";

class ReadPostsController {
    constructor(
        private postsCase: ReadPostsCase
    ){}

    async run(request: Request, response: Response){
        const author = request.params.author
        try {
            const posts = await this.postsCase.run({author})    
            return response.send(posts)
        } catch (error) {
            if (error instanceof Error) {
                return response.status(400).send({Message: error.message})
            }
            return response.status(500).send({Message: "Unexpected error"})            
        }
    }
}

export { ReadPostsController }