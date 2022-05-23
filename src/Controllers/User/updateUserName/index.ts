import { PrismaUserImplementation } from "../prismaImplementation";
import { PrismaAdapter } from "../../../infra/prismaAdapter";
import { UpdateUserNameCase } from "./updateUserNameCase";
import { UpdateUserNameController } from "./updateUserNameController";

const updateUserNameCase = new UpdateUserNameCase(new PrismaUserImplementation(PrismaAdapter))
const updateUserNameController = new UpdateUserNameController(updateUserNameCase)

export { updateUserNameCase, updateUserNameController}