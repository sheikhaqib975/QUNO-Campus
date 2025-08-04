// About.tsx
import React from 'react';

function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-roboto text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-700">About Us</h1>

      <p className="text-base sm:text-lg mb-6">
        At <strong>QUNO CAMPUS</strong>, we believe that every student deserves education that is personalized, engaging, and accessible. Founded in 2023 by <strong>Muhammad Usman Ashfaq</strong>, QUNO CAMPUS was established with a vision to transform traditional learning into a modern, student-centric experience. As an innovative online educational platform, we specialize in one-on-one tutoring sessions tailored to students from diverse academic backgrounds — including GCSSC, IGCSE, AP, and more.
      </p>

      <p className="text-base sm:text-lg mb-6">
        Our mission is to empower students not only to excel academically but also to develop the practical skills necessary to thrive in today’s competitive world. Alongside academic tutoring, we offer skill-based courses such as computer programming in Python, C++, and more, preparing learners for future careers in technology and beyond.
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mt-10 mb-4">What Makes Us Different?</h2>

      <ul className="list-disc list-inside space-y-2 mb-6 text-base sm:text-lg">
        <li>24/7 free trial session booking to experience our unique teaching approach.</li>
        <li>Daily lectures to build consistent understanding.</li>
        <li>Weekly tests to monitor progress and reinforce learning.</li>
        <li>Monthly Parent-Teacher Meetings (PTMs) to ensure transparent communication.</li>
        <li>Automated feedback and progress reports shared regularly with parents.</li>
      </ul>

      <p className="text-base sm:text-lg mb-6">
        Through our dedicated <strong>ERP portal</strong>, students gain access to personalized schedules, lecture resources, academic planners, and progress tracking tools — ensuring a smooth and organized learning experience.
      </p>

      <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mt-10 mb-4">Our Commitment</h2>

      <p className="text-base sm:text-lg mb-6">
        We are committed to creating a supportive and inspiring educational environment that adapts to each learner’s pace and goals. Whether you're preparing for high-stakes exams or exploring programming skills, QUNO CAMPUS provides the tools, mentorship, and support to help you succeed.
      </p>

      <p className="text-lg sm:text-xl font-medium text-blue-800 mt-10 mb-2">
        📌 Join the QUNO CAMPUS Community
      </p>
      <p className="text-base sm:text-lg">
        Experience the future of learning — <strong>book your free trial session today</strong>, and start your journey toward academic success and personal growth with QUNO CAMPUS.
      </p>
    </div>
  );
}

export default About;
