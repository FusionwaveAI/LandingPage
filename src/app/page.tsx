import React from 'react'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Content } from './Components/Content'
import { Logos } from './Components/Logos'
import { Footer } from './Components/Footer'


const Page = () => {
  return (
    <div className='h-full bg-[#111827]'>
      <Navbar />
      <Hero />

      <Content />
      <Logos />
      <Footer />
    </div>
  );
}

export default Page;
