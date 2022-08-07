import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {MdOutlineDoneOutline} from 'react-icons/md'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abizaid Graphics: Now available in your town.</title>
        <meta name="description" content="Abizaid Graphics: A best solution for Grphics designing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font bg-slate-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Welcome to <i>Abizaid Graphics</i>
        <br className="hidden lg:inline-block"/>A Graphics solution platform.
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <Link href='/blog'><a><button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">Explore Blogs</button></a></Link>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded lg:ml-10 h-60" alt="hero" src="/logo.png"/>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
    
                <div className="container px-5  mx-auto">
                <h1 className='text-3xl text-black font-bold py-4 text-center'>Plans available</h1>
                    <div className="flex flex-wrap -m-4">
                    
                                <div className="p-4 lg:w-1/3">
                                    <div className="h-full bg-pink-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                                    <MdOutlineDoneOutline className='text-3xl m-auto'/>
                                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Basic</h1>
                                        <h1 className='text-red-600 text-4xl font-bold'>₹1,500</h1>
                                        <p className="leading-relaxed mb-3 w-64 text-center m-auto my-2">`&ldquo;`We will be given a banner month every day of Festival, Birthday, Birth Anniversary, Special day ex.`&rdquo;`</p>
                                    </div>
                                </div> 
                                <div className="p-4 lg:w-1/3">
                                <div className="h-full bg-green-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                                <MdOutlineDoneOutline className='text-3xl m-auto'/>
                                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Pro</h1>
                                        <h1 className='text-red-600 text-4xl font-bold'>₹3,000</h1>
                                        <p className="leading-relaxed mb-3 w-64 text-center m-auto my-2">`&ldquo;`We will be given a Customized banner month every day of festival,Birthday, Birth Anniversary, Special day ex. & social media handling free.`&rdquo;`</p>
                                    </div>
                                </div> 
                                <div className="p-4 lg:w-1/3">
                                <div className="h-full bg-blue-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                                <MdOutlineDoneOutline className='text-3xl m-auto'/>
                                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ultimate</h1>
                                        <h1 className='text-red-600 text-4xl font-bold'>₹10,000</h1>
                                        <p className="leading-relaxed mb-3 w-64 text-center m-auto my-2">`&ldquo;`We will be given a 3, 4 banner every day in month of Festival, Birthday, Birth Anniversary, Special day ex. Social media handling free.`&rdquo;`</p>
                                    </div>
                                </div> 
                    </div>
                </div>
            </section>
    </div>
  )
}
