import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
  return (
        
    <div className='bg-[#F6F7F9]  w-full'>
<div className="bg-[#F6F7F9] w-full">
  <div className="flex flex-col sm:flex-row justify-center max-w-screen-xl mx-auto px-4">
    <div className="bg-[#54A6FF] w-full sm:w-1/2 p-6 sm:p-8 mx-5 rounded-md my-4 space-y-6">
      <h2 className="text-xl sm:text-3xl font-bold mb-4">The Best Platform for Car Rental</h2>
      <p className="text-base sm:text-lg mb-6">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
      <Link href="/payment">
        <button className="bg-[#2f53c3] py-2 px-4 sm:py-3 sm:px-6 rounded-md text-white font-semibold text-lg hover:bg-blue-800 transition duration-300 transform hover:scale-105">
          Rent Now
        </button>
      </Link>
      <div className="mt-6">
        <Image
          src="/img-1.png"
          width={406}
          height={116}
          alt="car-1"
          className="mx-auto"
        />
      </div>
    </div>

    <div className="bg-[#3563E9] w-full sm:w-1/2 p-6 sm:p-8  mx-5 rounded-md my-4 space-y-6">
      <h2 className="text-xl sm:text-3xl font-bold mb-4">Easy way to rent a car at a low price</h2>
      <p className="text-base sm:text-lg mb-6">Providing cheap car rental services and safe and comfortable facilities.</p>
      <Link href="/payment">
        <button className="bg-[#54A6FF] py-2 px-4 sm:py-3 sm:px-6 rounded-md text-white font-semibold text-lg hover:bg-[#2f53c3] transition duration-300 transform hover:scale-105">
          Rent Now
        </button>
      </Link>
      <div className="mt-6">
        <Image
          src="/img-2.png"
          width={340}
          height={108}
          alt="car-2"
          className="mx-auto"
        />
      </div>
    </div>
  </div>
</div>



        <div className='flex justify-center py-24'>
  <div className='flex justify-between items-center w-full max-w-screen-xl'>
    <div className='bg-white py-28 mx-8 w-[582px] h-[136px]'>
      <Image
        className='-my-12 mx-10'
        src={"/mark-1.png"}
        width={16}
        height={16}
        alt='mark'
      />
      <p className='text-black mx-20 my-7 font-bold'>Pick-up</p>
      <span className='flex mx-14'>
        <p className='text-black font-normal mx-8'>Locations</p>
        <p className='text-black font-normal mx-8'>Date</p>
        <p className='text-black font-normal mx-14'>Time</p>
      </span>

      <span className='flex mx-14 inline-block'>
      <select  className='text-[#90A3BF] font-normal mx-8 py-5 text-[12px]'>
            <option value="">Select city ↓</option>
            <option value="Karchi">Karchi</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
        </select>
     
        <input type='date'  className='text-[#90A3BF] h-10 font-normal mx- py-10 text-[12px]' placeholder='Select your date ↓'/>
        <p className='text-[#90A3BF] font-normal mx-4 py-5 text-[12px]'>Select your time ↓</p>
      </span>
    </div>

   
    <div className='flex justify-center items-center mx-8'>
      <Image
        className=''
        src={"/Switch.png"}
        width={200}
        height={200}
        alt='switch'
      />
    </div>

    <div className='bg-white py-28 mx-8 w-[582px] h-[136px]'>
      <Image
        className='-my-12 mx-10'
        src={"/mark-2.png"}
        width={16}
        height={16}
        alt='mark'
      />
      <p className='text-black mx-20 my-7 font-bold'>Drop-off-up</p>
      <span className='flex mx-14'>
        <p className='text-black font-normal mx-8'>Locations</p>
        <p className='text-black font-normal mx-8'>Date</p>
        <p className='text-black font-normal mx-14'>Time</p>
      </span>

      <span className='flex mx-14 inline-block'>
      <select className='text-[#90A3BF] font-normal mx-8 py-5 text-[12px]'>
            <option value="">Select city ↓</option>
            <option value="Karchi">Karchi</option>
            <option value="Lahore">Lahore</option>
            <option value="Islamabad">Islamabad</option>
        </select>
     
        <input type='date'  className='text-[#90A3BF] h-10 font-normal mx- py-10 text-[12px]' placeholder='Select your date ↓'/>
        <p className='text-[#90A3BF] font-normal mx-4 py-5 text-[12px]'>Select your time ↓</p>
      </span>
    </div>
  </div>
</div>
<div className=' mx-40'>
<p className=' mx-[70px] font-bold text-[#90A3BF]'>Popular Cars</p>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7 mx-auto">
<div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/heart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-2.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$96.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <a href="3"/>
        <Link href="/pro">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>
    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/eheart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-8.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$65.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <Link href="/pro">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>

    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/eheart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-8.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$65.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <Link href="/pro">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>

    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/eheart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-8.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$65.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <Link href="/pro">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>


    </div>


    <p className=' mx-[70px] font-bold text-[#90A3BF]'>Recomendation Cars</p>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-7 mx-auto">
    
<div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/eheart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-2.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$96.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
      
        <Link href="/pro">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>


    </div>

    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/eheart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-3.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$96.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <Link href="/pro">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>
    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/eheart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-4.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$11.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <Link href="/pro">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>
    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/heart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-4.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$11.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <Link href="/pro">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>
   

    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/eheart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-5.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$55.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <Link href="/pro">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>

    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/eheart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-8.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$65.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <Link href="/pro">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>
    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/eheart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-8.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$65.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <Link href="/pro">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>

    <div className="bg-white w-[304px] h-[388px] rounded-md mx-auto my-10">
        <p className="text-black font-bold py-12 px-6">New MGZ-6</p><br />
        <p className="text-[#90A3BF] px-7 -my-16">Sports</p>
        <Image className="mx-56 py-3" src={"/eheart.png"}
         width={24}
         height={24}
         alt="heart" />
        <Image className="mx-auto py-10" src={"/car-6.png"}
         width={232}
         height={72}
         alt="product" />
        <Image className="mx-auto py-2" src={"/specs-1.png"}
         width={232}
         height={72}
         alt="specs" />
        <p className="font-bold px-7 py-5 text-black">$66.00/</p>

        <p className="text-[#90A3BF] font-semibold -my-11 mx-24">Day</p>
        <Link href="/pro">
        <button className="bg-[#3563E9] py-3 px-5 ml-auto mr-6 my-4 rounded-md block">
          Rent Now
        </button>
      </Link>
    </div>
    </div>


 <div className='flex items-center justify-center py-36'>
 <Link href="/details">
    <button className='bg-[#3563E9] py-4 px-5 rounded-md'>Show More</button>
    </Link>
 </div>
    
 
  
      
    </div>
   
</div>



       
     
        
  )
}
export default Hero
