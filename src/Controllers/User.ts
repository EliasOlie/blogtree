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
                        account_type: account_type,
                    }
                })
                await this.adapter.blog.create({
                    data: {
                        author: username,
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
        await this.adapter.user.findUnique({
            where: {
                id: id
            }
        }).then(async (userExists) => {
            if (!userExists) {
                return res.status(400).send({Message: "This user does not exists"})
            }else{
                await this.adapter.blog.findFirst({
                    where: {
                        author: userExists.username
                    }
                }).then(async (blog) => {
                    if(!blog){
                        //handel no blog message its kinda impossible but???
                    }else{
                        await this.adapter.post.findMany({
                            where: {
                                author: userExists.username
                            }
                        }).then((posts) => {
                            if (!posts){
                                res.send({User: userExists, Blog: blog, Posts: "Nothing here yet :/"})
                            }

                            return res.send({User: userExists, Blog: blog, Posts: posts})
    
                        })
                    }
                })
            }
        })
    }

    async deleteUser(req: Request, res: Response){
        const id = req.params.id
        try {
            const user = await this.adapter.user.findUnique({
                where: {
                    id: id
                }
            })
            
            const blogId = await this.adapter.blog.findFirst({
                where: {
                    author: user!.username
                }
            })
            await this.adapter.blog.delete({
                where: {
                    id: blogId!.id
                }
            })
            await this.adapter.user.delete({
                where: {
                    id: id
                }
            }).then(() => {
                return res.status(200).send()
            })
        } catch (error) {
            console.log(error)
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
