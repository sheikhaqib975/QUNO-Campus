'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

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
        }

        @media (max-width: 767px) {
          .mobile-menu-button {
            display: flex !important;
          }
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>

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
          <Link href="/about" style={styles.link}>About</Link>
          <Link href="/services" style={styles.link}>Services</Link>
          <Link href="/contact" style={styles.link}>Contact</Link>
        </div>

        {/* Mobile Navigation */}
        <div className="mobile-nav" style={{
          ...styles.mobileNav,
          transform: open ? 'translateX(0)' : 'translateX(-100%)',
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
        }}>
          <Link href="/" style={styles.mobileLink} onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" style={styles.mobileLink} onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" style={styles.mobileLink} onClick={() => setOpen(false)}>Services</Link>
          <Link href="/contact" style={styles.mobileLink} onClick={() => setOpen(false)}>Contact</Link>
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
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
   
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
    fontWeight: 'bold',
    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
    color: '#1e3a8a',
    marginLeft: '0.5rem',
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
};

export default Header;
