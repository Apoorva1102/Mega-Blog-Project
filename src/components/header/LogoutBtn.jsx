import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

export default function LogoutBtn(){
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(()=> {
            dispatch(logout())
        })
    }
    return (
        <button className="w-32 h-12 rounded-xl bg-indigo-300 hover:bg-indigo-400 transition font-medium flex items-center justify-center text-center text-black"
        onClick={logoutHandler}>
            Logout</button>
    )
}