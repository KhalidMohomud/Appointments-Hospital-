import React from 'react'
import StatsBar from './StatsBar';

const HeroSection = () => {
  return (
    
    <div className='relative overflow-hidden h-[750px] bg-blue-600 from-primary to-blue-800 text-white py-24 '>
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-20 -top-20 w-72 h-72 bg-highlight rounded-full opacity-20 filter blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-secondary rounded-full opacity-20 filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-highlight rounded-full opacity-10 filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10">
        <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Exceptional Care <br />
            <span className="text-highlight">When It Matters Most</span>
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-lg">
            Experience world-class healthcare with our cutting-edge facilities and renowned specialists.
            Your health journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-secondary hover:bg-secondary-light text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
              <i className="fas fa-calendar-check mr-3"></i> Book Appointment
            </button>
            <button className="px-8 py-4 bg-white hover:bg-gray-100 text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
              <i className="fas fa-video mr-3"></i> Virtual Consultation
            </button>
          </div>
          <div className="mt-10 flex items-center space-x-6">
            <div className="flex -space-x-3">
              <img src="../../public/images/1.jpeg" className="w-12 h-12 rounded-full border-2 border-white" alt="Patient 1" />
              <img src="../../public/images/2.jpeg" className="w-12 h-12 rounded-full border-2 border-white" alt="Patient 2" />
              <img src="../../public/images/3.jpeg" className="w-12 h-12 rounded-full border-2 border-white" alt="Patient 3" />
              <img src="../../public/images/4.jpeg" className="w-12 h-12 rounded-full border-2 border-white" alt="Patient 4" />
            </div>
            <div>
              <p className="opacity-90"><span className="font-semibold">8,000+</span> patients served this month</p>
              <div className="flex items-center mt-1">
                <i className="fas fa-star text-yellow-400 mr-1"></i>
                <span className="font-medium">4.9</span>
                <span className="opacity-75 ml-1">(2,458 reviews)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center animate-bounce">
          <div className="relative">
            <img src="../../public/images/k2-removebg.png" alt="Doctor with patient" className="rounded-2xl shadow-2xl z-10 relative border-4 h-100 border-white" />
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-highlight rounded-2xl z-0"></div>
            <div className="absolute -bottom-3 -right-3 bg-highlight text-white px-5 py-2 rounded-lg shadow-lg flex items-center">
              <i className="fas fa-clock mr-2"></i> 24/7 Availability
            </div>
          </div>
        </div>
      </div>

     
     {/* <StatsBar/> */}
    </div>
  );
}

export default HeroSection;
