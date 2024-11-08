import React from 'react'
import Pricing from '../components/Pricing/Pricing'
import whychooseus1 from '../assets/images/whychooseus1.svg'
import whychooseus2 from '../assets/images/whychooseus2.svg'
import whychooseus3 from '../assets/images/whychooseus3.svg'

function Services() {
  return (
    <>
    <div className="flex flex-col items-center py-16 bg-white">
      <div className="text-center mb-8">
        <span className="px-4 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-semibold">
          We Are Here For Your Stress Relief.
        </span>
        <h2 className="text-3xl font-bold mt-4">How Consultation can help your business.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <div className="flex flex-col items-center p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
          <div className="bg-gray-200 rounded-full p-4 mb-4">
            <img src={whychooseus1} alt="Analyze Paperwork" className="w-10 h-10 rounded-full" />
          </div>
          <h3 className="text-lg font-semibold">Analyze Paperwork</h3>
          <p className="text-gray-600 text-center mt-2">
            We perform a detailed analysis of your property. Comparing it to others in the neighborhood. Making a mistake on your return can be costly.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
          <div className="bg-gray-200 rounded-full p-4 mb-4">
            <img src={whychooseus2} alt="File Paperwork" className="w-10 h-10 rounded-full" />
          </div>
          <h3 className="text-lg font-semibold">File Paperwork</h3>
          <p className="text-gray-600 text-center mt-2">
            We file all the appropriate paperwork with the appraisal district on your behalf. We will make this process very simple for you.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
          <div className="bg-gray-200 rounded-full p-4 mb-4">
            <img src={whychooseus3} alt="Meet Appraisal District" className="w-10 h-10 rounded-full" />
          </div>
          <h3 className="text-lg font-semibold">Meet Appraisal District</h3>
          <p className="text-gray-600 text-center mt-2">
            We meet with the Appraisal District presenting the appropriate documentation to negotiate a lower tax valuation for you.
          </p>
        </div>
      </div>
    </div>

<section>
  <Pricing/>
</section>
    </>
  )
}

export default Services