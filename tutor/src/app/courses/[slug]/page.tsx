'use client';
import { useRouter } from 'next/navigation';
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
    description: 'A comprehensive course on Artificial Intelligence covering machine learning, deep learning, and advanced AI concepts. Gain hands-on experience in building intelligent systems, applying AI to real-world problems, and exploring cutting-edge research trends.',
    duration: '16 weeks',
    level: 'Intermediate to Advanced',
    prerequisites: ['Basic Python Programming', 'Mathematics (Linear Algebra, Statistics, Probability)', 'Computer Science Fundamentals'],
    curriculum: [
      'Introduction to Artificial Intelligence and its Applications',
      'Python Tools and Libraries for AI (NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch)',
      'Supervised Learning: Regression and Classification',
      'Unsupervised Learning: Clustering and Dimensionality Reduction',
      'Deep Learning Fundamentals and Neural Network Architectures',
      'Natural Language Processing (Text Classification, Chatbots, Transformers)',
      'Computer Vision (Image Classification, Object Detection, Image Generation)',
      'Reinforcement Learning and Decision Making',
      'Ethics, Bias, and Responsible AI Development',
      'Capstone Project: End-to-End AI Solution'
    ],


    skills: [
  'Machine Learning',
  'Deep Learning',
  'Python Programming',
  'TensorFlow',
  'PyTorch',
  'Data Analysis & Visualization',
  'Neural Networks',
  'Natural Language Processing',
  'Computer Vision',
  'Model Deployment'
],
career: [
  'AI Engineer',
  'Machine Learning Engineer',
  'Data Scientist',
  'Computer Vision Engineer',
  'Natural Language Processing Engineer',
  'AI Research Scientist',
  'AI Consultant'
],
instructor: 'Dr. Ahmad Hassan',
price: 'PKR 45,000',
students: 30,
rating: 4.8,
image: '/images/ai.jpg'
  },

  'graphic-designing': {
    title: 'Graphic Designing',
    description: 'Learn professional graphic design principles, tools, and techniques to create visually impactful designs. Develop skills in digital and print media, branding, and creative storytelling while building a strong portfolio for your career.',
    duration: '12 weeks',
    level: 'Beginner to Intermediate',
    prerequisites: ['Basic Computer Skills', 'Creative Mindset', 'No Prior Design Experience Required'],
    curriculum: [
      'Introduction to Graphic Design & Design Principles',
      'Color Theory and Visual Hierarchy',
      'Adobe Photoshop Mastery',
      'Adobe Illustrator Techniques',
      'Typography and Layout Design',
      'Logo Design, Branding & Identity Creation',
      'Print Design, Packaging & Prepress',
      'Digital Design for Social Media & Web Graphics',
      'Portfolio Development and Presentation Skills',
      'Client Communication, Freelancing, and Career Guidance'
    ],
    skills: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Typography',
      'Branding & Identity Design',
      'Layout Design',
      'Digital Art',
      'Social Media Graphics',
      'Packaging Design'
    ],
    career: [
      'Graphic Designer',
      'Brand Designer',
      'Creative Director',
      'Freelance Designer',
      'UI Designer',
      'Visual Content Creator'
    ],
    instructor: 'Fatima Khan',
    price: 'PKR 28,000',
    students: 22,
    rating: 4.7,
    image: '/images/graphic.jpg'
},
'chemistry': {
    title: 'Chemistry',
    description: 'Explore the fascinating world of chemistry, from atoms and molecules to chemical reactions and advanced concepts. Learn through theory, experiments, and real-life applications, building a strong foundation for academic and professional success.',
    duration: '16 weeks',
    level: 'Beginner to Intermediate',
    prerequisites: ['Basic Science Knowledge', 'Curiosity for Learning', 'No Prior Chemistry Expertise Required'],
    curriculum: [
      'Introduction to Chemistry & Scientific Method',
      'Atomic Structure and Periodic Table',
      'Chemical Bonding and Molecular Structure',
      'States of Matter: Gases, Liquids, and Solids',
      'Chemical Reactions and Equations',
      'Stoichiometry and Molar Calculations',
      'Acids, Bases, and pH',
      'Thermochemistry and Energy Changes',
      'Organic Chemistry Basics',
      'Laboratory Skills and Safety Procedures'
    ],
    skills: [
      'Laboratory Techniques',
      'Chemical Analysis',
      'Problem-Solving in Chemistry',
      'Data Interpretation',
      'Understanding Chemical Reactions',
      'Experimental Design',
      'Scientific Communication'
    ],
    career: [
      'Chemist',
      'Laboratory Technician',
      'Research Scientist',
      'Chemical Engineer',
      'Pharmaceutical Scientist',
      'Environmental Analyst'
    ],
    instructor: 'Dr. Ayesha Malik',
    price: 'PKR 32,000',
    students: 18,
    rating: 4.8,
    image: '/images/chemistry.jpg'
},

  'autocad': {
    title: 'AutoCAD',
    description: 'Master 2D drafting and 3D modeling with AutoCAD, the industry-leading CAD software. Learn to create precise technical drawings, architectural plans, and engineering models using professional design standards.',
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    prerequisites: ['Basic Computer Skills', 'Understanding of Technical Drawing', 'Mathematics (Geometry)'],
    curriculum: [
      'Introduction to AutoCAD and User Interface',
      'Basic Drawing, Editing, and Navigation Tools',
      'Working with Layers, Blocks, and Attributes',
      'Dimensioning, Annotations, and Text Styles',
      'Advanced 2D Drafting Techniques',
      'Introduction to 3D Modeling Concepts',
      'Creating 3D Solids, Surfaces, and Wireframes',
      'Rendering, Lighting, and Visualization Techniques',
      'Layouts, Viewports, and Printing/Plotting',
      'Industry Applications in Architecture, Engineering, and Manufacturing'
    ],
    skills: [
      'AutoCAD 2D Drafting',
      'AutoCAD 3D Modeling',
      'Technical Drawing Interpretation',
      'CAD Design Standards',
      'Engineering Graphics',
      'Architectural Drafting'
    ],
    career: [
      'CAD Designer',
      'Drafting Technician',
      'Architectural Designer',
      'Engineering Designer',
      'Technical Illustrator',
      'Mechanical Draftsman'
    ],
    instructor: 'Eng. Muhammad Ali',
    price: 'PKR 22,000',
    students: 13,
    rating: 4.6,
    image: '/images/autocad.jpg'
},

  'design-and-development': {
    title: 'Design and Development',
    description: 'A comprehensive course combining UI/UX design principles with full-stack web development. Learn to create user-friendly, responsive, and high-performance applications from concept to deployment using modern tools and frameworks.',
    duration: '20 weeks',
    level: 'Intermediate',
    prerequisites: ['Basic HTML/CSS', 'JavaScript Fundamentals', 'Design Thinking'],
    curriculum: [
      'Introduction to UI/UX and Human-Centered Design',
      'User Research, Personas, and Journey Mapping',
      'Wireframing, Prototyping, and Design Systems',
      'Frontend Development with React and Next.js',
      'Backend Development with Node.js and Express',
      'Database Design, SQL & NoSQL Integration',
      'RESTful APIs and Third-Party API Integration',
      'Responsive and Mobile-First Design Implementation',
      'Testing, Debugging, and Quality Assurance',
      'Deployment, DevOps, and Continuous Integration'
    ],
    skills: [
      'UI/UX Design',
      'Wireframing & Prototyping',
      'React',
      'Next.js',
      'Node.js',
      'JavaScript (ES6+)',
      'Database Design (SQL & NoSQL)',
      'API Development & Integration',
      'Responsive Web Design',
      'Version Control (Git/GitHub)'
    ],
    career: [
      'Full Stack Developer',
      'UI/UX Designer',
      'Frontend Developer',
      'Product Designer',
      'Web Developer',
      'Software Engineer'
    ],
    instructor: 'Sarah Ahmed',
    price: 'PKR 55,000',
    students: 54,
    rating: 4.9,
    image: '/images/dd.jpg'
},

  'basic-networking': {
    title: 'Basic Networking',
    description: 'Learn the fundamentals of computer networking, including network types, protocols, IP addressing, and practical LAN/WAN setup. Gain hands-on experience with switches, routers, and network troubleshooting — the perfect foundation for an IT career.',
    duration: '8 weeks',
    level: 'Beginner',
    prerequisites: ['Basic Computer Knowledge', 'Interest in IT Infrastructure'],
    curriculum: [
      'Introduction to Networking and Network Types',
      'Network Topologies and Communication Models',
      'OSI Model and TCP/IP Protocol Suite',
      'IP Addressing, Subnetting, and Address Classes',
      'Switching Concepts, VLANs, and Trunking',
      'Routing Fundamentals and Common Protocols (RIP, OSPF)',
      'Wireless Networking Standards and Configuration',
      'Network Security Fundamentals (Firewalls, Encryption, Access Control)',
      'Network Troubleshooting Tools and Techniques',
      'Hands-on Lab: Building and Configuring a Small Network',
      'Final Network Design and Implementation Project'
    ],
    skills: [
      'Network Configuration',
      'IP Addressing & Subnetting',
      'Router and Switch Setup',
      'VLAN Configuration',
      'Network Troubleshooting',
      'Basic Network Security'
    ],
    career: [
      'Network Administrator',
      'IT Support Specialist',
      'Network Technician',
      'System Administrator',
      'Technical Support Engineer'
    ],
    instructor: 'Usman Malik',
    price: 'PKR 18,000',
    students: 25,
    rating: 4.5,
    image: '/images/networking.jpg'
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
    students: 10,
    rating: 4.9,
    image: '/images/quran.jpg'
  },
  'web-development-dotnet': {
    title: 'Web Development with .NET',
    description: 'Learn to build professional, scalable, and secure web applications using ASP.NET Core, C#, and SQL Server. Master modern full-stack development with Microsoft technologies, from backend logic to frontend integration.',
    duration: '16 weeks',
    level: 'Intermediate',
    prerequisites: ['C# Programming Basics', 'HTML/CSS Knowledge', 'Database Fundamentals'],
    curriculum: [
      'Introduction to ASP.NET Core and Project Setup',
      'Understanding the MVC Architecture Pattern',
      'Entity Framework Core for Data Access',
      'Building and Consuming RESTful APIs',
      'Authentication, Authorization, and Identity Management',
      'Database Design and Optimization with SQL Server',
      'Frontend Integration using Razor Pages and Blazor',
      'State Management and Session Handling',
      'Unit Testing, Debugging, and Performance Optimization',
      'Deployment to IIS and Azure Cloud Services',
      'Capstone Project: Full-Stack .NET Web Application'
    ],
    skills: [
      'ASP.NET Core Development',
      'C# Programming',
      'MVC Design Pattern',
      'Entity Framework Core',
      'SQL Server Database Design',
      'RESTful API Development',
      'Azure Deployment'
    ],
    career: [
      '.NET Developer',
      'Backend Developer',
      'Full Stack Developer',
      'Software Engineer',
      'Web Application Developer',
      'Cloud Application Developer'
    ],
    instructor: 'Ahsan Raza',
    price: 'PKR 42,000',
    students: 63,
    rating: 4.7,
    image: '/images/web.png'
},

 'english-languages': {
    title: 'English & Languages',
    description: 'A complete English language course designed to improve grammar, vocabulary, pronunciation, and fluency. Develop strong communication skills for personal, academic, and professional success through interactive lessons and practical exercises.',
    duration: '12 weeks',
    level: 'All Levels',
    prerequisites: ['Basic Literacy', 'Motivation to Learn'],
    curriculum: [
      'Introduction to English Language Skills',
      'Grammar Fundamentals and Sentence Structure',
      'Vocabulary Building Strategies and Word Usage',
      'Pronunciation, Phonetics, and Accent Training',
      'Reading Comprehension and Critical Thinking',
      'Writing Skills: Essays, Emails, and Reports',
      'Speaking Fluency and Everyday Conversation',
      'Listening Skills and Note-Taking Techniques',
      'Business English and Workplace Communication',
      'Presentation, Public Speaking, and Interview Skills',
      'Language Certification Exam Preparation (IELTS/TOEFL)'
    ],
    skills: [
      'English Grammar Mastery',
      'Vocabulary Expansion',
      'Fluent Speaking Skills',
      'Professional Writing',
      'Business Communication',
      'Listening Comprehension'
    ],
    career: [
      'English Language Teacher',
      'Translator or Interpreter',
      'Content Writer',
      'Communication Specialist',
      'International Business Executive',
      'Corporate Trainer'
    ],
    instructor: 'Ms. Jennifer Smith',
    price: 'PKR 15,000',
    students: 26,
    rating: 4.6,
    image: '/images/eng.jpg'
},

 'cpp': {
    title: 'C++ Programming',
    description: 'Learn C++ from the ground up — starting with the fundamentals and advancing to complex programming concepts. Master data structures, object-oriented programming, memory management, and algorithm design to build efficient, high-performance applications.',
    duration: '14 weeks',
    level: 'Beginner to Advanced',
    prerequisites: ['Basic Computer Literacy', 'Logical Thinking', 'Mathematics (Basic Algebra)'],
    curriculum: [
      'Introduction to C++ and Development Environment Setup',
      'Basic Syntax, Data Types, and Variables',
      'Control Structures, Loops, and Functions',
      'Arrays, Strings, and Pointers',
      'Object-Oriented Programming Principles',
      'Classes, Objects, and Constructors/Destructors',
      'Inheritance, Polymorphism, and Operator Overloading',
      'Implementing Data Structures (Stacks, Queues, Linked Lists, Trees)',
      'File Handling, Streams, and Error Management',
      'Memory Management and Dynamic Allocation',
      'Advanced Topics: Templates, STL, and Multithreading',
      'Capstone Project: Real-World C++ Application'
    ],
    skills: [
      'C++ Programming',
      'OOP Concepts',
      'Data Structures & Algorithms',
      'Problem Solving',
      'Memory Management',
      'STL (Standard Template Library)',
      'Multithreading'
    ],
    career: [
      'Software Developer',
      'Game Developer',
      'System Programmer',
      'Embedded Systems Engineer',
      'C++ Developer',
      'Algorithm Engineer'
    ],
    instructor: 'Dr. Hassan Ali',
    price: 'PKR 25,000',
    students: 54,
    rating: 4.8,
    image: '/images/c.jpg'
},

  'accounting': {
    title: 'Accounting',
    description: 'Master the principles of accounting, from bookkeeping to financial reporting. Learn to prepare and analyze financial statements, manage budgets, and use modern accounting software for professional business decision-making.',
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    prerequisites: ['Basic Mathematics', 'Business Awareness', 'Computer Skills'],
    curriculum: [
      'Introduction to Accounting and Financial Principles',
      'Double-Entry Bookkeeping and Accounting Cycle',
      'Journal Entries, Ledgers, and Trial Balance',
      'Preparation of Financial Statements (Balance Sheet, Income Statement)',
      'Cash Flow Management and Analysis',
      'Cost Accounting and Break-Even Analysis',
      'Budgeting, Forecasting, and Variance Analysis',
      'Taxation Basics and Compliance',
      'Computerized Accounting with QuickBooks and Excel',
      'Financial Analysis, Reporting, and Decision Making'
    ],
    skills: [
      'Financial Accounting',
      'Bookkeeping',
      'Financial Analysis',
      'QuickBooks',
      'Excel for Accounting',
      'Budgeting & Forecasting',
      'Tax Compliance'
    ],
    career: [
      'Accountant',
      'Bookkeeper',
      'Financial Analyst',
      'Auditor',
      'Tax Consultant',
      'Finance Officer'
    ],
    instructor: 'CA Sadia Malik',
    price: 'PKR 20,000',
    students: 16,
    rating: 4.5,
    image: '/images/accounting.jpg'
},

  'bio': {
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
    students: 90,
    rating: 4.7,
    image: '/images/bio.jpg'
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
  skills: ['Analytical Thinking', 'Problem-Solving', 'Mathematical Modelling', 'Critical Thinking', 'Quantitative Reasoning'],
  career: ['Mathematician', 'Engineer', 'Data Scientist', 'Economist', 'Researcher'],
  instructor: 'Prof. Imran Siddiqui',
  price: 'PKR 18,500',
  students: 33,
  rating: 4.8,
  image: '/images/calculus.jpg'
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
    students: 76,
    rating: 4.4,
    image: '/images/office.jpg'
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
    students: 36,
    rating: 4.5,
    image: '/images/economics.jpg'
  },


  physics: {
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
    students: 46,
    rating: 4.7,
    image: '/images/phy.jpg'
  },
  statistics: {
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
    skills: [
      'Statistical Analysis',
      'Data Interpretation',
      'R Programming',
      'Research Methods',
      'Statistical Software'
    ],
    career: [
      'Data Analyst',
      'Statistician',
      'Research Analyst',
      'Quality Control Analyst',
      'Market Researcher'
    ],
    instructor: 'Dr. Nadia Ahmed',
    price: 'PKR 26,000',
    students: 62,
    rating: 4.6,
    image: '/images/stats.jpg'
  },
  
'algebra': {
    title: 'Algebra',
    description: 'Master the language of mathematics through algebra. Learn to solve equations, understand functions, and apply algebraic thinking to real-world problems.',
    duration: '12 weeks',
    level: 'Beginner to Intermediate',
    prerequisites: ['Basic Arithmetic Skills', 'Logical Thinking'],
    curriculum: [
      'Introduction to Algebra & Variables',
      'Linear Equations and Inequalities',
      'Polynomials and Factoring',
      'Quadratic Equations',
      'Functions and Graphs',
      'Systems of Equations',
      'Exponents and Radicals',
      'Rational Expressions',
      'Word Problems and Applications',
      'Preparation for Advanced Mathematics'
    ],
    skills: [
      'Problem-Solving in Mathematics',
      'Logical Reasoning',
      'Graphing and Data Interpretation',
      'Critical Thinking',
      'Equation Solving Techniques'
    ],
    career: [
      'Data Analyst',
      'Economist',
      'Engineer',
      'Mathematics Educator',
      'Actuary',
      'Researcher'
    ],
    instructor: 'Prof. Ali Khan',
    price: 'PKR 25,000',
    students: 25,
    rating: 4.7,
    image: '/images/algebra.jpg'
},

'environmental-science': {
    title: 'Environmental Science',
    description: 'Understand the relationship between humans and the environment. Study ecosystems, climate change, conservation, and sustainable practices to protect our planet.',
    duration: '14 weeks',
    level: 'Beginner to Intermediate',
    prerequisites: ['Basic Science Knowledge', 'Interest in Environmental Issues'],
    curriculum: [
      'Introduction to Environmental Science',
      'Ecosystem Structure and Function',
      'Biodiversity and Conservation',
      'Climate Change and Global Warming',
      'Natural Resources Management',
      'Pollution and Waste Management',
      'Renewable Energy Solutions',
      'Environmental Policy and Law',
      'Sustainable Development Goals',
      'Field Studies and Environmental Projects'
    ],
    skills: [
      'Environmental Impact Assessment',
      'Data Collection and Analysis',
      'Research and Report Writing',
      'Critical Thinking on Environmental Issues',
      'Sustainable Planning'
    ],
    career: [
      'Environmental Scientist',
      'Conservation Officer',
      'Sustainability Consultant',
      'Wildlife Manager',
      'Climate Change Analyst',
      'Environmental Policy Advisor'
    ],
    instructor: 'Dr. Hina Raza',
    price: 'PKR 29,000',
    students: 15,
    rating: 4.8,
    image: '/images/environmental-science.jpg'
},

'geometry': {
    title: 'Geometry',
    description: 'Explore shapes, sizes, and the properties of space. Learn geometric principles and apply them in solving mathematical and real-world spatial problems.',
    duration: '12 weeks',
    level: 'Beginner to Intermediate',
    prerequisites: ['Basic Arithmetic Skills', 'Understanding of Basic Algebra'],
    curriculum: [
      'Introduction to Geometry & Geometric Tools',
      'Points, Lines, and Angles',
      'Triangles and Their Properties',
      'Quadrilaterals and Polygons',
      'Circles and Their Properties',
      'Coordinate Geometry',
      'Transformations and Symmetry',
      'Perimeter, Area, and Volume',
      'Trigonometry Basics',
      'Geometric Proofs and Problem-Solving'
    ],
    skills: [
      'Spatial Reasoning',
      'Problem-Solving in Geometry',
      'Measurement and Calculation',
      'Logical Thinking',
      'Analytical Skills'
    ],
    career: [
      'Architect',
      'Civil Engineer',
      'Mathematics Teacher',
      'Urban Planner',
      'Surveyor',
      'Designer'
    ],
    instructor: 'Prof. Zubair Malik',
    price: 'PKR 26,000',
    students: 18,
    rating: 4.7,
    image: '/images/geometry.jpg'
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
    backgroundColor: 'yellow',
    color: 'black',
    padding: '1rem 2rem',
    borderRadius: '8px',
    border: '2px solid black',
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
   const router = useRouter();
  const { slug } = useParams();
  const course = courseDetails[slug as string];

   const handleEnrollClick = () => {
    router.push('/trial'); 
  };

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
               <img src="/images/books.png" alt="logo" style={{ width: '40px', height: '40px' }} />
 Course Overview
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
                <img src="/images/pre.png" alt="logo" style={{ width: '40px', height: '40px' }} />
                 Prerequisites
              </h2>
              <ul style={styles.list}>
                {course.prerequisites.map((prereq, index) => (
                  <li key={index} style={styles.listItem}>
                    <span style={{ color: '#000000ff' }}>✓</span>
                    {prereq}
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>
                  <img src="/images/curriculum.png" alt="logo" style={{ width: '40px', height: '40px' }} />
                 Curriculum
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
                 <img src="/images/skills.png" alt="logo" style={{ width: '40px', height: '40px' }} />
                  Skills You'll Learn
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
                 <img src="/images/career.png" alt="logo" style={{ width: '40px', height: '40px' }} />
                  Career Opportunities
              </h2>
              <ul style={styles.list}>
                {course.career.map((career, index) => (
                  <li key={index} style={styles.listItem}>
                    <span style={{ color: '#000000ff' }}>•</span>
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
              <h3 style={styles.sectionTitle}>    <img src="/images/tutor.png" alt="logo" style={{ width: '40px', height: '40px' }} />
               Instructor</h3>
              <div style={styles.instructorName}>{course.instructor}</div>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                Expert instructor with years of experience in {course.title}
              </p>
            </div>

            {/* Enroll Button */}
             <button 
      style={styles.enrollButton} 
      onClick={handleEnrollClick}
    >
      Enroll Now
    </button>

            {/* Course Features */}
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>✨ Course Features</h3>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                 <span>✓</span>
                  Interactive Video Lessons
                </li>
                <li style={styles.listItem}>
                  <span>✓</span>
                  Practical Assignments
                </li>
                <li style={styles.listItem}>
                  <span>✓</span>
                  Completion Certificate
                </li>
                <li style={styles.listItem}>
                  <span>✓</span>
                  24/7 Support
                </li>
                <li style={styles.listItem}>
               <span>✓</span>
                  Mobile Access
                </li>
                <li style={styles.listItem}>
                  <span>✓</span>
                  Lifetime Access
                </li>
              </ul>
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