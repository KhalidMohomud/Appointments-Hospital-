import React from 'react'

const Emergency = () => {
  return (
    <div className='flex flex-col gap-22'>
    <div className='py-8 bg-alert text-white animate-pulse-slow'>
         <div className="container mx-auto px-6 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="mb-4 md:mb-0 md:mr-8">
                    <i class="fas fa-ambulance text-4xl"></i>
                </div>
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Emergency Medical Service Available 24/7</h3>
                    <p className="text-lg md:text-xl"> Call our emergency hotline: <span class="font-bold text-2xl md:text-3xl">911</span> or <span class="font-bold text-2xl md:text-3xl">+252619006007</span></p>
                </div>
              
            </div>
        </div>
    </div>
     <div className='py-20 bg-gradient-to-r from-primary  to-blue-800 text-white'>
     <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Exceptional Healthcare?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Join thousands of patients who trust Elara Health for their medical needs. Book your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 gap-4 ">
                <button className="px-8 py-4 bg-secondary hover:bg-secondary-light text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg flex items-center justify-center">
                    <i className="fas fa-calendar-check mr-3"></i> Book Appointment Now
                </button>
                <button className="px-8 py-4 bg-white hover:bg-gray-100 text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg flex items-center justify-center">
                    <i className="fas fa-phone-alt mr-3"></i> Call Us: (+991)  9006007
                </button>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Emergency