import { Router } from "express";
import { getUserController } from "../Controllers/User/getUser/index"
import { loginOrCreateController } from "../Controllers/User/loginOrCreateUser/index";
import { updateUserNameController } from "../Controllers/User/updateUserName/index";
import { deleteUserController } from "../Controllers/User/deleteUser/index";

const userRouter = Router()

userRouter.post("/login", async (req, res) => {
    await loginOrCreateController.run(req, res)
})

userRouter.get("/:id", async (req, res) => {
    await getUserController.run(req, res)
})

userRouter.delete("/delete/:id", async (req, res) => {
    await deleteUserController.run(req, res)
})

userRouter.patch("/update", async (req, res) => {
    await updateUserNameController.run(req, res)
})

export { userRouter }