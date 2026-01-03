import {
  IconBrandWhatsapp,
  IconCarCrane,
  IconLocation,
  IconPercentage,
} from "@tabler/icons-react";
import "../assets/style/contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* TOP INFO */}
        <div className="contact-info-flex">
          <div className="contact-box">
            <h3>hotlines</h3>
            <div className="contact-box-row">
              <IconBrandWhatsapp className="contact-icon" />
              <div>
                <p>mobile: <span>08066244696</span></p>
                <p>assistance: <span>07063470681</span></p>
              </div>
            </div>
          </div>

          <div className="contact-box">
            <h3>Ar-Raman Sooto Autocare</h3>
            <div className="contact-box-row">
              <IconLocation className="contact-icon wide" />
              <p>
                klm. 5 Lasu isheri road Alhaji Ede bus stop, Igando Lagos State.
                Inside NNPC Petrol station.
              </p>
            </div>
          </div>

          <div className="contact-box">
            <h3>24/7 assistance</h3>
            <div className="contact-box-row">
              <IconCarCrane className="contact-icon crane" />
              <p>
                Each customer has an account manager to assist during and
                outside office hours.
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form-wrapper">
          <h2>drop us a message</h2>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-left">
              <input type="text" placeholder="your name" />
              <input type="email" placeholder="your email" />
              <input type="tel" placeholder="your phone" />
            </div>

            <textarea placeholder="message"></textarea>
          </form>

          <button className="contact-btn">send message</button>
        </div>

        {/* MAP + APPOINTMENT */}
        <div className="contact-bottom-flex">
          <iframe
              src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.70742910449!2d3.248866975283375!3d6.558568393434587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b855a7edde619%3A0x88b0b0fdd4340650!2sAlhaji%20Ede%20Ave%2C%20Ikotun%2C%20Alimosho%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1736025222869!5m2!1sen!2sng"}
              width={900}
              height={500}
              className="contact-map"
              allowFullScreen=""
              referrerPolicy={"no-referrer-when-downgrade"}>
           </iframe>

          <div className="appointment-card">
            <IconPercentage className="appointment-icon" />
            <h2>
              online <span>appointment</span>
            </h2>
            <p>book your appointment now</p>
            <Link to="/book" className="appointment-btn">
              make an appointment
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
