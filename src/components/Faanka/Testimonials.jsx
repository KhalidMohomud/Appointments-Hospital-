import React from 'react';
import { testimonialsData } from './DateTestimonials';



const Testimonials = () => (
  <div className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-darkbg">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-highlight font-semibold tracking-wider">PATIENT STORIES</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mt-3 mb-4">What Our Patients Say</h2>
        <p className="text-lg text-body opacity-80 max-w-3xl mx-auto">
          Hear from our patients about their experiences with our healthcare services and specialists.
        </p> 
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonialsData.map(({ name, image, date, feedback, role, stars }, index) => (
          <div key={index} className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border-t-4 border-highlight">
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 text-lg mr-3">
                {Array.from({ length: stars }).map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <span className="text-sm text-body opacity-70">{date}</span>
            </div>
            <p className="text-body opacity-80 mb-6 italic">{`"${feedback}"`}</p>
            <div className="flex items-center">
              <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
              <div>
                <h4 className="font-semibold text-primary dark:text-white">{name}</h4>
                <p className="text-sm text-body opacity-70">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="px-8 py-4 bg-primary hover:bg-primary-light text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
          Read More Patient Stories <i className="fas fa-chevron-right ml-2"></i>
        </button>
      </div>
    </div>
  </div>
);

export default Testimonials;
