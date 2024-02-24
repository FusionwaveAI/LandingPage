"use client";

// import { cn } from "@/lib/utils";
// import { useAuth } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./UI/button";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
});

export const Navbar = () => {
    
//comments
    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="relative h-8 w-8 mr-4">
                    <Image
                    fill
                    alt="logo"
                    src="/logo.png"
                    />
                </div>
                <h1 className={("text-2xl font-bold text-white")}>
                    FusionwaveAI
                </h1>
                </Link>
            <div className="flex items-center gap-x-2">
            {/*<Link href={isSignedIn ? "/dashboard" : "/sign-up"}>*/}
            <Button variant="outline" className="rounded-full">
                 Fusion Fight
             </Button>
             <Button variant="outline" className="rounded-full">
                 FusionNFT
             </Button>
            {/*</Link>*/}
            </div>
        </nav>  
    )
}