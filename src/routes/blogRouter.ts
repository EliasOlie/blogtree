import { Router } from "express";
import { BlogsController } from "../Controllers/Blogs";
import { PrismaAdapter } from "../infra/prismaAdapter";

const blogsController = new BlogsController(PrismaAdapter)

const blogsRouter = Router()

blogsRouter.get("/:author", async (req, res) => {
    await blogsController.getBlogByAuthor(req, res)
})

export { blogsRouter }