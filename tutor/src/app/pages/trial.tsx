'use client';

import React, { useState } from "react";

function trial() {
  const [formData, setFormData] = useState({
    country: "",
    timezone: "",
    curriculum: "",
    grade: "",
    trialTopic: "",
    message: "",
    name: "",
    parentName: "",
    subject: "",
    phoneCode: "+1",
    phoneNumber: "",
    preferredContact: "email",
    preferredLanguage: "english",
    email: "",
  });

  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [phoneCodeQuery, setPhoneCodeQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const countryTimeZones = {
    US: [
      { value: "America/New_York", label: "EST (Eastern Time)" },
      { value: "America/Chicago", label: "CST (Central Time)" },
      { value: "America/Denver", label: "MST (Mountain Time)" },
      { value: "America/Los_Angeles", label: "PST (Pacific Time)" },
    ],
    CA: [
      { value: "America/Toronto", label: "EST (Eastern Time)" },
      { value: "America/Winnipeg", label: "CST (Central Time)" },
      { value: "America/Edmonton", label: "MST (Mountain Time)" },
    ],
    GB: [{ value: "Europe/London", label: "GMT (London)" }],
    DE: [{ value: "Europe/Berlin", label: "CET (Berlin)" }],
    FR: [{ value: "Europe/Paris", label: "CET (Paris)" }],
    IT: [{ value: "Europe/Rome", label: "CET (Rome)" }],
    ES: [{ value: "Europe/Madrid", label: "CET (Madrid)" }],
    RU: [
      { value: "Europe/Moscow", label: "MSK (Moscow)" },
      { value: "Asia/Vladivostok", label: "VLAT (Vladivostok)" },
    ],
    CN: [{ value: "Asia/Shanghai", label: "CST (Shanghai)" }],
    JP: [{ value: "Asia/Tokyo", label: "JST (Tokyo)" }],
    AE: [{ value: "Asia/Dubai", label: "GST (Dubai)" }],
    IN: [{ value: "Asia/Kolkata", label: "IST (Kolkata)" }],
    BR: [{ value: "America/Sao_Paulo", label: "BRT (São Paulo)" }],
    MX: [{ value: "America/Mexico_City", label: "CST (Mexico City)" }],
    ZA: [{ value: "Africa/Johannesburg", label: "SAST (Johannesburg)" }],
    AU: [
      { value: "Australia/Sydney", label: "AEST (Sydney)" },
      { value: "Australia/Adelaide", label: "ACST (Adelaide)" },
    ],
    NZ: [{ value: "Pacific/Auckland", label: "NZST (Auckland)" }],
    KR: [{ value: "Asia/Seoul", label: "KST (Seoul)" }],
    SG: [{ value: "Asia/Singapore", label: "SGT (Singapore)" }],
    TH: [{ value: "Asia/Bangkok", label: "ICT (Bangkok)" }],
    SA: [{ value: "Asia/Riyadh", label: "AST (Riyadh)" }],
    PK: [{ value: "Asia/Karachi", label: "PKT (Karachi)" }],
  };

  // Flatten all time zones, remove duplicates, and sort alphabetically
  const allTimeZones = Object.values(countryTimeZones)
    .flat()
    .filter(
      (tz, index, self) => index === self.findIndex((t) => t.value === tz.value)
    )
    .sort((a, b) => a.label.localeCompare(b.label));

  const countryPhoneCodes = {
    Afghanistan: "+93",
    Albania: "+355",
    Algeria: "+213",
    "American Samoa": "+1-684",
    Andorra: "+376",
    Angola: "+244",
    Anguilla: "+1-264",
    Antarctica: "+672",
    "Antigua and Barbuda": "+1-268",
    Argentina: "+54",
    Armenia: "+374",
    Aruba: "+297",
    Australia: "+61",
    Austria: "+43",
    Azerbaijan: "+994",
    Bahamas: "+1-242",
    Bahrain: "+973",
    Bangladesh: "+880",
    Barbados: "+1-246",
    Belarus: "+375",
    Belgium: "+32",
    Belize: "+501",
    Benin: "+229",
    Bermuda: "+1-441",
    Bhutan: "+975",
    Bolivia: "+591",
    "Bosnia and Herzegovina": "+387",
    Botswana: "+267",
    Brazil: "+55",
    "British Indian Ocean Territory": "+246",
    "British Virgin Islands": "+1-284",
    Brunei: "+673",
    Bulgaria: "+359",
    "Burkina Faso": "+226",
    Burundi: "+257",
    Cambodia: "+855",
    Cameroon: "+237",
    Canada: "+1",
    "Cape Verde": "+238",
    "Cayman Islands": "+1-345",
    "Central African Republic": "+236",
    Chad: "+235",
    Chile: "+56",
    China: "+86",
    "Christmas Island": "+61",
    "Cocos Islands": "+61",
    Colombia: "+57",
    Comoros: "+269",
    "Cook Islands": "+682",
    "Costa Rica": "+506",
    Croatia: "+385",
    Cuba: "+53",
    Curacao: "+599",
    Cyprus: "+357",
    "Czech Republic": "+420",
    "Democratic Republic of the Congo": "+243",
    Denmark: "+45",
    Djibouti: "+253",
    Dominica: "+1-767",
    "Dominican Republic": "+1-809",
    "East Timor": "+670",
    Ecuador: "+593",
    Egypt: "+20",
    "El Salvador": "+503",
    "Equatorial Guinea": "+240",
    Eritrea: "+291",
    Estonia: "+372",
    Eswatini: "+268",
    Ethiopia: "+251",
    "Falkland Islands": "+500",
    "Faroe Islands": "+298",
    Fiji: "+679",
    Finland: "+358",
    France: "+33",
    "French Polynesia": "+689",
    Gabon: "+241",
    Gambia: "+220",
    Georgia: "+995",
    Germany: "+49",
    Ghana: "+233",
    Gibraltar: "+350",
    Greece: "+30",
    Greenland: "+299",
    Grenada: "+1-473",
    Guam: "+1-671",
    Guatemala: "+502",
    Guernsey: "+44-1481",
    Guinea: "+224",
    "Guinea-Bissau": "+245",
    Guyana: "+592",
    Haiti: "+509",
    Honduras: "+504",
    "Hong Kong": "+852",
    Hungary: "+36",
    Iceland: "+354",
    India: "+91",
    Indonesia: "+62",
    Iran: "+98",
    Iraq: "+964",
    Ireland: "+353",
    "Isle of Man": "+44-1624",
    Israel: "+972",
    Italy: "+39",
    "Ivory Coast": "+225",
    Jamaica: "+1-876",
    Japan: "+81",
    Jersey: "+44-1534",
    Jordan: "+962",
    Kazakhstan: "+7",
    Kenya: "+254",
    Kiribati: "+686",
    Kosovo: "+383",
    Kuwait: "+965",
    Kyrgyzstan: "+996",
    Laos: "+856",
    Latvia: "+371",
    Lebanon: "+961",
    Lesotho: "+266",
    Liberia: "+231",
    Libya: "+218",
    Liechtenstein: "+423",
    Lithuania: "+370",
    Luxembourg: "+352",
    Macau: "+853",
    Madagascar: "+261",
    Malawi: "+265",
    Malaysia: "+60",
    Maldives: "+960",
    Mali: "+223",
    Malta: "+356",
    "Marshall Islands": "+692",
    Mauritania: "+222",
    Mauritius: "+230",
    Mayotte: "+262",
    Mexico: "+52",
    Micronesia: "+691",
    Moldova: "+373",
    Monaco: "+377",
    Mongolia: "+976",
    Montenegro: "+382",
    Montserrat: "+1-664",
    Morocco: "+212",
    Mozambique: "+258",
    Myanmar: "+95",
    Namibia: "+264",
    Nauru: "+674",
    Nepal: "+977",
    Netherlands: "+31",
    "Netherlands Antilles": "+599",
    "New Caledonia": "+687",
    "New Zealand": "+64",
    Nicaragua: "+505",
    Niger: "+227",
    Nigeria: "+234",
    Niue: "+683",
    "North Korea": "+850",
    "North Macedonia": "+389",
    "Northern Mariana Islands": "+1-670",
    Norway: "+47",
    Oman: "+968",
    Pakistan: "+92",
    Palau: "+680",
    Palestine: "+970",
    Panama: "+507",
    "Papua New Guinea": "+675",
    Paraguay: "+595",
    Peru: "+51",
    Philippines: "+63",
    Pitcairn: "+64",
    Poland: "+48",
    Portugal: "+351",
    "Puerto Rico": "+1-787",
    Qatar: "+974",
    "Republic of the Congo": "+242",
    Reunion: "+262",
    Romania: "+40",
    Russia: "+7",
    Rwanda: "+250",
    "Saint Barthelemy": "+590",
    "Saint Helena": "+290",
    "Saint Kitts and Nevis": "+1-869",
    "Saint Lucia": "+1-758",
    "Saint Martin": "+590",
    "Saint Pierre and Miquelon": "+508",
    "Saint Vincent and the Grenadines": "+1-784",
    Samoa: "+685",
    "San Marino": "+378",
    "Sao Tome and Principe": "+239",
    "Saudi Arabia": "+966",
    Senegal: "+221",
    Serbia: "+381",
    Seychelles: "+248",
    "Sierra Leone": "+232",
    Singapore: "+65",
    "Sint Maarten": "+1-721",
    Slovakia: "+421",
    Slovenia: "+386",
    "Solomon Islands": "+677",
    Somalia: "+252",
    "South Africa": "+27",
    "South Korea": "+82",
    "South Sudan": "+211",
    Spain: "+34",
    "Sri Lanka": "+94",
    Sudan: "+249",
    Suriname: "+597",
    "Svalbard and Jan Mayen": "+47",
    Sweden: "+46",
    Switzerland: "+41",
    Syria: "+963",
    Taiwan: "+886",
    Tajikistan: "+992",
    Tanzania: "+255",
    Thailand: "+66",
    Togo: "+228",
    Tokelau: "+690",
    Tonga: "+676",
    "Trinidad and Tobago": "+1-868",
    Tunisia: "+216",
    Turkey: "+90",
    Turkmenistan: "+993",
    "Turks and Caicos Islands": "+1-649",
    Tuvalu: "+688",
    "U.S. Virgin Islands": "+1-340",
    Uganda: "+256",
    Ukraine: "+380",
    "United Arab Emirates": "+971",
    "United Kingdom": "+44",
    "United States": "+1",
    Uruguay: "+598",
    Uzbekistan: "+998",
    Vanuatu: "+678",
    Vatican: "+379",
    Venezuela: "+58",
    Vietnam: "+84",
    "Wallis and Futuna": "+681",
    "Western Sahara": "+212",
    Yemen: "+967",
    Zambia: "+260",
    Zimbabwe: "+263",
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      if (name === "country") {
        newData.timezone = "";
        newData.phoneCode = (countryPhoneCodes as Record<string, string>)[value] || "+1";
        setPhoneCodeQuery((countryPhoneCodes as Record<string, string>)[value] || "+1");
      }
      return newData;
    });
  };

  const handlePhoneCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneCodeQuery(value);
    setShowSuggestions(true);
    setFormData((prev) => ({ ...prev, phoneCode: value }));
  };

  const handlePhoneCodeSelect = (code: string, prefix: string) => {
    setFormData((prev) => ({ ...prev, phoneCode: prefix }));
    setPhoneCodeQuery(`${prefix} (${code})`);
    setShowSuggestions(false);
  };

  const filteredPhoneCodes = Object.entries(countryPhoneCodes).filter(
    ([country, code]) => {
      if (!phoneCodeQuery) return true;
      const query = phoneCodeQuery.toLowerCase();
      return (
        country.toLowerCase().includes(query) ||
        code.toLowerCase().includes(query)
      );
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      // Combine phoneCode and phoneNumber
      const fullPhoneNumber =
        `${formData.phoneCode}${formData.phoneNumber}`.replace(/[^\d+]/g, "");

      // Validate phone number
      if (!formData.phoneNumber || fullPhoneNumber.length < 8) {
        throw new Error(
          "Please provide a valid phone number (at least 7 digits)."
        );
      }

      const dataToSubmit = {
        ...formData,
        fullPhoneNumber, // Store the cleaned phone number in the document
        createdAt: new Date(),
      };

      // Save document with phone number as the document ID
      // await setDoc(doc(db, "enrollments", fullPhoneNumber), dataToSubmit, {
      //   merge: true,
      // });

      setSubmitStatus({
        type: "success",
        message: `Registration submitted successfully for phone number: ${fullPhoneNumber}`,
      });

      // Reset form
      setFormData({
        country: "",
        timezone: "",
        curriculum: "",
        grade: "",
        trialTopic: "",
        message: "",
        name: "",
        parentName: "",
        subject: "",
        phoneCode: "+1",
        phoneNumber: "",
        preferredContact: "email",
        preferredLanguage: "english",
        email: "",
      });
      setPhoneCodeQuery("+1");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message:
          (error as Error).message ||
          "There was an error submitting your registration. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const LegalModal = ({ title, content, onClose }: { title: string; content: React.ReactNode; onClose: () => void }) => (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <div style={styles.modalHeader}>
          <h3 style={styles.modalTitle}>{title}</h3>
          <button
            onClick={onClose}
            style={styles.modalCloseButton}
          >
            <svg
              style={styles.closeIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div style={styles.modalBody}>{content}</div>
      </div>
    </div>
  );

  const termsContent = (
    <div>
      <h4 style={styles.legalTitle}>
        Global Education Services Agreement
      </h4>
      <p style={styles.legalDate}>Last updated: {new Date().toLocaleDateString()}</p>
      <section style={styles.legalSectionModal}>
        <h5 style={styles.legalSubtitle}>1. Enrollment Process</h5>
        <p style={styles.legalTextModal}>
          By submitting this form, you agree to participate in our global
          education program and acknowledge that all information provided is
          accurate.
        </p>
      </section>
      <section style={styles.legalSectionModal}>
        <h5 style={styles.legalSubtitle}>2. Data Protection</h5>
        <p style={styles.legalTextModal}>
          We adhere to GDPR and international data protection standards. Your
          information will only be used for educational purposes.
        </p>
      </section>
      <section style={styles.legalSectionModal}>
        <h5 style={styles.legalSubtitle}>3. Payment & Refunds</h5>
        <p style={styles.legalTextModal}>
          All transactions are secured through SSL encryption. Refund policies
          vary by region and program type.
        </p>
      </section>
    </div>
  );

  const privacyContent = (
    <div>
      <h4 style={styles.legalTitle}>Global Privacy Commitment</h4>
      <p style={styles.legalDate}>Effective date: {new Date().toLocaleDateString()}</p>
      <section style={styles.legalSectionModal}>
        <h5 style={styles.legalSubtitle}>Information Collection</h5>
        <p style={styles.legalTextModal}>
          We collect only essential data for educational purposes, including
          contact information and academic history.
        </p>
      </section>
      <section style={styles.legalSectionModal}>
        <h5 style={styles.legalSubtitle}>Data Sharing</h5>
        <p style={styles.legalTextModal}>
          Student information is never sold to third parties. Data may be shared
          with educational partners only with explicit consent.
        </p>
      </section>
      <section style={styles.legalSectionModal}>
        <h5 style={styles.legalSubtitle}>Security Measures</h5>
        <p style={styles.legalTextModal}>
          We employ enterprise-grade security protocols including encryption at
          rest and in transit, regular audits, and access controls.
        </p>
      </section>
    </div>
  );

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate
    .toLocaleString("default", { month: "short" })
    .toUpperCase();
  const year = currentDate.getFullYear();

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        <div style={styles.header}>
          <div style={styles.headerContent}>
            <h2 style={styles.title}>Global Student Registration</h2>
            <div style={styles.dateBadge}>
              <div style={styles.dateText}>
                {day} {month} {year}
              </div>
            </div>
          </div>
          <p style={styles.subtitle}>
            International registration form for educational programs worldwide
          </p>
        </div>

        {submitStatus.type && (
          <div
            style={{
              ...styles.statusMessage,
              ...(submitStatus.type === "success" ? styles.successMessage : styles.errorMessage)
            }}
          >
            {submitStatus.message}
          </div>
        )}

        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>
                Personal Information
              </h3>
              <div style={styles.formGrid}>
                <div style={styles.formField}>
                  <label style={styles.label}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Student's full name"
                    required
                  />
                </div>

                <div style={styles.formField}>
                  <label style={styles.label}>
                    Parent/Guardian Name
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Parent/guardian name"
                    required
                  />
                </div>

                <div style={styles.formField}>
                  <label style={styles.label}>
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    style={styles.input}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        country: e.target.value,
                        phoneCode: (countryPhoneCodes as Record<string, string>)[e.target.value] || "+1",
                      })
                    }
                  >
                    <option value="">Select Country</option>
                    {Object.keys(countryPhoneCodes).map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={styles.formField}>
                  <label style={styles.label}>
                    Time Zone
                  </label>
                  <select
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  >
                    <option value="">Select Time Zone</option>
                    {allTimeZones.map((tz) => (
                      <option key={tz.value} value={tz.value}>
                        {tz.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={styles.phoneField}>
                  <div style={styles.phoneCodeField}>
                    <label style={styles.label}>
                      Code
                    </label>
                    <input
                      type="text"
                      value={phoneCodeQuery}
                      onChange={handlePhoneCodeChange}
                      onFocus={() => setShowSuggestions(true)}
                      style={styles.input}
                      placeholder="Type country or code"
                    />
                    {showSuggestions && filteredPhoneCodes.length > 0 && (
                      <ul style={styles.suggestionsList}>
                        {filteredPhoneCodes.map(([country, code]) => (
                          <li
                            key={country}
                            style={styles.suggestionItem}
                            onClick={() => handlePhoneCodeSelect(country, code)}
                          >
                            {code} ({country})
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div style={styles.phoneNumberField}>
                    <label style={styles.label}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      style={styles.input}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>

                <div style={styles.formField}>
                  <label style={styles.label}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="student@example.com"
                    required
                  />
                </div>

                <div style={styles.formField}>
                  <label style={styles.label}>
                    Preferred Contact
                  </label>
                  <div style={styles.radioGroup}>
                    {["email", "phone"].map((method) => (
                      <label key={method} style={styles.radioLabel}>
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={handleChange}
                          style={styles.radio}
                        />
                        <span style={styles.radioText}>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div style={styles.formField}>
                  <label style={styles.label}>
                    Preferred Language
                  </label>
                  <select
                    name="preferredLanguage"
                    value={formData.preferredLanguage}
                    onChange={handleChange}
                    style={styles.input}
                  >
                    <option value="english">English</option>
                    <option value="arabic">Arabic</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="mandarin">Mandarin</option>
                    <option value="hindi">Hindi</option>
                    <option value="german">German</option>
                  </select>
                </div>
              </div>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>
                Academic Information
              </h3>
              <div style={styles.formGrid}>
                <div style={styles.formField}>
                  <label style={styles.label}>
                    Grade Level
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  >
                    <option value="">Select Grade</option>
                    <optgroup label="School">
                      {Array.from({ length: 12 }, (_, i) => i + 1).map(
                        (grade) => (
                          <option key={grade} value={grade}>
                            Grade {grade}
                          </option>
                        )
                      )}
                    </optgroup>
                    <optgroup label="Select Level">
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Expert">Expert</option>
                    </optgroup>
                  </select>
                </div>

                <div style={styles.formField}>
                  <label style={styles.label}>
                    Curriculum/Examinations
                  </label>
                  <select
                    name="curriculum"
                    value={formData.curriculum}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  >
                    <option value="">Select Curriculum/Examination</option>
                    <optgroup label="International Curricula">
                      <option value="ib">
                        International Baccalaureate (IB)
                      </option>
                      <option value="igcse">Cambridge IGCSE</option>
                      <option value="alevel">
                        Cambridge International AS & A Levels
                      </option>
                      <option value="pearson">
                        Pearson Edexcel International
                      </option>
                      <option value="ap">Advanced Placement (AP)</option>
                    </optgroup>
                    <optgroup label="National Curriculum">
                      <option value="us_hs">
                        American High School Diploma
                      </option>
                      <option value="gcse">UK GCSE</option>
                      <option value="ncbc">Indian CBSE</option>
                      <option value="nicse">Indian ICSE</option>
                      <option value="fbise">Pakistani FBISE</option>
                      <option value="moe">UAE MOE Curriculum</option>
                      <option value="gaokao">Chinese Gaokao</option>
                      <option value="sace">Australian SACE</option>
                      <option value="bac">French Baccalauréat</option>
                      <option value="abitur">German Abitur</option>
                    </optgroup>
                    <optgroup label="Standardized Tests">
                      <option value="sat">SAT</option>
                      <option value="act">ACT</option>
                      <option value="naplan">Australian NAPLAN</option>
                      <option value="toefl">TOEFL</option>
                      <option value="ielts">IELTS</option>
                      <option value="ibcc">IB Career-related Programme</option>
                      <option value="emsat">UAE EmSAT</option>
                      <option value="ketpet">
                        Cambridge English (KET/PET)
                      </option>
                    </optgroup>
                    <optgroup label="Vocational Qualifications">
                      <option value="btec">BTEC</option>
                      <option value="nvq">NVQ</option>
                      <option value="ibcp">IB Career-related Programme</option>
                    </optgroup>
                  </select>
                </div>

                <div style={styles.formField}>
                  <label style={styles.label}>
                    Subject of Interest
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  >
                    <option value="">Select Subject</option>
                    <optgroup label="Core Subjects">
                      <option value="math">Mathematics</option>
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="biology">Biology</option>
                      <option value="economics">Economics</option>
                      <option value="history">History</option>
                      <option value="geography">Geography</option>
                    </optgroup>
                    <optgroup label="Languages">
                      <option value="english">English</option>
                      <option value="arabic">Arabic</option>
                      <option value="french">French</option>
                      <option value="mandarin">Mandarin</option>
                      <option value="spanish">Spanish</option>
                      <option value="german">German</option>
                      <option value="hindi">Hindi</option>
                    </optgroup>
                    <optgroup label="Technology">
                      <option value="cs">Computer Science</option>
                      <option value="ai">Artificial Intelligence</option>
                      <option value="robotics">Robotics</option>
                      <option value="datascience">Data Science</option>
                      <option value="cybersecurity">Cybersecurity</option>
                    </optgroup>
                    <optgroup label="Humanities">
                      <option value="literature">Literature</option>
                      <option value="philosophy">Philosophy</option>
                      <option value="psychology">Psychology</option>
                      <option value="sociology">Sociology</option>
                    </optgroup>
                    <optgroup label="Arts">
                      <option value="music">Music</option>
                      <option value="visualarts">Visual Arts</option>
                      <option value="drama">Drama</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>

            <div style={styles.formField}>
              <label style={styles.label}>
                Additional Requirements
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                rows={4}
                placeholder="Special requirements, learning goals, or preferred schedule"
              ></textarea>
            </div>

            <div style={styles.submitSection}>
              <div style={styles.legalSectionForm}>
                <p style={styles.legalTextForm}>
                  By submitting, you agree to our{" "}
                  <button
                    type="button"
                    onClick={() => setShowTerms(true)}
                    style={styles.legalLink}
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    onClick={() => setShowPrivacy(true)}
                    style={styles.legalLink}
                  >
                    Privacy Policy
                  </button>
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    ...styles.submitButton,
                    ...(isSubmitting && styles.submitButtonDisabled)
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Submit Registration"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {showTerms && (
        <LegalModal
          title="Terms of Service"
          content={termsContent}
          onClose={() => setShowTerms(false)}
        />
      )}
      {showPrivacy && (
        <LegalModal
          title="Privacy Policy"
          content={privacyContent}
          onClose={() => setShowPrivacy(false)}
        />
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Roboto, sans-serif',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    marginBottom: '2rem',
  },
  header: {
    background: 'linear-gradient(135deg,rgb(26, 81, 233) 0%,rgb(15, 50, 105) 100%)',
    color: 'white',
    padding: '2rem',
    borderBottom: '1px solid #e5e7eb',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '0.5rem',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: 0,
    color: 'white',
  },
  dateBadge: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    padding: '0.5rem 1rem',
    alignSelf: 'flex-start',
  },
  dateText: {
    fontSize: '0.875rem',
    fontWeight: '500',
  },
  subtitle: {
    margin: 0,
    fontSize: '0.875rem',
    color: 'white',
    maxWidth: '600px',
  },
  statusMessage: {
    padding: '1rem',
    borderRadius: '8px',
    margin: '1rem',
    fontWeight: '500',
  },
  successMessage: {
    backgroundColor: '#dcfce7',
    color: '#166534',
    border: '1px solid #bbf7d0',
  },
  errorMessage: {
    backgroundColor: '#fef2f2',
    color: '#dc2626',
    border: '1px solid #fecaca',
  },
  formContainer: {
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '2rem',
  },
  section: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
  },
  sectionTitle: {
    fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
    fontWeight: '600',
    color: '#1e3a8a',
    margin: 0,
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #e2e8f0',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  formField: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151',
  },
  input: {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '1rem',
    backgroundColor: '#f9fafb',
    transition: 'all 0.2s ease',
    outline: 'none',
    width: '100%',
    minWidth: '0',
    boxSizing: 'border-box',
  },
  textarea: {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '1rem',
    backgroundColor: '#f9fafb',
    transition: 'all 0.2s ease',
    outline: 'none',
    resize: 'vertical',
    minHeight: '100px',
  },
  phoneField: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '1rem',
    minWidth: '100%',
  },
  phoneCodeField: {
    position: 'relative',
  },
  phoneNumberField: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
  },
  suggestionsList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    maxHeight: '240px',
    overflowY: 'auto',
    zIndex: 10,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  suggestionItem: {
    padding: '0.75rem 1rem',
    cursor: 'pointer',
    borderBottom: '1px solid #f3f4f6',
    transition: 'background-color 0.2s ease',
  },
  radioGroup: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
  },
  radio: {
    width: '16px',
    height: '16px',
    accentColor: '#1e3a8a',
  },
  radioText: {
    fontSize: '0.875rem',
    textTransform: 'capitalize',
  },
  submitSection: {
    paddingTop: '1.5rem',
    borderTop: '1px solid #e5e7eb',
  },
  legalSectionForm: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
    alignItems: 'center',
  },
  legalTextForm: {
    fontSize: '0.875rem',
    color: '#6b7280',
    textAlign: 'center',
    margin: 0,
  },
  legalLink: {
    color: '#1e3a8a',
    textDecoration: 'underline',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.875rem',
  },
  submitButton: {
    backgroundColor: 'yellow',
    color: 'black',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    minWidth: '200px',
  },
  submitButtonDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    zIndex: 50,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: '12px',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  modalHeader: {
    backgroundColor: '#1e3a8a',
    color: 'white',
    padding: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    margin: 0,
  },
  modalCloseButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: '0.25rem',
    borderRadius: '4px',
    transition: 'background-color 0.2s ease',
  },
  closeIcon: {
    width: '24px',
    height: '24px',
  },
  modalBody: {
    padding: '1.5rem',
    overflowY: 'auto',
    flex: 1,
  },
  legalTitle: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#1e3a8a',
  },
  legalDate: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '1.5rem',
  },
  legalSectionModal: {
    marginBottom: '1.5rem',
  },
  legalSubtitle: {
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '0.5rem',
    color: '#374151',
  },
  legalTextModal: {
    fontSize: '0.875rem',
    lineHeight: '1.6',
    color: '#6b7280',
    margin: 0,
  },
};

export default trial;