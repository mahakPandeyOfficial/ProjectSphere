import React from 'react';
import project2 from '../assets/images/project2.svg'

const About = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">About us</h1>
      <p className="text-xl text-gray-600 font-bold text-center mb-9">
        As a Consultation Services we are Committed to Building Custom Solutions
        that Drive Business Success.
      </p>
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6 md:p-12 max-w-4xl w-full">
        <img
          src={project2}
          alt="Team working together"
          className="w-96 md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6"
        />
        <div className="text-gray-700 md:w-1/2">
          <p className="mb-4">
            At our Consulatation services agency, we specialize in creating custom 
            solutions that help businesses achieve their online goals. Our team of
            experienced web developers, designers, and digital strategists work
            collaboratively to build websites, web applications, and e-commerce solutions
            that meet our clients unique needs and deliver results.
          </p>
          <p className="mb-6">
            Our mission is to provide our clients with the tools they need to succeed in
            the online marketplace. We are dedicated to staying up-to-date with the latest
            web technologies and trends to ensure that we are always delivering the
            highest quality work. We believe that every business deserves a website that
            reflects their brand personality and effectively communicates their message
            to their target audience.
          </p>
          <button  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
