interface User {
    id: string,
    username: string
    account_type: string
    createdAt?: Date
    modifiedAt?: Date
}

interface Blog {
    id: string
    author: string
}

interface Post {
    id: string
    author: string
    content: string
    description: string
}

interface UserResponse {
    user: User,
    blog?: Blog
    posts?: Post[]
}

interface IUserRepo {
    createOrLoginUser(userPayload: User): Promise<User>
    getUser(id: string): Promise<UserResponse | null>
    deleteUser(id: string): Promise<void>
    updateUserName(id: string, newName: string): Promise<void>
}

export {IUserRepo, User, UserResponse, Blog, Post}