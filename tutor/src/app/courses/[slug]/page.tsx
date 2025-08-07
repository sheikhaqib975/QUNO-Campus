'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

interface CourseDetail {
  title: string;
  description: string;
  duration: string;
  level: string;
  prerequisites: string[];
  curriculum: string[];
  skills: string[];
  career: string[];
  instructor: string;
  price: string;
  students: number;
  rating: number;
  image: string;
}

const courseDetails: Record<string, CourseDetail> = {
  'artificial-intelligence': {
    title: 'Artificial Intelligence',
    description: 'Comprehensive AI course covering machine learning, deep learning, and intelligent systems. Learn how AI is transforming industries with real-world applications and hands-on projects.',
    duration: '16 weeks',
    level: 'Intermediate to Advanced',
    prerequisites: ['Basic Python Programming', 'Mathematics (Linear Algebra, Statistics)', 'Computer Science Fundamentals'],
    curriculum: [
      'Introduction to AI and Machine Learning',
      'Python for AI Development',
      'Supervised Learning Algorithms',
      'Unsupervised Learning and Clustering',
      'Deep Learning and Neural Networks',
      'Natural Language Processing',
      'Computer Vision',
      'Reinforcement Learning',
      'AI Ethics and Future Trends',
      'Capstone Project'
    ],
    skills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'PyTorch', 'Data Analysis', 'Neural Networks'],
    career: ['AI Engineer', 'Machine Learning Engineer', 'Data Scientist', 'Research Scientist', 'AI Consultant'],
    instructor: 'Dr. Ahmad Hassan',
    price: 'PKR 45,000',
    students: 1250,
    rating: 4.8,
    image: '/images/aicourse.png'
  },
  'graphic-designing': {
    title: 'Graphic Designing',
    description: 'Master professional graphic design tools and techniques. Create visually compelling designs and build a comprehensive portfolio for your creative career.',
    duration: '12 weeks',
    level: 'Beginner to Intermediate',
    prerequisites: ['Basic Computer Skills', 'Creative Mindset', 'No Prior Design Experience Required'],
    curriculum: [
      'Design Fundamentals and Color Theory',
      'Adobe Photoshop Mastery',
      'Adobe Illustrator Techniques',
      'Typography and Layout Design',
      'Logo Design and Branding',
      'Print Design and Prepress',
      'Digital Design and Web Graphics',
      'Portfolio Development',
      'Client Communication and Freelancing',
      'Final Portfolio Presentation'
    ],
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Typography', 'Branding', 'Layout Design', 'Digital Art'],
    career: ['Graphic Designer', 'Brand Designer', 'Creative Director', 'Freelance Designer', 'UI Designer'],
    instructor: 'Fatima Khan',
    price: 'PKR 28,000',
    students: 890,
    rating: 4.7,
    image: '/images/graphicdesigning.png'
  },
  'autocad': {
    title: 'AutoCAD',
    description: 'Learn professional 2D drafting and 3D modeling using AutoCAD. Get hands-on experience in architectural and engineering design with industry-standard practices.',
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    prerequisites: ['Basic Computer Skills', 'Understanding of Technical Drawing', 'Mathematics (Geometry)'],
    curriculum: [
      'AutoCAD Interface and Basic Commands',
      '2D Drawing and Editing Tools',
      'Layers, Blocks, and Attributes',
      'Dimensioning and Annotations',
      'Advanced 2D Techniques',
      'Introduction to 3D Modeling',
      '3D Solid Modeling',
      'Rendering and Visualization',
      'Layout and Plotting',
      'Industry-Specific Applications'
    ],
    skills: ['AutoCAD 2D', 'AutoCAD 3D', 'Technical Drawing', 'CAD Design', 'Engineering Graphics'],
    career: ['CAD Designer', 'Drafting Technician', 'Architect', 'Engineering Designer', 'Technical Illustrator'],
    instructor: 'Eng. Muhammad Ali',
    price: 'PKR 22,000',
    students: 567,
    rating: 4.6,
    image: '/images/autocad.png'
  },
  'design-and-development': {
    title: 'Design and Development',
    description: 'Comprehensive course covering UI/UX design principles and full-stack development. Build user-centric applications from conception to deployment.',
    duration: '20 weeks',
    level: 'Intermediate',
    prerequisites: ['Basic HTML/CSS', 'JavaScript Fundamentals', 'Design Thinking'],
    curriculum: [
      'UI/UX Design Principles',
      'User Research and Personas',
      'Wireframing and Prototyping',
      'Frontend Development (React/Next.js)',
      'Backend Development (Node.js)',
      'Database Design and Management',
      'API Development and Integration',
      'Responsive Design Implementation',
      'Testing and Quality Assurance',
      'Deployment and DevOps'
    ],
    skills: ['UI/UX Design', 'React', 'Node.js', 'JavaScript', 'Database Design', 'API Development'],
    career: ['Full Stack Developer', 'UI/UX Designer', 'Frontend Developer', 'Product Designer', 'Web Developer'],
    instructor: 'Sarah Ahmed',
    price: 'PKR 55,000',
    students: 723,
    rating: 4.9,
    image: '/images/dd.png'
  },
  'basic-networking': {
    title: 'Basic Networking',
    description: 'Comprehensive networking course covering computer networks, protocols, IP addressing, and practical LAN/WAN setup. Perfect foundation for IT careers.',
    duration: '8 weeks',
    level: 'Beginner',
    prerequisites: ['Basic Computer Knowledge', 'Interest in IT Infrastructure'],
    curriculum: [
      'Network Fundamentals and Topology',
      'OSI Model and TCP/IP Suite',
      'IP Addressing and Subnetting',
      'Switching and VLANs',
      'Routing Concepts and Protocols',
      'Wireless Networking',
      'Network Security Basics',
      'Network Troubleshooting',
      'Hands-on Lab Sessions',
      'Network Design Project'
    ],
    skills: ['Network Configuration', 'IP Addressing', 'Router/Switch Setup', 'Network Troubleshooting', 'Security Basics'],
    career: ['Network Administrator', 'IT Support Specialist', 'Network Technician', 'System Administrator'],
    instructor: 'Usman Malik',
    price: 'PKR 18,000',
    students: 445,
    rating: 4.5,
    image: '/images/networking.png'
  },
  'quran-pak': {
    title: 'Quran Pak',
    description: 'Complete Quranic education including memorization (Hifz), proper recitation with Tajweed, and understanding through Tafsir. Suitable for all ages.',
    duration: 'Flexible (6 months to 2 years)',
    level: 'All Levels',
    prerequisites: ['Basic Arabic Alphabet Knowledge (Provided if needed)'],
    curriculum: [
      'Arabic Alphabet and Basic Reading',
      'Tajweed Rules and Application',
      'Quranic Recitation Practice',
      'Memorization Techniques (Hifz)',
      'Understanding and Translation',
      'Tafsir (Quranic Interpretation)',
      'Islamic History Context',
      'Practical Application in Daily Life',
      'Recitation Competitions',
      'Certification and Ijaza'
    ],
    skills: ['Quranic Recitation', 'Tajweed', 'Arabic Reading', 'Islamic Knowledge', 'Memorization Techniques'],
    career: ['Qari/Qaria', 'Islamic Teacher', 'Imam', 'Religious Scholar', 'Community Leader'],
    instructor: 'Qari Abdul Rahman',
    price: 'PKR 12,000',
    students: 2150,
    rating: 4.9,
    image: '/images/quran.png'
  },
  'web-development-dotnet': {
    title: 'Web Development .NET',
    description: 'Build professional, scalable web applications using ASP.NET, C#, and SQL Server. Master modern web development with Microsoft technologies.',
    duration: '16 weeks',
    level: 'Intermediate',
    prerequisites: ['C# Programming Basics', 'HTML/CSS Knowledge', 'Database Fundamentals'],
    curriculum: [
      'ASP.NET Core Fundamentals',
      'MVC Architecture Pattern',
      'Entity Framework Core',
      'RESTful API Development',
      'Authentication and Authorization',
      'Database Design with SQL Server',
      'Frontend Integration (Razor/Blazor)',
      'Testing and Debugging',
      'Deployment and Azure Services',
      'Real-world Project Development'
    ],
    skills: ['ASP.NET Core', 'C#', 'MVC Pattern', 'Entity Framework', 'SQL Server', 'Web APIs'],
    career: ['.NET Developer', 'Backend Developer', 'Full Stack Developer', 'Software Engineer', 'Web Application Developer'],
    instructor: 'Ahsan Raza',
    price: 'PKR 42,000',
    students: 634,
    rating: 4.7,
    image: '/images/web.png'
  },
  'english-languages': {
    title: 'English & Languages',
    description: 'Comprehensive English language course focusing on communication skills, grammar, vocabulary, and fluency through interactive methods.',
    duration: '12 weeks',
    level: 'All Levels',
    prerequisites: ['Basic Literacy', 'Motivation to Learn'],
    curriculum: [
      'Grammar Fundamentals',
      'Vocabulary Building Techniques',
      'Pronunciation and Phonetics',
      'Reading Comprehension',
      'Writing Skills Development',
      'Speaking and Conversation Practice',
      'Listening Skills Enhancement',
      'Business English Communication',
      'Presentation and Public Speaking',
      'Language Certification Preparation'
    ],
    skills: ['English Grammar', 'Vocabulary', 'Speaking Fluency', 'Writing Skills', 'Business Communication'],
    career: ['English Teacher', 'Translator', 'Content Writer', 'Communication Specialist', 'International Business'],
    instructor: 'Ms. Jennifer Smith',
    price: 'PKR 15,000',
    students: 1456,
    rating: 4.6,
    image: '/images/eng.png'
  },
  'cpp': {
    title: 'C++',
    description: 'Master C++ programming from fundamentals to advanced concepts. Learn data structures, OOP principles, and build efficient applications.',
    duration: '14 weeks',
    level: 'Beginner to Advanced',
    prerequisites: ['Basic Computer Literacy', 'Logical Thinking', 'Mathematics (Basic Algebra)'],
    curriculum: [
      'C++ Basics and Syntax',
      'Data Types and Variables',
      'Control Structures and Functions',
      'Arrays and Pointers',
      'Object-Oriented Programming',
      'Classes and Objects',
      'Inheritance and Polymorphism',
      'Data Structures Implementation',
      'File Handling and Streams',
      'Advanced Topics and Projects'
    ],
    skills: ['C++ Programming', 'OOP Concepts', 'Data Structures', 'Algorithm Implementation', 'Problem Solving'],
    career: ['Software Developer', 'Game Developer', 'System Programmer', 'Embedded Systems Engineer', 'C++ Developer'],
    instructor: 'Dr. Hassan Ali',
    price: 'PKR 25,000',
    students: 892,
    rating: 4.8,
    image: '/images/C.png'
  },
  'accounting': {
    title: 'Accounting',
    description: 'Comprehensive accounting course covering financial principles, bookkeeping, financial statements, and business analysis for professional success.',
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    prerequisites: ['Basic Mathematics', 'Business Awareness', 'Computer Skills'],
    curriculum: [
      'Accounting Fundamentals and Principles',
      'Double Entry Bookkeeping',
      'Journal Entries and Ledgers',
      'Financial Statements Preparation',
      'Cash Flow Analysis',
      'Cost Accounting Basics',
      'Budgeting and Forecasting',
      'Tax Accounting Fundamentals',
      'Computerized Accounting (QuickBooks)',
      'Financial Analysis and Reporting'
    ],
    skills: ['Financial Accounting', 'Bookkeeping', 'Financial Analysis', 'QuickBooks', 'Excel for Accounting'],
    career: ['Accountant', 'Bookkeeper', 'Financial Analyst', 'Auditor', 'Tax Consultant'],
    instructor: 'CA Sadia Malik',
    price: 'PKR 20,000',
    students: 678,
    rating: 4.5,
    image: '/images/acc.png'
  },
  'biology': {
    title: 'Biology',
    description: 'Explore the fascinating world of life sciences from cellular biology to ecosystems. Perfect for students and biology enthusiasts.',
    duration: '12 weeks',
    level: 'High School to Undergraduate',
    prerequisites: ['Basic Science Knowledge', 'Chemistry Basics', 'Interest in Life Sciences'],
    curriculum: [
      'Cell Biology and Structure',
      'Genetics and Heredity',
      'Evolution and Natural Selection',
      'Plant Biology and Photosynthesis',
      'Animal Physiology',
      'Ecology and Ecosystems',
      'Microbiology Basics',
      'Human Anatomy and Physiology',
      'Biotechnology Applications',
      'Laboratory Practical Sessions'
    ],
    skills: ['Scientific Method', 'Laboratory Techniques', 'Data Analysis', 'Research Skills', 'Biological Concepts'],
    career: ['Biologist', 'Medical Professional', 'Research Scientist', 'Environmental Consultant', 'Biotechnologist'],
    instructor: 'Dr. Ayesha Khan',
    price: 'PKR 16,000',
    students: 534,
    rating: 4.7,
    image: '/images/biology.png'
  },
  'calculus': {
    title: 'Calculus',
    description: 'Master calculus concepts including limits, derivatives, and integrals with real-world applications in physics, engineering, and economics.',
    duration: '14 weeks',
    level: 'Intermediate to Advanced',
    prerequisites: ['Algebra and Trigonometry', 'Pre-Calculus', 'Strong Mathematical Foundation'],
    curriculum: [
      'Limits and Continuity',
      'Derivatives and Differentiation',
      'Applications of Derivatives',
      'Integration Techniques',
      'Applications of Integrals',
      'Sequences and Series',
      'Multivariable Calculus Intro',
      'Differential Equations Basics',
      'Real-world Problem Solving',
      'Advanced Calculus Topics'
    ],
    skills: ['Mathematical Analysis', 'Problem Solving', 'Analytical Thinking', 'Mathematical Modeling'],
    career: ['Mathematician', 'Engineer', 'Data Scientist', 'Economist', 'Physics Researcher'],
    instructor: 'Dr. Omar Farooq',
    price: 'PKR 18,000',
    students: 423,
    rating: 4.6,
    image: '/images/calculus.png'
  },
  'ms-office': {
    title: 'MS Office',
    description: 'Complete Microsoft Office suite training covering Word, Excel, PowerPoint, and Outlook to boost productivity and professional efficiency.',
    duration: '6 weeks',
    level: 'Beginner to Advanced',
    prerequisites: ['Basic Computer Skills', 'Windows Operating System Knowledge'],
    curriculum: [
      'Microsoft Word Advanced Features',
      'Excel Formulas and Functions',
      'Excel Data Analysis and Charts',
      'PowerPoint Design and Animation',
      'Outlook Email Management',
      'Office Integration and Collaboration',
      'Templates and Automation',
      'Advanced Excel (Pivot Tables, Macros)',
      'Professional Document Creation',
      'Office 365 and Cloud Features'
    ],
    skills: ['Word Processing', 'Spreadsheet Analysis', 'Presentation Design', 'Email Management', 'Data Analysis'],
    career: ['Office Administrator', 'Data Analyst', 'Executive Assistant', 'Business Analyst', 'Project Coordinator'],
    instructor: 'Kamran Sheikh',
    price: 'PKR 12,000',
    students: 1789,
    rating: 4.4,
    image: '/images/office.png'
  },
  'economics': {
    title: 'Economics',
    description: 'Comprehensive economics course covering microeconomic and macroeconomic principles, market dynamics, and economic policy analysis.',
    duration: '12 weeks',
    level: 'Intermediate',
    prerequisites: ['Mathematics (Statistics helpful)', 'Interest in Economics', 'Current Affairs Awareness'],
    curriculum: [
      'Economic Fundamentals and Principles',
      'Supply and Demand Analysis',
      'Market Structures and Competition',
      'Consumer and Producer Theory',
      'Macroeconomic Indicators',
      'Monetary and Fiscal Policy',
      'International Trade and Finance',
      'Economic Development',
      'Pakistan Economy Analysis',
      'Economic Research Methods'
    ],
    skills: ['Economic Analysis', 'Data Interpretation', 'Policy Analysis', 'Research Skills', 'Critical Thinking'],
    career: ['Economist', 'Financial Analyst', 'Policy Researcher', 'Banking Professional', 'Business Consultant'],
    instructor: 'Dr. Asma Rehman',
    price: 'PKR 22,000',
    students: 367,
    rating: 4.5,
    image: '/images/economics.png'
  },
  'physics': {
    title: 'Physics',
    description: 'Explore fundamental physics concepts including mechanics, thermodynamics, electricity, and magnetism with practical problem-solving approach.',
    duration: '16 weeks',
    level: 'High School to Undergraduate',
    prerequisites: ['Strong Mathematics Background', 'Algebra and Trigonometry', 'Calculus (recommended)'],
    curriculum: [
      'Mechanics and Motion',
      'Forces and Newton\'s Laws',
      'Work, Energy, and Power',
      'Thermodynamics and Heat',
      'Waves and Sound',
      'Electricity and Circuits',
      'Magnetism and Electromagnetic Induction',
      'Optics and Light',
      'Modern Physics Introduction',
      'Laboratory Experiments and Analysis'
    ],
    skills: ['Problem Solving', 'Mathematical Modeling', 'Laboratory Techniques', 'Data Analysis', 'Scientific Method'],
    career: ['Physicist', 'Engineer', 'Research Scientist', 'Teacher', 'Technical Consultant'],
    instructor: 'Dr. Tariq Mahmood',
    price: 'PKR 24,000',
    students: 456,
    rating: 4.7,
    image: '/images/physics.png'
  },
  'statistics': {
    title: 'Statistics',
    description: 'Master statistical analysis, probability theory, and data interpretation. Apply statistical methods in business, research, and decision-making.',
    duration: '10 weeks',
    level: 'Intermediate',
    prerequisites: ['Mathematics (Algebra)', 'Basic Computer Skills', 'Interest in Data Analysis'],
    curriculum: [
      'Descriptive Statistics',
      'Probability Theory',
      'Statistical Distributions',
      'Hypothesis Testing',
      'Regression Analysis',
      'ANOVA and Statistical Modeling',
      'Statistical Software (R/SPSS)',
      'Survey Design and Sampling',
      'Business Statistics Applications',
      'Research Statistics Project'
    ],
    skills: ['Statistical Analysis', 'Data Interpretation', 'R Programming', 'Research Methods', 'Statistical Software'],
    career: ['Data Analyst', 'Statistician', 'Research Analyst', 'Quality Control Analyst', 'Market Researcher'],
    instructor: 'Dr. Nadia Ahmed',
    price: 'PKR 26,000',
    students: 612,
    rating: 4.6,
    image: '/images/stats.png'
  }
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    padding: '2rem 1rem',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '3rem 2rem',
    textAlign: 'center',
  },
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'white',
    textDecoration: 'none',
    marginBottom: '1rem',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transition: 'background-color 0.3s ease',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    fontFamily: 'Roboto, sans-serif',
  },
  subtitle: {
    fontSize: '1.2rem',
    opacity: 0.9,
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  mainContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    padding: '2rem',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  section: {
    backgroundColor: '#f8fafc',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
  },
  sectionTitle: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    padding: '0.5rem 0',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  skillTag: {
    display: 'inline-block',
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '0.3rem 0.8rem',
    borderRadius: '20px',
    fontSize: '0.8rem',
    margin: '0.2rem',
  },
  statsCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    textAlign: 'center',
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  statLabel: {
    fontSize: '0.9rem',
    color: '#64748b',
    marginTop: '0.5rem',
  },
  enrollButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
  },
  instructorCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    textAlign: 'center',
  },
  instructorName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: '0.5rem',
  },
  price: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#059669',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontSize: '1.1rem',
  },
  stars: {
    color: '#fbbf24',
  },
};

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courseDetails[slug as string];

  if (!course) {
    return (
      <div style={styles.container}>
        <div style={{ textAlign: 'center', padding: '4rem' }}>
          <h1 style={{ fontSize: '2rem', color: '#ef4444', marginBottom: '1rem' }}>
            Course Not Found
          </h1>
          <p style={{ color: '#64748b', marginBottom: '2rem' }}>
            The course you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/courses" style={styles.backButton}>
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.header}>
          <Link href="/courses" style={styles.backButton}>
            ← Back to Courses
          </Link>
          <h1 style={styles.title}>{course.title}</h1>
          <p style={styles.subtitle}>{course.description}</p>
        </div>

        <div style={styles.mainContent}>
          <div style={styles.leftColumn}>
            {/* Course Overview */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                📚 Course Overview
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <strong>Duration:</strong> {course.duration}
                </div>
                <div>
                  <strong>Level:</strong> {course.level}
                </div>
                <div>
                  <strong>Students:</strong> {course.students.toLocaleString()}
                </div>
                <div style={styles.rating}>
                  <strong>Rating:</strong>
                  <span style={styles.stars}>★★★★★</span>
                  <span>({course.rating})</span>
                </div>
              </div>
            </div>

            {/* Prerequisites */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                ✅ Prerequisites
              </h2>
              <ul style={styles.list}>
                {course.prerequisites.map((prereq, index) => (
                  <li key={index} style={styles.listItem}>
                    <span style={{ color: '#059669' }}>✓</span>
                    {prereq}
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                📖 Curriculum
              </h2>
              <ul style={styles.list}>
                {course.curriculum.map((item, index) => (
                  <li key={index} style={styles.listItem}>
                    <span style={{ 
                      backgroundColor: '#3b82f6', 
                      color: 'white', 
                      borderRadius: '50%', 
                      width: '24px', 
                      height: '24px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontSize: '0.8rem',
                      minWidth: '24px'
                    }}>
                      {index + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills You'll Learn */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                🚀 Skills You'll Learn
              </h2>
              <div>
                {course.skills.map((skill, index) => (
                  <span key={index} style={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                💼 Career Opportunities
              </h2>
              <ul style={styles.list}>
                {course.career.map((career, index) => (
                  <li key={index} style={styles.listItem}>
                    <span style={{ color: '#059669' }}>💼</span>
                    {career}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={styles.rightColumn}>
            {/* Course Stats */}
            <div style={styles.statsCard}>
              <div style={styles.statValue}>{course.price}</div>
              <div style={styles.statLabel}>Course Fee</div>
            </div>

            <div style={styles.statsCard}>
              <div style={styles.statValue}>{course.students.toLocaleString()}</div>
              <div style={styles.statLabel}>Students Enrolled</div>
            </div>

            <div style={styles.statsCard}>
              <div style={styles.statValue}>{course.rating}/5</div>
              <div style={styles.statLabel}>Average Rating</div>
            </div>

            {/* Instructor */}
            <div style={styles.instructorCard}>
              <h3 style={styles.sectionTitle}>👨‍🏫 Instructor</h3>
              <div style={styles.instructorName}>{course.instructor}</div>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                Expert instructor with years of experience in {course.title}
              </p>
            </div>

            {/* Enroll Button */}
            <button 
              style={styles.enrollButton}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
            >
              Enroll Now
            </button>

            {/* Course Features */}
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>✨ Course Features</h3>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  <span>📺</span>
                  Interactive Video Lessons
                </li>
                <li style={styles.listItem}>
                  <span>📝</span>
                  Practical Assignments
                </li>
                <li style={styles.listItem}>
                  <span>🏆</span>
                  Completion Certificate
                </li>
                <li style={styles.listItem}>
                  <span>💬</span>
                  24/7 Support
                </li>
                <li style={styles.listItem}>
                  <span>📱</span>
                  Mobile Access
                </li>
                <li style={styles.listItem}>
                  <span>⏰</span>
                  Lifetime Access
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>📞 Contact Info</h3>
              <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>Email:</strong> info@courses.com
                </p>
                <p style={{ marginBottom: '0.5rem' }}>
                  <strong>Phone:</strong> +92 300 1234567
                </p>
                <p>
                  <strong>WhatsApp:</strong> +92 300 1234567
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div style={{ padding: '2rem', borderTop: '1px solid #e2e8f0' }}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>
              ℹ️ Additional Information
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div>
                <h4 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>Class Schedule</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                  Flexible timings available. Morning, afternoon, and evening batches.
                </p>
              </div>
              <div>
                <h4 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>Payment Options</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                  Easy installments available. Bank transfer, JazzCash, EasyPaisa accepted.
                </p>
              </div>
              <div>
                <h4 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>Certification</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                  Industry-recognized certificate upon successful completion.
                </p>
              </div>
              <div>
                <h4 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>Job Support</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                  Career guidance and job placement assistance provided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};