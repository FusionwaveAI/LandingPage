"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../Components/UI/card"
const testimonials = [
    {
        name: "NFT Minting",
        avatar: "",
        title: "",
        description: "Genesis OG Fusionwave Membership NFT Mint!"
    },
    {
        name: "NFT Marketplace",
        avatar: "",
        title: "",
        description: "Fusionwave NFT Marketplace to trade all NFTs!"
    },
    {
        name: "Generative AI Tools",
        avatar: "",
        title: "",
        description: "Multiple FusionwaveAI Tools to make life eaiser and save time!"
    },
    {
        name: "Web3 and AI products",
        avatar: "",
        title: "",
        description: "More Generative AI based tools and A Skill based blockchain game!"
    },
]

export const Content = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Launching Soon!
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               {testimonials.map((item) => (
                <Card key={item.description} className="bg-[#192339] border-none text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-x-2">
                            <div>
                                <p className="text-lg">{item.name}</p>
                                <p className="text-zinc-400 text-sm">{item.title}</p>
                            </div>
                        </CardTitle>
                        <CardContent className="pt-4 px-0">
                            {item.description}
                        </CardContent>
                    </CardHeader>
                </Card>
               ))}
            </div>
        </div>
    )
}