import React from 'react'

const googlemap = () => {
  return (
    <>
    {/* Map Section */}
    <div className="flex justify-center bg-gray-100">
          <div className="w-300 h-100 aspect-video mb-10 mt-10">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d714.3050127920549!2d76.69969712989423!3d30.713347056154703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1739168399841!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
    </>
  )
}

export default googlemap