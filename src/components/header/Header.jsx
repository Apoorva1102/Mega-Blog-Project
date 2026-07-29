import React from "react";
import {Container, Logo, LogoutBtn} from '../index';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Header(){
    const authStatus = useSelector((state)=>state.auth.status)
    const navigate = useNavigate()
    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true, 
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Posts",
            slug: "/add-posts",
            active: authStatus,
        },
    ]

    return(
        <header className="py-3 shadow bg-slate-900 text-white">
            <Container>
                <nav className="flex ">
                    <div className="mr-4 flex">
                        <Link to='/'>
                        <Logo />
                        </Link>
                    </div>
                    <ul className="flex ml-auto gap-3">
                        {navItems.map((item) => 
                            item.active ? (
                                <li key= {item.name}>
                                    <button
                                    onClick={() => navigate(item.slug)}
                                    className="w-32 h-12 rounded-xl bg-indigo-300 hover:bg-indigo-400 transition font-medium flex items-center justify-center text-center text-black"
                                    >{item.name}</button>
                                </li>
                            ) : null )}

                            {authStatus && (
                                <li>
                                    <LogoutBtn />
                                </li>
                            )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}