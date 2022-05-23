import express from "express"
import { indexRouter } from "./routes/indexRouter"
import { userRouter } from "./routes/userRouter"
import { blogsRouter } from "./routes/blogRouter"
import { postRouter } from "./routes/postRouter"

const app = express()

app.use(express.json())

app.use("/",indexRouter)
app.use("/users", userRouter)
app.use("/blogs", blogsRouter)
app.use("/posts", postRouter)

export { app }