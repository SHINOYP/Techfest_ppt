import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import cloud from '../img/cloud.png';

// import framer hooks
import { useMotionValue, useTransform, motion } from 'framer-motion';

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const navigate = useNavigate();
  const useHandlePlayClick = () => {
    

    navigate('/Cloud', { replace: true })
};
  const colors = [
    { value: '#b6a179' },
    { value: '#272425' },
    { value: '#6389cb' },
    { value: '#f2c758' },
    { value: '#ffffff' },
  ];

  return (
    // card wrapper
    <div style={{ perspective: 2000 }}>
      {/* card */}
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
        className='w-[426px] min-h-[300px] bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative'
        onDoubleClick={useHandlePlayClick}
      >
        {/* card title */}
        <h1 className='text-5xl mb-6 font-extrabold'>Cloud</h1>
        {/* card subtitle */}
        <p className='max-w-[300px] text-[#000000] mb-6'>
          It is not what you think !

        </p>
        {/* btn & price wrapper */}
        <div className='flex items-center gap-x-[20px] mb-12'>
          <button className='bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg'>
            View 
          </button>
         
        </div>
        
        {/* card image */}
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100000 }}
          className='absolute top-28 -right-72 w-[660px]'
        >
          <img src={cloud} alt='' draggable='false' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
