import { Router } from "express";
import { PostsController } from "../Controllers/Posts";
import { PrismaAdapter } from "../infra/prismaAdapter";

const postsController = new PostsController(PrismaAdapter)

const postRouter = Router()

postRouter.post("/create", async (req, res) => {
    await postsController.createPost(req, res)
})

export { postRouter }


