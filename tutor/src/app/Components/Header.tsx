'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import email from '../assets/images/email.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import linkedin from '../assets/images/linkedin.png';
import phone from '../assets/images/phone.png';
import twitter from '../assets/images/twitter.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [testPrepDropdown, setTestPrepDropdown] = useState(false);

  return (
    <>
      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-button,
          .mobile-nav {
            display: none !important;
          }
          .top-bar-desktop {
            display: flex !important;
          }
          .top-bar-mobile {
            display: none !important;
          }
        }

        @media (max-width: 767px) {
          .mobile-menu-button {
            display: flex !important;
          }
          .desktop-nav {
            display: none !important;
          }
          .top-bar-desktop {
            display: none !important;
          }
          .top-bar-mobile {
            display: flex !important;
          }
        }
      `}</style>

      {/* Top Information Bar - Desktop */}
      <div className="top-bar-desktop" style={styles.topBar}>
        <div style={styles.topBarContent}>
          <div style={styles.topBarLeft}>
            <div style={styles.contactInfo}>
            <Image src={phone} alt="Phone" width={18} height={18} style={styles.socialIcon} />
              <span style={styles.contactText}> +92 352 8058830</span>
            </div>
            <div style={styles.contactInfo}>
            <Image src={email} alt="Email" width={18} height={18} style={styles.socialIcon} />
              <span style={styles.contactText}>support@yourcloudcampus.com</span>
            </div>
          </div>
          <div style={styles.topBarCenter}>
            <span style={styles.centerText}>Get assistance in all main subjects - and many more</span>
          </div>
          <div style={styles.topBarRight}>
            <div style={styles.socialIcons}>
              
             <Image src={twitter} alt="Twitter" width={18} height={18} style={styles.socialIcon} />
             <Image src={instagram} alt="Instagram" width={18} height={18} style={styles.socialIcon} />
             <Image src={linkedin} alt="LinkedIn" width={18} height={18} style={styles.socialIcon} />
             <Image src={facebook} alt="Facebook" width={18} height={18} style={styles.socialIcon} />
             
            </div>
          </div>
        </div>
      </div>

      {/* Top Information Bar - Mobile */}
      <div className="top-bar-mobile" style={styles.topBarMobile}>
        <div style={styles.topBarContentMobile}>
          <div style={styles.topBarLeftMobile}>
            <div style={styles.contactInfoMobile}>
              <span style={styles.contactTextMobile}>📞 +971 52 8058830</span>
            </div>
            <div style={styles.contactInfoMobile}>
              <span style={styles.contactTextMobile}>✉️ support@yourcloudcampus.com</span>
            </div>
          </div>
          <div style={styles.topBarCenterMobile}>
            <span style={styles.centerTextMobile}>Get assistance in all main subjects</span>
          </div>
          <div style={styles.topBarRightMobile}>
            <div style={styles.socialIconsMobile}>
              <span style={styles.socialIconMobile}>📘</span>
              <span style={styles.socialIconMobile}>🐦</span>
              <span style={styles.socialIconMobile}>📷</span>
              <span style={styles.socialIconMobile}>💼</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <div style={styles.logoContainer}>
            <Image 
              src="/qunologo.png" 
              alt="QUNO Logo" 
              width={40} 
              height={40}
              style={styles.logoImage}
            />
           
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button" style={styles.mobileMenuButton} onClick={() => setOpen(!open)}>
          <div style={styles.hamburger}>
            <span style={styles.hamburgerLine}></span>
            <span style={styles.hamburgerLine}></span>
            <span style={styles.hamburgerLine}></span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={styles.navLinks}>
          <Link href="/" style={styles.link}>Home</Link>
          <Link href="/courses" style={styles.link}>Courses</Link>
          <div 
            style={styles.dropdownContainer}
            onMouseEnter={() => setTestPrepDropdown(true)}
            onMouseLeave={() => setTestPrepDropdown(false)}
          >
            <Link href="/test-prep" style={styles.link}>
              Test Prep
              <span style={styles.dropdownArrow}>▼</span>
            </Link>
            {testPrepDropdown && (
              <div style={styles.dropdown}>
                <Link href="/sat" style={styles.dropdownItem}>SAT</Link>
                <Link href="/act" style={styles.dropdownItem}>ACT</Link>
                <Link href="/gre" style={styles.dropdownItem}>GRE</Link>
                <Link href="/gmat" style={styles.dropdownItem}>GMAT</Link>
              </div>
            )}
          </div>
          <Link href="/about" style={styles.link}>About Us</Link>
          <Link href="/blogs" style={styles.link}>Blogs</Link>
          <Link href="/contact" style={styles.link}>Contact</Link>
        </div>

        {/* Right Side - My Account & Free Trial */}
        <div className="desktop-nav" style={styles.rightSection}>
          <div 
            style={styles.accountDropdown}
            onMouseEnter={() => setAccountDropdown(true)}
            onMouseLeave={() => setAccountDropdown(false)}
          >
            <span style={styles.accountText}>
              My Account
              <span style={styles.dropdownArrow}>▼</span>
            </span>
            {accountDropdown && (
              <div style={styles.dropdown}>
                <Link href="/login" style={styles.dropdownItem}>Login</Link>
                <Link href="/signup" style={styles.dropdownItem}>Sign Up</Link>
              </div>
            )}
          </div>
          <Link href="/trial" style={styles.freeTrialButton}>Free Trial</Link>
        </div>

        {/* Mobile Navigation */}
        <div className="mobile-nav" style={{
          ...styles.mobileNav,
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
        }}>
          <Link href="/" style={styles.mobileLink} onClick={() => setOpen(false)}>Home</Link>
          <Link href="/courses" style={styles.mobileLink} onClick={() => setOpen(false)}>Courses</Link>
          <Link href="/test-prep" style={styles.mobileLink} onClick={() => setOpen(false)}>Test Prep</Link>
          <Link href="/about" style={styles.mobileLink} onClick={() => setOpen(false)}>About Us</Link>
          <Link href="/blogs" style={styles.mobileLink} onClick={() => setOpen(false)}>Blogs</Link>
          <Link href="/contact" style={styles.mobileLink} onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/login" style={styles.mobileLink} onClick={() => setOpen(false)}>Login</Link>
          <Link href="/signup" style={styles.mobileLink} onClick={() => setOpen(false)}>Sign Up</Link>
        </div>
      </nav>
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  topBar: {
    backgroundColor: '#1e3a8a',
    color: 'white',
    padding: '0.5rem 2rem',
    width: '100%',
    display: 'flex',
  },
  topBarContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  topBarLeft: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    minWidth: 'fit-content',
  },
  contactInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  contactIcon: {
    objectFit: 'contain',
  },
  contactText: {
    fontSize: '0.875rem',
    whiteSpace: 'nowrap',
  },
  topBarCenter: {
    flex: 1,
    textAlign: 'center',
    padding: '0 1rem',
  },
  centerText: {
    fontSize: '0.875rem',
  },
  topBarRight: {
    display: 'flex',
    minWidth: 'fit-content',
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
  },
  socialIcon: {
    cursor: 'pointer',
    objectFit: 'contain',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logoImage: {
    objectFit: 'contain',
  },
  brandText: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '0.5rem',
  },
  brandSmall: {
    fontSize: '0.75rem',
    color: '#6b7280',
    fontWeight: 'normal',
  },
  brandMain: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#374151',
  },
  tagline: {
    fontSize: '0.75rem',
    color: '#6b7280',
    marginTop: '0.125rem',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#374151',
    fontWeight: '500',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
  dropdownContainer: {
    position: 'relative',
  },
  dropdownArrow: {
    fontSize: '0.75rem',
    marginLeft: '0.25rem',
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: '0',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    borderRadius: '0.375rem',
    padding: '0.5rem 0',
    minWidth: '150px',
    zIndex: 1000,
  },
  dropdownItem: {
    display: 'block',
    padding: '0.5rem 1rem',
    textDecoration: 'none',
    color: '#374151',
    fontSize: '0.875rem',
    transition: 'background-color 0.2s ease',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  accountDropdown: {
    position: 'relative',
    cursor: 'pointer',
  },
  accountText: {
    color: '#374151',
    fontWeight: '500',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
  freeTrialButton: {
    backgroundColor: 'yellow',
    color: 'black',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.875rem',
    transition: 'background-color 0.3s ease',
  },
  mobileMenuButton: {
    display: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
    padding: '0.5rem',
    zIndex: 1001,
  },
  hamburger: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  hamburgerLine: {
    width: '25px',
    height: '3px',
    backgroundColor: '#1e3a8a',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
  },
  mobileNav: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
    transition: 'all 0.3s ease',
    zIndex: 999,
    paddingTop: '80px',
  },
  mobileLink: {
    textDecoration: 'none',
    color: '#374151',
    fontWeight: '500',
    fontSize: '1.5rem',
    transition: 'color 0.3s ease',
    padding: '1rem',
  },
  topBarMobile: {
    backgroundColor: '#1e3a8a',
    color: 'white',
    padding: '0.5rem 1rem',
    width: '100%',
  },
  topBarContentMobile: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: '1rem',
  },
  topBarLeftMobile: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    minWidth: 'fit-content',
  },
  contactInfoMobile: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  contactIconMobile: {
    objectFit: 'contain',
  },
  contactTextMobile: {
    fontSize: '0.75rem',
  },
  topBarCenterMobile: {
    flex: 1,
    textAlign: 'center',
  },
  centerTextMobile: {
    fontSize: '0.75rem',
    textAlign: 'center',
  },
  topBarRightMobile: {
    display: 'flex',
    minWidth: 'fit-content',
  },
  socialIconsMobile: {
    display: 'flex',
    gap: '0.5rem',
  },
  socialIconMobile: {
    cursor: 'pointer',
    objectFit: 'contain',
  },
};

export default Header;
