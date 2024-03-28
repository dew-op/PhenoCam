import React from "react";
import Image from "next/image";
import "./Navbar.css";

import navbarlogo from "../../../public/images/navbarlogo.png"
import Link from "next/link";

export default function Navbar() {
    return(
        <>
            <div className="w-full h-[69px] flex justify-between px-16 py-1 bg-[#E1FDE0] text-black align-middle">
                <Link href={'/'} className="w-[200px] my-auto">
                    <Image className="bg-cover cursor-pointer" src={navbarlogo} alt="logo" />
                </Link>
                <div className="flex gap-9 align-middle">
                    <Link href={'/about'} className="nav-link font-outfit text-base my-auto cursor-pointer">About</Link>
                    <Link href={'/gallery'} className="nav-link font-outfit text-base my-auto cursor-pointer">Gallery</Link>
                    <Link href={'/map'} className="nav-link font-outfit text-base my-auto cursor-pointer">Map</Link>
                    <Link href={'/newsites'} className="nav-link font-outfit text-base my-auto cursor-pointer">NewSites</Link>
                    <Link href={'/data'} className="nav-link font-outfit text-base my-auto cursor-pointer">Data</Link>
                    <Link href={'/moreinfo'} className="nav-link font-outfit text-base my-auto cursor-pointer">More Info</Link>
                </div>
                <div className="my-auto">
                    <button className="my-auto px-[19px] py-[10px] bg-[#A3F6A1] text-black rounded-[8px] font-semibold">Log In/Sign Up</button>
                </div>
            </div>
        </>
    );
}