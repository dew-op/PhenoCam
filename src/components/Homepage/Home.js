import React from 'react';
import Image from "next/image";
import image1 from "../../../public/images/image1.svg";

import './Home.css';
import Link from "next/link";

function Homepage() {

    // if (typeof window !== "undefined") {
    //     const galleryContainer = document.querySelector('.gallery-container');
    //     const galleryControlsContainer = document.querySelector('.gallery-controls');
    //     const galleryControls = ['previous', 'next'];
    //     const galleryItems = document.querySelectorAll('.gallery-item');
    // }
    //
    //
    // class Carousel {
    //
    //     constructor(container, items, controls) {
    //         this.carouselContainer = container;
    //         this.carouselControls = controls;
    //         this.carouselArray = [...items];
    //     }
    //
    //     updateGallery(){
    //         this.carouselArray.forEach(el => {
    //             el.classList.remove('gallery-item-1');
    //             el.classList.remove('gallery-item-2');
    //             el.classList.remove('gallery-item-3');
    //             el.classList.remove('gallery-item-4');
    //             el.classList.remove('gallery-item-5');
    //         });
    //
    //         this.carouselArray.slice(0, 5).forEach((el, i) => {
    //             el.classList.add(`gallery-item-${i+1}`)
    //         });
    //     }
    //
    //     setCurrentState(direction){
    //         if (direction.className == 'gallery-controls-previous'){
    //             this.carouselArray.unshift(this.carouselArray.pop());
    //         }else{
    //             this.carouselArray.push(this.carouselArray.shift());
    //         }
    //         this.updateGallery();
    //     }
    //
    //     setControls() {
    //         this.carouselControls.forEach(control => {
    //             galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
    //             document.querySelector(`.gallery-controls-${control}`).innerText = control;
    //         });
    //     }
    //
    //     useControls(){
    //         const triggers = [...galleryControlsContainer.childNodes];
    //         triggers.forEach(control => {
    //             control.addEventListener('click', e => {
    //                 e.preventDefault();
    //                 this.setCurrentState(control);
    //             });
    //         });
    //     }
    // }
    //
    // const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
    //
    // exampleCarousel.setControls();
    // exampleCarousel.useControls();

    return (
        <div className="min-h-screen w-full bg-white text-black flex flex-col font-roboto">
            {/*<div className="carousel m-0 p-0 w-full flex items-center bg-gray-800">*/}
            {/*    <div className="gallery w-full">*/}
            {/*        <div className="gallery-container items-center flex h-[400px] my-0 mx-auto max-w-[1000px] relative">*/}
            {/*            <Image className="gallery-item gallery-item-1" src={image1} data-index='1' alt=''/>*/}
            {/*            <Image className="gallery-item gallery-item-2" src={image1} data-index='2' alt=''/>*/}
            {/*            <Image className="gallery-item gallery-item-3" src={image1} data-index='3' alt=''/>*/}
            {/*            <Image className="gallery-item gallery-item-4" src={image1} data-index='4' alt=''/>*/}
            {/*            <Image className="gallery-item gallery-item-5" src={image1} data-index='5' alt=''/>*/}
            {/*        </div>*/}
            {/*        <div className="gallery-controls"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="w-full px-20 py-16 text-center bg-[#E4FEE3] text-black">
                <h1 className="font-outfit font-bold text-2xl mb-8">WELCOME!</h1>
                <p className="text-base">The PhenoCam Network is a cooperative continental-scale phenological observatory that uses imagery from networked digital cameras to track vegetation phenology in a diverse range of ecosystems across North America and around the World. PhenoCam was established in 2008 and currently includes of over 700 sites. The image archive includes over 60 million pictures. Imagery and data are made publicly available in near-real time through this web page.<br/><br/>
                    Data from PhenoCam can be used for phenological model validation and development, evaluation of satellite remote sensing data products, benchmarking earth system models, and studies of climate change impacts on terrestrial ecosystems. If you are new to PhenoCam, or just want to learn some new tricks, check out our comprehensive tutorial.<br/><br/>
                    <Link href={'https://phenocam.nau.edu/education/PhenoCam_Access_Guide.pdf'} className="underline underline-offset-2 decoration-[1.5px] hover:decoration-2">How to access PhenoCam data and imagery?</Link><br/><br/>
                    For more information, please select from the menu items above.</p>
            </div>
            <div className="flex flex-col gap-2 align-middle my-auto justify-between px-32 py-12">
                <h1 className="font-outfit font-bold text-2xl mb-8">Latest PhenoCam Data Release</h1>
                <Link href={"https://daac.ornl.gov/cgi-bin/dsviewer.pl?ds_id=1674"} className="text-base text-[#3DD33A] underline underline-offset-2 decoration-[1.5px] hover:decoration-2">Latest PhenoCam Data Release</Link>
                <Link href={'https://daac.ornl.gov/cgi-bin/dsviewer.pl?ds_id=1674'} className="text-base text-[#3DD33A] underline underline-offset-2 decoration-[1.5px] hover:decoration-2">Latest PhenoCam Data Release</Link>
            </div>
        </div>
        // carousel slider


    );
}

export default Homepage;