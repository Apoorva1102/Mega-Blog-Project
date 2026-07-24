import React from "react";
import { Container, PostForm } from "../components";

export default function AddPost(){
    return(
        <div className="py-8 text-white">
            <Container>
                <PostForm />
            </Container>
        </div>
    )
}