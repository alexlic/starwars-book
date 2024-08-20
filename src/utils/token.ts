
 export type UserToken = {
    userID: string;
    name: string;
}

export const getUserToken = (): UserToken => {
    return {
        userID: "1110",
        name: "Anakin Skywalker",
    }
}