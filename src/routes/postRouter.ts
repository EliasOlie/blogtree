import { Router } from "express";
import { createPostController } from "../Controllers/Posts/createPost";
import { readPostsController } from "../Controllers/Posts/readPosts";
import { readPostController } from "../Controllers/Posts/readPost";
import { deletePostController } from "../Controllers/Posts/deletePost";
import { updatePostContentController } from "../Controllers/Posts/updatePostContent";
import { updatePostDescriptionController } from "../Controllers/Posts/updatePostDescription";

const postRouter = Router()

postRouter.post("/create", async (req, res) => {
    await createPostController.run(req, res)
})

postRouter.get("/author/:author", async (req, res) => {
    await readPostsController.run(req, res)
})

postRouter.get("/post/:id", async (req, res) => {
    await readPostController.run(req, res)
})

postRouter.delete("/delete/:id", async (req, res) => {
    await deletePostController.run(req, res)
})

postRouter.patch("/content/change", async (req, res) => {
    await updatePostContentController.run(req, res)
})

postRouter.patch("/description/change", async (req, res) => {
    await updatePostDescriptionController.run(req, res)
})

export { postRouter }


