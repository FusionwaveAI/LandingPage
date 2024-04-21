"use client"
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import Logo from "./media/logo.png";
import { Button } from "./UI/button";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

export const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <a href="/" className="flex">
                <div className="relative h-8 w-8 mr-4">
                    <Image
                        fill
                        alt="logo"
                        src={Logo}
                    />
                </div>
                <h1 className=" text-xl md:text-2xl font-bold text-white">
                    FusionwaveAI
                </h1>
            </a>
            <div className="flex items-center ">
                <div className="hidden md:flex">
                    <a href="https://fusionfight.netlify.app/">
                        <Button variant="outline" className="rounded-full mr-3 hover:bg-gradient-to-r from-purple-400 to-pink-600">
                            FusionFight
                        </Button>
                    </a>
                    <Button variant="outline" className="rounded-full ">
                        FusionImage
                    </Button>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleDropdown} className="text-white text-3xl focus:outline-none">
                        ☰
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl">
                            <a href="https://fusionfight.netlify.app/" className="block px-4 py-2 text-gray-800 hover:bg-pi">
                                FusionFight
                            </a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                FusionImage
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </nav>  
    );
};
