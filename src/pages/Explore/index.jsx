import React, { useEffect, useState } from 'react';
import ExploreDesktop from './ExploreDesktop';
import ExploreMobile from './ExploreMobile';

const Explore = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile ? <ExploreMobile /> : <ExploreDesktop />;
};

export {Explore};