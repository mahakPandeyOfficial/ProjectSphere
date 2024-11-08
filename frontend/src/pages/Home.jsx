import React from 'react';
import heroBg from '../assets/images/heroBg.svg';
import Ellipse12 from '../assets/images/Ellipse12.svg'
import Ellipse11 from '../assets/images/Ellipse11.svg'
import Ellipse13 from '../assets/images/Ellipse13.svg'
import whychooseus1 from '../assets/images/whychooseus1.svg'
import whychooseus2 from '../assets/images/whychooseus2.svg'
import whychooseus3 from '../assets/images/whychooseus3.svg'
import dollar from '../assets/images/circle-dollar-sign.svg'
import home from '../assets/images/home.svg'
import paintbrush from '../assets/images/paintbrush-2.svg'
import ProjectSection from '../pages/Projects'
import Feedback from './Feedback';




function Home() {

 
  
  return (<>

  {/** ===========hero section==================== */}

    <div
      className="relative h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})` // Ensure this path is correct
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white z-10">
        <h2 className="text-lg font-light mb-4">Developing Innovative Strategies</h2>
        <h1 className="text-5xl font-bold mb-6">ACHIEVING GROWTH</h1>
        <a
          href="#"
          className="mt-4 px-8 py-3 bg-white text-black font-semibold rounded-lg border-2 border-[#FFA500] hover:bg-[#FFA500] hover:text-white transition duration-300"
        >
          Free Consultation
        </a>
      </div>
    </div>
    

     {/** ===========hero section end================ */}
<section>
<div className="flex items-center justify-center min-h-[400] bg-gray-50">
      <div className="container mx-auto p-6 relative">
        {/* Text Section */}
        <div className="md:w-1/2 lg:w-1/3 mb-6 md:mb-0 text-left">
          <h1 className="text-3xl font-semibold text-blue-600 mb-2">
            Not Your Average Realtor
          </h1>
          <p className="text-gray-600">
            We aim to bring you a unique property experience with consultative design and effective marketing that focuses on your needs and values.
          </p>
        </div>

        {/* Image and Accent Section */}
        <div className="flex justify-center md:justify-end md:items-center md:absolute md:right-0 top-0 md:w-1/2 lg:w-1/3">
          {/* Colored Accent Circles */}
          <div className="absolute top-8 left-1/4 md:left-auto md:-inset-8left-20 lg:left-0">
            <div className="w-20 h-20 bg-blue-600 rounded-full mb-2"></div>
            <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
          </div>

          {/* Main Image */}
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden bg-white shadow-lg flex items-center justify-center border-4 border-white">
            <img
              src={Ellipse11}
              alt="Realtor with house model"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Smaller Images */}
          <div className="flex flex-col space-y-4 ml-6">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-white shadow-lg border-4 border-white">
              <img
                src={Ellipse12}
                alt="Happy clients receiving keys"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-white shadow-lg border-4 border-white">
              <img
                src={Ellipse13}
                alt="Realtor with document"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
</section>

{/**======================Why Choose Us=================== */}
<section>
<div className="bg-gray-50 min-h-screen py-10 px-6 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-4xl font-bold text-blue-600 mb-8 text-center">
        Why Choose Us?
      </h2>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-16">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="text-blue-600 text-4xl mb-2">
            <img src={home} /> {/* Replace with the correct icon */}
          </div>
          <h3 className="text-xl font-semibold text-blue-600">Potential ROI</h3>
          <p className="text-gray-600 mt-2">
            Whether you are looking to buy a new property or renovate your current home for sale, we’ll work to get you a major gain that returns the investment.
          </p>
        </div>
        
        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="text-blue-600 text-4xl mb-2">
            <img src={paintbrush} /> {/* Replace with the correct icon */}
          </div>
          <h3 className="text-xl font-semibold text-blue-600">Design</h3>
          <p className="text-gray-600 mt-2">
            Our strategic, hands-on team design makes the pathway easier, giving your design options and cost estimates to be better suited for future acquisitions.
          </p>
        </div>
        
        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="text-blue-600 text-4xl mb-2">
            <img src={dollar} /> {/* Replace with the correct icon */}
          </div>
          <h3 className="text-xl font-semibold text-blue-600">Marketing</h3>
          <p className="text-gray-600 mt-2">
            Bringing your property advertising game alive. We implement practical digital marketing plans necessary every home to reach today’s buyers.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Image 1 */}
        <div className="relative">
          <img
            src={whychooseus1}
            alt="Agent with client"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-2 left-2 w-4 h-4 bg-blue-600 rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-orange-500 rounded-full"></div>
        </div>

        {/* Image 2 */}
        <div className="relative">
          <img
            src={whychooseus2}
            alt="Happy clients"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-2 left-2 w-4 h-4 bg-blue-600"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-2 border-white bg-orange-500"></div>
        </div>

        {/* Image 3 */}
        <div className="relative">
          <img
            src={whychooseus3}
            alt="Handshake with clients"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-2 left-2 w-4 h-4 bg-blue-600"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-2 border-white bg-orange-500"></div>
        </div>
      </div>
    </div>
</section>

{/**==============Project sectionn=-======================= */}

  <ProjectSection />


{/**================Feedback Section or happy Client section================ */}

  <Feedback />

  </>
  )
}

export default Home;
