import React, { useState } from 'react';
import mapContact from '../assets/images/mapContact.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  const googleMapsLink = "https://www.google.com/maps/place/500+Terry+Francine+Street,+San+Francisco,+CA+94158";

  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-8">Contact</h1>

      {/* Main Layout: Contact Form on the Left, Office Location on the Right */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        
        {/* Contact Form */}
        <div className="md:w-2/3 bg-white p-6 border-[#FFA500] shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 h-32 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#FFA500] text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Office Location - Map Section */}
        <div className="md:w-1/3 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Our Office Location</h2>
          {/* Placeholder Image for Map */}
          <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
            <img
              src={mapContact}
              alt="Office Location Map"
              className="w-full h-96 object-cover rounded-md shadow-md"
            />
          </a>
          <div className="text-center mt-4 text-gray-600">
            <p>500 Terry Francine Street, San Francisco, CA 94158</p>
            <p>Email: info@mysite.com</p>
            <p>Tel: 123-456-7890</p>
            <p>Fax: 123-456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
