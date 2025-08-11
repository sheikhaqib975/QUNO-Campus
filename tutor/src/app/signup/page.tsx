"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";

const Signup: React.FC = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const checkPasswordStrength = (password: string) => {
    if (password.length < 6) return "weak";
    if (password.length >= 6 && password.length < 10) return "medium";
    if (
      password.length >= 10 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password)
    )
      return "strong";
    return "medium";
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      setPasswordStrength(checkPasswordStrength(value));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    alert("Account created successfully!");
    router.push("/login");
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case "weak":
        return "#ff4757";
      case "medium":
        return "#ffa502";
      case "strong":
        return "#2ed573";
      default:
        return "#e2e8f0";
    }
  };

  return (
    <div style={styles.pageWrapper}>
      {/* Background decorative elements */}
      <div style={styles.backgroundDecoration1}></div>
      <div style={styles.backgroundDecoration2}></div>
      <div style={styles.backgroundDecoration3}></div>
      <div style={styles.backgroundDecoration4}></div>

      <div style={styles.formContainer}>
        {/* Logo/Brand area */}
        <div style={styles.brandSection}>
          {/* <div style={styles.logoCircle}> */}
          <img
            src="images/qunologo.png"
            alt="logo"
            style={{ width: "60px", height: "60px" }}
          />
          {/* </div> */}
          <h2 style={styles.heading}>Join QUNO Campus</h2>
          <p style={styles.subheading}>
            Create your account and start learning
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name</label>
            <div style={styles.inputWrapper}>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                placeholder="Enter your full name"
              />
            </div>
          </div>

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
                placeholder="Create a strong password"
              />
            </div>
            {formData.password && (
              <div style={styles.passwordStrength}>
                <div style={styles.strengthBar}>
                  <div
                    style={{
                      ...styles.strengthFill,
                      width:
                        passwordStrength === "weak"
                          ? "33%"
                          : passwordStrength === "medium"
                          ? "66%"
                          : "100%",
                      backgroundColor: getPasswordStrengthColor(),
                    }}
                  ></div>
                </div>
                <span
                  style={{
                    ...styles.strengthText,
                    color: getPasswordStrengthColor(),
                  }}
                >
                  {passwordStrength.charAt(0).toUpperCase() +
                    passwordStrength.slice(1)}{" "}
                  password
                </span>
              </div>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Confirm Password</label>
            <div style={styles.inputWrapper}>
              <input
                type="password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{
                  ...styles.input,
                  borderColor:
                    formData.confirmPassword &&
                    formData.password !== formData.confirmPassword
                      ? "#ff4757"
                      : "#e2e8f0",
                }}
                placeholder="Confirm your password"
              />
              <div style={styles.inputIcon}>
                {formData.confirmPassword &&
                formData.password === formData.confirmPassword
                  ? ""
                  : ""}
              </div>
            </div>
            {formData.confirmPassword &&
              formData.password !== formData.confirmPassword && (
                <span style={styles.errorText}>Passwords do not match</span>
              )}
          </div>

          <div style={styles.termsSection}>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" required style={styles.checkbox} />
              <span style={styles.checkboxText}>
                I agree to the{" "}
                <Link href="/terms" style={styles.link}>
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" style={styles.link}>
                  Privacy Policy
                </Link>
              </span>
            </label>
          </div>

          <button
            type="submit"
            style={{
              ...styles.submitButton,
              ...(isHovered ? styles.submitButtonHover : {}),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span style={styles.buttonText}>Create Account</span>
            <span style={styles.buttonArrow}>→</span>
          </button>
        </form>

        {/* <div style={styles.divider}>
          <span style={styles.dividerText}>or</span>
        </div>

        <div style={styles.socialSection}>
          <button style={styles.socialButton}>
            <span style={styles.socialIcon}>G</span>
            Sign up with Google
          </button>
        </div> */}

        <p style={styles.loginText}>
          Already have an account?{" "}
          <Link href="/login" style={styles.loginLink}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  pageWrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    position: "relative",
    overflow: "hidden",
  },

  backgroundDecoration1: {
    position: "absolute",
    top: "-30%",
    left: "-15%",
    width: "500px",
    height: "500px",
    // background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
    borderRadius: "50%",
    transform: "rotate(30deg)",
    animation: "float 7s ease-in-out infinite",
  },

  backgroundDecoration2: {
    position: "absolute",
    bottom: "-25%",
    right: "-8%",
    width: "350px",
    height: "350px",
    background:
      "linear-gradient(-45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
    borderRadius: "50%",
    animation: "float 9s ease-in-out infinite reverse",
  },

  backgroundDecoration3: {
    position: "absolute",
    top: "15%",
    right: "8%",
    width: "120px",
    height: "120px",
    background: "rgba(255,255,255,0.12)",
    borderRadius: "50%",
    animation: "pulse 5s ease-in-out infinite",
  },

  backgroundDecoration4: {
    position: "absolute",
    bottom: "25%",
    left: "5%",
    width: "80px",
    height: "80px",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "50%",
    animation: "pulse 3s ease-in-out infinite",
  },

  formContainer: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    padding: "40px",
    borderRadius: "24px",
    boxShadow:
      "0 25px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2)",
    width: "100%",
    maxWidth: "460px",
    position: "relative",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },

  brandSection: {
    textAlign: "center",
    marginBottom: "32px",
  },

  logoCircle: {
    width: "64px",
    height: "64px",
    background: "linear-gradient(135deg, #0000FF, #4169E1)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px auto",
    boxShadow: "0 8px 20px rgba(65, 105, 225, 0.4)",
  },

  logoText: {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "Roboto, sans-serif",
  },

  heading: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#1a202c",
    marginBottom: "8px",
    fontFamily: "Roboto, sans-serif",
  },

  subheading: {
    fontSize: "16px",
    color: "#718096",
    fontFamily: "Roboto, sans-serif",
    margin: 0,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#2d3748",
    fontFamily: "Roboto, sans-serif",
  },

  inputWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },

  input: {
    width: "100%",
    padding: "14px 48px 14px 16px",
    borderRadius: "12px",
    border: "2px solid #e2e8f0",
    fontSize: "16px",
    fontFamily: "Roboto, sans-serif",
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
    background: "#f7fafc",
  },

  inputIcon: {
    position: "absolute",
    right: "16px",
    fontSize: "18px",
    color: "#a0aec0",
  },

  passwordStrength: {
    marginTop: "8px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  strengthBar: {
    flex: 1,
    height: "4px",
    backgroundColor: "#e2e8f0",
    borderRadius: "2px",
    overflow: "hidden",
  },

  strengthFill: {
    height: "100%",
    transition: "all 0.3s ease",
    borderRadius: "2px",
  },

  strengthText: {
    fontSize: "12px",
    fontWeight: "500",
    fontFamily: "Roboto, sans-serif",
    minWidth: "80px",
  },

  errorText: {
    fontSize: "12px",
    color: "#ff4757",
    fontFamily: "Roboto, sans-serif",
    marginTop: "4px",
  },

  termsSection: {
    marginTop: "8px",
  },

  checkboxLabel: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    fontSize: "14px",
    color: "#4a5568",
    fontFamily: "Roboto, sans-serif",
    lineHeight: "1.4",
  },

  checkbox: {
    marginTop: "2px",
    minWidth: "16px",
    height: "16px",
  },

  checkboxText: {
    flex: 1,
  },

  link: {
    color: "#0000FF",
    textDecoration: "none",
    fontWeight: "500",
  },

  submitButton: {
    width: "100%",
    padding: "16px 24px",
    backgroundColor: "yellow",
    color: "black",
    border: "2px solid black",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "600",
    fontFamily: "Roboto, sans-serif",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    boxShadow: "0 4px 15px rgba(65, 105, 225, 0.4)",
    marginTop: "8px",
  },

  submitButtonHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(65, 105, 225, 0.5)",
  },

  buttonText: {
    fontSize: "16px",
  },

  buttonArrow: {
    fontSize: "18px",
    transition: "transform 0.3s ease",
  },

  divider: {
    display: "flex",
    alignItems: "center",
    margin: "24px 0",
    position: "relative",
  },

  dividerText: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(255, 255, 255, 0.95)",
    padding: "0 16px",
    fontSize: "14px",
    color: "#718096",
    fontFamily: "Roboto, sans-serif",
  },

  socialSection: {
    marginBottom: "24px",
  },

  socialButton: {
    width: "100%",
    padding: "14px",
    background: "white",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "Roboto, sans-serif",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    color: "#2d3748",
  },

  socialIcon: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#4285f4",
  },

  loginText: {
    textAlign: "center",
    fontSize: "15px",
    color: "#4a5568",
    fontFamily: "Roboto, sans-serif",
    marginTop: "16px",
  },

  loginLink: {
    color: "#0000FF",
    textDecoration: "none",
    fontWeight: "600",
    transition: "color 0.3s ease",
  },
};

// Add CSS animations and hover effects
const style = document.createElement("style");
style.innerHTML = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(30deg); }
    50% { transform: translateY(-15px) rotate(30deg); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.05); }
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
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .loginLink:hover {
    color: #4169E1;
  }
  
  .link:hover {
    color: #4169E1;
  }
  
  .checkbox:checked {
    accent-color: #0000FF;
  }
`;
document.head.appendChild(style);

export default Signup;
