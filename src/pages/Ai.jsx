import { useRef } from "react";
import video from '../video/Ai.mp4'

import React, { useState, useEffect } from "react";

import { useNavigate} from "react-router-dom";

function Gg() {
  const [isFullPage, setIsFullPage] = useState(false);

  const navigate = useNavigate();
  const useHandlePlayClick = () => {
    

      navigate('/', { replace: true })
  };

 

  return (
    <div className="relative" >
        <button className="absolute close-btn hover:bg-red-600 bg-red-400 px-8 py-2 m-3 rounded-2xl flex right-0 text-2xl font-bold" onClick={useHandlePlayClick} style={{zIndex:10}}>X</button>
        <video autoPlay controls width={'100%'} height={'100%'} >
          <source src={video} type="video/mp4"  />
        </video>
    
    </div>
  );
}

export default Gg;