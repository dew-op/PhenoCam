import React from "react";
import Image from "next/image";
import "./Navbar.css";

import navbarlogo from "../../../public/images/navbarlogo.png"

export default function Navbar() {
    return(
        <>
            <div className="w-full h-[69px] flex justify-between px-16 py-1 bg-[#E1FDE0] text-black align-middle">
                <div className="w-[200px] my-auto">
                    <Image className="bg-cover cursor-pointer" src={navbarlogo} alt="logo" />
                </div>
                <div className="flex gap-9 align-middle">
                    <h3 className="nav-link font-outfit text-base my-auto cursor-pointer">About</h3>
                    <h3 className="nav-link font-outfit text-base my-auto cursor-pointer">Gallery</h3>
                    <h3 className="nav-link font-outfit text-base my-auto cursor-pointer">Map</h3>
                    <h3 className="nav-link font-outfit text-base my-auto cursor-pointer">NewSites</h3>
                    <h3 className="nav-link font-outfit text-base my-auto cursor-pointer">Data</h3>
                    <h3 className="nav-link font-outfit text-base my-auto cursor-pointer">More Info</h3>
                </div>
                <div className="my-auto">
                    <button className="my-auto px-[19px] py-[10px] bg-[#A3F6A1] text-black rounded-[8px] font-semibold">Log In/Sign Up</button>
                </div>
            </div>
        </>
    );
}