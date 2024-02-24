import React from 'react'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Content } from './Components/Content'

const Page = () => {
  return (
    <div className='h-full bg-[#111827]'>
    <Navbar/>
     <Hero/>
     <Content/>
    </div>
  );
}

export default Page;
