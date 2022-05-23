interface Blog {
    id: string
    author: string
}

interface IBLogRepo {
    getBlogById(id: string): Promise<Blog>
    getBlogByAuthor(author: string): Promise<Blog>
}

export { Blog, IBLogRepo}