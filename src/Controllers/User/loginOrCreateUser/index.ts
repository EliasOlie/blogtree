import { PrismaUserImplementation } from "../prismaImplementation";
import { PrismaAdapter } from "../../../infra/prismaAdapter";
import { LoginOrCreateCase } from "./loginOrCreateCase";
import { LoginOrCreateController } from "./loginOrCreateController";

const loginOrCreateCase = new LoginOrCreateCase(new PrismaUserImplementation(PrismaAdapter))
const loginOrCreateController = new LoginOrCreateController(loginOrCreateCase)

export { loginOrCreateCase, loginOrCreateController}