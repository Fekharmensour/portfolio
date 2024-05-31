import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Lottie, { useLottie } from "lottie-react";
import {
  MdDarkMode,
  MdOutlineLightMode,
  MdSimCardDownload,
} from "react-icons/md";
import contact from "./../assets/contact.json";
import twitter from "./../assets/twitter.png";
import facebook from "./../assets/facebook.png";
import instagram from "./../assets/instagram.png";
import linkedin from "./../assets/linkedin.png";
import mail from "./../assets/mail.png";
import { useTheme } from "./../components/ThemeProvider";
import emailjs from 'emailjs-com';
import { Toaster, toast } from 'alert';


const Contact = () => {
  const { lightMode, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_angzesf', 'template_ah9615g', formData, 'rnKPFPYATHx18ELAW')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Message sent successfully!');
        setFormData({ username: '', email: '', phone: '', subject: '', message: '' });
      }, (err) => {
        console.log('FAILED...', err);
        toast.error('Failed to send message. Please try again.');
      });
  };
  const options = {
    animationData: contact,
    loop: true,
  };
  const { View } = useLottie(options);
  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [lightMode]);
  return (
    <>
       <Toaster width={150}  position='top-center'/>
      <div className="mode">
        <button onClick={toggleTheme}>
          {!lightMode ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>
      </div>
      <div className="container">
        <div className="home">
          <div className="image">{View}</div>
          <div className="content">
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                  type="text" 
                  id="username" 
                  name="username" 
                  placeholder="Enter your username ..." 
                  value={formData.username}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Enter your email ..." 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input 
                  type="text" 
                  id="phone" 
                  name="phone" 
                  placeholder="EX: (+213) 665001345" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Enter your subject ..." 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  placeholder="Enter your message ..."
                  value={formData.message}
                  onChange={handleChange}
                  required 
                ></textarea>
              </div>
              <div className="btns">
                <button type="submit" className="talk">Contact Us</button>
              </div>
            </form>

            <div className="logos">
              <a href="mailto:mensour.fekhar@univ-constantine2.dz "> <img src={mail} alt="" /> </a>
              <a href="https://www.linkedin.com/in/mensour-fekhar-75aa92237/"> <img src={linkedin} alt="" /> </a>
              <a href="https://www.instagram.com/manseurfae?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D"> <img src={instagram} alt="" /> </a>
              <a href="https://www.facebook.com/profile.php?id=100067150450115&mibextid=ZbWKwL"> <img src={facebook} alt="" /> </a>
              <a href="https://x.com/fekhar_mensour"> <img src={twitter} alt="" /> </a>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Contact;
