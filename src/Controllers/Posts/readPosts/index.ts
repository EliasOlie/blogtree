import { ReadPostsCase } from "./readPostsCase";
import { ReadPostsController } from "./readPostsController";
import { PrismaAdapter } from "../../../infra/prismaAdapter";
import { PrismaImplementation } from "../PrismaImplementation";

const readPostsCase = new ReadPostsCase(new PrismaImplementation(PrismaAdapter))
const readPostsController = new ReadPostsController(readPostsCase)

export {readPostsCase, readPostsController}