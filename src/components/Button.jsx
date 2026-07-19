import React from "react";
export default function Button ({
    children,
    type = 'button',
    bgColor = 'bg:[#8FAD88]',
    textColor = 'text-white',
    classname = '',
    ...props 
}){
    return (
        <button classname = {`px-4 py-2 rounded-lg ${classname} ${bgColor} ${textColor}`} {...props}>
            {children}
        </button>
    )
}