import { CreatePostCase } from "./createPostCase";
import { CreatePostController } from "./createPostController"
import { PrismaAdapter } from "../../../infra/prismaAdapter";
import { PrismaImplementation } from "../PrismaImplementation";

const createPostCase = new CreatePostCase(new PrismaImplementation(PrismaAdapter))
const createPostController = new CreatePostController(createPostCase)

export {createPostCase, createPostController}