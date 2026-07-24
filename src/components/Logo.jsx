import React from "react";
import bazel from "../assets/bazel.svg"
export default function Logo({width = '100px'}){
    return(
        <div>
            <img src={bazel} alt="Blog"
            className="w-10 h-10 text-indigo-500"></img>
        </div>
    )
}