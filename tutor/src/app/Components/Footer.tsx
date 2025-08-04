import email from '../assets/images/email.png';
import phone from '../assets/images/phone.png';
import facebook from '../assets/images/facebook.png';
import linkedin from '../assets/images/linkedin.png';

function Footer() {
  return (
    <div style={styles.footer}>
      {/* Call to Action Section */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready to Transform Your Academic Journey?</h2>
          <p style={styles.ctaSubtitle}>
            Join thousands of students who have improved their grades and confidence with our personalized tutoring approach.
          </p>
          <div style={styles.ctaButtons}>
            <button style={styles.ctaPrimaryButton}>Start Your Free Trial</button>
            <button style={styles.ctaSecondaryButton}>Schedule a Demo</button>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div style={styles.footerContent}>
        <div style={styles.footerColumn}>
          <div style={styles.footerLogo}>
            <span style={styles.logoIcon}>📚</span>
            <span style={styles.logoText}>QUNO CAMPUS</span>
          </div>
          <p style={styles.footerDescription}>
            Empowering students to achieve academic excellence through personalized tutoring and expert guidance.
          </p>
                     <div style={styles.socialIcons}>
             <img src={email.src} alt="Email" style={styles.socialIcon} />
             <img src={phone.src} alt="Phone" style={styles.socialIcon} />
             <img src={facebook.src} alt="Facebook" style={styles.socialIcon} />
             <img src={linkedin.src} alt="LinkedIn" style={styles.socialIcon} />
           </div>
        </div>
        
        <div style={styles.footerColumn}>
          <h3 style={styles.footerTitle}>Our Services</h3>
          <ul style={styles.footerList}>
            <li style={styles.footerItem}>→ One-on-One Tutoring</li>
            <li style={styles.footerItem}>→ Assignment Help</li>
            <li style={styles.footerItem}>→ Paper Writing Support</li>
            <li style={styles.footerItem}>→ Test Preparation</li>
          </ul>
        </div>
        
        <div style={styles.footerColumn}>
          <h3 style={styles.footerTitle}>Quick Links</h3>
          <ul style={styles.footerList}>
            <li style={styles.footerItem}>→ About Us</li>
            <li style={styles.footerItem}>→ Our Tutors</li>
            <li style={styles.footerItem}>→ Success Stories</li>
            <li style={styles.footerItem}>→ Contact Us</li>
          </ul>
        </div>
        
        <div style={styles.footerColumn}>
          <h3 style={styles.footerTitle}>Get In Touch</h3>
                     <div style={styles.contactInfo}>
             <div style={styles.contactItem}>
               <img src={email.src} alt="Email" style={styles.contactIcon} />
               <span>qunocampus@gmail.com</span>
             </div>
             <div style={styles.contactItem}>
               <img src={phone.src} alt="Phone" style={styles.contactIcon} />
               <span>+92 347 1684085 (WhatsApp)</span>
             </div>
             <div style={styles.contactItem}>
               <img src={linkedin.src} alt="LinkedIn" style={styles.contactIcon} />
               <span>LinkedIn</span>
             </div>
           </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div style={styles.newsletterSection}>
        <h3 style={styles.newsletterTitle}>Stay Updated with Learning Tips!</h3>
        <p style={styles.newsletterSubtitle}>
          Get weekly study tips, academic insights, and exclusive offers.
        </p>
        <div style={styles.newsletterForm}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            style={styles.newsletterInput}
          />
          <button style={styles.newsletterButton}>Subscribe</button>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={styles.copyrightSection}>
        <div style={styles.copyrightContent}>
          <div style={styles.copyrightText}>
            © 2025 QUNO CAMPUS. All rights reserved.
          </div>
          <div style={styles.legalLinks}>
            <span style={styles.legalLink}>Privacy Policy</span>
            <span style={styles.legalLink}>Terms of Service</span>
            <span style={styles.legalLink}>Cookie Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: '#0f172a',
    color: 'white',
    fontFamily: 'Roboto, sans-serif',
  },
  ctaSection: {
    backgroundColor: '#1e3a8a',
    color: 'white',
    padding: '2rem 1rem',
    textAlign: 'center' as const,
  },
  ctaContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  ctaTitle: {
    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
    fontWeight: 'bold',
    marginBottom: '1rem',
    lineHeight: '1.2',
  },
  ctaSubtitle: {
    fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
    marginBottom: '1.5rem',
    lineHeight: '1.6',
    opacity: 0.95,
  },
  ctaButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  ctaPrimaryButton: {
    backgroundColor: 'white',
    color: '#1e3a8a',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  ctaSecondaryButton: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    padding: '3rem 2rem',
  },
  footerColumn: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  footerLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  logoIcon: {
    fontSize: '2rem',
  },
  logoText: {
    color: 'white',
  },
  footerDescription: {
    color: '#cbd5e1',
    lineHeight: '1.6',
    fontSize: '0.95rem',
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
  },
  socialIcon: {
    width: '20px',
    height: '20px',
    backgroundColor: '#1e3a8a',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    objectFit: 'contain',
    padding: '8px',
  },
  footerTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  footerList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  footerItem: {
    color: '#cbd5e1',
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#cbd5e1',
    fontSize: '0.9rem',
  },
  contactIcon: {
    width: '20px',
    height: '20px',
    objectFit: 'contain',
  },
  newsletterSection: {
    backgroundColor: '#1e3a8a',
    padding: '2rem',
    textAlign: 'center' as const,
  },
  newsletterTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  newsletterSubtitle: {
    color: '#e2e8f0',
    marginBottom: '1.5rem',
    fontSize: '1rem',
  },
  newsletterForm: {
    display: 'flex',
    flexDirection: 'row' as const,
    gap: '1rem',
    justifyContent: 'center',
    maxWidth: '500px',
    margin: '0 auto',
    flexWrap: 'wrap',
  },
  newsletterInput: {
    flex: 1,
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
    minWidth: '200px',
  },
  newsletterButton: {
    backgroundColor: 'white',
    color: '#1e3a8a',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  copyrightSection: {
    backgroundColor: '#0f172a',
    padding: '1rem 2rem',
    borderTop: '1px solid #334155',
  },
  copyrightContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  copyrightText: {
    color: '#cbd5e1',
    fontSize: '0.9rem',
  },
  legalLinks: {
    display: 'flex',
    gap: '2rem',
  },
  legalLink: {
    color: '#cbd5e1',
    fontSize: '0.9rem',
    cursor: 'pointer',
  },
};

export default Footer;  
