import React from 'react'
import Image from 'next/image'

const Ourstory = () => {
  return (
    <>
      <section className='bg-black '>

        <div className="items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-300 sm:text-lg ">
            <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold wordTheme">Redefining Fashion, One Thread at a Time</h2>
         <p className='mb-4'>FabricNest was born from a passion for fashion and a desire to create a space where everyone could find clothing that resonates with their personality and style. What started as a dream to offer high-quality, stylish, and affordable fashion has grown into a brand loved by many. We believe that fashion is more than just clothing—it is a way to express yourself and feel confident in your own skin. With a commitment to quality, sustainability, and exceptional service, FabricNest continues to evolve, bringing you curated collections that blend timeless elegance with modern trends. This is our journey, and we are thrilled to have you as part of it.</p>

          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">

            <Image
              width={2000}
              height={2000}
              src={"/assets/banner.jpg"}
              alt="office content 1"
              className="w-full rounded-lg"
            />
            <Image
              width={2000}
              height={2000}
              src={"/assets/banner4.jpg"}
              alt="office content 2"
              className="w-full mt-4 rounded-lg lg:mt-10"
            />

          </div>
        </div>

      </section>

    </>
  )
}

export default Ourstory
