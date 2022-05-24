import { DeletePostCase } from "./deletePostCase";
import { DeletePostController } from "./deletePostController";
import { PrismaAdapter } from "../../../infra/prismaAdapter";
import { PrismaImplementation } from "../PrismaImplementation";

const deletePostCase = new DeletePostCase(new PrismaImplementation(PrismaAdapter))
const deletePostController = new DeletePostController(deletePostCase)

export { deletePostCase, deletePostController }