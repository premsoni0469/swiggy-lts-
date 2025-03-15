import React from "react";
import Logo from'../assets/smiggy.png'
import { Link } from "react-router";

function Header(){
    return(
        <>
            <div className="flex justify-between shadow-md items-center md:px-20 py-4">
                <Link className="flex items-center" to = "/">
                    <img src={Logo} alt="logo" className="w-16" /><span className="font-bold text-2xl">Smiggy</span>
                </Link>
                <div className="flex gap-7 font-medium">
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="contact">Contact Us</Link>
                    <Link to="cart">Cart</Link>
                </div>
            </div>
        </>
    );
}

export default Header;