import at from "../assets/image/image.png"
import me from "../assets/image/image_02.webp"
import he from "../assets/image/image_07.webp"
const About = () => {
  return (
    <div>
    <h1 className="capitalize text-blue-900 text-center font-serif text-5xl">about us</h1>
      <div className="grid grid-cols-2 gap-20 ml-10 mt-10">
        <div>
          <p>
              Welcome to Ar-Rahman Sooto Autocare, your trusted destination for
              all things automotive! Our passion for cars drives everything we
              do. Whether you're a car enthusiast, a seasoned mechanic, or
              simply someone looking to learn more about vehicles, we are here
              to provide you with valuable insights, resources, and services to
              keep your automotive journey smooth and informed. Who We Are At
              Ar-Rahman Sooto Autocare, we are a team of automotive experts,
              enthusiasts, and professionals dedicated to delivering reliable
              information and top-notch services. With years of experience in
              the automotive industry, we understand the needs of car owners,
              repair professionals, and enthusiasts alike. What We Offer Expert
              Advice: From maintenance tips to in-depth reviews, we cover it all
              to help you make informed decisions. Comprehensive Resources:
              Explore our guides, tutorials, and articles tailored to both
              beginners and experts. Quality Services: Need repairs, upgrades,
              or custom solutions? We've got you covered. Latest Trends: Stay
              updated with the newest innovations, trends, and technologies
              shaping the automotive world.
            </p>
        </div>
        <div>
          <img src={at} className="w-96 rounded-xl" alt="" />
        </div>
      </div>
      <div className="ml-10">
        <h1 className="capitalize text-center font-serif text-blue-900 text-4xl">our mission</h1>
        <div className="grid grid-cols-2">
          <div>
            <p className="mt-10">
              Our mission is to empower you with the knowledge and tools to make
              the most of your vehicle. We believe every car owner deserves to
              enjoy a safe, efficient, and personalized driving experience.
            </p>
          </div>
          <div className="flex gap-2">
            <img src={me} alt=""className="w-64 rounded-lg"  />
            <img src={he} alt="" className="rounded-lg" />
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default About