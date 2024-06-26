"use client";

import { Button } from "./UI/button";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect"


export const Hero = () => {
    // const { isSignedIn } = useAuth();
//comments
    return (
        <div className="text-white font-bold py-36 text-center space-y-5">
         
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl space-y-5 font-extrabold">
                <h1>
                    The Best Generative AI Tools and More
                </h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    <TypewriterComponent
                    options={{
                        strings: [
                            "FusionImage.",
                            "FusionNFT Marketplace.",
                        ],
                        autoStart: true,
                        loop: true
                    }}
                />    
                </div>
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400">
                Create content using AI 10x faster.
            </div>
            <div>
             {/* <Link href={isSignedIn ? "/dashboard" : "/sign-up"}> */}
             <a href="https://fusionfight.netlify.app/">
              <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
                FusionFight
              </Button>
              </a>
             {/* </Link> */}
            </div>

        </div>
    )
}