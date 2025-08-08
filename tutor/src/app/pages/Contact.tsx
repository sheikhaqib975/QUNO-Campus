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
      // Send email via EmailJS
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

      // Save form data to Firestore
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
    <div style={{ padding: '60px 20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '35px', color: '#5c6672ff' }}>
        <img 
          src="images/phoneblack.png" 
          alt="logo" 
          style={{ height: '30px', width: '30px', marginRight: '10px', verticalAlign: 'middle' }} 
        />
        𝙲𝚘𝚗𝚝𝚊𝚌𝚝 𝚄𝚜
      </h2>

      <div
        style={{
          maxWidth: '550px',
          margin: '0 auto',
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          border: '2px solid black',
        }}
      >
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
            required
            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={handleChange}
            required
            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder="Your Phone Number"
            onChange={handleChange}
            required
            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}
          />

          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{
              padding: '12px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              backgroundColor: '#f9f9f9',
              color: formData.subject ? '#333' : '#888',
            }}
          >
            <option value="" disabled>
              Select Subject
            </option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Math">Math</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            name="address"
            value={formData.address}
            placeholder="Your Address"
            onChange={handleChange}
            required
            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}
          />

          <textarea
            name="message"
            value={formData.message}
            placeholder="Your Message / Description"
            rows={5}
            onChange={handleChange}
            required
            style={{
              padding: '12px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              backgroundColor: '#f9f9f9',
              fontSize: '15px'
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              backgroundColor: 'yellow',
              color: 'black',
              padding: '12px 24px',
              border: '2px solid black',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              fontSize: '17px',
              fontWeight: 'bold',
            }}
          >
            Send Message
          </button>

          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
      </div>

      <div style={{ maxWidth: '100%', margin: '40px auto 0', padding: '0 20px' }}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13273.801539091527!2d73.1028424!3d33.6060841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95025c325ff9%3A0x93dd7305bfe132b4!2sJ453%2BGPQ%2C%20Old%20Airport%20Rd%2C%20Chaklala%20Cantt.%2C%20Rawalpindi%2C%2046000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1691350058053!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{
            border: 0,
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            marginTop: '50px',
          }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
