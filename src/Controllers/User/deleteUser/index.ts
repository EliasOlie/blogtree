
import { DeleteUserCase } from "./deleteUserCase";
import { DeleteUserController } from "./deleteUserController";
import { PrismaUserImplementation } from "../prismaImplementation";
import { PrismaAdapter } from "../../../infra/prismaAdapter";

const deleteUserCase = new DeleteUserCase(new PrismaUserImplementation(PrismaAdapter))
const deleteUserController = new DeleteUserController(deleteUserCase)

export { deleteUserCase, deleteUserController }