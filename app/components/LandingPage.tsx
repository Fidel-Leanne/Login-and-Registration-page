'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AuthValidation from './AuthValidation'

const LandingPage = () => {
  const [userName, setUserName] = useState<string | null>(null)

  useEffect(() => {
    // Fetch the user's name from local storage
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const loggedInUser = users.find((user: any) => user.isLoggedIn)
    if (loggedInUser) {
      setUserName(loggedInUser.name)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gradient-to-br from-blue-600 to-indigo-800">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-6xl font-bold">
            {userName ? `Welcome, ${userName}!` : 'Welcome to Our Blog'}
          </h1>
          <p className="mt-4 text-xl">Insights, stories, and tips from our team.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 mt-8 font-semibold text-blue-600 bg-white rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
            onClick={() => window.location.href = '/'}
          >
            {userName ? 'Explore Posts' : 'Get Started'}
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center px-4"
        >
          <h2 className="text-4xl font-bold text-gray-800">About Our Blog</h2>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">We share the latest news, insights, and tips on various topics including technology, lifestyle, and more.</p>
        </motion.div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Posts</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((post) => (
              <motion.div 
                key={post}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: post * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-800">Post Title {post}</h3>
                <p className="mt-4 text-gray-600">A brief description of the post goes here...</p>
                <a href="#" className="inline-block mt-4 font-semibold text-blue-600 hover:text-blue-800 transition duration-300">Read More →</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-800">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center text-white px-4"
        >
          <h2 className="text-4xl font-bold">Join Our Community</h2>
          <p className="mt-6 text-xl">Sign up today to get the latest updates and exclusive content.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 mt-8 font-semibold bg-white text-blue-600 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
            onClick={() => window.location.href = '/'}
          >
            Sign Up
          </motion.button>
        </motion.div>
      </section>
    </div>
  )
}

export default LandingPage