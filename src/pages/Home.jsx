
import React from 'react';

// import components
import Card from '../components/Card';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import Card4 from '../components/Card4';
import Card5 from '../components/Card5';
import Card6 from '../components/Card6';
import Card7 from '../components/Card7';
import Card8 from '../components/Card8';

const Home=()=>{
    return(
        <div className='w-full bg-[#b1a29d] h-full flex flex-wrap
        items-center justify-center'>
         <div className='flex mx-40 my-40'>
           <Card />
         </div>
         <div className='flex mx-40 my-40'>
           <Card4 />
         </div>
         <div className='flex mx-40 my-40'>
           <Card3 />
         </div>
         
         <div className='flex mx-40 my-40'>
           <Card2 />
         </div>
         <div className='flex mx-40 my-40'>
           <Card5 />
         </div>
         <div className='flex mx-40 my-40'>
           <Card6 />
         </div>
         {/* <div className='flex mx-40 mt-30'>
           <Card7 />
         </div> */}
         <div className='flex mx-40 my-40'>
           <Card8 />
         </div>
         
       </div>
    )
}

export default Home;