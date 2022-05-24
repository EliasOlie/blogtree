interface Post{
    id?: string
    author: string
    content: string
    description: string
}

interface IPostRepo {
    createPost(payload: Post): Promise<void>
    readPost(id: string): Promise<Post>
    readPosts(author: string): Promise<Post[]>
    deletePost(id: string): Promise<void>
    updatePostContent(id: string, newContent: string): Promise<void>
    updatePostDescription(id: string, newDescription: string): Promise<void>
}

export {Post, IPostRepo}