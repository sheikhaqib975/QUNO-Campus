'use client';

import Image from 'next/image';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import email from '../assets/images/email.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import linkedin from '../assets/images/linkedin.png';
import phone from '../assets/images/phone.png';
import twitter from '../assets/images/twitter.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [testPrepDropdown, setTestPrepDropdown] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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
              onClick={() => router.push('/')}
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
          <Link 
            href="/" 
            style={{
              ...styles.link,
              color: pathname === '/' ? '#2563eb' : '#374151'
            }}
          >
            Home
          </Link>
          <Link 
            href="/courses" 
            style={{
              ...styles.link,
              color: pathname === '/courses' ? '#2563eb' : '#374151'
            }}
          >
            Courses
          </Link>
          <div
            style={styles.dropdownContainer}
            onMouseEnter={() => setTestPrepDropdown(true)}
            onMouseLeave={() => setTestPrepDropdown(false)}
          >
            <span style={{
              ...styles.link,
              color: (pathname === '/sat' || pathname === '/gre') ? '#2563eb' : '#374151'
            }}>
              Test Prep
              <span style={styles.dropdownArrow}>▼</span>
            </span>
            {testPrepDropdown && (
              <div style={styles.dropdown}>
                <Link 
                  href="/sat" 
                  style={styles.dropdownItem}
                  onClick={() => setTestPrepDropdown(false)}
                >
                  SAT/ACT
                </Link>
                <Link 
                  href="/gre" 
                  style={styles.dropdownItem}
                  onClick={() => setTestPrepDropdown(false)}
                >
                  NAPLAN
                </Link>
              </div>
            )}
          </div>
          <Link 
            href="/about" 
            style={{
              ...styles.link,
              color: pathname === '/about' ? '#2563eb' : '#374151'
            }}
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            style={{
              ...styles.link,
              color: pathname === '/contact' ? '#2563eb' : '#374151'
            }}
          >
            Contact
          </Link>
        </div>

        {/* Right Section - Fixed Login Navigation */}
        <div className="desktop-nav" style={styles.rightSection}>
          <Link href="/trial" style={styles.freeTrialButton}>
            Free Trial
          </Link>
          <Link 
            href="/login" 
            style={{
              ...styles.link,
              color: pathname === '/login' ? '#2563eb' : '#374151'
            }}
            onClick={(e) => {
              e.stopPropagation();
              setTestPrepDropdown(false);
            }}
          >
            Login
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="mobile-nav" style={{
          ...styles.mobileNav,
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
        }}>
          <Link 
            href="/" 
            style={styles.mobileLink} 
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/courses" 
            style={styles.mobileLink} 
            onClick={() => setOpen(false)}
          >
            Courses
          </Link>
          <div style={styles.mobileDropdownContainer}>
            <span 
              style={styles.mobileLink}
              onClick={() => router.push('/test-prep')}
            >
              Test Prep
            </span>
            <div style={styles.mobileDropdown}>
              <Link 
                href="/sat" 
                style={styles.mobileDropdownItem}
                onClick={() => setOpen(false)}
              >
                SAT/ACT
              </Link>
              <Link 
                href="/gre" 
                style={styles.mobileDropdownItem}
                onClick={() => setOpen(false)}
              >
                NAPLAN
              </Link>
            </div>
          </div>
          <Link 
            href="/about" 
            style={styles.mobileLink} 
            onClick={() => setOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            style={styles.mobileLink} 
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Link 
            href="/login" 
            style={styles.mobileLink} 
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            style={styles.mobileLink} 
            onClick={() => setOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 100,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    zIndex: 101,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
  },
  logoImage: {
    objectFit: 'contain',
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
    position: 'relative',
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
    gap: '1.5rem',
    position: 'relative',
    zIndex: 1002,
  },
  freeTrialButton: {
    backgroundColor: '#FFD700',
    color: 'black',
    padding: '0.5rem 1.25rem',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '0.9rem',
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
    gap: '1.5rem',
    transition: 'all 0.3s ease',
    zIndex: 999,
    paddingTop: '80px',
  },
  mobileLink: {
    textDecoration: 'none',
    color: '#374151',
    fontWeight: '500',
    fontSize: '1.25rem',
    transition: 'color 0.3s ease',
    padding: '0.75rem',
  },
  mobileDropdownContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mobileDropdown: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginTop: '0.5rem',
  },
  mobileDropdownItem: {
    textDecoration: 'none',
    color: '#4b5563',
    fontWeight: '500',
    fontSize: '1rem',
    padding: '0.5rem 1rem',
  },
};

export default Header;