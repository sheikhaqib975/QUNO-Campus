'use client';

import Link from 'next/link';
import React from 'react';

const Courses = () => {
  return (
    <section style={styles.coursesSection}>
      <div style={styles.header}>
        <h1 style={styles.mainTitle}>Our Courses</h1>
        <p style={styles.subtitle}>Choose from our comprehensive range of courses designed to help you achieve your goals</p>
      </div>
      
      <div style={styles.coursesGrid}>
        {courseList.map((course, index) => (
          <div key={index} style={styles.courseCard}>
            <div style={styles.imageWrapper}>
              <img src={course.image} alt={course.title} style={styles.image} />
              <div style={styles.overlay}>
                <span style={styles.level}>{course.level}</span>
              </div>
            </div>
            
            <div style={styles.cardContent}>
              <h3 style={styles.courseTitle}>{course.title}</h3>
              <p style={styles.courseSubtitle}>{course.subtitle}</p>
              
              <div style={styles.courseInfo}>
                <div style={styles.infoItem}>
                <img src="/images/student.png" alt="student" style={styles.icon} />

                  {/* <span>{course.students} students</span> */}
                </div>
                <div style={styles.courseRating}>
                  <span style={styles.star}>★</span>
                  <span>{course.rating}</span>
                </div>
              </div>
              
              <div style={styles.courseFeatures}>
                <span style={styles.feature}>{course.duration}</span>
                {/* <span style={styles.feature}>{course.tagline}</span> */}
              </div>
              
              <div style={styles.cardFooter}>
                {/* <span style={styles.price}>{course.price}</span> */}
                <Link href={`/courses/${course.slug}`} style={{ textDecoration: 'none' }}>
                  <button 
                    style={styles.courseButton}
                    // onMouseOver={(e) => {
                    //   e.currentTarget.style.backgroundColor = '#1e3a8a';
                    //   e.currentTarget.style.color = 'white';
                    // }}
                    // onMouseOut={(e) => {
                    //   e.currentTarget.style.backgroundColor = 'transparent';
                    //   e.currentTarget.style.color = '#1e3a8a';
                    // }}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const courseList = [
 {
    title: 'Physics',
    subtitle: 'Fundamental physics concepts',
    // tagline: 'Interactive',
    image: '/images/phy2.jpg',
    slug: 'physics',
    // students: '456',
    rating: '4.7',
    duration: '16 weeks',
    level: 'High School',
    //price: 'PKR 24,000'
  },
  {
    title: 'Quran Pak',
    subtitle: 'Memorization with Tajweed',
    // tagline: 'Personalized',
    image: '/images/quran2.jpg',
    slug: 'quran-pak',
    // students: '2,150',
    rating: '4.9',
    duration: 'Flexible',
    level: 'All Levels',
    //price: 'PKR 12,000'
  },
  {
    title: 'Chemistry',
    subtitle: 'Chemical principles and reactions',
    // tagline: 'All Subjects',
    image: '/images/chemistry.jpg',
    slug: 'chemistry',
    // students: '567',
    rating: '4.6',
    duration: '10 weeks',
    level: 'Intermediate',
   // price: 'PKR 22,000'
  },
  {
    title: 'English & Languages',
    subtitle: 'Communication and fluency',
    // tagline: 'Interactive',
    image: '/images/eng.jpg',
    slug: 'english-languages',
    // students: '1,456',
    rating: '4.6',
    duration: '12 weeks',
    level: 'All Levels',
   // price: 'PKR 15,000'
  },
  {
    title: 'Biology',
    subtitle: 'Life sciences and research',
    // tagline: 'Interactive',
    image: '/images/bio.jpg',
    slug: 'bio',
    // students: '534',
    rating: '4.7',
    duration: '12 weeks',
    level: 'High School',
   // price: 'PKR 16,000'
  },
  {
    title: 'Calculus',
    subtitle: 'Advanced mathematical concepts',
    // tagline: 'Interactive',
    image: '/images/calculus.jpg',
    slug: 'calculus',
    // students: '423',
    rating: '4.6',
    duration: '14 weeks',
    level: 'Advanced',
   // price: 'PKR 18,000'
  },
  {
    title: 'Accounting',
    subtitle: 'Financial principles and analysis',
    // tagline: 'Interactive',
    image: '/images/accounting.jpg',
    slug: 'accounting',
    // students: '678',
    rating: '4.5',
    duration: '10 weeks',
    level: 'Beginner',
    //price: 'PKR 20,000'
  },
  {
    title: 'Economics',
    subtitle: 'Economic principles and analysis',
    // tagline: 'Interactive',
    image: '/images/economics.jpg',
    slug: 'economics',
    // students: '367',
    rating: '4.5',
    duration: '12 weeks',
    level: 'Intermediate',
    //price: 'PKR 22,000'
  },
  
  {
    title: 'Statistics',
    subtitle: 'Data analysis and interpretation',
    // tagline: 'Interactive',
    image: '/images/stats.jpg',
    slug: 'statistics',
    // students: '612',
    rating: '4.6',
    duration: '10 weeks',
    level: 'Intermediate',
   // price: 'PKR 26,000'
  },
   {
    title: 'Geometry',
    subtitle: 'Shapes and spatial understanding',
    // tagline: 'All Subjects',
    image: '/images/geo.jpg',
    slug: 'geometry',
    // students: '567',
    rating: '4.6',
    duration: '10 weeks',
    level: 'Intermediate',
   // price: 'PKR 22,000'
  },
  {
    title: 'Environmental Science',
    subtitle: 'Sustainability and ecology',
    // tagline: 'All Subjects',
    image: '/images/escience.jpg',
    slug: 'environmental-science  ',
    // students: '567',
    rating: '4.6',
    duration: '10 weeks',
    level: 'Intermediate',
   // price: 'PKR 22,000'
  },
  {
    title: 'Algebra',
    subtitle: 'Mathematical problem solving',
    // tagline: 'All Subjects',
    image: '/images/algebra.jpg',
    slug: 'algebra',
    // students: '567',
    rating: '4.6',
    duration: '10 weeks',
    level: 'Intermediate',
   // price: 'PKR 22,000'
  },
   {
    title: 'MS Office',
    subtitle: 'Productivity and office tools',
    // tagline: 'Interactive',
    image: '/images/office.jpg',
    slug: 'ms-office',
    // students: '1,789',
    rating: '4.4',
    duration: '6 weeks',
    level: 'Beginner',
   // price: 'PKR 12,000'
  },
  {
    title: 'Graphic Designing',
    subtitle: 'Creative design with industry tools',
    // tagline: 'All Subjects',
    image: '/images/graphic.jpg',
    slug: 'graphic-designing',
    // students: '890',
    rating: '4.7',
    duration: '12 weeks',
    level: 'Beginner',
    //price: 'PKR 28,000'
  },
  {
    title: 'AutoCAD',
    subtitle: '2D/3D design and modeling',
    // tagline: 'All Subjects',
    image: '/images/autocad.jpg',
    slug: 'autocad',
    // students: '567',
    rating: '4.6',
    duration: '10 weeks',
    level: 'Intermediate',
   // price: 'PKR 22,000'
  },
  // {
  //   title: 'Design and Development',
  //   subtitle: 'Full-stack web development',
  //   // tagline: 'Hands-on',
  //   image: '/images/dd.jpg',
  //   slug: 'design-and-development',
  //   // students: '723',
  //   rating: '4.9',
  //   duration: '20 weeks',
  //   level: 'Intermediate',
  //   //price: 'PKR 55,000'
  // },
  {
    title: 'Basic Networking',
    subtitle: 'Network fundamentals and setup',
    // tagline: 'Hands-on',
    image: '/images/networking.jpg',
    slug: 'basic-networking',
    // students: '445',
    rating: '4.5',
    duration: '8 weeks',
    level: 'Beginner',
   // price: 'PKR 18,000'
  },
  
  {
    title: 'Web Development .NET',
    subtitle: 'ASP.NET and C# development',
    // tagline: 'Practical',
    image: '/images/dd.jpg',
    slug: 'web-development-dotnet',
    // students: '634',
    rating: '4.7',
    duration: '16 weeks',
    level: 'Intermediate',
   // price: 'PKR 42,000'
  },
  
  {
    title: 'C++',
    subtitle: 'Programming and OOP concepts',
    // tagline: 'Interactive',
    image: '/images/c.jpg',
    slug: 'cpp',
    // students: '892',
    rating: '4.8',
    duration: '14 weeks',
    level: 'Beginner',
    //price: 'PKR 25,000'
  },
  
  
   {
    title: 'Artificial Intelligence',
    subtitle: 'Master AI, ML, and Deep Learning',
    // tagline: 'All Subjects',
    image: '/images/ai.jpg',
    slug: 'artificial-intelligence',
    // students: '1,250',
    rating: '4.8',
    duration: '16 weeks',
    level: 'Advanced',
   // price: 'PKR 45,000'
  },
  {
    title: 'PHP',
    subtitle: 'Server side scripting',
    // tagline: 'Interactive',
    image: '/images/php.jpg',
    slug: 'artificial-intelligence',
    // students: '1,200',
    rating: '4.6',
    duration: '8 weeks',
    level: 'Advanced',
   // price: 'PKR 45,000'
  },
  {
    title: 'Flutter',
    subtitle: 'Master AI, ML, and Deep Learning',
    // tagline: 'All Subjects',
    image: '/images/flutter.jpg',
    slug: 'artificial-intelligence',
    // students: '1,250',
    rating: '4.8',
    duration: '16 weeks',
    level: 'Advanced',
   // price: 'PKR 45,000'
  },

];

const styles: { [key: string]: React.CSSProperties } = {
  coursesSection: {
    padding: 'clamp(2rem, 4vw, 4rem) clamp(1rem, 3vw, 2rem)',
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  mainTitle: {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '1rem',
    fontFamily: 'Roboto, sans-serif',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 3vw, 1.2rem)',
    color: '#64748b',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  coursesGrid: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: 'clamp(1.5rem, 3vw, 2rem)',
    padding: '0 clamp(0.5rem, 2vw, 1rem)',
  },
  courseCard: {
  backgroundColor: 'white',
  borderRadius: '16px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  position: 'relative',
},

imageWrapper: {
  position: 'relative',
  width: '100%',
  height: '200px',
  overflow: 'hidden',
},

image: {
  width: '100%',           // ✅ fills width of container
  height: '100%',          // ✅ fills height of container
  objectFit: 'cover',      // ✅ crops if needed, no empty space
  display: 'block',        // ✅ removes inline-gap
  margin: 0,               // ✅ no margin
  padding: 0,              // ✅ no padding
  backgroundColor: '#f8f8f8' // optional background
},

  overlay: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
  },
  level: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#1e293b',
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  cardContent: {
    padding: '1.5rem',
  },
  courseTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '0.5rem',
    fontFamily: 'Roboto, sans-serif',
    lineHeight: '1.3',
  },
  courseSubtitle: {
    fontSize: '0.95rem',
    color: '#64748b',
    marginBottom: '1rem',
    fontFamily: 'Roboto, sans-serif',
    lineHeight: '1.4',
  },
  courseInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    fontSize: '0.85rem',
    color: '#64748b',
  },
  icon: {
  width: '20px',
  height: '20px',
    
},

  courseRating: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    fontSize: '0.85rem',
    color: '#64748b',
    fontFamily: 'Roboto, sans-serif',
  },
  star: {
    color: '#fbbf24',
    fontSize: '1rem',
  },
  courseFeatures: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
  },
  feature: {
    backgroundColor: '#e2e8f0',
    color: '#475569',
    padding: '0.3rem 0.6rem',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: '500',
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    borderTop: '1px solid #e2e8f0',
  },
  price: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#059669',
  },
  courseButton: {
    backgroundColor: 'yellow',
    color: 'black',
    border: '2px solid #000000ff',
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'Roboto, sans-serif',
    
  },
};

export default Courses;