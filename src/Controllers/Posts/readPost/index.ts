import { ReadPostCase } from "./readPostCase";
import { ReadPostController } from "./readPostController";
import { PrismaImplementation } from "../PrismaImplementation";
import { PrismaAdapter } from "../../../infra/prismaAdapter";

const readPostCase = new ReadPostCase(new PrismaImplementation(PrismaAdapter))
const readPostController = new ReadPostController(readPostCase)

export { readPostCase, readPostController }