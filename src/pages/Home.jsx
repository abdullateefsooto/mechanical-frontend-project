import { IconBattery, IconBattery1, IconCar, IconCarCrane, IconCheckbox, IconChevronRight, IconDroplet, IconEngine, IconGasStation, IconMarkdown, IconTool  } from '@tabler/icons-react'
import auto from '../assets/image/car-engine-new1.jpg'
const home = () => {
  return (
    <div>
        <div>

            {/* hero banner */}
            <div className='bg-[url(./assets/image/car-engine-new1.jpg)] bg-no-repeat bg-center h-full w-full rounded-xl justify-center items-center flex-col flex'>
              <div>
              <h2>Welcome to Ar-Rahman Sooto Autocare</h2>
              <p>we give you top top-notch</p>
              </div>
            </div>



              <div className='flex justify-center items-center gap-8 bg-blue-300 px-16 py-8' >
                <p className='text-4xl'>Schedule a Diagnostics Appointment for your Vehicle</p>
                <a href='#' className='bg-blue-700 px-4 py-2 text-2xl hover: rounded-md font-serif capitalize'>book appointment</a>
              </div>
              {/* what we do */}
              <div>
                <h1 className='uppercase text-center text-3xl mt-10  font-serif boder'>what we do</h1>
                <p className='text-center font-serif mt-6'>We offer a full range of garage services to vehicle owners located in Nigeria.Our professinals know how to handle a wide range of car services.</p>
              </div>

              <div className="grid grid-cols-2 m-8 gap-10">
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
              <div className='grid grid-cols-2'>
                <div><img className=' w-11/12 rounded-3xl mt-10' src={auto} alt="" /></div>
                <div className='mr-10'>
                  <h2 className='text-center capitalize text-blue-900 font-bold text-2xl'>vehicles serviced</h2>
                  <h4 className='text-center text-xl'>
                    We provide top notch maintenance service for all types of vehicles.
                  </h4>
                  <h4 className='text-center '>
                    We are experienced in serviving and repair of the following makes:
                  </h4>
                 <div className='grid grid-cols-3 gap-5 mt-5 text-2xl capitalize'>
                  <div>
                    <ul>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' />toyota</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> ford</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> honda</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> bmw</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> mercedes benz</li>
                    </ul>
                  </div>
                  <div>
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
                      <IconEngine className='h-24 w-64' />
                      <p className='mt-5'>Our team of professionals are trained to pinpoint and address any engine-related issues, ensuring your vehicle is always road-ready</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className='capitalize text-blue-500 text-center text-xl'>oil and filter</h1>
                    <div className='flex'>
                      <IconDroplet className='h-24 w-64' />
                      <p className='mt-5'>At Ar-Rahman Sooto Autocare, we provide high-quality oil and filter changes that not only protect your engine from wear and tear but also enhance its efficiency, ensuring your car operates at its optimal potential.</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className='capitalize text-blue-500 text-center text-xl'>transmission service</h1>
                    <div className="flex">
                      <IconTool className='h-24 w-64'/>
                      <p className='mt-5'>Whether manual or automatic, the transmission is the heart of vehicle performance. Our transmission services are tailored to maintain smooth gear shifts and longevity, making sure you enjoy a seamless driving experience</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className='capitalize text-blue-500 text-center text-xl'>air conditional</h1>
                    <div className='flex'>
                      <IconGasStation className='h-24 w-64'/>
                      <p className='mt-5'>No matter the season, Ar-Rahman Sooto Automobile ensures a comfortable drive. Our experts specialize in AC system repairs, making sure your vehicle interiror remains cool</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className='capitalize text-blue-500 text-center text-xl'>battery testing and replacement</h1>
                    <div className="flex">
                      <IconBattery1 className='h-24 w-64'/>
                      <p className='mt-5'>Do not get caught off-guard. At Ar-Rahman Sooto Automobile, our reliable battery diagnostics and replacement services guarantee you are always powered up, ready for any journey ahead.</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className='capitalize text-blue-500 text-center text-xl'>comprehensive vehicle inspection</h1>
                    <div className='flex'>
                      <IconCar className='h-24 w-64'/>
                      <p className='mt-5'>With meticulous attention to detail, we assess every aspect of your vehicle to ensure it runs smoothly and safely, giving you peace of mind on the road.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div>
                  <h1 className='capitalize font-bold text-2xl text-blue-800 text-center'>why choose us</h1>
                </div>
                <div>
                    <div className='flex'>
                      <IconCheckbox stroke={2} className='text-blue-900 mt-5 mr-2 icon' />
                      <p className='mt-5'>
                        At Ar-Rahman Sooto Automobile, we are passionate about revolutionizing
                        the automotive industry by delivering top-notch solutions tailored to
                        your needs. Here's what sets us apart:
                      </p>
                    </div>
                    <div className='flex'>
                      <IconCheckbox stroke={2} className='text-blue-900 mt-5 mr-2 icon' />
                      <p className='mt-5'>
                        With years of experience in the automotive field, our team of
                        certified professionals is dedicated to providing exceptional quality
                        and innovative solutions. Whether it's maintenance, repairs, or custom
                        builds, we have the skills and knowledge to exceed your expectations.
                      </p>
                    </div>
                    <div className='flex'>
                      <IconCheckbox  className='text-blue-900 mt-5 mr-2 icon' />
                      <IconChevronRight className='text-blue-900 mt-5 mr-2' />
                      <p className='mt-5'>
                        Your satisfaction is our priority. We pride ourselves on delivering
                        personalized service, clear communication, and timely solutions. From
                        the moment you step through our doors, you'll experience a seamless
                        and hassle-free process.
                      </p>
                    </div>
                    <div className='flex'>
                      <IconCheckbox stroke={2} className='text-blue-900 mt-5 mr-2 icon' />
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