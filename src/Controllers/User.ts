import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

class UserController {
    constructor(
        public adapter: PrismaClient
    ){}

    async createOrFindUser(req: Request, res: Response){
        const {id, username, account_type} = req.body
        //Atualizar o usuário quando ele alterar o account_type

        const user = await this.adapter.user.findUnique({
            where: {
                id: id
            }
        }).then(async (userExists) => {
            if(!userExists) {
                const newUser = await this.adapter.user.create({
                    data: {
                        id: id,
                        username: username,
                        account_type: account_type
                    }
                })
                return res.send(newUser) 
            }else{
                return res.send(userExists)
            }
        })
    }

    async getUser(req: Request, res: Response) {
        const id = req.params.id
        const user = await this.adapter.user.findUnique({
            where: {
                id: id
            }
        }).then((userExists) => {
            if (!userExists) {
                return res.status(400).send({Message: "This user does not exists"})
            }else{
                return res.send(userExists)
            }
        })
    }

    async deleteUser(req: Request, res: Response){
        const id = req.params.id
        try {
            await this.adapter.user.delete({
                where: {
                    id: id
                }
            }).then(() => {
                return res.status(200).send()
            })
        } catch (error) {
            res.status(400).send({Message: "This user does not exists"})
        }
    }

    async updateUserName(req: Request, res: Response){
        const {id, newName} = req.body

        await this.adapter.user.update({
            where: {
                id: id
            },
            data: {
                username: newName
            }
        }).then((transaction) => {
            if (!transaction) {
                return res.status(400).send({Message: "This user does not exists"})
            }

            return res.status(200).send()
        })

    }
}

export { UserController }
