'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleBookTrial = () => {
    router.push('/trial');
  };
  const handleexplorecourses = () => {
    router.push('/courses');
  };
  

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <div style={styles.heroLeft}>
            <h1 style={styles.headline}>
              Excel in Your Studies with{' '}
              <span style={styles.highlight}>One-on-One </span>
               Tutoring
            </h1>
            <div>
              <p style={styles.description}>
                Founded in 2023 by Muhammad Usman Ashfaq, QUNO CAMPUS combines academic excellence
                with modern technology to create an engaging learning environment. Our platform supports students 24/7,
                offering free trial sessions anytime, daily lectures, weekly tests, and monthly parent-teacher meetings (PTMs).
                Feedback and progress reports ensure transparent communication with parents.
              </p>
            </div>
            <div style={styles.ctaButtons}>
              <button style={styles.primaryButton} onClick={handleBookTrial}>
                Book Free Trial
                <span style={styles.arrow}></span>
              </button>
             
              <button style={styles.primaryButton} onClick={handleexplorecourses}>
                Explore Courses
                <span style={styles.arrow}></span>
              </button>
            </div>
          </div>

          <div style={styles.heroImage}>
            <img
              src="/images/herochild.png"
              alt="Hero Image"
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '16px'
              }}
            />
          </div>
        </div>
      </section> 

      {/* Key Statistics Section */}
      <section>
        <div style={styles.stats} className="stats">
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
              <div style={styles.statNumber}>600+</div>
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
              <div style={styles.statNumber}>350+</div>
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
              <div style={styles.statNumber}>40</div>
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
              <div style={styles.statNumber}>98.5%</div>
              <div style={styles.statLabel}><b>Satisfaction</b><br />Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={styles.howItWorksSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>How QUNO CAMPUS Works</h2>
          <p style={styles.sectionSubtitle}>
            Experience our comprehensive learning platform with personalized support and continuous assessment
          </p>
        </div>
        
        <div style={styles.stepsContainer}>
          <div style={styles.step}>
            <div style={styles.stepNumber}>1</div>
            <h3 style={styles.stepTitle}>Book Free Trial Session</h3>
            <p style={styles.stepDescription}>
              Schedule a free trial session anytime, 24/7, to experience our teaching methodology before enrolling.
            </p>
          </div>
          
          <div style={styles.step}>
            <div style={styles.stepNumber}>2</div>
            <h3 style={styles.stepTitle}>Get ERP Portal Access</h3>
            <p style={styles.stepDescription}>
              Receive unique credentials to access our ERP portal with lectures, schedules, and study materials.
            </p>
          </div>
          
          <div style={styles.step}>
            <div style={styles.stepNumber}>3</div>
            <h3 style={styles.stepTitle}>Track Progress & Attend PTMs</h3>
            <p style={styles.stepDescription}>
              Monitor progress through weekly tests and monthly parent-teacher meetings for transparent communication.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.coursesSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Academic & Skill-Based Courses</h2>
          <p style={styles.sectionSubtitle}>
            Comprehensive range of academic subjects and practical skill development courses
          </p>
        </div>

        <div style={styles.coursesGrid}>
          <div style={styles.courseCard}>
            <div style={styles.courseImageContainer}>
              <img
                src="/images/aicourse.png"
                alt="Artificial Intelligence Course"
                style={styles.courseImage}
              />
            </div>
            <h3 style={styles.courseTitle}>Artificial Intelligence</h3>
            <p style={styles.courseStudents}>Comprehensive curriculum</p>
            <div style={styles.courseRating}>
              <span style={styles.star}>★★★★★</span>
              {/* <span>All Subjects</span> */}
            </div>
            {/* <button style={styles.courseButton} >Learn More</button> */}
          </div>

          <div style={styles.courseCard}>
            <div style={styles.courseImageContainer}>
              <img
                src="/images/graphicdesigning.png"
                alt="Graphic designing Course"
                style={styles.courseImage}
              />
            </div>
            <h3 style={styles.courseTitle}>Graphic Designing</h3>
            <p style={styles.courseStudents}>International curriculum</p>
            <div style={styles.courseRating}>
              <span style={styles.star}>★★★★★</span>
              {/* <span>All Subjects</span> */}
            </div>
            {/* <button style={styles.courseButton}>Learn More</button> */}
          </div>

          <div style={styles.courseCard}>
            <div style={styles.courseImageContainer}>
              <img
                src="/images/autocad.png"
                alt="AutoCad Course"
                style={styles.courseImage}
              />
            </div>
            <h3 style={styles.courseTitle}>AutoCad</h3>
            <p style={styles.courseStudents}>Advanced placement</p>
            <div style={styles.courseRating}>
              <span style={styles.star}>★★★★</span>
              {/* <span>All Subjects</span> */}
            </div>
            {/* <button style={styles.courseButton}>Learn More</button> */}
          </div>

          {/* <div style={styles.courseCard}>
            <div style={styles.courseImageContainer}>
              <img
                src="/images/dd.png"
                alt="Design and Development Course"
                style={styles.courseImage}
              />
            </div>
            <h3 style={styles.courseTitle}>Design and Development</h3>
            <p style={styles.courseStudents}>Practical skills</p>
            <div style={styles.courseRating}>
              <span style={styles.star}>★★★★</span>
              <span>Hands-on</span>
            </div>
            <button style={styles.courseButton}>Learn More</button>
          </div> */}

          {/* <div style={styles.courseCard}>
            <div style={styles.courseImageContainer}>
              <img
                src="/images/networking.png"
                alt="Basic Networking Course"
                style={styles.courseImage}
              />
            </div>
            <h3 style={styles.courseTitle}>Basic Networking</h3>
            <p style={styles.courseStudents}>Advanced coding</p>
            <div style={styles.courseRating}>
              <span style={styles.star}>★★★★★</span>
              <span>Hands-on</span>
            </div>
            <button style={styles.courseButton}>Learn More</button>
          </div> */}

          <div style={styles.courseCard}>
            <div style={styles.courseImageContainer}>
              <img
                src="/images/quran.png"
                alt="Quran"
                style={styles.courseImage}
              />
            </div>
            <h3 style={styles.courseTitle}>Quran Pak</h3>
            <p style={styles.courseStudents}>All levels</p>
            <div style={styles.courseRating}>
              <span style={styles.star}>★★★★</span>
              {/* <span>Personalized</span> */}
            </div>
            {/* <button style={styles.courseButton}>Learn More</button> */}
          </div>

          {/* <div style={styles.courseCard}>
            <div style={styles.courseImageContainer}>
              <img
                src="/images/web.png"
                alt="Web Development .NET Course"
                style={styles.courseImage}
              />
            </div>
            <h3 style={styles.courseTitle}>Web Development .NET</h3>
            <p style={styles.courseStudents}>Physics, Chemistry, Biology</p>
            <div style={styles.courseRating}>
              <span style={styles.star}>★★★★★</span>
              <span>Practical</span>
            </div>
            <button style={styles.courseButton}>Learn More</button>
          </div> */}
{/* 
          <div style={styles.courseCard}>
            <div style={styles.courseImageContainer}>
              <img
                src="/images/eng.png"
                alt="English Course"
                style={styles.courseImage}
              />
            </div>
            <h3 style={styles.courseTitle}>English & Languages</h3>
            <p style={styles.courseStudents}>Communication skills</p>
            <div style={styles.courseRating}>
              <span style={styles.star}>★★★★</span>
              <span>Interactive</span>
            </div>
            <button style={styles.courseButton}>Learn More</button>
          </div> */}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <button
            style={styles.viewAllButton}
            onClick={() => router.push('/courses')}
          >
            View All Courses
            <span style={styles.arrow}>➔</span>
          </button>
        </div>
      </section>

      {/* Our Tutoring Services Section */}
      <section style={styles.servicesSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Our Comprehensive Services</h2>
          <p style={styles.sectionSubtitle}>
            From academic tutoring to skill development with continuous assessment and support
          </p>
        </div>
        
        <div style={styles.servicesGrid}>
          <div style={styles.serviceCard}>
            <img src="/images/academic.png" alt="academic tutor" style={styles.serviceIcon}/>
            <h3 style={styles.serviceTitle}>Academic Tutoring</h3>
            <p style={styles.serviceDescription}>
              One-on-one online tutoring for all curricula including GCSSC, IGCSE, AP, and others with personalized attention.
            </p>
            <ul style={styles.serviceFeatures}>
              <li style={styles.serviceFeatureItem}>✓ All curricula covered</li>
              <li style={styles.serviceFeatureItem}>✓ Personalized sessions</li>
              <li style={styles.serviceFeatureItem}>✓ Exam preparation</li>
            </ul>
          </div>
          
          <div style={styles.serviceCard}>
        <img src="/images/courses.png" alt="skill based courses " style={styles.serviceIcon}/>
            <h3 style={styles.serviceTitle}>Skill-Based Courses</h3>
            <p style={styles.serviceDescription}>
              Practical skill development courses including programming languages such as Python, C++, and more.
            </p>
            <ul style={styles.serviceFeatures}>
              <li style={styles.serviceFeatureItem}>✓ Python programming</li>
              <li style={styles.serviceFeatureItem}>✓ C++ development</li>
              <li style={styles.serviceFeatureItem}>✓ Hands-on learning</li>
            </ul>
          </div>
          
          <div style={styles.serviceCard}>
          <img src="/images/erp.png" alt="ERP" style={styles.serviceIcon}/>
            <h3 style={styles.serviceTitle}>ERP Portal & Assessment</h3>
            <p style={styles.serviceDescription}>
              Unique credentials for ERP portal access with daily lectures, weekly tests, and monthly PTMs.
            </p>
            <ul style={styles.serviceFeatures}>
              <li style={styles.serviceFeatureItem}>✓ Daily lectures</li>
              <li style={styles.serviceFeatureItem}>✓ Weekly tests</li>
              <li style={styles.serviceFeatureItem}>✓ Monthly PTMs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose QUNO CAMPUS Section */}
      <section style={styles.whyChooseSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Why Choose QUNO CAMPUS?</h2>
          <p style={styles.sectionSubtitle}>
            Experience the difference with our comprehensive learning platform
          </p>
        </div>
        
        <div style={styles.whyChooseGrid}>
          <div style={styles.whyChooseItem}>
            <img
              src="/images/tutor.png"
              alt="Certified Tutors"
              width="100"
              height="100"
            />
            <h3 style={styles.whyChooseTitle}>Certified Tutors </h3>
            <p style={styles.whyChooseDescription}>
              Qualified professionals with proven track record and teaching certifications.
            </p>
          </div>
          
          <div style={styles.whyChooseItem}>
            <img
              src="/images/support.png"
              alt="24/7 Support"
              width="100"
              height="100"
            />
            <h3 style={styles.whyChooseTitle}>24/7 Support Available</h3>
            <p style={styles.whyChooseDescription}>
              Get help whenever you need it with our flexible scheduling system.
            </p>
          </div>
          
          <div style={styles.whyChooseItem}>
            <img
              src="/images/result.png"
              alt="Results"
              width="100"
              height="100"
            />
            <h3 style={styles.whyChooseTitle}>Proven Result</h3>
            <p style={styles.whyChooseDescription}>
              97% of our students see grade improvement within the first month.
            </p>
          </div>
          
          <div style={styles.whyChooseItem}>
            <img
              src="/images/moneyback.png"
              alt="Money Back Guarantee"
              width="100"
              height="100"
            />
            <h3 style={styles.whyChooseTitle}>Money-Back Guarantee</h3>
            <p style={styles.whyChooseDescription}>
              Not satisfied ? Get your money back within 30 days , no questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonialsSection}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>What Our Students Say</h2>
          <p style={styles.sectionSubtitle}>
            Real success stories from students who transformed their academic journey
          </p>
        </div>
        
        <div style={styles.testimonialsGrid}>
          <div style={styles.testimonialCard}>
            <div style={styles.starRating}>★★★★★</div>
            <p style={styles.testimonialText}>
              "The ERP portal access and weekly tests helped me track my progress effectively. The monthly PTMs keep my parents well-informed about my academic journey."
            </p>
            <div style={styles.testimonialAuthor}>
              <strong style={styles.authorName}>Aisha Khan</strong>
              <span style={styles.authorInfo}>IGCSE Student - All Subjects</span>
            </div>
          </div>
          
          <div style={styles.testimonialCard}>
            <div style={styles.starRating}>★★★★★</div>
            <p style={styles.testimonialText}>
              "The Python and C++ programming courses at QUNO CAMPUS are excellent. The hands-on learning approach prepared me for modern career demands."
            </p>
            <div style={styles.testimonialAuthor}>
              <strong style={styles.authorName}>Ahmed Hassan</strong>
              <span style={styles.authorInfo}>AP Student - Computer Science</span>
            </div>
          </div>
          
          <div style={styles.testimonialCard}>
            <div style={styles.starRating}>★★★★★</div>
            <p style={styles.testimonialText}>
              "The free trial session convinced me to enroll. The 24/7 support and multichannel communication make learning accessible anytime."
            </p>
            <div style={styles.testimonialAuthor}>
              <strong style={styles.authorName}>Fatima Ali</strong>
              <span style={styles.authorInfo}>GCSSC Student - Sciences</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    overflowX: 'hidden',
    fontFamily: 'Roboto, sans-serif',
  },

  heroSection: {
    padding: 'clamp(1rem, 4vw, 2rem) clamp(0.5rem, 2vw, 1rem)',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'clamp(1rem, 3vw, 2rem)',
    alignItems: 'center',
    padding: '0 clamp(0.5rem, 2vw, 1rem)',
  },
  heroLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  heroImage: {
    flex: '1 1 40%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  headline: {
    fontSize: 'clamp(2rem, 5vw, 2.5rem)',
    fontWeight: 'bold',
    color: '#1e293b',
    lineHeight: '1.1',
    margin: 0,
    textAlign: 'left',
    fontFamily: 'Roboto, sans-serif',
  },
  highlight: {
    color: '#0000FF',
  },
  description: {
    fontSize: '1.1rem',
    color: '#64748b',
    lineHeight: '1.6',
    margin: 0,
    textAlign: 'left',
    fontFamily: 'Roboto, sans-serif',
  },
  ctaButtons: {
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  primaryButton: {
    backgroundColor: 'yellow',
    color: 'black',
    border: '2px solid black',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(30, 58, 138, 0.25)',
    fontFamily: 'Roboto, sans-serif',
  },
  arrow: {
    fontSize: '1.2rem',
  },

  stats: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    marginTop: '0',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '2rem 1rem',
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
    color: 'blue',
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

  // How It Works Section
  howItWorksSection: {
    padding: 'clamp(1rem, 4vw, 2rem) clamp(0.5rem, 2vw, 1rem)',
    backgroundColor: '#f8fafc',
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

  // Courses Section
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
    minHeight: '350px',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between',
  },
  courseImageContainer: {
    width: '100%',
    height: '150px',
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover' as const,
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

  viewAllButton: {
    backgroundColor: 'yellow',  
    color: 'black',
    padding: '12px 24px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    border:'2px solid black',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  
  // Services Section
  servicesSection: {
    padding: 'clamp(1rem, 4vw, 2rem) clamp(0.5rem, 2vw, 1rem)',
    backgroundColor: '#f8fafc',
  },
  servicesGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 'clamp(1rem, 3vw, 2rem)',
  },
  serviceCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  serviceIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  serviceTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '1rem',
    fontFamily: 'Roboto, sans-serif',
  },
  serviceDescription: {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    fontFamily: 'Roboto, sans-serif',
  },
  serviceFeatures: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  serviceFeatureItem: {
    fontSize: '0.9rem',
    color: '#64748b',
    marginBottom: '0.5rem',
    fontFamily: 'Roboto, sans-serif',
  },
  
  // Why Choose Section
  whyChooseSection: {
    padding: 'clamp(1rem, 4vw, 2rem) clamp(0.5rem, 2vw, 1rem)',
    backgroundColor: 'white',
  },
  whyChooseGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 'clamp(1rem, 3vw, 2rem)',
  },
  whyChooseItem: {
    textAlign: 'center',
    padding: '2rem',
  },
  whyChooseTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '1rem',
    fontFamily: 'Roboto, sans-serif',
  },
  whyChooseDescription: {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: '1.6',
    fontFamily: 'Roboto, sans-serif',
  },
  
  // Testimonials Section
  testimonialsSection: {
    padding: 'clamp(1rem, 4vw, 2rem) clamp(0.5rem, 2vw, 1rem)',
    backgroundColor: '#f8fafc',
  },
  testimonialsGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 'clamp(1rem, 3vw, 2rem)',
  },
  testimonialCard: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  starRating: {
    color: '#fbbf24',
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
  testimonialText: {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    fontStyle: 'italic',
    fontFamily: 'Roboto, sans-serif',
  },
  testimonialAuthor: {
    display: 'flex',
    flexDirection: 'column',
  },
  authorName: {
    color: '#1e293b',
    fontSize: '1.1rem',
    fontFamily: 'Roboto, sans-serif',
  },
  authorInfo: {
    color: '#64748b',
    fontSize: '0.9rem',
    fontFamily: 'Roboto, sans-serif',
  },
};
