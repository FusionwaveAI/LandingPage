"use client";
import Image from 'next/image';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import dmail from "./media/logos/dmail.png";
import fomoin from "./media/logos/fomoin.png";
import gptverse from "./media/logos/gptverse.png";
import helaLabs from "./media/logos/hela labs.png";
import Meta2150 from "./media/logos/Meta2150s.png";
import skale from "./media/logos/skale.png";
import w3goo from "./media/logos/w3goo.png";
import Shardeum from "./media/logos/Shardeum.png"
import puffVerse from './media/logos/puffVerse.png'
import web3game from './media/logos/Web 3 game community.png'
import wowEarn from './media/logos/wow earn.png'

export const Logos = () => {

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const companies = [
        {
            name: "dmail",
            imagePath: dmail,
            url: "/"
        },
        {
            name: "fomoin",
            imagePath: fomoin,
            url: "/"

        },
        {
            name: "gptverse",
            imagePath: gptverse,
            url: "/"

        },

        {
            name: "Meta2150",
            imagePath: Meta2150,
            url: "/"

        },
     
        {
            name: "w3goo",
            imagePath: w3goo,
            url: "/"

        },
        {
            name: "Shardeum",
            imagePath: Shardeum,
            url: "/"
        },
        {
            name: "puffVerse",
            imagePath: puffVerse,
            url: "/"
        },
        {
            name: "Web 3 game",
            imagePath: web3game,
            url: "/"
        },
        {
            name: "wow earn",
            imagePath: wowEarn,
            url: "/"
        },
      
    ];
    const partners= [
  
        {
            name: "skale",
            imagePath: skale,
            url: "/"

        },
   
        {
            name: "helalabs",
            imagePath: helaLabs,
            url: "/"

        },
  
      
    ];
    return (
        <section className=" dark:bg-gray-900">
            <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <h2 className="mb-8    lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center  dark:text-white md:text-4xl">
                  Our Launch Partners
             </h2>
            <div className="text-gray-500 dark:text-gray-400  mx-auto flex justify-center items-center">
    {partners.map((company) => (
        <a key={company.name} href={company.url} className="mx-4">
            <Image
                src={company.imagePath}
                alt={company.name}
                width={100} // Adjust the width as needed
                height={50} // Adjust the height as needed
                className="hover:text-gray-900 dark:hover:text-white"
            />
        </a>
    ))}
</div>

                <h2 className="mb-8 mt-16   lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center  dark:text-white md:text-4xl">
                    Whom we are Working with
                </h2>
                <div className="text-gray-500 dark:text-gray-400 mx-8 ">
                    <Slider {...sliderSettings}>
                        {companies.map((company) => (
                            <a key={company.name} href={company.url} className="flex justify-around ml-16 my-auto">

                                <Image
                                    src={company.imagePath}
                                    alt={company.name}
                                    width={100} // Adjust the width as needed
                                    height={50} // Adjust the height as needed
                                    className="hover:text-gray-900 dark:hover:text-white"
                                />
                            </a>

                        ))}
                    </Slider>
                    
                </div>
            </div>
        </section>
    );
};
