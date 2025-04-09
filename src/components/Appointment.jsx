import React, { useState } from 'react';

const Appointment = () => {
  
   const [ Date , SetDate] =  useState();
  const reasons = [
    'Same-day appointments available for urgent needs',
    'Average wait time under 15 minutes',
    'Board-certified specialists in every field',
    'Accept most major insurance plans',
    'Virtual visit options for many specialties',
  ];

  const formFields = [
    { label: 'Full Name', type: 'text' },
    { label: 'Email', type: 'email' },
    { label: 'Phone Number', type: 'tel' },
    { label: 'Date of Birth', type: 'date' },
  ];

  const selectOptions = {
    department: ['Select Department', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dermatology'],
    doctor: ['Any Available Doctor', 'Dr. FARHAAN ABDI (Cardiology)', 'Dr. XUSEEN XASAN (Neurology)', 'Dr. Khaalid (Orthopedics)'],
    time: ['Any Available Time', 'Morning (8am-12pm)', 'Afternoon (12pm-4pm)', 'Evening (4pm-8pm)'],
  };

  return (
    <div className="py-20 bg-body">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-highlight font-semibold tracking-wider">EASY BOOKING</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mt-3 mb-4">Schedule Your Appointment</h2>
          <p className="text-lg text-body opacity-80 max-w-3xl mx-auto">
            Book your visit with our specialists in just a few clicks. We'll confirm your appointment immediately.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Section: Appointment Info */}
              <div className="p-10 bg-gradient-to-br from-primary to-blue-800 text-block">
                <h3 className="text-2xl font-bold mb-6">Why Choose Elara Health?</h3>
                <ul className="space-y-4 mb-8">
                  {reasons.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <i className="fas fa-check-circle text-highlight mt-1 mr-3 text-xl"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-5 bg-white bg-opacity-10 rounded-lg">
                  <h4 className="font-semibold text-highlight mb-3 flex items-center">
                    <i className="fas fa-info-circle mr-2"></i> Need immediate assistance?
                  </h4>
                  <p className="opacity-90">
                    Call our appointment desk at <span className="font-bold text-white">(800) 555-HEAL</span> for help with scheduling.
                  </p>
                </div>
              </div>

              {/* Right Section: Appointment Form */}
              <div className="p-10">
                <form className="animate-fade-in">
                  {/* Appointment Type */}
                  <div className="mb-6">
                    <label className="block text-body opacity-80 font-medium mb-3">Appointment Type</label>
                    <div className="grid grid-cols-2 gap-4">
                      {['In-Person', 'Virtual'].map((type, index) => (
                        <label key={index} className="appointment-type-label">
                          <input type="radio" name="appointment-type" className="hidden" checked={index === 0} />
                          <div
                            className={`w-full h-full p-4 border-2 ${
                              type === 'In-Person' ? 'border-highlight bg-highlight bg-opacity-10 text-highlight' : 'border-custom bg-transparent text-body'
                            } rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-opacity-20`}>
                            <i className={`fas fa-${type === 'In-Person' ? 'user-md' : 'video'} text-2xl mb-2`}></i>
                            <span>{type}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {formFields.map((field, index) => (
                      <div key={index}>
                        <label className="block text-body opacity-80 font-medium mb-2">{field.label}</label>
                        <input
                          type={field.type}
                          className="w-full px-4 py-3 border border-custom bg-card rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight transition-all"
                        />
                      </div>
                    ))}
                  </div>

                
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {Object.entries(selectOptions).map(([key, options], index) => (
                      <div key={index}>
                        <label className="block text-body opacity-80 font-medium mb-2">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                        <div className="relative">
                          <select className="w-full px-4 py-3 border border-custom bg-card rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight transition-all appearance-none">
                            {options.map((option, idx) => (
                              <option key={idx}>{option}</option>
                            ))}
                          </select>
                          <div className="absolute right-3 top-3.5 text-body opacity-50 pointer-events-none">
                            <i className="fas fa-chevron-down"></i>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

            
                  <div className="mb-6">
                    <label className="block text-body opacity-80 font-medium mb-2">Reason for Visit</label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 border border-custom bg-card rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight transition-all"
                      placeholder="Please describe your symptoms or reason for appointment"
                    ></textarea>
                  </div>

                  {/* Insurance Checkbox */}
                  <div className="flex items-center mb-6">
                    <input type="checkbox" id="insurance" className="mr-3 h-5 w-5 text-highlight focus:ring-highlight border-custom rounded" />
                    <label htmlFor="insurance" className="text-body opacity-80">I will be using insurance for this visit</label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-highlight hover:bg-highlight-light text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center">
                    Confirm Appointment <i className="fas fa-arrow-right ml-3"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
