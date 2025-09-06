/**
 * Contact Section Component
 * Displays professional contact information with social links
 */

const ContactSection = ({ className = "" }) => {
  const contactInfo = [
    {
      label: "Email",
      value: "yadavsumitkum@gmail.com",
      href: "mailto:yadavsumitkum@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      label: "LinkedIn",
      value: "www.linkedin.com/in/sumit-kumar-yadav-9b47b8156/",
      href: "https://www.linkedin.com/in/sumit-kumar-yadav-9b47b8156/",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      label: "GitHub",
      value: "github.com/sumitkumar9",
      href: "https://github.com/sumitkumar9",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      label: "Location",
      value: "Ahemdabad, India",
      href: null,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className={`${className}`}>
      <div className="mb-8">
        <h2 className="text-text-primary text-3xl md:text-4xl font-bold leading-tight mb-4">
          Get In Touch
        </h2>
        {/* Orange accent line */}
        <div className="w-16 h-1 bg-accent-500 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactInfo.map((contact, index) => (
          <div key={index} className="flex items-center gap-4 p-4 bg-dark-accent border border-gray-600 rounded-lg hover:bg-dark-secondary transition-colors">
            <div className="text-accent-500 flex-shrink-0">
              {contact.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-text-primary text-sm font-semibold mb-1">
                {contact.label}
              </h3>
              {contact.href ? (
                <a 
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="text-text-muted text-sm hover:text-accent-500 transition-colors"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-text-muted text-sm">
                  {contact.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
