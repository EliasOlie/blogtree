import { UpdatePostContentCase } from "./updatePostContentCase";
import { UpdatePostContentController } from "./updatePostContentController";
import { PrismaAdapter } from "../../../infra/prismaAdapter";
import { PrismaImplementation } from "../PrismaImplementation";

const updatePostContentCase = new UpdatePostContentCase(new PrismaImplementation(PrismaAdapter))
const updatePostContentController = new UpdatePostContentController(updatePostContentCase)

export { updatePostContentCase, updatePostContentController }