'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', address: '', message: '' });
    }, 1500);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '40px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to right, #f9f9f9, #f0f0f0)',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '700px',
          background: 'white',
          borderRadius: '12px',
          padding: '3rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          border: '1px solid #e0e0e0',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: '#111',
            textAlign: 'center',
            marginBottom: '2.5rem',
            letterSpacing: '1px',
            fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
          }}
        >
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          {['name', 'email', 'phone', 'address'].map((field, index) => (
            <div key={index} style={{ marginBottom: '1.5rem' }}>
              <input
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={formData[field as keyof FormData]}
                onChange={handleChange}
                required={field !== 'address'}
                style={{
                  width: '100%',
                  padding: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#1460ec'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#ccc'}
              />
            </div>
          ))}

          <div style={{ marginBottom: '2rem' }}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '1rem',
                outline: 'none',
                resize: 'vertical',
                fontFamily: 'inherit',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#1460ec'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#ccc'}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '1.2rem',
              background: isSubmitting
                ? '#999'
                : 'linear-gradient(135deg, #f8f41d 0%, #1460ec 100%)',
              border: 'none',
              borderRadius: '8px',
              color: '#000',
              fontSize: '1.1rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
