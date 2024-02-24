"use client";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} FusionFight. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
