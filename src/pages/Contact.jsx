import { IconBrandWhatsapp, IconCarCrane,  IconLocation, IconPercentage } from "@tabler/icons-react"


const Contact = () => {
  return (
    <div className="ml-40 mr-40">
      <div className="grid grid-cols-3 flex-wrap gap-5">
        <div>
          <h3 className="font-serif capitalize text-xl">hotlines</h3>
          <div className="flex">
            <IconBrandWhatsapp className="text-blue-900 h-20 w-20 " />
            <div className="mt-3">
              <p className="capitalize text-gray-400">mobile: <span>08066244696</span></p>
              <p className="capitalize text-gray-400">assistance: <span>07063470681</span></p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-serif capitalize">Ar-Rahman Sooto Autocare</h3>
          <div className="flex">
            <IconLocation  className="text-blue-900  h-20 w-40 "/>
            <div className="capitalize text-gray-400 ">
              <p>
                klm. 5 Lasu isheri road Alhaji Ede bus stop, Igando lagos
                state. inside NNPC Petrol station
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-serif capitalize">24/7 assistance</h3>
          <div className="flex gap-3">
            <IconCarCrane className="h-20 w-60 text-blue-900" />
            <div className=" text-gray-400  ">
              Each customer has an account managers that will respond to your vehicle needs during and outside office hours.
            </div>
          </div>
        </div>

      </div>

      <div>
        <h1 className="font-serif capitalize text-blue-900 text-2xl mb-10  ">drop us a message</h1>
        <form>
          <div className="flex basis-4 gap-10">
            <div>
              <input type="text" name="name" id="name" placeholder="your name" className="bg-gray-200 capitalize border w-64 h-16 rounded-xl" />
              <br />
              <input type="email" name="email" id="email" placeholder="your email"  className="bg-gray-200 border capitalize mt-5 w-64 h-16 rounded-xl" />
              <br />
              <input type="tel" name="phone" id="phone" placeholder="your phone"  className="bg-gray-200  capitalize  mt-5 w-64 h-16 rounded-xl" />
              <br />
            </div>
            <textarea name="message" id="message" placeholder="message" className="bg-gray-200 border capitalize w-96 h-60 rounded-xl"></textarea>
          </div>
          <button className="border-dashed bg-blue-700 rounded-lg px-2 py-4 text-white font-bold">send message</button>
        </form>  
      </div>
      <div className="flex gap-32">
        <div>
          <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.70742910449!2d3.248866975283375!3d6.558568393434587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b855a7edde619%3A0x88b0b0fdd4340650!2sAlhaji%20Ede%20Ave%2C%20Ikotun%2C%20Alimosho%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1736025222869!5m2!1sen!2sng"}
          width={600}
          height={500}
          className="rounded-lg mt-5 border-0"
          allowfullscreen=""
          // loading="lazy"
          referrerpolicy={"no-referrer-when-downgrade"}>
          </iframe>
        </div>
          
        <div className="text-center mt-5 boder">
          <IconPercentage stroke={2} className="h-32 w-40 ml-9" />
          <h2 className="text-2xl mt-10 uppercase ">online <span className="text-blue-800">appointment</span></h2>
          <p className="text-gray-500 mt-10 capitalize">book your appointment now</p>
          <div className="mt-10">
            <a href="" className=" hover:underline rounded-2xl  bg-blue-800 text-white px-3 py-2 z-10">make appointment</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact