import { useState } from "react";
import "../assets/style/book.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleType: "",
    serviceRequired: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Booking sent successfully ✅🚗🚗");
      setFormData({
        name: "",
        email: "",
        phone: "",
        vehicleType: "",
        serviceRequired: "",
        message: "",
        preferredDate: "",
        preferredTime: "",
      });
    } else {
      alert("Something went wrong ❌");
    }
  } catch (err) {
    alert("Server error ❌", err);
  }
};


  return (
    <section className="booking-section">
      <div className="booking-form-container">
        <h2>Book a Service Appointment</h2>

        <form onSubmit={handleSubmit} method="POST"  className="booking-form">
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
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{textTransform:"lowercase"}}
              placeholder="Enter your email address example@gmail.com"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
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
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="message"
            />
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

