import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import FeatureCard from '../components/FeatureCard'
import StatsBar from '../components/StatsBar'
import Appointment from '../components/Appointment'
import Testimonials from '../components/Faanka/Testimonials'
import Emergency from '../components/Faanka/Emergency'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
      <div className=''>
        <Header/>
        
        <HeroSection/>
         <div className='-mt-32 relative mb-12'>

         
        <StatsBar className=""/>
        </div>

      
       
        <Features/>
        <Appointment/>
        <Testimonials/>
        <div className='' >
       
        <Emergency/>
        <Footer/>
        <button id="back-to-top" class="fixed bottom-8 right-8 w-12 h-12 bg-highlight text-white rounded-full shadow-lg flex items-center justify-center opacity-0 invisible transition-all duration-300">
        <i class="fas fa-arrow-up"></i>

    </button> 
        </div>
       
        
      </div>
   
  )
}

export default Home