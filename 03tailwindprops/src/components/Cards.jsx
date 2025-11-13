import React from 'react'

function Cards({username,btntext}) {
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
        <img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
          alt="Sample"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{username}</h2>
          <p className="text-gray-600 mb-4">
            This is a simple card built with Tailwind CSS. You can easily customize
            colors, shadows, and spacing to match your design.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            {btntext}
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cards