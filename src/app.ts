import express from "express"
import { indexRouter } from "./routes/indexRouter"
import { userRouter } from "./routes/userRouter"

const app = express()

app.use(express.json())

app.use("/",indexRouter)
app.use("/users", userRouter)

export {app}