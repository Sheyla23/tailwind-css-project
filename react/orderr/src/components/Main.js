import React from 'react'
import hero from '../images/illustration-hero.svg'
import music from '../images/icon-music.svg'
const Main = () => {
  return (
    <main>
      <div className="wrapper">
        <section className='card' >
          <img src={hero} alt="hero" />
          <article className='m-5' >
            <h2 className=' text-blue-dark font-bold'>Order Summary</h2>
            <p className='text-blue-desaturated py-3 leading-7 '>You can now listen to millions of <br /> songs, audiobooks and podcats <br/> on any device anywhere you like!</p>
            <div className='w-full py-3 my-3 flex items-center justify-around bg-blue-paler rounded-md' >
              <div className='flex'>
                <img src={music} alt="icon" />
                <h3 className='text-blue-dark pl-3 font-bold'>Annual Plan <br/><span className='text-blue-desaturated'>$55.55/year</span></h3>
              </div>
              <a className='text-blue-bright font-bold hover:underline'href="/">Change</a>
            </div>
            <button className='btn'>Proceed to Payment</button>
            <p className='text-blue-desaturated hover:text-blue-bright'>Cancel Order</p>
          </article>
        </section>
      </div>
    </main>
  )
}

export default Main