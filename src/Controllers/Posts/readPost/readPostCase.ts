import { IPostRepo } from "../../../repositories/IPostRepo";

class ReadPostCase{
    constructor(
        private postRepo: IPostRepo
    ){}

    async run(id: string){
        const post = await this.postRepo.readPost(id).catch((err) => {
            throw new Error(err.message)
        })

        return post
    }
}

export { ReadPostCase }