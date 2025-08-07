'use client';
import React, { useEffect, useRef, useState } from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  aboutContainer: {
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },

  backgroundElements: {
    position: 'absolute',
    inset: '0',
    overflow: 'hidden',
    zIndex: 1,
  },

  bgBlob: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(120px)',
    animation: 'pulse 4s ease-in-out infinite',
  },

  bgBlob1: {
    top: '80px',
    left: '40px',
    width: '288px',
    height: '288px',
    background: 'rgba(59, 130, 246, 0.1)',
  },

  bgBlob2: {
    top: '160px',
    right: '80px',
    width: '384px',
    height: '384px',
    background: 'rgba(251, 191, 36, 0.1)',
    animationDelay: '1s',
  },

  bgBlob3: {
    bottom: '80px',
    left: '33.333%',
    width: '320px',
    height: '320px',
    background: 'rgba(168, 85, 247, 0.1)',
    animationDelay: '2s',
  },

  particlesContainer: {
    position: 'absolute',
    inset: '0',
    zIndex: 2,
  },

  particle: {
    position: 'absolute',
    width: '4px',
    height: '4px',
    background: 'rgba(59, 130, 246, 0.3)',
    borderRadius: '50%',
    animation: 'float 6s ease-in-out infinite',
  },

  contentWrapper: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1152px',
    margin: '0 auto',
    padding: '80px 16px',
  },

  headerSection: {
    textAlign: 'center',
    marginBottom: '64px',
  },

  headerTitleContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px',
  },

  titleIcon: {
    width: '48px',
    height: '48px',
    background: 'linear-gradient(135deg, #fbbf24 0%, #3b82f6 100%)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
  },

  mainTitle: {
    fontSize: 'clamp(3rem, 8vw, 7rem)',
    fontWeight: '900',
    background: 'linear-gradient(135deg, #fbbf24 0%, #60a5fa 50%, #a855f7 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: '0',
  },

  titleUnderline: {
    width: '96px',
    height: '4px',
    background: 'linear-gradient(90deg, #fbbf24 0%, #3b82f6 100%)',
    margin: '0 auto',
    borderRadius: '9999px',
  },

  mainContentGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '48px',
    alignItems: 'start',
  },

  mainContentGridLarge: {
    gridTemplateColumns: '1fr 1fr',
  },

  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },

  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },

  contentCard: {
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  cardInner: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '32px',
    transition: 'all 0.5s ease',
  },

  cardInnerHover: {
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'scale(1.02)',
    boxShadow: '0 25px 50px rgba(59, 130, 246, 0.2)',
  },

  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px',
  },

  cardIcon: {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'transform 0.3s ease',
    fontSize: '32px',
  },

  storyIcon: {
    background: 'linear-gradient(135deg, #fbbf24 0%, #3b82f6 100%)',
  },

  missionIcon: {
    background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
  },

  commitmentIcon: {
    background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
  },

  featuresIcon: {
    background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
  },

  erpIcon: {
    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
  },

  cardTitleSection: {
    flex: '1',
  },

  cardTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1e293b', // Changed from white to dark color
    margin: '0 0 4px 0',
  },

  cardUnderline: {
    width: '48px',
    height: '4px',
    borderRadius: '9999px',
  },

  storyUnderline: {
    background: 'linear-gradient(90deg, #fbbf24 0%, #3b82f6 100%)',
  },

  missionUnderline: {
    background: 'linear-gradient(90deg, #a855f7 0%, #ec4899 100%)',
  },

  commitmentUnderline: {
    background: 'linear-gradient(90deg, #fbbf24 0%, #f97316 100%)',
  },

  featuresUnderline: {
    background: 'linear-gradient(90deg, #10b981 0%, #3b82f6 100%)',
  },

  erpUnderline: {
    background: 'linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%)',
  },

  cardContent: {
    color: '#374151', // Changed from light gray to darker gray
    lineHeight: '1.75',
    fontSize: '18px',
    margin: '0',
  },

  highlightYellow: {
    color: '#d97706', // Changed to darker yellow
    fontWeight: '700',
  },

  highlightBlue: {
    color: '#2563eb', // Changed to darker blue
    fontWeight: '700',
  },

  highlightCyan: {
    color: '#0891b2', // Changed to darker cyan
    fontWeight: '700',
  },

  missionCard: {
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
    border: '1px solid rgba(59, 130, 246, 0.2)',
  },

  commitmentCard: {
    background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)',
    border: '1px solid rgba(251, 191, 36, 0.2)',
  },

  erpCard: {
    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
    border: '1px solid rgba(6, 182, 212, 0.2)',
  },

  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    padding: '16px',
    borderRadius: '16px',
    transition: 'all 0.3s ease',
  },

  featureItemHover: {
    background: 'rgba(255, 255, 255, 0.05)',
  },

  featureIcon: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 100%)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'transform 0.3s ease',
    fontSize: '18px',
  },

  featureText: {
    color: '#4b5563', // Changed from light gray to darker gray
    lineHeight: '1.75',
    margin: '0',
  },

  ctaCard: {
    background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
    border: '1px solid rgba(251, 191, 36, 0.3)',
    textAlign: 'center',
  },

  ctaInner: {
    textAlign: 'center',
  },

  ctaIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },

  ctaTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#d97706', // Changed to darker yellow
    margin: '0 0 16px 0',
  },

  ctaContent: {
    color: '#4b5563', // Changed from light gray to darker gray
    margin: '0 0 24px 0',
    lineHeight: '1.75',
  },

  ctaHighlight: {
    color: '#1e293b', // Changed from white to dark color
    fontWeight: '700',
  },

  ctaButton: {
    position: 'relative',
    background: 'linear-gradient(90deg, #fbbf24 0%, #3b82f6 100%)',
    color: '#1e293b',
    padding: '16px 32px',
    borderRadius: '16px',
    fontWeight: '700',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
  },

  ctaButtonHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 25px 50px rgba(251, 191, 36, 0.25)',
  },

  buttonText: {
    position: 'relative',
    zIndex: 10,
  },

  buttonOverlay: {
    position: 'absolute',
    inset: '0',
    background: 'linear-gradient(90deg, #fde047 0%, #60a5fa 100%)',
    borderRadius: '16px',
    opacity: '0',
    transition: 'opacity 0.3s ease',
  },

  statsSection: {
    marginTop: '80px',
  },

  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
  },

  statsGridMd: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },

  statCard: {
    transition: 'all 0.5s ease',
  },

  statInner: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '24px',
    textAlign: 'center',
    transition: 'all 0.5s ease',
  },

  statInnerHover: {
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'scale(1.05)',
    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
  },

  statIcon: {
    fontSize: '48px',
    marginBottom: '12px',
    transition: 'transform 0.3s ease',
  },

  statNumber: {
    fontSize: '48px',
    fontWeight: '900',
    background: 'linear-gradient(90deg, #fbbf24 0%, #3b82f6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: '0 0 8px 0',
  },

  statLabel: {
    color: '#6b7280', // Changed from light gray to darker gray
    fontWeight: '500',
    margin: '0',
  },

  // Responsive styles
  mobilePadding: {
    padding: '40px 16px',
  },

  mobileCardPadding: {
    padding: '24px',
  },

  mobileCardHeader: {
    flexDirection: 'column',
    textAlign: 'center',
    gap: '12px',
  },

  mobileFeatureItem: {
    flexDirection: 'column',
    textAlign: 'center',
    gap: '12px',
  },

  mobileStatsGrid: {
    gap: '16px',
  },

  mobileStatInner: {
    padding: '20px',
  },

  mobileStatNumber: {
    fontSize: '36px',
  },
};

function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, []);

  const getCardStyle = (cardType: string, isHovered: boolean) => {
    const baseStyle = { ...styles.cardInner };
    
    if (cardType === 'mission') {
      Object.assign(baseStyle, styles.missionCard);
    } else if (cardType === 'commitment') {
      Object.assign(baseStyle, styles.commitmentCard);
    } else if (cardType === 'erp') {
      Object.assign(baseStyle, styles.erpCard);
    } else if (cardType === 'cta') {
      Object.assign(baseStyle, styles.ctaCard);
    }

    if (isHovered) {
      Object.assign(baseStyle, styles.cardInnerHover);
    }

    if (isMobile) {
      Object.assign(baseStyle, styles.mobileCardPadding);
    }

    return baseStyle;
  };

  const getFeatureItemStyle = (index: number) => {
    const baseStyle = { ...styles.featureItem };
    
    if (hoveredFeature === index) {
      Object.assign(baseStyle, styles.featureItemHover);
    }
    
    if (isMobile) {
      Object.assign(baseStyle, styles.mobileFeatureItem);
    }
    
    return baseStyle;
  };

  const getButtonStyle = () => {
    const baseStyle = { ...styles.ctaButton };
    
    if (hoveredButton) {
      Object.assign(baseStyle, styles.ctaButtonHover);
    }
    
    return baseStyle;
  };

  return (
    <div style={styles.aboutContainer}>
      {/* Animated Background Elements */}
      <div style={styles.backgroundElements}>
        <div style={{ ...styles.bgBlob, ...styles.bgBlob1 }}></div>
        <div style={{ ...styles.bgBlob, ...styles.bgBlob2 }}></div>
        <div style={{ ...styles.bgBlob, ...styles.bgBlob3 }}></div>
      </div>

      {/* Floating Particles */}
      <div style={styles.particlesContainer}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.particle,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div 
        ref={containerRef} 
        style={{
          ...styles.contentWrapper,
          ...(isMobile ? styles.mobilePadding : {})
        }}
      >
        {/* Header Section */}
        <div className="animate-on-scroll" style={styles.headerSection}>
          <div style={styles.headerTitleContainer}>
           
            <h1 style={styles.mainTitle}>About Us</h1>
          </div>
          <div style={styles.titleUnderline}></div>
        </div>

        {/* Main Content Grid */}
        <div style={{
          ...styles.mainContentGrid,
          ...(!isMobile ? styles.mainContentGridLarge : {})
        }}>
          {/* Left Column - Text Content */}
          <div style={styles.leftColumn}>
            {/* Introduction Card */}
            <div 
              className="animate-on-scroll" 
              style={styles.contentCard}
              onMouseEnter={() => setHoveredCard('intro')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={getCardStyle('intro', hoveredCard === 'intro')}>
                <div style={{
                  ...styles.cardHeader,
                  ...(isMobile ? styles.mobileCardHeader : {})
                }}>
                  <div style={{
                    ...styles.cardIcon,
                    ...styles.storyIcon,
                    transform: hoveredCard === 'intro' ? 'rotate(12deg)' : 'rotate(0deg)'
                  }}>
                    <span>🎯</span>
                  </div>
                  <div style={styles.cardTitleSection}>
                    <h2 style={styles.cardTitle}>Our Story</h2>
                    <div style={{ ...styles.cardUnderline, ...styles.storyUnderline }}></div>
                  </div>
                </div>
                <p style={styles.cardContent}>
                  At <span style={styles.highlightYellow}>QUNO CAMPUS</span>, we believe that every student deserves education that is personalized, engaging, and accessible. Founded in 2023 by <span style={styles.highlightBlue}>Muhammad Usman Ashfaq</span>, QUNO CAMPUS was established with a vision to transform traditional learning into a modern, student-centric experience.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div 
              className="animate-on-scroll" 
              style={styles.contentCard}
              onMouseEnter={() => setHoveredCard('mission')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={getCardStyle('mission', hoveredCard === 'mission')}>
                <div style={{
                  ...styles.cardHeader,
                  ...(isMobile ? styles.mobileCardHeader : {})
                }}>
                  <div style={{
                    ...styles.cardIcon,
                    ...styles.missionIcon,
                    transform: hoveredCard === 'mission' ? 'rotate(12deg)' : 'rotate(0deg)'
                  }}>
                    <span>🚀</span>
                  </div>
                  <div style={styles.cardTitleSection}>
                    <h2 style={styles.cardTitle}>Our Mission</h2>
                    <div style={{ ...styles.cardUnderline, ...styles.missionUnderline }}></div>
                  </div>
                </div>
                <p style={styles.cardContent}>
                  Our mission is to empower students not only to excel academically but also to develop the practical skills necessary to thrive in today's competitive world. We offer skill-based courses such as <span style={styles.highlightYellow}>Python, C++</span>, and more.
                </p>
              </div>
            </div>

            {/* Commitment Card */}
            <div 
              className="animate-on-scroll" 
              style={styles.contentCard}
              onMouseEnter={() => setHoveredCard('commitment')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={getCardStyle('commitment', hoveredCard === 'commitment')}>
                <div style={{
                  ...styles.cardHeader,
                  ...(isMobile ? styles.mobileCardHeader : {})
                }}>
                  <div style={{
                    ...styles.cardIcon,
                    ...styles.commitmentIcon,
                    transform: hoveredCard === 'commitment' ? 'rotate(12deg)' : 'rotate(0deg)'
                  }}>
                    <span>💪</span>
                  </div>
                  <div style={styles.cardTitleSection}>
                    <h2 style={styles.cardTitle}>Our Commitment</h2>
                    <div style={{ ...styles.cardUnderline, ...styles.commitmentUnderline }}></div>
                  </div>
                </div>
                <p style={styles.cardContent}>
                  We are committed to creating a supportive and inspiring educational environment that adapts to each learner's pace and goals. Whether you're preparing for high-stakes exams or exploring programming skills, QUNO CAMPUS provides the tools, mentorship, and support to help you succeed.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Features & Stats */}
          <div style={styles.rightColumn}>
            {/* What Makes Us Different */}
            <div 
              className="animate-on-scroll"
              onMouseEnter={() => setHoveredCard('features')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={getCardStyle('features', hoveredCard === 'features')}>
                <div style={{
                  ...styles.cardHeader,
                  ...(isMobile ? styles.mobileCardHeader : {})
                }}>
                  <div style={{
                    ...styles.cardIcon,
                    ...styles.featuresIcon,
                    transform: hoveredCard === 'features' ? 'rotate(12deg)' : 'rotate(0deg)'
                  }}>
                    <span>✨</span>
                  </div>
                  <div style={styles.cardTitleSection}>
                    <h2 style={styles.cardTitle}>What Makes Us Different?</h2>
                    <div style={{ ...styles.cardUnderline, ...styles.featuresUnderline }}></div>
                  </div>
                </div>
                
                <div style={styles.featuresList}>
                  {[
                    { icon: "🕐", text: "24/7 free trial session booking to experience our unique teaching approach" },
                    { icon: "📊", text: "Daily lectures to build consistent understanding" },
                    { icon: "📝", text: "Weekly tests to monitor progress and reinforce learning" },
                    { icon: "👥", text: "Monthly Parent-Teacher Meetings (PTMs) for transparent communication" },
                    { icon: "📈", text: "Automated feedback and progress reports shared regularly with parents" }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      style={getFeatureItemStyle(index)}
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <div style={{
                        ...styles.featureIcon,
                        transform: hoveredFeature === index ? 'scale(1.1)' : 'scale(1)'
                      }}>
                        <span>{item.icon}</span>
                      </div>
                      <p style={styles.featureText}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ERP Portal Info */}
            <div 
              className="animate-on-scroll"
              onMouseEnter={() => setHoveredCard('erp')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={getCardStyle('erp', hoveredCard === 'erp')}>
                <div style={{
                  ...styles.cardHeader,
                  ...(isMobile ? styles.mobileCardHeader : {})
                }}>
                  <div style={{
                    ...styles.cardIcon,
                    ...styles.erpIcon,
                    transform: hoveredCard === 'erp' ? 'rotate(12deg)' : 'rotate(0deg)'
                  }}>
                    <span>💻</span>
                  </div>
                  <div style={styles.cardTitleSection}>
                    <h2 style={styles.cardTitle}>ERP Portal</h2>
                    <div style={{ ...styles.cardUnderline, ...styles.erpUnderline }}></div>
                  </div>
                </div>
                <p style={styles.cardContent}>
                  Through our dedicated <span style={styles.highlightCyan}>ERP portal</span>, students gain access to personalized schedules, lecture resources, academic planners, and progress tracking tools — ensuring a smooth and organized learning experience.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div 
              className="animate-on-scroll"
              onMouseEnter={() => setHoveredCard('cta')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{ ...getCardStyle('cta', hoveredCard === 'cta'), ...styles.ctaInner }}>
                <div style={styles.ctaIcon}>📌</div>
                <h3 style={styles.ctaTitle}>Join the QUNO CAMPUS Community</h3>
                <p style={styles.ctaContent}>
                  Experience the future of learning — <span style={styles.ctaHighlight}>book your free trial session today</span>, and start your journey toward academic success and personal growth with QUNO CAMPUS.
                </p>
                <button 
                  style={getButtonStyle()}
                  onMouseEnter={() => setHoveredButton(true)}
                  onMouseLeave={() => setHoveredButton(false)}
                >
                  <span style={styles.buttonText}>Start Your Free Trial</span>
                  <div style={{
                    ...styles.buttonOverlay,
                    opacity: hoveredButton ? '1' : '0'
                  }}></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="animate-on-scroll" style={styles.statsSection}>
          <div style={{
            ...styles.statsGrid,
            ...(isMobile ? styles.mobileStatsGrid : styles.statsGridMd)
          }}>
            {[
              { number: "1000+", label: "Students Taught", icon: "👨‍🎓" },
              { number: "95%", label: "Success Rate", icon: "🎯" },
              { number: "24/7", label: "Support", icon: "💬" },
              { number: "50+", label: "Expert Tutors", icon: "👨‍🏫" }
            ].map((stat, index) => (
              <div 
                key={index} 
                style={styles.statCard}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div style={{
                  ...styles.statInner,
                  ...(hoveredStat === index ? styles.statInnerHover : {}),
                  ...(isMobile ? styles.mobileStatInner : {})
                }}>
                  <div style={{
                    ...styles.statIcon,
                    transform: hoveredStat === index ? 'scale(1.1)' : 'scale(1)'
                  }}>{stat.icon}</div>
                  <div style={{
                    ...styles.statNumber,
                    ...(isMobile ? styles.mobileStatNumber : {})
                  }}>{stat.number}</div>
                  <div style={styles.statLabel}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
       
       
      </div>
    </div>
  );
}

export default About;