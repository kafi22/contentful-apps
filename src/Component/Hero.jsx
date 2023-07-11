import React from 'react';
import hero_img from '../assets/hero.svg';


const Hero = () => {



  return (
    <div className='Hero container mx-auto p-2 '>
        <div className=" hero-center flex flex-col space-y-8 justify-between items-center  gap-4 min-h-auto md:flex-row md:py-2 md:gap-4 md:min-h-screen">
            <div className="hero-title w-full flex flex-col space-y-4 md:w-1/2">
                <h1 className=' text-2xl font-semibold leading-7'>Content CMS</h1>
                <p className=' text-para text-justify font-light text-base leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis reprehenderit mollitia officia quod iusto eos numquam fugiat ut iste facere, odit iure consequatur nam cum blanditiis odio ea soluta facilis, et quisquam id necessitatibus suscipit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quae explicabo voluptas a velit vero doloribus laudantium modi quaerat perspiciatis?</p>
            </div>

            <div className="herp-content-img w-1/2  md:w-1/3  md:mr-6">
                <img src={hero_img} alt="hero-image" className=' object-cover h-auto w-full' />
            </div>
        </div>
    </div>
  )
}

export default Hero