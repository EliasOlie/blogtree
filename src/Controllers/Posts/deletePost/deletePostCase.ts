import { IPostRepo } from "../../../repositories/IPostRepo";

class DeletePostCase {
    constructor(
        private postRepo: IPostRepo
    ){}

    async run(id: string){
        await this.postRepo.deletePost(id).catch((err) => {
          throw new Error(err.message)  
        })
    }
}

export { DeletePostCase }