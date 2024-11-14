import React from 'react'
import Homepage from './components/Homepage'
import TopNav from './components/partials/TopNav'
import ProofComp from './components/ProofComp'
import Features from './components/Features'
import Cards from './components/Cards'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Customer from './components/Customer'
import Footer from './components/Footer'
import logo from "/Logo.png"

const App = () => {
  return (
    <div className="app w-screen h-screen">
      <TopNav />
      <Homepage />
      <ProofComp />
      <Features />
      <Cards />
      <Pricing />
      <Customer />
      <Contact />
      <Footer />
      <h1 className='w-full h-[5vh] flex items-center justify-center'>
        <img className="w-[103px] h-[28px] object-cover " src={logo} alt="" />
      </h1>
    </div>
  )
}

export default App