import diagnosis from '../assets/image/diagnotics.jpg'
import oil from '../assets/image/oil.jpg'
import air from '../assets/image/air.jpg'
import suspension from '../assets/image/suspension.jpg'
import cylinder from '../assets/image/cylinder.jpg'
import brake from '../assets/image/brake.jpg'
import { IconChevronRight } from '@tabler/icons-react'
import "../assets/style/service.css"
import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "engine diagnostics", image: diagnosis },
  { title: "oil services", image: oil },
  { title: "car air conditioning", image: air },
  { title: "suspension", image: suspension },
  { title: "engine repair", image: cylinder },
  { title: "brake service", image: brake },
]

const Service = () => {

  useEffect(() => {
    // Use matchMedia for responsive animations
    let mm = gsap.matchMedia();

    mm.add({
      // Mobile
      "(max-width: 768px)": () => {
        gsap.from(".service-section", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".service-section",
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      },

      // Desktop
      "(min-width: 769px)": () => {
        gsap.from(".service-section", {
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".service-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      },
    });

    // Cleanup on unmount
    return () => mm.revert();
  }, []);
  return (
    <div className="service-section">
      <h1 className="service-title">our services</h1>

      <div className="service-flex">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <img src={item.image} alt={item.title} className="service-image" />

            <div className="service-card-footer">
              <p className="service-text">{item.title}</p>
              <IconChevronRight className="service-icon" />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Service
