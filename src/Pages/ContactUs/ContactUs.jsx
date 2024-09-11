import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

function ContactUs() {
  const [thanksNote, setThanksNote] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    jobTitle: "",
    industry: "",
    company: "",
    country: "",
    receiveUpdates: false,
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    handleReset();
    setThanksNote(true);
    setTimeout(() => setThanksNote(false), 3000);
  };

  const handleReset = () => {
    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      jobTitle: "",
      industry: "",
      company: "",
      country: "",
      receiveUpdates: false,
      agreeTerms: false,
    });
  };
  const headingpara = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 1 } },
  };
  const headingpara1 = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 1 } },
  };

  return (
    <div className="contact">
      <div className="contact-head">
        <motion.h2
          variants={headingpara}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          Want to know more about Company?
        </motion.h2>
        <motion.p
          variants={headingpara1}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          Complete the form below, and we will respond within 24 hours
        </motion.p>
      </div>
      <div className="form-container" id="contact">
        <form className="contact-form" onSubmit={handleSubmit}>
          <span>
            <label>First Name</label>
            <input
              className="form-input"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
              required
            />
            <p className="mandatory"></p>
          </span>
          <span>
            <label>Last Name</label>
            <input
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
              required
            />
            <p className="mandatory"></p>
          </span>
          <span>
            <label>Email Address</label>
            <input
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            <p className="mandatory"></p>
          </span>
          <span>
            <label>Mobile Number</label>
            <input
              name="mobile"
              value={formValues.mobile}
              onChange={handleChange}
              required
            />
            <p className="mandatory"></p>
          </span>
          <span>
            <label>Job Title</label>
            <select
              name="jobTitle"
              value={formValues.jobTitle}
              onChange={handleChange}
            >
              <option>Select job title</option>
            </select>
          </span>
          <span>
            <label>Industry</label>
            <select
              name="industry"
              value={formValues.industry}
              onChange={handleChange}
            >
              <option>Select industry title</option>
            </select>
          </span>
          <span>
            <label>Company Name</label>
            <input
              name="company"
              value={formValues.company}
              onChange={handleChange}
              required
            />
            <p className="mandatory"></p>
          </span>
          <span>
            <label>Country</label>
            <select
              name="country"
              value={formValues.country}
              onChange={handleChange}
            >
              <option>Select country title</option>
            </select>
          </span>
          <div>
            <div>
              <input
                type="checkbox"
                name="receiveUpdates"
                checked={formValues.receiveUpdates}
                onChange={handleChange}
                required
              />
              <label>
                I would like to receive awesome content and updates from
                Company.
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formValues.agreeTerms}
                onChange={handleChange}
                required
              />
              <label>
                I agree to the{" "}
                <a href="#" target="_blank">
                  terms and conditions.
                </a>
              </label>
            </div>
          </div>
          <div className="form-btn-grp">
            <button type="button" onClick={handleReset}>
              Reset
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      {thanksNote && (
        <div className="thanks-note">
          <span>
            <IoIosCheckmarkCircle />
          </span>
          <p className="note">Thanks for reaching us</p>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
