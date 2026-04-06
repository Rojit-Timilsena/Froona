import React, { useEffect, useState } from 'react';
import MessagesDesktop from './MessagesDesktop';
import MessagesMobile from './MessagesMobile';

const Messages = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile ? <MessagesMobile /> : <MessagesDesktop />;
};

export {Messages};