import React from "react"
import Link from "next/link";
import { fetchUserByID, User } from "@/utils/fetchData"
import { getUserToken } from "@/utils/token"
import Image from "@/components/Image";
import "../../globals.css";

const Profile = function (user: User) {
    return (
        <div
            className="my-8 container mx-auto flex flex-col justify-center items-center"
        >
            <Link href="/" className="font-bold mb-8 text-cyan-500">
                {"<< Home"}
            </Link>
            <section className="flex flex-col gap-2 text-center text-lg text-gray-500">
                <Image height="350px" width="350px" imageUrl={user.profileImage}/>
                <h1
                    className="my-5 text-3xl font-bold"
                >
                    {user.name}
                </h1>
                <p className="font-bold text-blue-400">Birth Date</p>
                <p>{user.birthDate}</p>
                <p className="font-bold text-blue-400">Gender</p>
                <p>{user.gender}</p>
                <p>Pronouns</p>
                <p className="font-bold text-blue-400">{user.pronouns}</p>
            </section>
        </div>
    )
}

Profile.getInitialProps = async () => {
    const userToken = getUserToken();
    let profile: User = {};
    try {
        profile = await fetchUserByID(userToken.userID)
    } catch (err) {
        console.error("Error fetching profile data: ", err);
    }
    
    return {
        ...profile
    }
}

export default Profile