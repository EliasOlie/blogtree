import { PrismaClient } from "@prisma/client";
import { IUserRepo, User, UserResponse } from "../../repositories/IUserRepo";

class PrismaUserImplementation implements IUserRepo{
    constructor(
        private adapter: PrismaClient
    ){}

    async getUser(id: string): Promise<UserResponse | null> {
        const user = await this.adapter.user.findUnique({
            where: {
                id: id
            }
        })

        if (user) {
            const blog = await this.adapter.blog.findFirst({
                where: {
                    author: user?.username
                }
            })
    
            const posts = await this.adapter.post.findMany({
                where: {
                    author: user?.username
                }
            })
    
            let res = {user: user!, blog: blog!, posts: posts}
    
            return res
        }
        
        return null

    }


    async deleteUser(id: string): Promise<void> { //<- Cascade delete!
        const user = await this.adapter.user.findUnique({
            where: {
                id: id
            }
        })
        if (user){
            await this.adapter.post.deleteMany({
                where: {
                    author: user.username
                }
            })

            await this.adapter.blog.deleteMany({
                where: {
                    author: user.username
                }
            })

            await this.adapter.user.delete({
                where: {
                    id: id
                }
            })
        }else{
            throw new Error("This user does not exists!")
        }        
    }
    
    async updateUserName(id: string, newName: string): Promise<void> {
        await this.adapter.user.update({
            where: {
                id: id
            },
            data: {
                username: newName
            }
        }).catch((err) => {
            return `This user could not be updated due: ${err.message || "An unexpected error"}`
        })
    }

    async createOrLoginUser(userPayload: User): Promise<User> {
        await this.adapter.user.create({
            data: {
                id: userPayload.id,
                username: userPayload.username,
                account_type: userPayload.account_type
            }
        }).catch((err) => {
            return `This user could not be crated due: ${err.message || "An unexpected error"}`
        })

        const user = await this.adapter.user.findUnique({
            where: {
                id: userPayload.id
            }
        })

        await this.adapter.blog.create({
            data: {
                author: user!.username
            }
        }).catch((err) => {
            return `This blog could not be crated due: ${err.message || "An unexpected error"}`
        })

        return user!
    }
}

export { PrismaUserImplementation }