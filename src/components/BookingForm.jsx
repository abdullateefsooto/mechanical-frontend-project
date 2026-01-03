import { useState } from "react";
import "../assets/style/book.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    vehicleType: "",
    serviceRequired: "",
    preferredDate: "",
    preferredTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      vehicleType: "",
      serviceRequired: "",
      preferredDate: "",
      preferredTime: "",
    });
  };

  return (
    <section className="booking-section">
      <div className="booking-form-container">
        <h2>Book a Service Appointment</h2>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email / Phone</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email or phone"
              required
            />
          </div>

          <div className="form-group">
            <label>Vehicle Type</label>
            <input
              type="text"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              placeholder="e.g. Toyota, Honda"
              required
            />
          </div>

          <div className="form-group">
            <label>Service Required</label>
            <input
              type="text"
              name="serviceRequired"
              list="services"
              value={formData.serviceRequired}
              onChange={handleChange}
              placeholder="Select or type a service"
              required
            />
            <datalist id="services">
              <option value="Engine Diagnostics" />
              <option value="Oil Change" />
              <option value="Transmission Service" />
              <option value="Air Conditioning" />
              <option value="Battery Replacement" />
              <option value="Brake Repair" />
              <option value="CNG Conversion" />
            </datalist>
          </div>
          <div>
            <label>Additional Notes (Optional)</label>  
            <input type="text" name="message" id="message" placeholder="message" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Preferred Date</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Preferred Time</label>
              <input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="booking-btn">
            submit booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
