import React from "react";
import Logo from'../assets/smiggy.png'

function Header(){
    return(
        <>
            <div className="flex justify-between shadow-md items-center md:px-20 py-4">
                <a className="flex items-center" href="#">
                    <img src={Logo} alt="logo" className="w-16" /><span className="font-bold text-2xl">Smiggy</span>
                </a>
                <div className="flex gap-7 font-medium">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Cart</a>
                </div>
            </div>
        </>
    );
}

export default Header;