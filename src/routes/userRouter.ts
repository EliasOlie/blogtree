import { Router } from "express";
import { UserController } from "../Controllers/User";
import { PrismaAdapter } from "../infra/prismaAdapter";

const userController = new UserController(PrismaAdapter)

const userRouter = Router()

userRouter.post("/login", async (req, res) => {
    await userController.createOrFindUser(req, res)
})

userRouter.get("/:id", async (req, res) => {
    await userController.getUser(req, res)
})

userRouter.delete("/delete/:id", async (req, res) => {
    await userController.deleteUser(req, res)
})

userRouter.patch("/update", async (req, res) => {
    await userController.updateUserName(req, res)
})


export { userRouter }