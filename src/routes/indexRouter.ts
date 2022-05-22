import { Router } from "express";

const indexRouter = Router()

indexRouter.get("/", (req, res) => {
    res.send({message: "Hello from express router"})
})

export { indexRouter }