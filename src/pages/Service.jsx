import diagnosis from '../assets/image/diagnotics.jpg'
import oil from '../assets/image/oil.jpg'
import air from '../assets/image/air.jpg'
import suspension from '../assets/image/suspension.jpg'
import cylinder from '../assets/image/cylinder.jpg'
import brake from '../assets/image/brake.jpg'
import { IconChevronRight } from '@tabler/icons-react'
import "../assets/style/service.css"



const services = [
  { title: "engine diagnostics", image: diagnosis },
  { title: "oil services", image: oil },
  { title: "car air conditioning", image: air },
  { title: "suspension", image: suspension },
  { title: "engine repair", image: cylinder },
  { title: "brake service", image: brake },
]

const Service = () => {

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
