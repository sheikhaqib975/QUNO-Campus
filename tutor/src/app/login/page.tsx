'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

const Login: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Logged in successfully!');
    router.push('/');
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(45deg); }
        50% { transform: translateY(-20px) rotate(45deg); }
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.6; transform: scale(1.1); }
      }
      
      input:focus {
        border-color: #0000FF !important;
        box-shadow: 0 0 0 3px rgba(0, 0, 255, 0.1) !important;
        background: white !important;
      }
      
      button:hover .buttonArrow {
        transform: translateX(4px);
      }
      
      .socialButton:hover {
        border-color: #cbd5e0;
        background: #f7fafc;
        transform: translateY(-1px);
      }
      
      .signupLink:hover {
        color: #4169E1;
      }
      
      .forgotLink:hover {
        color: #4169E1;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={styles.pageWrapper}>
      {/* Background decorative elements */}
      <div style={styles.backgroundDecoration1}></div>
      <div style={styles.backgroundDecoration2}></div>
      <div style={styles.backgroundDecoration3}></div>
      
      <div style={styles.formContainer}>
        {/* Logo/Brand area */}
        <div style={styles.brandSection}>
          {/* <div style={styles.logoCircle}> */}
           <img src="images/qunologo.png" alt="logo" style={{width:"60px",height:"60px"}} />
          {/* </div> */}
          <h2 style={styles.heading}>Welcome Back</h2>
          <p style={styles.subheading}>Sign in to your QUNO Campus account</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <div style={styles.inputWrapper}>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter your email"
              />
           
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputWrapper}>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter your password"
              />
              
            </div>
          </div>

          <div style={styles.forgotPasswordSection}>
            <Link href="/forgot-password" style={styles.forgotLink}>
              Forgot Password?
            </Link>
          </div>

          <button 
            type="submit" 
            style={{
              ...styles.submitButton,
              ...(isHovered ? styles.submitButtonHover : {})
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span style={styles.buttonText}>Sign In</span>
            <span style={styles.buttonArrow}>→</span>
          </button>
        </form>

        {/* <div style={styles.divider}>
          <span style={styles.dividerText}>or</span>
        </div> */}

        {/* <div style={styles.socialSection}>
          <button style={styles.socialButton}>
            <span style={styles.socialIcon}>G</span>
            Continue with Google
          </button>
        </div> */}

        <p style={styles.signupText}>
          Don't have an account?{' '}
          <Link href="/signup" style={styles.signupLink}>
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  pageWrapper: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    position: 'relative',
    overflow: 'hidden',
  },

  backgroundDecoration1: {
    position: 'absolute',
    top: '-50%',
    left: '-20%',
    width: '600px',
    height: '600px',
    // background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
    borderRadius: '50%',
    transform: 'rotate(45deg)',
    animation: 'float 6s ease-in-out infinite',
  },

  backgroundDecoration2: {
    position: 'absolute',
    bottom: '-30%',
    right: '-10%',
    width: '400px',
    height: '400px',
    // background: 'linear-gradient(-45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
    borderRadius: '50%',
    animation: 'float 8s ease-in-out infinite reverse',
  },

  backgroundDecoration3: {
    position: 'absolute',
    top: '20%',
    right: '10%',
    width: '150px',
    height: '150px',
    // background: 'rgba(255,255,255,0.1)',
    borderRadius: '50%',
    animation: 'pulse 4s ease-in-out infinite',
  },

  formContainer: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    padding: '40px',
    borderRadius: '24px',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2)',
    width: '100%',
    maxWidth: '420px',
    position: 'relative',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },

  brandSection: {
    textAlign: 'center',
    marginBottom: '32px',
  },

  logoCircle: {
    width: '64px',
    height: '64px',
    background: 'linear-gradient(135deg, #0000FF, #4169E1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px auto',
    boxShadow: '0 8px 20px rgba(65, 105, 225, 0.4)',
  },

  logoText: {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'Roboto, sans-serif',
  },

  heading: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#1a202c',
    marginBottom: '8px',
    fontFamily: 'Roboto, sans-serif',
  },

  subheading: {
    fontSize: '16px',
    color: '#718096',
    fontFamily: 'Roboto, sans-serif',
    margin: 0,
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },

  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },

  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#2d3748',
    fontFamily: 'Roboto, sans-serif',
  },

  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },

  input: {
    width: '100%',
    padding: '16px 48px 16px 16px',
    borderRadius: '12px',
    border: '2px solid #e2e8f0',
    fontSize: '16px',
    fontFamily: 'Roboto, sans-serif',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
    background: '#f7fafc',
  },

  inputIcon: {
    position: 'absolute',
    right: '16px',
    fontSize: '18px',
    color: '#a0aec0',
  },

  forgotPasswordSection: {
    textAlign: 'right',
    marginTop: '-8px',
  },

  forgotLink: {
    fontSize: '14px',
    color: '#0000FF',
    textDecoration: 'none',
    fontWeight: '500',
    fontFamily: 'Roboto, sans-serif',
  },

  submitButton: {
    width: '100%',
    padding: '16px 24px',
    backgroundColor: 'yellow',
    color: 'black',
    border: '2px solid black',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: 'Roboto, sans-serif',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    boxShadow: '0 4px 15px rgba(65, 105, 225, 0.4)',
    position: 'relative',
    overflow: 'hidden',
  },

  submitButtonHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(65, 105, 225, 0.5)',
  },

  buttonText: {
    fontSize: '16px',
  },

  buttonArrow: {
    fontSize: '18px',
    transition: 'transform 0.3s ease',
  },

  divider: {
    display: 'flex',
    alignItems: 'center',
    margin: '24px 0',
    position: 'relative',
  },

  dividerText: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '0 16px',
    fontSize: '14px',
    color: '#718096',
    fontFamily: 'Roboto, sans-serif',
  },

  socialSection: {
    marginBottom: '24px',
  },

  socialButton: {
    width: '100%',
    padding: '14px',
    background: 'white',
    border: '2px solid #e2e8f0',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '500',
    fontFamily: 'Roboto, sans-serif',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    color: '#2d3748',
  },

  socialIcon: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#4285f4',
  },

  signupText: {
    textAlign: 'center',
    fontSize: '15px',
    color: '#4a5568',
    fontFamily: 'Roboto, sans-serif',
    marginTop: '16px',
  },

  signupLink: {
    color: '#0000FF',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'color 0.3s ease',
  },
};

export default Login;
