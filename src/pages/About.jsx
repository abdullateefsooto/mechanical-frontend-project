// import me from "../assets/image/image_02.webp"
// import he from "../assets/image/image_07.webp"
// import cng from "../assets/image/cng.jpg"
// import kit from "../assets/image/CNG KIT.jpg"
// import "../assets/style/about.css"
// const About = () => {
//   return (
//     <div className="about-section">
//       <h1 className="about-title">about us</h1>

//       <div className="about-grid">
//         <div>
//           <h4 className="acme-regular">Welcome to Ar-Raman Sooto Autocare</h4>
//             <p>
//              Your trusted destination for all things automotive!Our passion for cars drives everything we do. Whether you're a car enthusiast, a seasoned mechanic, or simply someone looking to learn more about vehicles, we are here to provide you with valuable insights, resources, and services to keep your automotive journey smooth and informed.
//             </p>
//           <h4 className="acme-regular">Who We Are</h4>
//             <p>
//               At Ar-Raman Sooto Autocare, we are a team of automotive experts, enthusiasts, and professionals dedicated to delivering reliable information and top-notch services. With years of experience in the automotive industry, we understand the needs of car owners, repair professionals, and enthusiasts alike.
//             </p>
//           <h4 className="acme-regular">What We Offer</h4>
//             <ul className="ul">
//               <li>
//                 Expert Advice: From maintenance tips to in-depth reviews, we cover it all to help you make informed decisions.
//               </li>
//               <li>
//                 Comprehensive Resources: Explore our guides, tutorials, and articles tailored to both beginners and experts.
//               </li>
//               <li>
//                 Quality Services: Need repairs, upgrades, or custom solutions? We've got you covered.
//               </li>
//               <li>
//                 CNG Conversion & Maintenance: We specialize in converting vehicles to run on Compressed Natural Gas (CNG) — offering cleaner, more efficient, and cost-effective alternatives to traditional fuel systems. Our certified technicians ensure every conversion is safe, reliable, and performance-optimized.
//               </li>
//               <li>
//                 Latest Trends: Stay updated with the newest innovations, trends, and technologies shaping the automotive world.
//               </li>
//             </ul>
//         </div>
//         <div>
//           <div className="about-image">
//           </div>
//          <div className="cng">
//           <img src={cng} alt="" />
//           <img src={kit} alt="" />
//         </div>
//         </div>
//       </div>

//       <div className="mission-section">
//         <h1 className="mission-title">our mission</h1>
//         <div className="mission-grid">
//           <div>
//           <h4 className="acme-regular">At Ar-Raman sooto</h4>
//             <p className="mission-text">
//               Our mission is to empower you with the knowledge and tools to make
//               the most of your vehicle. We believe every car owner deserves to
//               enjoy a safe, efficient, and personalized driving experience.
//             </p>
//           </div>
//           <div className="mission-images">
//             <img src={me} alt="" className="mission-image-lg" />
//             <img src={he} alt="" className="mission-image-sm" />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About










import me from "../assets/image/image_02.webp";
import he from "../assets/image/image_07.webp";
import cng from "../assets/image/cng.jpg";
import kit from "../assets/image/CNG KIT.jpg";
import training from "../assets/image/image copy.png"; // <-- Add an image for training
import "../assets/style/about.css";

const About = () => {
  return (
    <div className="about-section">
      <h1 className="about-title">about us</h1>

      <div className="about-grid">
        <div>
          <h4 className="acme-regular">Welcome to Ar-Raman Sooto Autocare</h4>
          <p>
            Your trusted destination for all things automotive! Our passion for cars drives everything we do. 
            Whether you're a car enthusiast, a seasoned mechanic, or simply looking to learn more about vehicles, 
            we provide valuable insights, resources, and services to keep your automotive journey smooth and informed.
          </p>

          <h4 className="acme-regular">Who We Are</h4>
          <p>
            At Ar-Raman Sooto Autocare, we are a team of automotive experts, enthusiasts, and professionals 
            dedicated to delivering reliable information and top-notch services. With years of experience, 
            we understand the needs of car owners, repair professionals, and enthusiasts alike.
          </p>

          <h4 className="acme-regular">What We Offer</h4>
          <ul className="ul">
            <li>Expert Advice: From maintenance tips to in-depth reviews, we cover it all to help you make informed decisions.</li>
            <li>Comprehensive Resources: Explore our guides, tutorials, and articles for beginners and experts alike.</li>
            <li>Quality Services: Repairs, upgrades, and custom solutions – we’ve got you covered.</li>
            <li>CNG Conversion & Maintenance: Convert vehicles to run on Compressed Natural Gas safely and efficiently.</li>
            <li>Latest Trends: Stay updated with innovations and technologies shaping the automotive world.</li>
          </ul>

          <h4 className="acme-regular">Training & Workshops</h4>
          <p>
            We believe in sharing knowledge! At Ar-Raman Sooto Autocare we offer training programs and workshops 
            for aspiring mechanics, automotive students, and car enthusiasts. Learn hands-on skills in diagnostics, 
            repairs, maintenance directly from our certified technicians. And for CNG conversion reach out to us.
          </p>
        </div>

        <div>
          <div className="about-image">
            {/* Could animate or switch images if you want */}
          </div>
          <div className="cng">
            <img src={cng} alt="" />
            <img src={kit} alt="" />
          </div>
          <div className="training-img">
            <img src={training} alt="Training Session" style={{ width: "100%", borderRadius: "8px", marginTop: "20px" }} />
          </div>
        </div>
      </div>

      <div className="mission-section">
        <h1 className="mission-title">our mission</h1>
        <div className="mission-grid">
          <div>
            <h4 className="acme-regular">At Ar-Raman Sooto</h4>
            <p className="mission-text">
              Our mission is to empower you with the knowledge and tools to make the most of your vehicle. 
              We believe every car owner deserves to enjoy a safe, efficient, and personalized driving experience.
            </p>
          </div>
          <div className="mission-images">
            <img src={me} alt="" className="mission-image-lg" />
            <img src={he} alt="" className="mission-image-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
