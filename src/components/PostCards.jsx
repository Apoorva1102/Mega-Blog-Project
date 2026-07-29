import React from "react";
import appwriteService from  "../appwrite/config";
import {Link} from 'react-router-dom';

export default function PostCards({$id, title, featuredImage}){

    const preview = appwriteService.getFileView(featuredImage);

console.log(preview);
console.log(typeof preview);

    return(
        <Link to={`/post/${$id}`}>
            <div className="rounded-2xl bg-slate-800 text-white p-5 w-full max-w-sm transition-all duration-300 hover:translate-y-2 hover:shadow-indigo-600/20 hover:shadow-lg">
                <div className="w-full justify-center mb-4 overflow-hidden">
                    <img src={preview} alt={title}
                    className="rounded-xl w-full h-52 object-cover" />

                </div>
                <h2 className="text-xl font-bold mb-3 line-clamp-2">{title}</h2>
            </div>
        </Link>
        
    )
}