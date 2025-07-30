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

    // Deadline validation: Must be 5+ days from today
    const deadlineInput = formData.get("deadline");
    const selectedDate = new Date(deadlineInput);
    const currentDate = new Date();
    const minDate = new Date();
    minDate.setDate(currentDate.getDate() + 5);

    if (selectedDate < minDate) {
      alert("Please select a deadline at least 5 days from today.");
      setResult("Deadline too soon. Form not submitted.");
      return;
    }

    formData.append("access_key", "bd228381-9d2a-44bc-a4e8-c8f280f8d337");

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
          Have questions or need assistance? Reach out to AssignmentMaker through the contact form below or use the contact details provided. We're here to help with any queries, suggestions, or feedback as we aim to deliver top-notch academic support.
        </p>
        <ul>
          <li><img src={mail_icon} alt="mail" />guidly.assignment@gmail.com</li>
          <li><img src={phone_icon} alt="phone" />+44 7848 812413</li>
          <li><img src={location_icon} alt="location" />Glasgow, UK</li>
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
          <textarea
            name="details"
            rows="6"
            placeholder="Please provide detailed information about your assignment including requirements, word count, format, specific instructions, and any additional resources or materials needed..."
            required
          ></textarea>

          <label>Assignment File Link</label>
          <input type="text" name="file_link" placeholder="Paste Google Drive / Dropbox file link" />

          <button type="submit" className="bim dark-btn">Submit Assignment Request</button>
        </form>

        <a
          href="https://wa.me/+447848812413?text=Hello%20Can%20I%20get%20more%20Information?"
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
