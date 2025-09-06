import React, { useState, useEffect } from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { useForm } from '@formspree/react';

/**
 * Contact page component - Contact form and information
 * Features a contact form with comprehensive validation and user feedback
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [clientErrors, setClientErrors] = useState({});
  const [state, handleSubmit] = useForm("mgvlroge");

  // Handle successful form submission
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      // Reset form data after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Auto-hide success message after 5 seconds
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  // Validation functions
  const validateField = (name, value) => {
    const errors = {};

    switch (name) {
      case 'name':
        if (!value.trim()) {
          errors.name = 'Name is required';
        } else if (value.trim().length < 2) {
          errors.name = 'Name must be at least 2 characters';
        } else if (value.trim().length > 100) {
          errors.name = 'Name must be less than 100 characters';
        }
        break;

      case 'email':
        if (!value.trim()) {
          errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors.email = 'Please enter a valid email address';
        }
        break;

      case 'subject':
        if (!value.trim()) {
          errors.subject = 'Subject is required';
        } else if (value.trim().length < 3) {
          errors.subject = 'Subject must be at least 3 characters';
        } else if (value.trim().length > 200) {
          errors.subject = 'Subject must be less than 200 characters';
        }
        break;

      case 'message':
        if (!value.trim()) {
          errors.message = 'Message is required';
        } else if (value.trim().length < 10) {
          errors.message = 'Message must be at least 10 characters';
        } else if (value.trim().length > 250) {
          errors.message = 'Message must be less than 250 characters';
        }
        break;

      default:
        break;
    }

    return errors;
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach(field => {
      const fieldErrors = validateField(field, formData[field]);
      Object.assign(errors, fieldErrors);
    });
    return errors;
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear client-side errors for this field when user starts typing
    if (clientErrors[name]) {
      setClientErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle form submission with validation
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setClientErrors(errors);
      return;
    }

    // Clear client errors and submit
    setClientErrors({});
    await handleSubmit(e);
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setClientErrors({});
    setShowSuccess(false);
  };

  // Simple error display component
  const FieldError = ({ fieldName, clientErrors, serverErrors }) => {
    const clientError = clientErrors[fieldName];
    const serverError = serverErrors?.find(error => error.field === fieldName);

    // Prioritize client-side errors
    const errorMessage = clientError || serverError?.message;

    if (!errorMessage) return null;

    return (
      <div className="text-accent-500 text-sm mt-1" role="alert">
        {errorMessage}
      </div>
    );
  };

  // Get input styling based on validation state
  const getInputClassName = (fieldName) => {
    const hasError = clientErrors[fieldName] || state.errors?.some(error => error.field === fieldName);
    const baseClasses = "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 placeholder:text-text-muted bg-dark-accent text-text-primary";

    if (hasError) {
      return `${baseClasses} border-accent-500 focus:ring-accent-500 focus:border-accent-500`;
    }

    return `${baseClasses} border-gray-600 focus:ring-accent-500 focus:border-accent-500`;
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <Section
        title="Get In Touch"
        subtitle="I'd love to hear from you. Send me a message and I'll respond as soon as possible."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-6">
          <h3 className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">
            Send me a message
          </h3>

          {/* Success Message */}
          {showSuccess && (
            <div className="text-accent-500 text-sm mb-6 p-3 text-center" role="alert" aria-live="polite">
              Message sent successfully! Thank you for your message.
            </div>
          )}



          <form onSubmit={handleFormSubmit} className="space-y-4" action={"https://formspree.io/f/mgvlroge"} method='POST'>
            {/* Honeypot field for spam protection */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                Name <span className="text-accent-500" aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength="2"
                maxLength="100"
                className={getInputClassName('name')}
                placeholder="Your full name"
                aria-describedby="name-error"
                aria-invalid={!!(clientErrors.name || state.errors?.some(error => error.field === 'name'))}
              />
              <FieldError
                fieldName="name"
                clientErrors={clientErrors}
                serverErrors={state.errors}
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Email <span className="text-accent-500" aria-label="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={getInputClassName('email')}
                placeholder="your.email@example.com"
                aria-describedby="email-error"
                aria-invalid={!!(clientErrors.email || state.errors?.some(error => error.field === 'email'))}
              />
              <FieldError
                fieldName="email"
                clientErrors={clientErrors}
                serverErrors={state.errors}
              />
            </div>
            
            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                Subject <span className="text-accent-500" aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                minLength="3"
                maxLength="200"
                className={getInputClassName('subject')}
                placeholder="What's this about?"
                aria-describedby="subject-error"
                aria-invalid={!!(clientErrors.subject || state.errors?.some(error => error.field === 'subject'))}
              />
              <FieldError
                fieldName="subject"
                clientErrors={clientErrors}
                serverErrors={state.errors}
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                Message <span className="text-accent-500" aria-label="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                minLength="10"
                maxLength="250"
                rows={6}
                className={`${getInputClassName('message')} resize-vertical`}
                placeholder="Tell me about your project or just say hello!"
                aria-describedby="message-error message-help"
                aria-invalid={!!(clientErrors.message || state.errors?.some(error => error.field === 'message'))}
              />
              <FieldError
                fieldName="message"
                clientErrors={clientErrors}
                serverErrors={state.errors}
              />
              <div id="message-help" className="text-text-muted text-xs mt-1">
                {formData.message.length}/250 characters
              </div>
            </div>
            
            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={state.submitting}
                className="flex-1 sm:flex-none sm:min-w-[140px]"
                aria-describedby={state.submitting ? "submit-status" : undefined}
              >
                {state.submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>

              <Button
                type="button"
                variant="secondary"
                size="lg"
                onClick={handleReset}
                disabled={state.submitting}
                className="flex-1 sm:flex-none sm:min-w-[100px]"
              >
                Reset
              </Button>
            </div>

            {state.submitting && (
              <div id="submit-status" className="text-sm text-text-muted text-center" aria-live="polite">
                Please wait while we send your message...
              </div>
            )}
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="space-y-6">
          <h3 className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em]">
            Let's connect
          </h3>

          <div className="space-y-4">
            <p className="text-text-muted">
              I'm always interested in hearing about new opportunities, whether that's a full-time role,
              freelance project, or just a chat about technology and software development.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-dark-accent border border-gray-600 rounded-lg hover:bg-dark-secondary transition-colors">
                <div className="w-5 h-5 text-accent-500">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-text-primary">yadavsumitkum@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-dark-accent border border-gray-600 rounded-lg hover:bg-dark-secondary transition-colors">
                <div className="w-5 h-5 text-accent-500">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-text-primary">Ahmedabad, India</span>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="text-text-primary font-medium mb-3">Follow me on</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com" className="text-accent-500 hover:text-accent-600 transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com" className="text-accent-500 hover:text-accent-600 transition-colors">
                  GitHub
                </a>
                <a href="https://twitter.com" className="text-accent-500 hover:text-accent-600 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
