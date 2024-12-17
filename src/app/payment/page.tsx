import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 bg-[#F6F7F9] ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            {/* Billing Info Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-black">Billing Info</h2>
              <p className="text-gray-600 mb-4">Please enter your billing info</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Your Address"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Town/City</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Your City"
                  />
                </div>
              </div>
            </div>

            {/* Rental Info Section */}
            <div className="bg-white p-6 rounded-lg shadow-md  ">
              <h2 className="text-xl font-bold mb-4 text-black">Rental Info</h2>
              <p className="text-gray-600 mb-4">Please select your rental date</p>
              <div className="space-y-4 ">
                <div>
                  <h3 className="font-semibold">Pick - Up</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-gray-700">Locations</label>
                      <select className="w-full p-2 border border-gray-300 rounded mt-1">
                        <option>Select Your City</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700">Date</label>
                      <select className="w-full p-2 border border-gray-300 rounded mt-1">
                        <option>Select Your Date</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700">Time</label>
                      <select className="w-full p-2 border border-gray-300 rounded mt-1">
                        <option>Select Your Time</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Drop - Off</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-gray-700">Locations</label>
                      <select className="w-full p-2 border border-gray-300 rounded mt-1">
                        <option>Select Your City</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700">Date</label>
                      <select className="w-full p-2 border border-gray-300 rounded mt-1">
                        <option>Select Your Date</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700">Time</label>
                      <select className="w-full p-2 border border-gray-300 rounded mt-1">
                        <option>Select Your Time</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-black">Payment Method</h2>
              <p className="text-gray-600 mb-4">Please enter your payment method</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">
                    <input type="radio" name="payment" className="mr-2" /> Credit Card
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div>
                      <label className="block text-gray-700">Card Number</label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        placeholder="Card Number"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Expiration Date</label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        placeholder="DD/MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">Cardholder</label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        placeholder="Cardholder"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">CVC</label>
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        placeholder="CVC"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700">
                    <input type="radio" name="payment" className="mr-2" /> PayPal
                  </label>
                </div>
                <div>
                  <label className="block text-gray-700">
                    <input type="radio" name="payment" className="mr-2" /> Bitcoin
                  </label>
                </div>
              </div>
            </div>

            {/* Confirmation Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-black">Confirmation</h2>
              <p className="text-gray-600 mb-4">
                We are getting to the end. Just a few clicks and your rental is
                ready!
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">
                    <input type="checkbox" className="mr-2" /> I agree with sending Marketing and newsletter emails. No spam, promised!
                  </label>
                </div>
                <div>
                  <label className="block text-gray-700">
                    <input type="checkbox" className="mr-2" /> I agree with our terms and conditions and privacy policy.
                  </label>
                </div>
                <Link href="/admin">
                <button className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto my-8">Rent Now</button>  </Link>
              </div>
            </div>
          </div>

          {/* Rental Summary Section */}
          <div className="bg-white p-6 rounded-lg shadow-md h-[600px]">
            <h2 className="text-xl font-bold mb-4 text-black">Rental Summary</h2>
            <p className="text-gray-600 mb-4">
              Prices may change depending on the length of the rental and the price of your rental car
            </p>
            <div className="flex items-center mb-4 w-full h-auto w-[200px] h-[120px]">
              <Image
              
                src="/product.png"
                alt="Product Image"
                width={200}
                height={120}
                className="w-full h-auto object-cover rounded mr-4 bg-blue-500"
              />
              <div className="py-8">
                <h3 className="font-bold text-black flex">NissanGTR</h3>
                <p className="text-yellow-500 flex items-center">
                  <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star-half-alt"></i> 440Reviewer
                </p>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Subtotal</span>
                <span className="text-gray-700">$80.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Tax</span>
                <span className="text-gray-700">$0</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-700 font-semibold">Total</span>
                <span className="text-gray-700 font-semibold">$80.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
