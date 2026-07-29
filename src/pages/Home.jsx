import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";
import { Container, PostCards } from "../components";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.rows);
            }
        });
    }, []);

    if (!authStatus) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <h2 className="font-fold text-gray-200 p-5">Write. Read. Inspire.</h2>

                    <h2 className="font-bold text-gray-200 p-5">Share your ideas with the world.
                     Read blogs from developers, designers and creators.</h2>
                    <h1 className="text-3xl text-white font-bold">
                        Login to read posts
                    </h1>
                </Container>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <h1 className="text-3xl text-white font-bold">
                        No posts available
                    </h1>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2">
                            <PostCards {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}