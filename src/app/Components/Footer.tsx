"use client"
import Image from "next/image";
import logo from '../Components/media/logo.png'

export const Footer = () => {
    return (
        <footer className=" dark:bg-gray-900 border-t  border-gray-200 dark:border-gray-700  mt-11">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <Image src={logo} className=" me-3" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FusionwaveAI</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">

                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Know more</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com//FusionwaveAI" className="hover:underline ">Pitchdeck</a>
                                </li>
                                <li>
                                    <a href="https://t.me/fusionwaveai" className="hover:underline">Tokenomics</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 w-full sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://flowbite.com/" className="hover:underline">FusionwaveAI™</a>. All Rights Reserved.</span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://twitter.com/FusionwaveAI" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.278 5.08c-.67.298-1.39.498-2.145.588a3.64 3.64 0 0 0 1.605-2.008c-.71.408-1.495.71-2.33.916a3.653 3.653 0 0 0-6.24 3.32c-3.038-.152-5.733-1.69-7.535-4.038a3.66 3.66 0 0 0-.49 1.845c0 1.274.64 2.396 1.608 3.05a3.655 3.655 0 0 1-1.656-.453v.045c0 1.777 1.302 3.253 3.024 3.59a3.663 3.663 0 0 1-1.65.062c.468 1.425 1.817 2.465 3.42 2.495a7.337 7.337 0 0 1-4.26 1.39c-.28 0-.56-.015-.84-.045a10.364 10.364 0 0 0 5.55 1.617c6.688 0 10.337-5.547 10.337-10.34 0-.157-.005-.31-.015-.465.71-.517 1.325-1.167 1.81-1.907z"></path>
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="https://t.me/fusionwaveai" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.53,3.77a1.67,1.67,0,0,0-1.47-.76L3.35,8.52a1.63,1.63,0,0,0-.92.46,1.67,1.67,0,0,0-.42,1.4l1.12,7.57a1.54,1.54,0,0,0,.41.81,1.55,1.55,0,0,0,.78.41,1.62,1.62,0,0,0,.62,0l6.33-1.6a.49.49,0,0,1,.59.27l2.14,4.28a.52.52,0,0,0,.76.21l3.55-2.36a1.56,1.56,0,0,0,.78-.92l2.67-9.54A1.71,1.71,0,0,0,20.53,3.77ZM13.41,14.82l-3.42-1.4,7-5.39Z"></path>
                            </svg>
                            <span className="sr-only">Telegram page</span>
                        </a>


                        <a href="https://discord.gg/MyfMCJukSe" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path>
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="https://www.linkedin.com/company/fusionwaveai/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21.75 0H2.25A2.25 2.25 0 0 0 0 2.25v19.5A2.25 2.25 0 0 0 2.25 24h19.5A2.25 2.25 0 0 0 24 21.75V2.25A2.25 2.25 0 0 0 21.75 0zM7.875 20.25H4.5V9h3.375v11.25zm-1.688-12.375a1.688 1.688 0 1 1 1.688-1.687 1.688 1.688 0 0 1-1.688 1.688zM20.25 20.25h-3.375v-5.063c0-1.313-.562-2.625-1.875-2.625-1.125 0-1.688.75-1.875 1.5-.063.187-.063.562-.063.937v5.25H8.25V9h3.375v1.312c.563-.875 1.5-1.875 3.937-1.875 3 0 3.562 1.875 3.562 4.313v6.563z" />
                            </svg>
                            <span className="sr-only">LinkedIn page</span>
                        </a>
                        <a href="https://www.youtube.com/@FusionwaveAI" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#6B7280" viewBox="0 0 24 24">
                            <path d="M23.25 6.716s-.271-1.905-1.096-2.73c-.825-.825-1.67-.83-2.158-.927C17.399 3 12 3 12 3s-5.4 0-7.997.059c-.488.097-1.333.102-2.158.927-.825.825-1.096 2.73-1.096 2.73S0 8.595 0 10.125v3.75c0 1.53.249 3.409.249 3.409s.271 1.905 1.096 2.73c.825.825 1.818.795 2.303.915 1.598.271 7.45.331 7.45.331s5.837-.09 7.435-.36c.484-.12 1.478-.09 2.303-.915.825-.825 1.096-2.73 1.096-2.73S24 16.365 24 14.625v-3.75c0-1.53-.25-3.409-.25-3.409zM9.75 15.75V8.25l6 3-6 3z"/>
                            </svg>
                            <span className="sr-only">YouTube account</span>
                        </a>





                    </div>
                </div>
            </div>
        </footer>
    );
};