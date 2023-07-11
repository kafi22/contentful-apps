import React from 'react';
import '../Component/Fetchdata';

import useFetchData from '../Component/Fetchdata';

const Projects = () => {


 const {isloading, project} = useFetchData()

 if(isloading) {
  return <h1 className=' text-center text-red-500 text-2xl'>Loading...</h1>
 }


const ok = project.map(item => (
  
  <a href={item.url} key={item.id} className=' bg-slate-200 shadow-md rounded-md p-4' target='_blank'>
    <img src={item.img} alt="" className=' h-[280px] w-full object-cover' />
    <h1 className=' text-center py-2 text-lg font-semibold leading-7'>{item.title.toUpperCase()}</h1>
  </a>
))


  return (
    <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 justify-between gap-6 max-w-5xl items-stretch  mt-14'>
     {ok}
    </div>
  )
}

export default Projects