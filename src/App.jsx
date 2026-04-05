import React from 'react'
import {Navbar} from './components'
import {Home, Explore, Messages, Profile, Feed} from './pages'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path = "/profile" element={<Profile />} />
        <Route path = "/messages" element={<Messages />} />
        <Route path = "/feed" element={<Feed />} />

      </Routes>
    </>
  )
}

export default App