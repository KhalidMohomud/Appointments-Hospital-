import React from 'react'

const StatsBar = () => {
  return (
    <div>
          <div className="bg-card shadow-xl py-8 mt-12 relative z-20 mx-8 rounded-3xl border border-custom">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-4 stats-card rounded-xl">
                    <div className="text-4xl font-bold text-highlight mb-2">16+</div>
                    <div className="text-body opacity-80">Specialist Doctors</div>
                </div>
                <div className="p-4 stats-card rounded-xl">
                    <div className="text-4xl font-bold text-highlight mb-2">24/7</div>
                    <div className="text-body opacity-80">Emergency Service</div>
                </div>
                <div className="p-4 stats-card rounded-xl">
                    <div className="text-4xl font-bold text-highlight mb-2">98%</div>
                    <div className="text-body opacity-80">Patient Satisfaction</div>
                </div>
                <div className="p-4 stats-card rounded-xl">
                    <div className="text-4xl font-bold text-highlight mb-2">47+</div>
                    <div className="text-body opacity-80">Medical Departments</div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default StatsBar