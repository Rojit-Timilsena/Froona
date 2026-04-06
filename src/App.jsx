import React from 'react'
import {Navbar, MobileBottomNav} from './components'
import {Home, Explore, Messages, Profile, NotificationsPage} from './pages'
import { Routes, Route } from 'react-router-dom' 

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path = "/profile" element={<Profile />} />
        <Route path = "/notifications" element={<NotificationsPage />} />
        <Route path = "/messages" element={<Messages />} />
      </Routes>
      <MobileBottomNav />
    </>
  )
}

export default App