import { GetBlogByIdCase } from "./getBlogByIdCase";
import { GetBlogByIdController } from "./getBlogByIdController";
import { PrismaImplementation } from "../PrismaImplementation";
import { PrismaAdapter } from "../../../infra/prismaAdapter";

const getBlogByIdCase = new GetBlogByIdCase(new PrismaImplementation(PrismaAdapter))
const getBlogByIdController = new GetBlogByIdController(getBlogByIdCase)

export {getBlogByIdCase, getBlogByIdController}