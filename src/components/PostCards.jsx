import React from "react";
import appwriteService from  "../appwrite/config";
import {Link} from 'react-router-dom';

export default function PostCards({$id, title, featuredImage}){
    return(
        <Link to={`/post${$id}`}>
            <div className="w-full rounded-xl bg:[#98A6D4] p-4">
                <div className="w-full justify-center mb-4">
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                    className="rounded-xl" />

                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    )
}