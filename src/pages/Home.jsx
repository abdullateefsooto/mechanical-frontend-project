import { IconBattery1, IconCar, IconCarCrane, IconCheckbox, IconChevronRight, IconDroplet, IconEngine, IconGasStation, IconTool  } from '@tabler/icons-react'
import auto from '../assets/image/car-engine-new1.jpg'


const home = () => {
  return (
    <div className=''>
        <div>

            {/* hero banner */}
            <div className='bg-[url(./assets/image/car-engine-new1.jpg)]  bg-no-repeat bg-center flex h-dvh rounded-xl'>
              <div>
                <div>
                  <p className='text-2xl uppercase text-white font-serif boder'>Welcome to Ar-Rahman Sooto Autocare</p>
                  <p className=' capitalize text-xl ml-28 text-white font-serif boder'>we give you top-notch</p>
                </div>
              </div>
              <div className=' flex justify-end items-end'>
                <div>
                <p  className='text-2xl ml-32 uppercase text-white font-serif boder'>we make your car last longer</p>
                <p className='text-xl capitalize text-white font-serif boder'>using premium lubricants, geniue part and our expert mechanics.</p>
                </div>
              </div>
            </div>



              <div className='flex justify-center rounded-lg items-center gap-8 bg-blue-300 mt-10 px-16 py-8' >
                <p className='text-4xl font-serif'>Schedule a Diagnostics Appointment for your Vehicle</p>
                <a href='#' className='bg-blue-700 px-4 py-2 text-2xl hover: rounded-md font-serif capitalize'>book appointment</a>
              </div>
              {/* what we do */}
              <div>
                <h1 className='uppercase text-center text-3xl mt-10  font-serif boder'>what we do</h1>
                <p className='text-center font-serif mt-6'>We offer a full range of garage services to vehicle owners located in Nigeria.Our professinals know how to handle a wide range of car services.</p>
              </div>

              <div className="flex m-8 gap-10">
                  <div className="">
                  <div className='ml-64'><IconTool stroke={1.75} className='w-24 h-24'/></div>
                    <h1 className='text-center text-blue-700 font-semibold'>
                    VEHICLE MAINTENANCE & REPAIR</h1>
                    <p className=' text-center ml-3.5'></p>
                    <p className='mt-5'>
                    Ensuring your vehicle runs smoothly and efficiently is our top priority. Experience dealership-grade service with the warmth and attention of a trusted local mechanic. The best performance of your car is just a visit away
                    </p>
                  </div>
                  <div className="">
                    <div className='ml-64'><IconCarCrane stroke={1.75} className='w-24 h-24 '/></div>
                    <h1 className="text-center text-blue-700 font-semibold">
                    COLLISSION REPAIR
                    </h1>
                    <p className='mt-5'>
                    Utilizing the latest techniques and state-of-the-art equipment, we meticulously restore your vehicle to its original condition, ensuring safety and preserving its value. Trust us to make your vehicle look and drive like the accident never happened.
                    </p>
                  </div>
              </div>

                  {/* vehicle serviced */}
              <div className='flex flex-col-2'>
                <div><img className=' w-10/12 rounded-3xl mt-10' src={auto} alt="" /></div>
                <div className=' mr-24'>
                  <h2 className='text-center capitalize text-blue-900 font-bold text-2xl'>vehicles serviced</h2>
                  <h4 className='text-center text-xl'>
                    We provide top notch maintenance service for all types of vehicles.
                  </h4>
                  <h4 className='text-center '>
                    We are experienced in serviving and repair of the following makes:
                  </h4>
                 <div className='grid grid-cols-3 gap-5 mt-5 text-2xl capitalize'>
                  <div className='mr-5'>
                    <ul>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' />toyota</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> ford</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> honda</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> bmw</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> mercedes benz</li>
                    </ul>
                  </div>
                  <div className='mr-5'>
                    <ul>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> lexus</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> range rover</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> chevrolet</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> hyundai</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> mazda</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> mini cooper</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> volkswagen</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> bentley</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> kia</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> nissan</li>
                    </ul>
                  </div>
                 </div>

                </div>
              </div>

                  {/*rendered service*/}
              <div>
                  <h1 className='capitalize text-blue-700 text-2xl font-bold text-center'>rendered services</h1>
                  <div>
                    <p className='text-xl text-center'>We can help you with everything from an engine change to an oil change.</p>
                    <p className=' text-lg text-center'>We can handle any problem on both foreign and domestic vehicles.</p>
                  </div>
                <div className='flex flex-col mt-10'>
                  <div className="">
                    <h1 className='capitalize text-blue-500 text-center text-xl'>engine diagnostics</h1>
                    <div className='flex '>
                      {/* <IconEngine className='h-24 w-64' /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><g fill="none" stroke="#140c45" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="48" stroke-dashoffset="48" d="M11 9h6v10h-6.5l-2 -2h-2.5v-6.5l1.5 -1.5Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"/></path><path fill="#140c45" fill-opacity="0" d="M17 13h0v-3h0v8h0v-3h0z" opacity="0"><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M17 13h0v-3h0v8h0v-3h0z;M17 13h4v-3h1v8h-1v-3h-4z"/><set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"/><set fill="freeze" attributeName="opacity" begin="0.6s" to="1"/></path><path d="M6 14h0M6 11v6" opacity="0"><animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M6 14h0M6 11v6;M6 14h-4M2 11v6"/><set fill="freeze" attributeName="opacity" begin="0.8s" to="1"/></path><path d="M11 9v0M8 9h6" opacity="0"><animate fill="freeze" attributeName="d" begin="1s" dur="0.2s" values="M11 9v0M8 9h6;M11 9v-4M8 5h6"/><set fill="freeze" attributeName="opacity" begin="1s" to="1"/></path></g></svg>
                      <p className='mt-8 ml-2'>Our team of professionals are trained to pinpoint and address any engine-related issues, ensuring your vehicle is always road-ready</p>
                    </div> 
                  </div>
                  <div className="">
                    <h1 className='capitalize text-blue-500 text-center text-xl'>oil and filter</h1>
                    <div className='flex'>
                      {/* <IconDroplet className='h-24 w-64' /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="#140c45" d="M22 12.5s2 2.17 2 3.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.33 2-3.5 2-3.5M6 6h4a1 1 0 0 1 1 1a1 1 0 0 1-1 1H9v2h2c.74 0 1.39.4 1.73 1l6.51-3.76l3.26 1.89c.5.27.64.87.37 1.37c-.28.47-.87.64-1.37.36l-2.1-1.21l-3.65 6.32c-.34.61-1 1.03-1.75 1.03H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h2V8H6a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-1 6v3h9l2.06-3.57l-3.46 2l-.91-1.43zM.38 9.21L2.09 7.5c.41-.39 1.02-.39 1.41 0s.39 1 0 1.41l-1.71 1.71c-.39.38-1.02.38-1.41 0C0 10.23 0 9.6.38 9.21"/></svg>
                      <p className='mt-5 ml-5'>At Ar-Rahman Sooto Autocare, we provide high-quality oil and filter changes that not only protect your engine from wear and tear but also enhance its efficiency, ensuring your car operates at its optimal potential.</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className='capitalize text-blue-500 text-center text-xl'>transmission service</h1>
                    <div className="flex">
                      {/* <IconTool className='h-24 w-64'/> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 20 20"><path fill="#140c45" d="M16.73 7.563c.403.404.783.864 1.115 1.344a.75.75 0 0 1-1.235.852A7.968 7.968 0 0 0 4.4 8.623c-.32.322-.64.712-.932 1.133a.75.75 0 1 1-1.233-.855c.34-.49.716-.95 1.105-1.338a9.47 9.47 0 0 1 13.39 0M5.478 9.451a6.444 6.444 0 0 1 8.652-.417c-.516.095-1 .39-1.314.887a4.944 4.944 0 0 0-7.192 1.851a.75.75 0 0 1-1.338-.677a6.4 6.4 0 0 1 1.192-1.644m4.303 6.524l1.075-2.153a1.242 1.242 0 1 0-1.075 2.153m1.702-3.41l.674-1.348a4.13 4.13 0 0 0-5.044.623a4.1 4.1 0 0 0-.86 1.274a.75.75 0 0 0 1.373.6c.136-.31.32-.586.547-.813c.9-.9 2.289-1.011 3.31-.335m2.119-2.011l-3.496 6.998A1 1 0 0 0 11.002 19h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0m1.395 1.941v3.002a.5.5 0 1 1-1 0v-3.002a.5.5 0 1 1 1 0m-.5 5.504a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"/></svg>
                      <p className='mt-5 ml-5'>Whether manual or automatic, the transmission is the heart of vehicle performance. Our transmission services are tailored to maintain smooth gear shifts and longevity, making sure you enjoy a seamless driving experience</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className='capitalize text-blue-500 text-center text-xl'>air conditional</h1>
                    <div className='flex'>
                      {/* <IconGasStation className='h-24 w-64'/> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="#140c45" d="M6.59.66c2.34-1.81 4.88.4 5.45 3.84c.43 0 .85.12 1.23.34c.52-.6.98-1.42.8-2.34c-.42-2.15 1.99-3.89 4.28-.92c1.81 2.34-.4 4.88-3.85 5.45c0 .43-.11.86-.34 1.24c.6.51 1.42.97 2.34.79c2.13-.42 3.88 1.98.91 4.28c-2.34 1.81-4.88-.4-5.45-3.84c-.43 0-.85-.13-1.22-.35c-.52.6-.99 1.43-.81 2.35c.42 2.14-1.99 3.89-4.28.92c-1.82-2.35.4-4.89 3.85-5.45c0-.43.13-.85.35-1.23c-.6-.51-1.42-.98-2.35-.8c-2.13.42-3.88-1.98-.91-4.28M5 16h2a2 2 0 0 1 2 2v6H7v-2H5v2H3v-6a2 2 0 0 1 2-2m0 2v2h2v-2zm7.93-2H15l-2.93 8H10zM18 16h3v2h-3v4h3v2h-3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2"/></svg>
                      <p className='mt-5 ml-2'>No matter the season, Ar-Rahman Sooto Automobile ensures a comfortable drive. Our experts specialize in AC system repairs, making sure your vehicle interiror remains cool</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className='capitalize text-blue-500 text-center text-xl'>battery testing and replacement</h1>
                    <div className="flex">
                      {/* <IconBattery1 className='h-24 w-64'/> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="#140c45" d="M4 3v3H1v14h22V6h-3V3h-6v3h-4V3zM3 8h18v10H3zm12 2v2h-2v2h2v2h2v-2h2v-2h-2v-2zM5 12v2h6v-2z"/></svg>
                      <p className='mt-5 ml-3'>Do not get caught off-guard. At Ar-Rahman Sooto Automobile, our reliable battery diagnostics and replacement services guarantee you are always powered up, ready for any journey ahead.</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className='capitalize text-blue-500 text-center text-xl'>comprehensive vehicle inspection</h1>
                    <div className='flex'>
                      {/* <IconCar className='h-24 w-64'/> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="90" viewBox="0 0 512 512"><path fill="#140c45" d="M188.287 169.428c-28.644-.076-60.908 2.228-98.457 8.01c-4.432.62-47.132 24.977-58.644 41.788c-11.512 16.812-15.45 48.813-15.45 48.813c-3.108 13.105-1.22 34.766-.353 36.872c1.17 4.56 7.78 8.387 19.133 11.154C35.84 295.008 53.29 278.6 74.39 278.574c22.092 0 40 17.91 40 40a40 40 0 0 1-.392 5.272c.59.008 1.26.024 1.82.03l239.266 1.99a40 40 0 0 1-.693-7.292c0-22.09 17.91-40 40-40c22.092 0 40 17.91 40 40c0 2.668-.266 5.33-.796 7.944l62.186.517c1.318-22.812 6.86-46.77-7.024-66.72c-5.456-7.84-31.93-22.038-99.03-32.66c-34.668-17.41-68.503-37.15-105.35-48.462c-28.41-5.635-59.26-9.668-96.09-9.765m-17.197 11.984c5.998.044 11.5.29 16.014.81l7.287 48.352c-41.43-5.093-83.647-9.663-105.964-27.5c.35-5.5 7.96-13.462 16.506-16.506c4.84-1.724 40.167-5.346 66.158-5.156zm34.625.348c25.012.264 62.032 2.69 87.502 13.94c12.202 5.65 35.174 18.874 50.537 30.55l-6.35 10.535c-41.706-1.88-97.288-4.203-120.1-6.78l-11.59-48.245zM74.39 294.574a24 24 0 0 0-24 24a24 24 0 0 0 24 24a24 24 0 0 0 24-24a24 24 0 0 0-24-24m320 0a24 24 0 0 0-24 24a24 24 0 0 0 24 24a24 24 0 0 0 24-24a24 24 0 0 0-24-24"/></svg>
                      <p className='mt-5 ml-2'>With meticulous attention to detail, we assess every aspect of your vehicle to ensure it runs smoothly and safely, giving you peace of mind on the road.</p>
                    </div>
                  </div>
                </div>
              </div>
              
                  {/*why choose us */}
              <div>
                <div>
                  <h1 className='capitalize font-bold text-2xl text-blue-800 text-center'>why choose us</h1>
                </div>
                <div>
                    <div className='flex'>
                      <IconChevronRight className='text-blue-900 h-10 w-10 mt-5 mr-2' />
                      {/* <IconCheckbox stroke={2} className='text-blue-900 mt-5 mr-2 icon' /> */}
                      <p className='mt-5'>
                        At Ar-Rahman Sooto Automobile, we are passionate about revolutionizing
                        the automotive industry by delivering top-notch solutions tailored to
                        your needs. Here's what sets us apart:
                      </p>
                    </div>
                    <div className='flex'>
                      <IconChevronRight className='text-blue-900 h-10 w-10 mt-5 mr-2' />
                      {/* <IconCheckbox stroke={2} className='text-blue-900 mt-5 mr-2 icon' /> */}
                      <p className='mt-5'>
                        With years of experience in the automotive field, our team of
                        certified professionals is dedicated to providing exceptional quality
                        and innovative solutions. Whether it's maintenance, repairs, or custom
                        builds, we have the skills and knowledge to exceed your expectations.
                      </p>
                    </div>
                    <div className='flex'>
                      {/* <IconCheckbox  className='text-blue-900 mt-5 mr-2 icon' /> */}
                      <IconChevronRight className='text-blue-900 h-10 w-10 mt-5 mr-2' />
                      <p className='mt-5'>
                        Your satisfaction is our priority. We pride ourselves on delivering
                        personalized service, clear communication, and timely solutions. From
                        the moment you step through our doors, you'll experience a seamless
                        and hassle-free process.
                      </p>
                    </div>
                    <div className='flex'>
                    <i className=" fa-whatsapp "></i>
                      <IconChevronRight className='text-blue-900 h-12 w-12 mt-5 mr-2' />
                      {/* <IconCheckbox stroke={2} className='text-blue-900 mt-5 mr-2 icon' /> */}
                      <p className='mt-5'>
                        Choose Ar-Rahman Sooto Automobile, Your Partner in Automotive
                        Excellence. Let us keep you on the road with confidence. Contact us
                        today to experience automotive solutions designed with you in mind!!!
                      </p>
                    </div>
                </div>
              </div>
              
              


        </div>
    </div>
  )
}

export default home