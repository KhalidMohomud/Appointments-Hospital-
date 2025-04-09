import React from 'react'

const SocialIcon = ({ href, iconClass }) => (
  <a href={href} className="w-10 h-10 bg-primary-light hover:bg-highlight rounded-full flex items-center justify-center transition-colors">
    <i className={iconClass}></i>
  </a>
)

const FooterSection = ({ title, links }) => (
  <div>
    <h4 className="font-semibold text-lg mb-6">{title}</h4>
    <ul className="space-y-3">
      {links.map((link, idx) => (
        <li key={idx}>
          <a href={link.href} className="text-textlight hover:text-highlight transition-colors">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  const quickLinks = [
    { href: '#', text: 'Home' },
    { href: '#doctors', text: 'Find a Doctor' },
    { href: '#services', text: 'Our Services' },
    { href: '#facilities', text: 'Facilities' },
    { href: '#About', text: 'About' },
  ]

  const services = [
    { href: '#', text: 'Emergency Care' },
    { href: '#', text: 'Primary Care' },
    { href: '#', text: 'Specialist Care' },
    { href: '#', text: 'Diagnostic Imaging' },
    { href: '#', text: 'Wellness Programs' },
  ]

  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', text: '123 Medical Drive\nHealth City, HC 12345' },
    { icon: 'fas fa-phone-alt', text: '(+911) 9006007' },
    { icon: 'fas fa-envelope', text: 'info@khahealth.com' },
  
  ]

  return (
    <footer className="bg-primary text-white pt-16 pb-8 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <i className="fas fa-hospital-alt text-3xl text-highlight mr-3"></i> KHA  Health
            </h3>
            <p className="text-textlight mb-6">
              Providing compassionate, world-class healthcare services with a patient-first approach since 2005.
            </p>
            <div className="flex space-x-4">
              {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map(icon => (
                  <>
                  </>
               // <SocialIcon key={icon} href="#" iconClass={`fab fa-${icon}`} />
              ))}
            </div>
          </div>

          <FooterSection title="Quick Links" links={quickLinks} />
          <FooterSection title="Services" links={services} />

          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-textlight">
              {contactInfo.map(({ icon, text }, idx) => (
                <li key={idx} className="flex items-start">
                  <i className={`${icon} mt-1 mr-4 text-highlight`}></i>
                  <span>{text.replace('\n', <br />)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-textlight">
          <p>
            &copy; 2026 KHA Health. All rights reserved. |{' '}
          
            <a href="#" className="hover:text-highlight transition-colors">Privacy Policy</a> |{' '}
            <a href="#" className="hover:text-highlight transition-colors">Terms of Service</a> |{' '}
            <a href="#" className="hover:text-highlight transition-colors">Accessibility</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
