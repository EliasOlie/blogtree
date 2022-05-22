import { Router } from "express";
import { BlogsController } from "../Controllers/Blogs";
import { PrismaAdapter } from "../infra/prismaAdapter";

const adapter = PrismaAdapter
const blogsController = new BlogsController(adapter)

const blogsRouter = Router()

blogsRouter.get("/:author", async (req, res) => {
    await blogsController.getBlogByAuthor(req, res)
})

export { blogsRouter }