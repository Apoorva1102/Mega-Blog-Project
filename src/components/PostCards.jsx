import React from "react";
import appwriteService from  "../appwrite/config";
import {Link} from 'react-router-dom';

export default function PostCards({$id, title, featuredImage}){

    const preview = appwriteService.getFilePreview(featuredImage);

console.log(preview);
console.log(typeof preview);

    return(
        <Link to={`/post/${$id}`}>
            <div className="w-full rounded-xl bg-slate-900 text-white p-4">
                <div className="w-full justify-center mb-4">
                    <img src={preview} alt={title}
                    className="rounded-xl" />

                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
        
    )
}