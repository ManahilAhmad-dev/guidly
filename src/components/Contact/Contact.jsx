import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg.png';
import mail_icon from '../../assets/mail.png';
import phone_icon from '../../assets/phone.png';
import location_icon from '../../assets/location.png';
import whatsappLogo from '../../assets/Whatsapp.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "8827c9e8-78c2-4168-9377-19cc16599264");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (data.success) {
        console.log("Success", data);
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult("Failed to send. Please try again.");
      }
    } catch (error) {
      console.log("Fetch error:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="message icon" /></h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are important to us 
          as we strive to provide exceptional services.
        </p>
        <ul>
          <li><img src={mail_icon} alt="mail" /> Contact@IBvis.com</li>
          <li><img src={phone_icon} alt="phone" /> 031234567819</li>
          <li><img src={location_icon} alt="location" /> University of Management and Technology, Lahore</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Full Name *</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Email Address *</label>
          <input type="email" name="email" placeholder="Enter your email address" required />

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" />

          <label>Subject/Course *</label>
          <input type="text" name="subject" placeholder="Enter your subject or course" required />

          <label>Deadline *</label>
          <input type="date" name="deadline" required />

          <label>Assignment Details *</label>
          <textarea name="details" rows="6" placeholder="Please provide detailed information about your assignment including requirements, word count, format, specific instructions, and any additional resources or materials needed..." required></textarea>

          <label>Upload Assignment Files</label>
          <input type="file" name="files" multiple />

          <button type="submit" className="bim dark-btn">Submit Assignment Request</button>
        </form>

        <a
          href="https://wa.me/923216993499?text=Hello%20Can%20I%20get%20more%20Information?"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <img
            src={whatsappLogo}
            width="50"
            alt="WhatsApp"
          />
        </a>

        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;