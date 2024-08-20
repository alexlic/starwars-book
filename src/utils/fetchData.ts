import mockProfile from "../mockData/profile.json"
import mockFriends from "../mockData/friends.json"
import mockPosts from "../mockData/posts.json"

export type User = {[key: string]: string;}
export type Post = {
    postId: string;
    userId: string;
    content: string;
    liked: boolean;
    published: string;
}


export const fetchUserByID = (userID: string): Promise<User> => {
    return new Promise((res) => {
        res(
            userID ?
                mockProfile :
                {}
        )
    })
}

export const fetchFriendsByUserId = (userID: string): Promise<User[]> => {
    return new Promise((res) => {
        const friends = mockFriends.friends;
        if (userID) res(friends)
        else res([])
    })
}

export const fetchFeedPostsByUserId = (userID: string): Promise<Post[]> => {
    return new Promise((res) => {
        const posts = mockPosts.posts;
        if (userID) res(posts)
        else res([])
    })
}