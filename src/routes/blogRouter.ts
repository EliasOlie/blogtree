import { Router } from "express";
import { getBlogByAuthorController } from "../Controllers/Blog/getBlogByAuthor/index";
import { getBlogByIdController } from "../Controllers/Blog/getBlogById/index";

const blogsRouter = Router()

blogsRouter.get("/author/:author", async (req, res) => {
    await getBlogByAuthorController.run(req, res)
})

blogsRouter.get("/:id", async (req, res) => {
    getBlogByIdController.run(req, res)
})

export { blogsRouter }