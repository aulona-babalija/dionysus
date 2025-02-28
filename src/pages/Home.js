import React from 'react'
import Navbar from '../components/Shared/Navbar'
import Banner from '../components/Home/Banner/Banner'
import About from '../components/Home/About/About'
import HowItWorks from '../components/Home/HowItWorks/HowItWorks'
import Situation from '../components/Home/Situation/Situation'
import Footer from '../components/Shared/Footer'
import Reviews from '../components/Home/Reviews/Reviews'
import Request from '../components/Home/Request/Request'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <About/>
        <HowItWorks/>
        <Situation/>
        <Reviews/>
        <Request/>
        <Footer/>
    </div>
  )
}

export default Home