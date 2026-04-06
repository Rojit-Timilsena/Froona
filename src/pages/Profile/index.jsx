import React, { useEffect, useState } from 'react';
import ProfileDesktop from './ProfileDesktop';
import ProfileMobile from './ProfileMobile';

const Profile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile ? <ProfileMobile /> : <ProfileDesktop />;
};

export {Profile};