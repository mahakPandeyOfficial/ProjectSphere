// Footer.jsx
import React from 'react';
import rectangle from '../../assets/images/Rectangle.svg'
function Footer() {
  return (
    <footer className="bg-gray-100">
      {/* Learn More Section */}
      <div className="relative h-[400px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${rectangle})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-xl md:text-2xl font-semibold mb-4">
            Learn more about our listing process, as well as our additional staging and design work.
          </p>
          <button className="px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-[#FFA500] hover:text-white transition duration-300">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Footer Navigation and Subscription */}
      <div className=" bg-gradient-to-r from-[#CFAEEE] to-[#94BBE9]
        @apply bg-no-repeat bg-center bg-cover w-full h-[100px] leading-[100px]; text-white py-6 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Footer Links */}
          <div className="flex space-x-4 md:space-x-8">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Projects</a>
            <a href="#" className="hover:underline">Testimonials</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>

          {/* Subscription Form */}
          <div className="flex items-center space-x-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-4 py-2 rounded-lg text-black"
            />
            <button className="px-4 py-2 bg-white text-[#0073E6] font-medium rounded-lg hover:bg-[#FFA500] hover:text-white transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-gray-400 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© All Rights Reserved 2023</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
