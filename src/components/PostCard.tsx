import React from "react"
import Image from "./Image";
import { DetailedPost } from "@/pages";

const PostCard = ({
    content,
    liked,
    postId,
    published,
    userData,
}: DetailedPost) => {
    if (!postId) return null;
    return (
        <div
            key={postId}
            className="w-full max-w-2xl shadow p-4 mb-4 rounded"
        >
            <div className="flex flex-row w-full md:w-72 h-10 items-center">
                <Image height={"40px"} width={"40px"} imageUrl={userData?.profileImage} />
                <p className="mx-3 font-bold">{userData.name}</p>
                <p className="text-slate-400 text-xs">
                    {`(${userData.pronouns})`}
                </p>
            </div>
            <p>{content}</p>
            <div className="flex flex-row justify-between mt-6">
                <p className={liked ? "text-cyan-500" : ""}>Fav</p>
                <p className="text-slate-400 text-xs">{published}</p>
            </div>
        </div>
    )
}

export default PostCard;
