import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !value ? 'Email is required' : 
               !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'name':
        return !value.trim() ? 'Name is required' : '';
      case 'message':
        return !value.trim() ? 'Message is required' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      newErrors[key] = validateField(key, formData[key]);
    });

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });

      // Clear form
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-center text-3xl md:text-4xl uppercase tracking-widest mb-8">
        Contact
      </h1>

      <div className="mb-12 space-y-1 text-center">
        <p className="text-lg">
          Feel free to get in touch for bookings, collaborations, or any inquiries.
        </p>
        <p className="text-lg text-neutral-600">
          Please fill out the form below and I'll get back to you within 24 hours.
        </p>
        <p className=" text-lg text-neutral-600">
          Based in Copenhagen - Available for booking worldwide.
        </p>
      </div>

      {status.submitted && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}

      {status.error && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
          {status.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 py-2 border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-neutral-400`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 py-2 border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-neutral-400`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 py-2 border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-neutral-400`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status.submitting}
          className={`w-full px-4 py-2 bg-neutral-800 text-white rounded-md 
            hover:bg-neutral-700 focus:outline-none focus:ring-2 
            focus:ring-neutral-400 focus:ring-offset-2 transition-colors
            ${status.submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {status.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

export default Contact