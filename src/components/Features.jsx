import React from 'react';
import FeatureCard from './FeatureCard';
import { FaUserDoctor   } from "react-icons/fa6";
import { FaHeartbeat ,FaClinicMedical } from "react-icons/fa";

const Features = () => {
  const featuresData = [
    {
      icon: <FaUserDoctor />,
      title: 'World-Class Specialists',
      description: 'Our board-certified physicians are leaders in their fields with extensive experience and specialized training.',
      items: [
        '98% patient satisfaction rate',
        'Average 15+ years experience',
        'Ongoing professional development'
      ]
    },
    {
      icon: <FaClinicMedical  />,
      title: 'Advanced Facilities',
      description: 'State-of-the-art medical technology in a healing environment designed for patient comfort and optimal outcomes.',
      items: [
        'Latest diagnostic equipment',
        'Modern surgical suites',
        'Comfortable recovery areas'
      ]
    },
    {
      icon: <FaHeartbeat />,
      title: 'Comprehensive Care',
      description: 'Integrated healthcare services covering prevention, diagnosis, treatment, and rehabilitation for complete care.',
      items: [
        'Multidisciplinary teams',
        'Personalized treatment plans',
        'Continuity of care'
      ]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-darkbg dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-highlight font-semibold tracking-wider">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mt-3 mb-4">Premium Healthcare Experience</h2>
          <p className="text-lg text-body opacity-80 max-w-3xl mx-auto">
            Elara Health combines cutting-edge technology with compassionate care to deliver exceptional medical services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {featuresData.map((feature, index) => {
  console.log(feature); 
  return <FeatureCard key={index} {...feature} />;
})}

        </div>
      </div>
    </div>
  );
};

export default Features;
