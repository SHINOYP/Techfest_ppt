import React from 'react';

import G from '../img/5G.png';
// import framer hooks
import { useMotionValue, useTransform, motion } from 'framer-motion';
// import framer hooks
import {Link,useNavigate} from 'react-router-dom';

const Card = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const colors = [
    { value: '#b6a179' },
    { value: '#272425' },
    { value: '#6389cb' },
    { value: '#f2c758' },
    { value: '#ffffff' },
  ];

  
  const navigate = useNavigate();
  const useHandlePlayClick = () => {
    

      navigate('/g', { replace: true })
  };

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
        <h1 className='text-5xl mb-6 font-extrabold'>5G</h1>
        {/* card subtitle */}
        <p className='max-w-[300px] text-[#000000] mb-6'>
         What you need to know about the 5th Deneration Mobile Network
        </p>
        {/* btn & price wrapper */}
        <div className='flex items-center gap-x-[20px] mb-12'>
          <button className='bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg' >
            View
          </button>
         
        </div>
        
        {/* card image */}
        <motion.div
          style={{ x, y, rotateX, rotateY, z: 100000 }}
          className='absolute top-20 -right-64 w-[620px]'
        >
          <img src={G} alt='' draggable='false' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
