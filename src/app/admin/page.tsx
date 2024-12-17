'use client';  // Add this at the top

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'; // Corrected import path

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`bg-[#F6F7F9] min-h-screen flex flex-col ${darkMode ? 'bg-gray-800 text-white' : ''}`}>
      <Navbar />

      <div className="flex flex-col md:flex-row flex-1 py-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white p-6 shadow-md">
          <nav className="flex flex-col h-full p-4 space-y-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Main Menu</div>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-blue-600 bg-blue-100"
            >
              <span className="material-icons">home</span>
              <span>Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <span className="material-icons">directions_car</span>
              <span>Car Rent</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <span className="material-icons">insights</span>
              <span>Insight</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <span className="material-icons">receipt</span>
              <span>Reimburse</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <span className="material-icons">inbox</span>
              <span>Inbox</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <span className="material-icons">calendar_today</span>
              <span>Calendar</span>
            </a>

            <div className="mt-8 text-xs font-semibold text-gray-500 uppercase tracking-wide">Preferences</div>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <span className="material-icons">settings</span>
              <span>Settings</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100"
            >
              <span className="material-icons">help_outline</span>
              <span>Help & Center</span>
            </a>
            <button
              onClick={toggleDarkMode}
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100"
            >
              {darkMode ? (
                <>
                  <SunIcon className="w-5 h-5" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <MoonIcon className="w-5 h-5" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100 mt-auto"
            >
              <span className="material-icons">logout</span>
              <span>Log Out</span>
            </a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <Image
                className="w-full h-auto rounded-lg shadow"
                src="/Details Rental.png"
                height={836}
                width={534}
                alt="Rental details"
              />
            </div>

            <div className="w-full">
              <Image
                className="w-full h-auto rounded-lg shadow mb-6 md:mb-0"
                src="/rrrr.png"
                height={524}
                width={324}
                alt="Rental details"
              />
              <Image
                className="w-full h-auto rounded-lg shadow my-8"
                src="/rrr.png"
                height={524}
                width={480}
                alt="Rental details"
              />
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
