'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import { db } from '../../../firebase';  // Adjust path as needed
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await emailjs.send(
        'service_abc123', // Your Service ID
        'template_abc123', // Your Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          subject: formData.subject,
          message: formData.message,
        },
        'lHysE0PFH-Hpb4sgB' // Your Public Key
      );

      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setSuccessMessage('✅ Your message has been sent successfully and saved!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending form or saving to Firestore:', error);
      setErrorMessage('❌ Failed to send or save message. Please try again later.');
    }
  };

  return (
    <>
      {/* Page background white */}
      <div style={{ backgroundColor: 'white', minHeight: '100vh', boxSizing: 'border-box' }}>
        {/* Container with consistent background and padding */}
        <div
          style={{
            width: '100%',
            margin: '0 auto',
            backgroundColor: '#f9fafb',
            padding: '60px 20px 40px 20px', // Top padding 60px for breathing space, bottom 40px
            boxSizing: 'border-box',
          }}
        >
          {/* Contact Us Heading & Tagline */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1
              style={{
                fontSize: '2rem',
                marginBottom: '8px',
                fontWeight: '700',
                color: 'blue',
                letterSpacing: '1.2px',
              }}
            >
              Contact Us
            </h1>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: '500',
                color: '#6b7280',
                maxWidth: '500px',
                margin: '0 auto',
                transition: 'color 0.3s ease',
                userSelect: 'none',
                cursor: 'default',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#4b5563')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
            >
              We’re here to help! Reach out with any questions or feedback.
            </p>
          </div>

          {/* Content: Left and Right Cards */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              flexWrap: 'wrap',
              marginBottom: '40px',
            }}
          >
            {/* Left Card */}
            <div
              style={{
                flex: '1 1 350px',
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                boxSizing: 'border-box',
                minWidth: '300px',
              }}
            >
              <h3 style={{ color: 'blue', marginBottom: '25px', fontSize: '22px', fontWeight: 'bold' }}>
                Contact Information
              </h3>

              {/* Contact Items */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', gap: '15px' }}>
                <img src="images/telephone.png" alt="phone" style={{ width: '20px', height: '20px' }} />
                <span style={{ fontSize: '16px', color: '#333' }}>+92 347 1684085</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', gap: '15px' }}>
                <img src="images/mail.png" alt="email" style={{ width: '20px', height: '20px' }} />
                <span style={{ fontSize: '16px', color: '#333' }}>qunocampus@gmail.com</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', gap: '15px' }}>
                <img src="images/location.png" alt="location" style={{ width: '20px', height: '20px' }} />
                <span style={{ fontSize: '16px', color: '#333' }}>
                  J453+GPQ, Old Airport Rd, Chaklala Cantt., Rawalpindi, Pakistan
                </span>
              </div>
            </div> {/* End Left Card */}

            {/* Right Card (Form) */}
            <div
              style={{
                flex: '1 1 600px',
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                boxSizing: 'border-box',
                minWidth: '300px',
              }}
            >
              <h3 style={{ color: 'blue', marginBottom: '25px', fontSize: '22px', fontWeight: 'bold' }}>
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <label style={{ fontSize: '14px', color: '#444' }}>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Your name"
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      marginTop: '6px',
                      borderRadius: '6px',
                      border: '1px solid #ccc',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </label>

                <label style={{ fontSize: '14px', color: '#444' }}>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="your.email@example.com"
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      marginTop: '6px',
                      borderRadius: '6px',
                      border: '1px solid #ccc',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </label>

                <label style={{ fontSize: '14px', color: '#444' }}>
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    placeholder="(123) 456-7890"
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      marginTop: '6px',
                      borderRadius: '6px',
                      border: '1px solid #ccc',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                    }}
                  />
                </label>

                <label style={{ fontSize: '14px', color: '#444' }}>
                  Message
                  <textarea
                    name="message"
                    value={formData.message}
                    placeholder="How can we assist you?"
                    onChange={handleChange}
                    rows={4}
                    required
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      marginTop: '6px',
                      borderRadius: '6px',
                      border: '1px solid #ccc',
                      fontSize: '14px',
                      boxSizing: 'border-box',
                      resize: 'vertical',
                    }}
                  />
                </label>

                <button
                  type="submit"
                  style={{
                    backgroundColor: 'yellow',
                    color: 'black',
                    padding: '12px 0',
                    border: '2px solid black',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '16px',
                    marginTop: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'background-color 0.3s',
                  }}

                >
                  Send Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>

                {successMessage && (
                  <p style={{ color: 'green', fontWeight: '600', marginTop: '10px' }}>
                    {successMessage}
                  </p>
                )}
                {errorMessage && (
                  <p style={{ color: 'red', fontWeight: '600', marginTop: '10px' }}>
                    {errorMessage}
                  </p>
                )}
              </form>
            </div> {/* End Right Card */}
          </div>

          {/* Full-width map below */}
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13273.801539091527!2d73.1028424!3d33.6060841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95025c325ff9%3A0x93dd7305bfe132b4!2sJ453%2BGPQ%2C%20Old%20Airport%20Rd%2C%20Chaklala%20Cantt.%2C%20Rawalpindi%2C%2046000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1691350058053!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ borderRadius: '10px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
