import { GetBlogByAuthorCase } from "./getBlogByAuthorCase";
import { GetBlogByAuthorController } from "./getBlogByAuthorController";
import { PrismaImplementation } from "../PrismaImplementation";
import { PrismaAdapter } from "../../../infra/prismaAdapter";

const getBlogByAuthorCase = new GetBlogByAuthorCase(new PrismaImplementation(PrismaAdapter))
const getBlogByAuthorController = new GetBlogByAuthorController(getBlogByAuthorCase)

export {getBlogByAuthorCase, getBlogByAuthorController}