import Head from 'next/head'
import Script from 'next/script'
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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>

      </Head>

      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" className="d-block w-100" alt="..."/>
      
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" className="d-block w-100" alt="..."/>
      
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/originals/8d/63/19/8d6319bdb4657312ad4ca80e3dc876b1.jpg" className="d-block w-100" alt="..."/>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

  <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></Script>
<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></Script>
</div>

      <section className="text-gray-600 body-font bg-slate-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Welcome to <i>Abizaid Graphics.</i> A Graphics solution platform.
        <br className="hidden lg:inline-block"/>
      </h1>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900"></h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <Link href='/gallery'><a><button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">Explore Gallery</button></a></Link>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded lg:ml-10 h-60 m-auto" alt="hero" src="/logo.png"/>
    </div>
  </div>
</section>

{/* Services section */}

{/* <section className=''>
  <h1 className='font-bold text-center text-4xl mt-3 p-4 mb-3'>Our Services</h1>
  <div className='text-center'>
  <img src="/service1.jpg" alt="" className='inline px-2 mx-3 space-x-2' width={350} height={350}/>
  <img src="/service2.png" alt="" className='inline px-2 mx-3 space-x-2' width={350} height={350}/>
  <img src="/service3.jpg" alt="" className='inline px-2 mx-3 space-x-2' width={350} height={350}/>
  </div>
</section> */}

<section className="text-gray-600 body-font mt-4">
    
                <div className="container px-5 mx-auto">
                <h1 className='text-3xl text-black font-bold py-4 text-center'>Plans available</h1>
                    <div className="flex flex-wrap -m-4">
                    
                                <div className="p-4 lg:w-1/3 mx-auto">
                                    <div className="h-full bg-pink-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                                    <MdOutlineDoneOutline className='text-3xl m-auto'/>
                                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Basic</h1>
                                        <h1 className='text-red-600 text-4xl font-bold'>₹1,500</h1>
                                        <p className="leading-relaxed mb-3 w-64 text-center m-auto my-2">&ldquo;We will be given a banner month every day of Festival, Birthday, Birth Anniversary, Special day ex.&rdquo;</p>
                                    </div>
                                </div> 
                                <div className="p-4 lg:w-1/3 mx-auto">
                                <div className="h-full bg-green-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                                <MdOutlineDoneOutline className='text-3xl m-auto'/>
                                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Pro</h1>
                                        <h1 className='text-red-600 text-4xl font-bold'>₹3,000</h1>
                                        <p className="leading-relaxed mb-3 w-64 text-center m-auto my-2">&ldquo;We will be given a Customized banner month every day of festival,Birthday, Birth Anniversary, Special day ex. & social media handling free.&rdquo;</p>
                                    </div>
                                </div> 
                                <div className="p-4 lg:w-1/3 mx-auto">
                                <div className="h-full bg-blue-300 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                                <MdOutlineDoneOutline className='text-3xl m-auto'/>
                                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ultimate</h1>
                                        <h1 className='text-red-600 text-4xl font-bold'>₹10,000</h1>
                                        <p className="leading-relaxed mb-3 w-64 text-center m-auto my-2">&ldquo;We will be given a 3, 4 banner every day in month of Festival, Birthday, Birth Anniversary, Special day ex. Social media handling free.&rdquo;</p>
                                    </div>
                                </div> 
                    </div>
                </div>
            </section>
    </div>
  )
}
