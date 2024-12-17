import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="bg-[#F6F7F9] min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto p-4">
        {/* Pickup Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-8">
          <div className="bg-white py-6 px-4 w-full max-w-lg shadow-md rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <Image src="/mark-1.png" width={24} height={24} alt="mark" />
              <p className="text-black font-bold">Pick-up</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <select className="border text-[#90A3BF] p-2 rounded-md w-full lg:w-auto">
                <option value="">Select city ↓</option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
              </select>
              <input
                type="date"
                className="border text-[#90A3BF] p-2 rounded-md w-full lg:w-auto"
              />
              <input
                type="time"
                className="border text-[#90A3BF] p-2 rounded-md w-full lg:w-auto"
              />
            </div>
          </div>
          <div className="bg-white py-6 px-4 w-full max-w-lg shadow-md rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <Image src="/mark-1.png" width={24} height={24} alt="mark" />
              <p className="text-black font-bold">Drop-off</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <select className="border text-[#90A3BF] p-2 rounded-md w-full lg:w-auto">
                <option value="">Select city ↓</option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
              </select>
              <input
                type="date"
                className="border text-[#90A3BF] p-2 rounded-md w-full lg:w-auto"
              />
              <input
                type="time"
                className="border text-[#90A3BF] p-2 rounded-md w-full lg:w-auto"
              />
            </div>
          </div>
        </div>

        {/* Sidebar and Grid */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="bg-white p-4 rounded-lg shadow-md w-full lg:w-1/4">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-black mb-2">Type</h2>
              <ul className='text-black'>
                {['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback'].map(
                  (type, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <input type="checkbox" className="mr-2" />
                      {type}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2 text-black">Capacity</h2>
              <ul className='text-black'>
                {['2 Person', '4 Person', '6 Person', '8 or More'].map(
                  (capacity, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <input type="checkbox" className="mr-2" />
                      {capacity}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2 text-black">Price</h2>
              <input
                type="range"
                className="w-full"
                min="0"
                max="100"
                defaultValue="50"
              />
              <div className="text-right text-black">Max. $100.00</div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <p className="text-black font-bold">New MGZ-6</p>
                <p className="text-[#90A3BF] mb-4">Sports</p>
                <Image
                  src={`/car-${index + 1}.png`}
                  width={232}
                  height={72}
                  alt="Car"
                  loading="lazy"
                />
                <p className="font-bold mt-4 text-black">$96.00/</p>
                <p className="text-[#90A3BF]">Day</p>
                <Link href="/details">
                  <button className="bg-[#3563E9] text-white py-2 px-4 mt-4 rounded-lg">
                    Rent Now
                  </button>
                </Link>
              </div>
            ))}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
