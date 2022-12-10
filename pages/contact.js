import Link from 'next/link';
import React from 'react'
import {FaWhatsapp} from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative m-auto">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
    <div className="bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex relative m-auto">
      
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md m-auto">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Kamaluddinpur, Chiraiyakot, Uttar Pradesh 276129</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-red-600 leading-relaxed">shaikhabizaid786@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4"><FaWhatsapp className='text-2xl inline'/> WHATSAPP</h2>
          <Link href={'https://wa.me/917880955388'} className='hover:cursor-pointer'><p className="leading-relaxed bg-red-600 text-white w-32"><a>+917880955388</a></p></Link>
        </div>
      </div>
    </div>
    
  </div>
</section>
    </div>
  )
}

export default Contact