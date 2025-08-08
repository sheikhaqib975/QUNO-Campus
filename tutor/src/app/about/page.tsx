'use client';
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        minHeight: '100vh',
       padding: '30px 20px',
        boxSizing: 'border-box',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#333',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          backgroundColor: '#f9fafb',
          borderRadius: '10px',
          padding: '30px 25px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}
      >
        <h1 style={{ color: 'blue', fontSize: '2.2rem', marginBottom: '20px', fontWeight: '700' , textAlign: 'center'}}>
          About QUNO CAMPUS
        </h1>

        <h3 style={{ color: 'blue', fontSize: '1.3rem', marginBottom: '10px', fontWeight: '600' }}>
          Our Mission
        </h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.6' }}>
          Founded in 2023 by Muhammad Usman Ashfaq, QUNO CAMPUS is a forward-thinking online educational platform
          offering personalized, one-on-one tutoring across curricula like GCSSC, IGCSE, and AP. Our mission is to
          empower students with academic excellence and practical skills, including programming courses in Python and C++.
        </p>

        <h3 style={{ color: 'blue', fontSize: '1.3rem', marginBottom: '10px', fontWeight: '600' }}>
          Our Approach
        </h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.6' }}>
          We provide 24/7 support, free trial sessions, daily lectures, weekly tests, and transparent progress reports
          with regular parent-teacher meetings. By integrating technology with personalized teaching methods, we ensure
          each student’s learning experience is engaging, effective, and tailored to their unique goals.
        </p>

        <h3 style={{ color: 'blue', fontSize: '1.3rem', marginBottom: '10px', fontWeight: '600' }}>
          ERP Portal & Support
        </h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.6' }}>
          Our ERP portal gives students and parents easy access to schedules, lectures, and performance tracking —
          making communication and progress monitoring seamless.
        </p>

        <h2 style={{ color: 'blue', fontSize: '1.5rem', marginTop: '30px', marginBottom: '14px', fontWeight: '600' }}>
          Why Choose Us?
        </h2>
        <ul style={{ fontSize: '1rem', lineHeight: '1.5', paddingLeft: '20px', color: '#444' }}>
          <li>Flexible booking system for free trial and regular sessions.</li>
          <li>Interactive ERP portal for lectures, schedules, and progress tracking.</li>
          <li>Comprehensive academic and skill-based courses tailored to students.</li>
          <li>Multi-channel support: phone, WhatsApp, email, Facebook, and LinkedIn.</li>
          <li>Secure, responsive platform accessible on all devices.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
