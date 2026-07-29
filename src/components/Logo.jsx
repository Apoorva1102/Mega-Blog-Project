import React from "react";
import bazel from "../assets/bazel.svg"
import moon from "../assets/moon.png"
export default function Logo({width = '100px'}){
    return(
        <div>
            <img src={moon} alt="Blog"
            className="w-12 h-12 text-indigo-500"></img>
        </div>
    )
}