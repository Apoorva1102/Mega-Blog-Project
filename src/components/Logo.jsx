import React from "react";
import bazel from "../assets/bazel.svg"
export default function Logo({width = '100px'}){
    return(
        <div>
            <img src={bazel} alt="Blog"
            className="w-12 h-12 text-indigo-500"></img>
        </div>
    )
}