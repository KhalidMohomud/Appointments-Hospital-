import React from 'react';

const FeatureCard = ({ icon, title, description, items }) => {
  console.log(icon);
  return (
    <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 border-t-4 border-highlight">
      <div className='bg-green-400 rounded-full'>

      
      <div className="feature-icon rounded-full mb-6 text-white h-10 w-[2px] text-3xl mx-auto">
        <i className="">{icon}</i>
      </div>
      </div>
      <h3 className="text-xl font-semibold text-center text-primary dark:text-white mb-3">{title}</h3>
      <p className="text-center text-body opacity-80 mb-5">{description}</p>
      <ul className="space-y-2 text-sm text-body opacity-90">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <i className="fas fa-check text-highlight mr-2"></i> {items}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
