'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import whatsapp from './assets/images/whatsapp.png';
import mathchild from './assets/images/mathchild.jpg';
import herochild from './assets/images/herochild.png';
import picture1 from './assets/images/picture1.jpg'; 
import picture2 from './assets/images/picture2.jpg'; 
import picture3 from './assets/images/picture3.jpg'; 
import picture4 from './assets/images/picture4.jpg';
import picture5 from './assets/images/picture5.jpg';

export default function Home() {
  const router = useRouter();

  const handleJoinFree = () => {
    router.push('/register');
  };

  const handleExploreCourses = () => {
    router.push('/courses');
  };

  const handleBookTrial = () => {
    router.push('/trial');
  };

  return (
    <>
    <div style={styles.container}>
      <style jsx>{`
        /* Global box-sizing fix */
        *, *::before, *::after {
          box-sizing: border-box;
        }
        
        /* Prevent horizontal overflow */
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }
        
        /* Mobile First Responsive Design */
        @media (max-width: 480px) {
          .heroSection, .heroSection2, .section {
            padding: 1rem 0.75rem !important;
            gap: 1.5rem !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            max-width: 100vw !important;
            overflow-x: hidden !important;
          }
          .heroLeft, .heroCenter, .heroRight, .left, .right, .left3, .right3 {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0.25rem !important;
            margin-top: 0 !important;
          }
          .imageContainer, .largeImg, .imgBoxRect, .imgBoxCircle {
            max-width: 280px !important;
            width: 100% !important;
            height: auto !important;
          }
          .card {
            max-width: 200px !important;
            margin: 0 auto !important;
          }
          .stats {
            flex-direction: column !important;
            gap: 1rem !important;
            align-items: center !important;
          }
          .statCard {
            min-width: 250px !important;
            width: 100% !important;
            max-width: 300px !important;
            justify-content: flex-start !important;
          }
          .coursesGrid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            padding: 0 !important;
          }
          .courseCard {
            min-height: unset !important;
            padding: 1rem !important;
          }
          .ctaButtons {
            flex-direction: column !important;
            width: 100% !important;
            align-items: center !important;
          }
          .primaryButton, .secondaryButton, .ctaButton2, .courseButton {
            width: 100% !important;
            max-width: 280px !important;
            text-align: center !important;
            padding: 0.75rem 1rem !important;
          }
          .headline, .headline2, .heading {
            font-size: 1.5rem !important;
            line-height: 1.3 !important;
            text-align: center !important;
          }
          .description, .description2, .desc {
            font-size: 0.95rem !important;
            text-align: center !important;
            margin-bottom: 1rem !important;
          }
          .whatsappFloat {
            right: 1rem !important;
            bottom: 1rem !important;
            width: 50px !important;
            height: 50px !important;
          }
          .imgRow {
            flex-direction: column !important;
            gap: 1rem !important;
            align-items: center !important;
          }
          .grid3 {
            grid-template-columns: 1fr !important;
            justify-items: center !important;
            gap: 1rem !important;
            width: 100% !important;
          }
          .featureBox {
            justify-content: center !important;
            width: 100% !important;
            max-width: 280px !important;
          }
          .right3 {
            align-items: center !important;
            text-align: center !important;
          }
          .heading, .desc {
            text-align: center !important;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .heroSection, .heroSection2, .section {
            padding: 1.5rem 1rem !important;
            gap: 2rem !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .heroLeft, .heroCenter, .heroRight, .left, .right, .left3, .right3 {
            width: 100% !important;
            max-width: 100% !important;
            padding: 0.5rem !important;
            margin-top: 0 !important;
          }
          .imageContainer, .largeImg, .imgBoxRect, .imgBoxCircle {
            max-width: 350px !important;
            width: 100% !important;
            height: auto !important;
          }
          .card {
            max-width: 220px !important;
            margin: 0 auto !important;
          }
          .stats {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            gap: 1.5rem !important;
            justify-content: center !important;
          }
          .statCard {
            min-width: 200px !important;
            flex: 1 1 300px !important;
            max-width: 320px !important;
          }
          .coursesGrid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
            gap: 1.5rem !important;
          }
          .ctaButtons {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 1rem !important;
          }
          .primaryButton, .secondaryButton {
            flex: 1 1 150px !important;
            min-width: 150px !important;
          }
          .imgRow {
            flex-direction: row !important;
            gap: 1.5rem !important;
            justify-content: center !important;
          }
          .grid3 {
            grid-template-columns: 1fr 1fr !important;
            gap: 1rem 1.5rem !important;
          }
          .right3 {
            align-items: center !important;
            text-align: center !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .heroSection {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            gap: 2rem !important;
            padding: 2rem 1.5rem !important;
            justify-content: center !important;
          }
          .heroSection2, .section {
            flex-direction: column !important;
            gap: 2.5rem !important;
            padding: 2rem 1.5rem !important;
            align-items: center !important;
          }
          .heroLeft, .heroCenter {
            flex: 1 1 300px !important;
            min-width: 300px !important;
          }
          .heroRight {
            flex: 0 1 200px !important;
            margin-top: 0 !important;
            align-items: center !important;
          }
          .left, .right, .left3, .right3 {
            width: 100% !important;
            max-width: 600px !important;
            text-align: center !important;
            align-items: center !important;
          }
          .stats {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            gap: 1.5rem !important;
            justify-content: center !important;
          }
          .statCard {
            flex: 1 1 220px !important;
            min-width: 220px !important;
            max-width: 280px !important;
          }
          .coursesGrid {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
          }
          .imgRow {
            justify-content: center !important;
          }
          .right3 {
            align-items: center !important;
            text-align: center !important;
          }
        }

        @media (min-width: 1025px) and (max-width: 1200px) {
          .heroSection {
            gap: 3rem !important;
            padding: 2.5rem 2rem !important;
          }
          .heroSection2, .section {
            gap: 3rem !important;
            padding: 2.5rem 2rem !important;
          }
          .stats {
            gap: 2rem !important;
            justify-content: center !important;
          }
          .statCard {
            min-width: 200px !important;
            flex: 1 1 240px !important;
          }
          .coursesGrid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)) !important;
          }
        }

        @media (min-width: 1201px) {
          .heroSection {
            flex-direction: row !important;
            gap: 4rem !important;
            padding: 3rem 2rem !important;
          }
          .heroSection2, .section {
            flex-direction: row !important;
            gap: 3rem !important;
            padding: 3rem 2rem !important;
          }
          .heroRight {
            margin-top: -8rem !important;
          }
          .stats {
            flex-direction: row !important;
            gap: 2rem !important;
            justify-content: center !important;
          }
          .statCard {
            min-width: 220px !important;
            flex: 0 1 auto !important;
          }
          .coursesGrid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
          }
          .right3 {
            align-items: flex-end !important;
            text-align: right !important;
          }
        }
      `}</style>
      <section style={styles.heroSection} className="heroSection">
        {/* Left Image */}
        <div style={styles.heroLeft} className="heroLeft">
          <div style={styles.imageContainer} className="imageContainer">
            <Image
              src={herochild}
              alt="Student with laptop"
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              style={{ 
                width: '100%', 
                height: 'auto',
                maxWidth: '400px',
                borderRadius: '20px',
                objectFit: 'cover',
                position: 'relative',
                zIndex: 1
              }}
              priority
            />
          </div>
        </div>

        {/* Center Content */}
        <div style={styles.heroCenter} className="heroCenter">
          <div style={styles.topText}>TRANSFORM YOUR ACADEMIC JOURNEY</div>
          <h1 style={styles.headline} className="headline">
            Elevate Your Success Unleash<br />
             Your Potential
          </h1>
          <p style={styles.description} className="description">
            Your Cloud campus provides online tutoring service where our
            exclusive full-time faculty and highly skilled tutors are passionately
            dedicated to student success and score elevation!!
          </p>
          <div style={styles.ctaButtons} className="ctaButtons">
            <button style={styles.primaryButton} className="primaryButton" onClick={handleJoinFree}>
              Join For Free
            </button>
            <button style={styles.secondaryButton} className="secondaryButton" onClick={handleExploreCourses}>
              Explore Courses
            </button>
          </div>
        </div>

        {/* Right Cards */}
        <div style={styles.heroRight} className="heroRight">
          <div style={styles.card} className="card">
            <Image
              src={mathchild}
              alt="Math Problem"
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 250px"
              style={{ 
                width: '100%', 
                height: 'auto',
                borderRadius: '12px 12px 0 0', 
                objectFit: 'cover'
              }}
            />
            <div style={styles.cardBody}>
              <h5 style={styles.cardTitle}>Mathematic Problems?</h5>
              <button style={styles.cardButton} onClick={handleBookTrial}>
                 Book Expert Teacher
              </button>
            </div>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/1234567890?text=Hi! I'm interested in your tutoring services."
          target="_blank"
          rel="noopener noreferrer"
          style={styles.whatsappFloat}
          className="whatsappFloat"
        >
          <Image
            src={whatsapp}
            alt="WhatsApp"
            width={60}
            height={60}
            style={{
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
            }}
          />
        </a>
      </section>
    </div>

 {/* Key Statistics Section */}
<section>
  <div style={styles.stats} className="stats">
    <div style={styles.statCard} className="statCard">
      <div style={styles.statIcon}>
        {/* Simple SVG icon */}
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="3" width="16" height="18" rx="2" stroke="#0ea5e9" strokeWidth="2" />
          <line x1="8" y1="7" x2="16" y2="7" stroke="#0ea5e9" strokeWidth="2" />
          <line x1="8" y1="11" x2="16" y2="11" stroke="#0ea5e9" strokeWidth="2" />
          <line x1="8" y1="15" x2="12" y2="15" stroke="#0ea5e9" strokeWidth="2" />
        </svg>
      </div>
      <div>
        <div style={styles.statNumber}>82k</div>
        <div style={styles.statLabel}><b>Students</b><br />Enrolled</div>
      </div>
    </div>
    <div style={styles.statCard} className="statCard">
      <div style={styles.statIcon}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="3" width="16" height="18" rx="2" stroke="#0ea5e9" strokeWidth="2" />
          <line x1="8" y1="7" x2="16" y2="7" stroke="#0ea5e9" strokeWidth="2" />
          <line x1="8" y1="11" x2="16" y2="11" stroke="#0ea5e9" strokeWidth="2" />
          <line x1="8" y1="15" x2="12" y2="15" stroke="#0ea5e9" strokeWidth="2" />
        </svg>
      </div>
      <div>
        <div style={styles.statNumber}>100k+</div>
        <div style={styles.statLabel}><b>Classes</b><br />Completed</div>
      </div>
    </div>
    <div style={styles.statCard} className="statCard">
      <div style={styles.statIcon}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="3" width="16" height="18" rx="2" stroke="#0ea5e9" strokeWidth="2" />
          <line x1="8" y1="7" x2="16" y2="7" stroke="#0ea5e9" strokeWidth="2" />
          <line x1="8" y1="11" x2="16" y2="11" stroke="#0ea5e9" strokeWidth="2" />
          <line x1="8" y1="15" x2="12" y2="15" stroke="#0ea5e9" strokeWidth="2" />
        </svg>
      </div>
      <div>
        <div style={styles.statNumber}>415</div>
        <div style={styles.statLabel}><b>Top</b><br />Instructors</div>
      </div>
    </div>
    <div style={styles.statCard} className="statCard">
      <div style={styles.statIcon}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="3" width="16" height="18" rx="2" stroke="#0ea5e9" strokeWidth="2" />
          <line x1="8" y1="7" x2="16" y2="7" stroke="#0ea5e9" strokeWidth="2" />
          <line x1="8" y1="11" x2="16" y2="11" stroke="#0ea5e9" strokeWidth="2" />
          <line x1="8" y1="15" x2="12" y2="15" stroke="#0ea5e9" strokeWidth="2" />
        </svg>
      </div>
      <div>
        <div style={styles.statNumber}>99.5%</div>
        <div style={styles.statLabel}><b>Satisfaction</b><br />Rate</div>
      </div>
    </div>
  </div>
</section>

{/* Hero Section 2 with Next.js Image */}
<section style={styles.heroSection2} className="heroSection2">
  {/* Left Side: Text */}
  <div style={styles.left} className="left">
    <h1 style={styles.headline2} className="headline2">
      Result-Oriented Online Tutoring Services!
    </h1>
    <p style={styles.description2} className="description2">
      Experience the utmost excellence in customized individualized online tutoring, tailored precisely to your specific needs and preferred learning style. Ensuring unparalleled learning outcomes and 100% student satisfaction guaranteed.
    </p>
    <button style={styles.ctaButton2} className="ctaButton2">
      Book Your Session Now
    </button>
  </div>

  {/* Right Side: Images */}
  <div style={styles.right} className="right">
    <div style={styles.grid}>
      <Image
        src={picture1}
        alt="Kids studying"
        width={180}
        height={120}
        style={styles.smallImg}
        className="smallImg"
      />
      <Image
        src={picture2}
        alt="Child at desk"
        width={180}
        height={120}
        style={styles.smallImg}
        className="smallImg"
      />
    </div>
    <Image
      src={picture3}
      alt="Girl outdoors"
      width={260}
      height={360}
      style={styles.largeImg}
      className="largeImg"
    />
  </div>
</section>

<section style={styles.section} className="section">
  <div style={styles.left3} className="left3">
    <div style={styles.imgRow} className="imgRow">
      <div style={styles.imgBoxRect} className="imgBoxRect">
        <Image
          src={picture4}
          alt="girl with books"
          width={260}
          height={340}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }}
        />
      </div>
      <div style={styles.imgBoxCircle} className="imgBoxCircle">
        <Image
          src={picture5}
          alt="Child with books"
          width={220}
          height={220}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
        />
      </div>
    </div>
  </div>
  <div style={styles.right3} className="right3">
    <h2 style={styles.heading} className="heading">
      Get assistance in all main online<br />courses — and many more
    </h2>
    <p style={styles.desc} className="desc">
      Our web- based tutoring packages are built to serve each student
      differently based on their learning style, needs and current struggles
      with academics.
    </p>
    <div style={styles.grid3} className="grid3">
      <div style={styles.featureBox} className="featureBox">
      <span style={styles.featureText}>Flexible Classes</span>
      </div>
      <div style={styles.featureBox} className="featureBox">
         <span style={styles.featureText}>Online Mode</span>
      </div>
      <div style={styles.featureBox} className="featureBox">
         <span style={styles.featureText}>Educator Support</span>
      </div>
      <div style={styles.featureBox} className="featureBox">
      <span style={styles.featureText}>Flexible Learning</span>
      </div>
    </div>
  </div>
</section>

     {/* Popular Courses Section */}
      <section style={styles.coursesSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Academic & Skill-Based Courses</h2>
          <p style={styles.sectionSubtitle}>
            Comprehensive range of academic subjects and practical skill development courses
          </p>
        </div>
        
        <div style={styles.coursesGrid} className="coursesGrid">
          <div style={styles.courseCard} className="courseCard">
            <div style={styles.courseIcon}>📊</div>
            <h3 style={styles.courseTitle}>GCSSC</h3>
            <p style={styles.courseStudents}>Comprehensive curriculum</p>
            <div style={styles.courseRating}>
              <span style={styles.star}>★</span>
              <span>All Subjects</span>
            </div>
            <button style={styles.courseButton} className="courseButton">Learn More</button>
          </div>
          
          <div style={styles.courseCard} className="courseCard">
            <div style={styles.courseIcon}>🌍</div>
            <h3 style={styles.courseTitle}>IGCSE</h3>
            <p style={styles.courseStudents}>International curriculum</p>
            <div style={styles.courseRating}>
              <span style={styles.star}>★</span>
              <span>All Subjects</span>
            </div>
            <button style={styles.courseButton} className="courseButton">Learn More</button>
          </div>
          
          <div style={styles.courseCard} className="courseCard">
            <div style={styles.courseIcon}>🎯</div>
            <h3 style={styles.courseTitle}>AP Courses</h3>
            <p style={styles.courseStudents}>Advanced placement</p>
            <div style={styles.courseRating}>
              <span style={styles.star}>★</span>
              <span>All Subjects</span>
            </div>
            <button style={styles.courseButton} className="courseButton">Learn More</button>
          </div>
          
          <div style={styles.courseCard} className="courseCard">
            <div style={styles.courseIcon}>💻</div>
            <h3 style={styles.courseTitle}>Python Programming</h3>
            <p style={styles.courseStudents}>Practical skills</p>
            <div style={styles.courseRating}>
              <span style={styles.star}>★</span>
              <span>Hands-on</span>
            </div>
            <button style={styles.courseButton} className="courseButton">Learn More</button>
          </div>
          
          <div style={styles.courseCard} className="courseCard">
            <div style={styles.courseIcon}>⚙️</div>
            <h3 style={styles.courseTitle}>C++ Programming</h3>
            <p style={styles.courseStudents}>Advanced coding</p>
            <div style={styles.courseRating}>
              <span style={styles.star}>★</span>
              <span>Hands-on</span>
            </div>
            <button style={styles.courseButton} className="courseButton">Learn More</button>
          </div>
          
          <div style={styles.courseCard} className="courseCard">
            <div style={styles.courseIcon}>📚</div>
            <h3 style={styles.courseTitle}>Mathematics</h3>
            <p style={styles.courseStudents}>All levels</p>
            <div style={styles.courseRating}>
              <span style={styles.star}>★</span>
              <span>Personalized</span>
            </div>
            <button style={styles.courseButton} className="courseButton">Learn More</button>
          </div>
          
          <div style={styles.courseCard} className="courseCard">
            <div style={styles.courseIcon}>🧪</div>
            <h3 style={styles.courseTitle}>Sciences</h3>
            <p style={styles.courseStudents}>Physics, Chemistry, Biology</p>
            <div style={styles.courseRating}>
              <span style={styles.star}>★</span>
              <span>Practical</span>
            </div>
            <button style={styles.courseButton} className="courseButton">Learn More</button>
          </div>
          
          <div style={styles.courseCard} className="courseCard">
            <div style={styles.courseIcon}>📝</div>
            <h3 style={styles.courseTitle}>English & Languages</h3>
            <p style={styles.courseStudents}>Communication skills</p>
            <div style={styles.courseRating}>
              <span style={styles.star}>★</span>
              <span>Interactive</span>
            </div>
            <button style={styles.courseButton} className="courseButton">Learn More</button>
          </div>
        </div>
      </section>
</>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    overflowX: 'hidden',
    fontFamily: 'Roboto, sans-serif',
    width: '100%',
    maxWidth: '100vw',
    margin: '0', 
    padding: '0',
    boxSizing: 'border-box',
  },

  heroSection: {
    padding: 'clamp(1.5rem, 5vw, 3rem) clamp(1.5rem, 8vw, 4rem)',
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 'min(1400px, 95vw)',
    margin: '0 auto',
    gap: 'clamp(2rem, 5vw, 4rem)',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  topText: {
    fontSize: 'clamp(0.75rem, 2vw, 1rem)',
    color: '#6b7280',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '0.5rem' ,
  },

  heroLeft: {
    flex: '1 1 350px',
    minWidth: '300px',
    maxWidth: '450px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 'clamp(0.5rem, 2vw, 1rem)',
  },

  heroCenter: {
    flex: '1 1 400px',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(1rem, 3vw, 1.5rem)',
    maxWidth: '500px',
    width: '100%',
    padding: 'clamp(1rem, 3vw, 2rem)',
  },

  heroRight: {
    flex: '0 1 200px',
    minWidth: '150px',
    maxWidth: '220px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 'clamp(-5rem, -10vw, -10rem)',
    width: '100%',
    padding: 'clamp(0.5rem, 2vw, 1rem)',
  },

  headline: {
    fontSize: 'clamp(2.25rem, 5vw, 3.25rem)',
    fontWeight: 800,
    color: '#1e40af',
    margin: 0,
    lineHeight: '1.3',
    whiteSpace: 'normal',
    letterSpacing: '-0.02em',
  },

  description: {
    fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
    color: '#374151',
    lineHeight: '1.6',
    margin: 0,
    whiteSpace: 'normal',
  },

  ctaButtons: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    marginTop: '1.5rem',
    flexWrap: 'wrap',
  },

  primaryButton: {
    backgroundColor: '#0ea5e9',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    whiteSpace: 'nowrap',
    textAlign: 'center',
  },

  secondaryButton: {
    backgroundColor: 'white',
    color: '#0ea5e9',
    border: '2px solid #0ea5e9',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
    textAlign: 'center',
  },

  card: {
    background: 'linear-gradient(135deg,rgb(233, 245, 71) 0%,rgb(252, 248, 4) 100%)',
    borderRadius: '16px',
    padding: 'clamp(1rem, 3vw, 1.5rem)',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '200px',
    textAlign: 'center',
  },

  cardBody: {
    padding: 'clamp(0.75rem, 2vw, 1rem)',
  },

  cardTitle: {
    fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)',
  },

  cardButton: {
    backgroundColor: '#1e3a8a',
    color: 'white',
    border: 'none',
    padding: 'clamp(0.4rem, 1.5vw, 0.6rem) clamp(0.75rem, 2vw, 1rem)',
    borderRadius: '6px',
    fontSize: 'clamp(0.6rem, 1.5vw, 0.7rem)',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.2rem',
    margin: '0 auto',
    transition: 'all 0.3s ease',
    width: '100%',
  },

  whatsappFloat: {
    position: 'fixed',
    bottom: 'clamp(1rem, 3vw, 2rem)',
    right: 'clamp(1rem, 3vw, 2rem)',
    zIndex: 1000,
    transition: 'transform 0.3s ease',
  },

  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '450px',
  },

  stats: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    marginTop: '0',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  statCard: {
    background: '#f8f9fb',
    borderRadius: '10px',
    padding: '2rem 2.5rem',
    minWidth: '220px',
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    boxShadow: '0 2px 12px rgba(30, 64, 175, 0.04)',
    margin: '0.5rem 0',
  },

  statIcon: {
    background: '#fff',
    borderRadius: '8px',
    padding: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 1px 4px rgba(30, 64, 175, 0.06)',
  },

  statNumber: {
    fontSize: '2.25rem',
    fontWeight: 700,
    color: '#22b573',
    margin: 0,
    fontFamily: 'Roboto, sans-serif',
    lineHeight: 1.1,
  },

  statLabel: {
    fontSize: '1.05rem',
    color: '#1e297b',
    marginTop: '0.25rem',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500,
    lineHeight: 1.2,
  },

  heroSection2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2.5rem',
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '3rem 2rem',
    flexWrap: 'wrap',
  },

  left: {
    flex: '1 1 480px',
    minWidth: '320px',
    maxWidth: '600px',
  },

  headline2: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#1e297b',
    marginBottom: '2rem',
    lineHeight: 1.2,
    fontFamily: 'Roboto, sans-serif',
  },

  description2: {
    fontSize: '1.15rem',
    color: '#374151',
    marginBottom: '2.5rem',
    fontFamily: 'Roboto, sans-serif',
    lineHeight: 1.6,
  },

  ctaButton2: {
    backgroundColor: 'yellow',
    color: 'black',
    fontWeight: 700,
    fontSize: '1.1rem',
    border: 'none',
    borderRadius: '6px',
    padding: '1rem 2.5rem',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(34,182,243,0.08)',
    fontFamily: 'Roboto, sans-serif',
    transition: 'background 0.2s',
  },

  right: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    alignItems: 'flex-start',
    flex: '1 1 400px',
    minWidth: '320px',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },

  grid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    minWidth: '180px',
    maxWidth: '180px',
  },

  largeImg: {
    width: '260px',
    height: '360px',
    objectFit: 'cover',
    borderRadius: '20px',
    background: '#eee',
    flexShrink: 0,
  },

  smallImg: {
    width: '180px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '16px',
    background: '#eee',
    flexShrink: 0,
  },

  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '3rem',
    background: 'linear-gradient(90deg, #fdfcf7 0%, #f9f8f3 100%)',
    padding: '3rem 2rem',
    borderRadius: '0 0 40px 40px',
    position: 'relative',
    minHeight: '480px',
    marginTop: '2rem',
    flexWrap: 'wrap',
  },

  left3: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 420px',
    minWidth: '320px',
  },

  imgRow: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    alignItems: 'center',
  },

  imgBoxRect: {
    width: '260px',
    height: '340px',
    borderRadius: '24px',
    overflow: 'hidden',
    background: '#eee',
    boxShadow: '0 4px 24px rgba(30,64,175,0.08)',
  },

  imgBoxCircle: {
    width: '220px',
    height: '220px',
    borderRadius: '50%',
    overflow: 'hidden',
    background: '#eee',
    boxShadow: '0 4px 24px rgba(30,64,175,0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  right3: {
    flex: '1 1 480px',
    minWidth: '340px',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '2rem',
    alignItems: 'flex-end',
    textAlign: 'right',
  },

  heading: {
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#1e297b',
    marginBottom: 0,
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'right',
  },

  desc: {
    fontSize: '1.15rem',
    color: '#374151',
    marginBottom: '1.5rem',
    fontFamily: 'Roboto, sans-serif',
    lineHeight: 1.6,
    maxWidth: '500px',
    marginLeft: 0,
    textAlign: 'right',
  },

  grid3: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.2rem 2.5rem',
    maxWidth: '420px',
  },

  featureBox: {
    display: 'flex',
    alignItems: 'center',
    background: '#f6fafd',
    borderRadius: '12px',
    padding: '0.85rem 1.2rem',
    fontWeight: 600,
    fontSize: '1.08rem',
    color: '#1e297b',
    boxShadow: '0 1px 6px rgba(30,64,175,0.04)',
    gap: '0.7rem',
  },

  check: {
    color: '#22b573',
    fontWeight: 900,
    fontSize: '1.25rem',
  },

  featureText: {
    color: '#1e297b',
    fontWeight: 600,
  },

  sectionHeader: {
    textAlign: 'center',
    marginBottom: '3rem',
  },

  sectionTitle: {
    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '1rem',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
  },

  sectionSubtitle: {
    fontSize: '1.1rem',
    color: '#64748b',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Roboto, sans-serif',
  },

  stepsContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 'clamp(1rem, 3vw, 2rem)',
  },

  step: {
    textAlign: 'center',
    padding: '2rem',
  },

  stepNumber: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#0000FF',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0 auto 1.5rem auto',
  },

  stepTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '1rem',
    fontFamily: 'Roboto, sans-serif',
  },

  stepDescription: {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: '1.6',
    fontFamily: 'Roboto, sans-serif',
  },

  coursesSection: {
    padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)',
    backgroundColor: 'white',
  },

  coursesGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 'clamp(1rem, 3vw, 2rem)',
    padding: '0 clamp(0.5rem, 2vw, 1rem)',
  },

  courseCard: {
    backgroundColor: 'white',
    padding: 'clamp(1.5rem, 3vw, 2rem)',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between',
  },

  courseIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },

  courseTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '0.5rem',
    fontFamily: 'Roboto, sans-serif',
  },

  courseStudents: {
    fontSize: '0.9rem',
    color: '#64748b',
    marginBottom: '0.5rem',
    fontFamily: 'Roboto, sans-serif',
  },

  courseRating: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem',
    marginBottom: '1rem',
    fontSize: '0.9rem',
    color: '#64748b',
    fontFamily: 'Roboto, sans-serif',
  },

  star: {
    color: '#fbbf24',
  },

  courseButton: {
    backgroundColor: 'transparent',
    color: '#1e3a8a',
    border: '1px solid #1e3a8a',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'Roboto, sans-serif',
  },
};