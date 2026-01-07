import {  IconCarCrane,  IconCheckbox,  IconChevronRight,  IconTool,  IconPhone } from '@tabler/icons-react';
import lx from '../assets/image/LX.jpg';
import heroImg from '../assets/image/TOYODA.jpg';
import "../assets/style/home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">

      {/* HERO BANNER */}
      <section className="hero-overlay">
        <img src={heroImg} alt="AutoCare" className="hero-bg"/>
        <div className="hero-content">
          <h1>Ar-Raman Sooto Autocare</h1>
          <p>Top-notch vehicle care, made simple.</p>
          <div className="hero-buttons">
            <Link to="/book" className="btn-book">Book Appointment</Link>
            <a href="tel:+2348033445250" className="btn-call"><IconPhone /> Call Us Now</a>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section>
        <h1 className='section-title'>what we do</h1>
        <div className="cards-container">
          <div className="float-card">
            <IconTool stroke={1.75} className="card-icon"/>
            <h2>Vehicle Maintenance</h2>
            <p>Ensuring your vehicle runs smoothly and efficiently is our top priority. Experience dealership-grade service with the warmth and attention of a trusted local mechanic. The best performance of your car is just a visit away</p>
          </div>
          <div className="float-card">
            <IconCarCrane stroke={1.75} className="card-icon"/>
            <h2>Collision Repair</h2>
            <p>Utilizing the latest techniques and state-of-the-art equipment, we meticulously restore your vehicle to its original condition, ensuring safety and preserving its value. Trust us to make your vehicle look and drive like the accident never happened.</p>
          </div>
        </div>
      </section>

      {/* VEHICLES SERVICED */}
      <section className="service-section">
        <div className="vehicles-img">
          <img src={lx} alt="Vehicles Serviced"/>
        </div>
        <div className="vehicles-info">
          <h2>Vehicles Serviced</h2>
          <p>Top notch maintenance service for all types of vehicles.</p>
          <div className="grid">
            {["Toyota","Ford","Honda","BMW","Mercedes","Lexus","Range Rover","Chevrolet","Hyundai","Mazda","Mini Cooper","Volkswagen","Bentley","Kia","Nissan"].map((car,i)=>(
              <div className="grid-item" key={i}>
                <IconCheckbox stroke={2} className="icon-checkbox"/> {car}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RENDERED SERVICES */}
      <section>
        <h1 className="section-title">Rendered Services</h1>
        <div className="cards-container">
          {[
            {
              title: "Engine Diagnostics",
              description: "Our team of professionals are trained to pinpoint and address any engine-related issues, ensuring your vehicle is always road-ready."
            },
            {
              title: "Oil & Filter",
              description: "We provide high-quality oil and filter changes that not only protect your engine from wear and tear but also enhance its efficiency, ensuring your car operates at its optimal potential."
            },
            {
              title: "Transmission Service",
              description: "Smooth gear shifts and long-lasting performance for both manual and automatic transmissions."
            },
            {
              title: "Air Conditioning",
              description: "Ar-Rahman Sooto Autocare ensures a comfortable drive. Our experts specialize in AC system repairs, making sure your vehicle interiror remains cool."
            },
            {
              title: "Battery Testing & Replacement",
              description: "Reliable battery checks and replacement so you never get stranded."
            },
            {
              title: "Comprehensive Vehicle Inspection",
              description: "With meticulous attention to detail, we access every aspect of your vehicle to ensure it runs smoothly and safely, giving you peace of mind on the road."
            }
          ].map((service, i) => (
            <div className="float-card" key={i}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section>
        <h1 className="section-title">Why Choose Us</h1>
        <div className="why-container">
          <div className="why-item"><IconChevronRight className="icon-chevron"/> Top-notch automotive solutions tailored to your needs.</div>
          <div className="why-item"><IconChevronRight className="icon-chevron"/> Certified professionals providing exceptional quality and innovative solutions.</div>
          <div className="why-item"><IconChevronRight className="icon-chevron"/> Personalized service, clear communication, and timely solutions.</div>
          <div className="why-item"><IconChevronRight className="icon-chevron"/> Choose us as your trusted partner for automotive excellence.</div>
        </div>
      </section>

    </div>
  )
}

export default Home;
