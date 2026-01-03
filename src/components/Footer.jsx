import "../assets/style/footer.css";
import { Link } from "react-router-dom";
import { IconBrandWhatsapp, IconCarCrane, IconLocation, IconCheck, IconMail, IconPhone } from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-card">
            <h3>Hotlines</h3>
            <div className="footer-flex">
              <IconBrandWhatsapp className="footer-icon" />
              <div className="footer-info">
                <p>Mobile: <span>08033445250</span></p>
                <p>Assistance: <span>07063470681</span></p>
              </div>
            </div>
          </div>

          <div className="footer-card">
            <h3>Location</h3>
            <div className="footer-flex">
              <IconLocation className="footer-icon" />
              <div className="footer-info">
                <p>KLM. 5 Lasu Isheri Road, Alhaji Ede Bus Stop, Igando, Lagos State</p>
              </div>
            </div>
          </div>

          <div className="footer-card">
            <h3>24/7 Assistance</h3>
            <div className="footer-flex">
              <IconCarCrane className="footer-icon" />
              <div className="footer-info">
                <p>Each customer has an account manager to respond to your vehicle needs during and outside office hours.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          {/* About Us */}
          <div className="footer-about">
            <h4>About Us</h4>
            <p>Ar-Raman Sooto Autocare delivers top-notch vehicle maintenance and repair services across Nigeria.</p>
            <div className="footer-contact-links">
              <a href="http://wa.me/+2348033445250"><IconBrandWhatsapp /></a>
              <a href="mailto:arramansooto01@gmail.com"><IconMail /></a>
              <a href="tel:+2348033445250"><IconPhone /></a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-services">
            <h4>Our Services</h4>
            <ul>
              <Link to="service"><li><IconCheck stroke={1.5} /> Engine Diagnosis</li></Link>
              <Link to="service"><li><IconCheck stroke={1.5} /> Air Conditioning</li></Link>
              <Link to="service"><li><IconCheck stroke={1.5} /> Brake Repair</li></Link>
              <Link to="service"><li><IconCheck stroke={1.5} /> Oil & Filter</li></Link>
              <Link to="service"><li><IconCheck stroke={1.5} /> Battery Testing</li></Link>
              <Link to="service"><li><IconCheck stroke={1.5} /> Transmission Services</li></Link>
              <Link to="service"><li><IconCheck stroke={1.5} /> Other Car Services</li></Link>
            </ul>
          </div>

          {/* Popular Tags */}
          <div className="footer-tags">
            <h4>Popular Tags</h4>
            <div className="tags-container">
              <span className="tag">CNG Conversion</span>
              <span className="tag">Diagnosis</span>
              <span className="tag">Engine</span>
              <span className="tag">Suspension</span>
              <span className="tag">Brake</span>
              <span className="tag">Transmission</span>
              <span className="tag">Oil</span>
              <span className="tag">Filter</span>
            </div>
          </div>

          {/* Hours */}
          <div className="footer-hours">
            <h4>Hours</h4>
            <ul>
              <li>Mon - Sat: 8:00am - 7:00pm</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ar-Raman Sooto Autocare. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
