import React, { useState, useEffect } from "react";
import Logo from "../assets/smiggy.png";
import { Link } from "react-router";

function Header() {
    const [isHambuger, setHambuger] = useState(false);
    const [isScrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "p-3 mx-4 translate-y-2" : ""}`}>
                <div className="bg-gray-100/80 backdrop-blur-2xl z-50 rounded-lg flex justify-between shadow-md items-center xl:px-36 lg:px-30 md:px-14 px-5 py-4">
                    <div className="flex items-center gap-9">
                        <Link className="flex items-center" to="/">
                            <img src={Logo} alt="logo" className="w-16" />
                            <span className="font-bold text-2xl">Smiggy</span>
                        </Link>
                        <div className="hidden md:block">
                            <span className="font-bold">Location:</span>{" "}
                            <span className="text-orange-500 underline">
                                Ghatkopar East, Mumbai
                            </span>
                        </div>
                    </div>
                    {/* Hamburger Button */}
                    <button
                        type="button"
                        className="flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        onClick={() => setHambuger(!isHambuger)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <ul className="flex gap-7">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/cart">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`absolute w-full bg-gray-100/80 backdrop-blur-md shadow-md rounded-md p-5 ${isHambuger ? "block" : "hidden"} md:hidden`}>
                    <ul className="flex flex-col gap-5 text-center">
                        <li>
                            <Link to="/" onClick={() => setHambuger(false)}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={() => setHambuger(false)}>About</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={() => setHambuger(false)}>Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/cart" onClick={() => setHambuger(false)}>Cart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;
