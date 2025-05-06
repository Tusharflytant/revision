'use client';

import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Thanks for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <section className="bg-black mb-20 max-w-5xl mx-auto my-10 text-white py-10 rounded-2xl px-4 sm:px-8 lg:px-16 shadow-lg border
     border-gray-800">
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-300 text-base sm:text-lg mb-1">
          Stay updated with the latest posts
        </p>
        <p className="text-gray-400 text-base sm:text-lg mb-6">
          Delivered straight to your inbox
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center max-w-2xl mx-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="w-full sm:flex-1 bg-neutral-900 text-white placeholder-gray-400 px-4 py-3 rounded-lg sm:rounded-r-none border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-white text-black font-semibold px-6 py-3 rounded-lg sm:rounded-l-none hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
