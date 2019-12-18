export interface User {
    id: number,
    token: string,
    name: {
        firstName: string,
        lastName: string
    },
    login: string,
    password: string
}
