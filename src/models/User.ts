class User {
    public readonly id: string
    public account_type: string
    public username: string
    public createdAt?: Date
    public modifedAt?: Date

    constructor(props: User){
        Object.assign(this, props)
    }

}

export { User }