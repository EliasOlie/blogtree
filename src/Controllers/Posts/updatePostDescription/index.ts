import { UpdatePostDescriptionCase } from "./updatePostDescriptionCase";
import { UpdatePostDescriptionController } from "./updatePostDescriptionController";
import { PrismaAdapter } from "../../../infra/prismaAdapter";
import { PrismaImplementation } from "../PrismaImplementation";

const updatePostDescriptionCase = new UpdatePostDescriptionCase(new PrismaImplementation(PrismaAdapter))
const updatePostDescriptionController = new UpdatePostDescriptionController(updatePostDescriptionCase)

export { updatePostDescriptionCase, updatePostDescriptionController }