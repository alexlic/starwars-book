import React from "react"
import Link from "next/link";
import { fetchFeedPostsByUserId, fetchFriendsByUserId, Post, User } from "@/utils/fetchData"
import { getUserToken, UserToken } from "@/utils/token"
import "../globals.css";
import PostCard from "@/components/PostCard";

export type DetailedPost = Post & {
    userData: User;
}

const Home = function (
    {
       user,
       posts
    }:
    {
        user: UserToken;
        posts: DetailedPost[];
    }
) {
    return (
        <div
            className="my-8 container mx-auto flex flex-col justify-center items-center"
        >
            <h1 className="font-bold mb-8">
                Hello <Link className="text-cyan-500" href="profile">{`${user.name} >>`}</Link>
            </h1>
            <section>
                {
                    posts.map(post => (
                        <PostCard {...post} />
                    ))
                }
            </section>
        </div>
    )
}

Home.getInitialProps = async () => {
    const userToken = getUserToken();
    let feedPosts: DetailedPost[] = [];
    try {
        const posts = await fetchFeedPostsByUserId(userToken.userID);
        const friends = await fetchFriendsByUserId(userToken.userID);
        feedPosts = posts.map(post => ({
            ...post,
            userData: friends.filter(user => user.userID === post.userId)[0]
        }))
    } catch (err) {
        console.error("Error fetching feed posts: ", err);
    }
    
    return {
        user: userToken,
        posts: feedPosts,
    }
}

export default Home