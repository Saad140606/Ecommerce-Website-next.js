"use Client"
import Image from "next/image"
import Link from "next/link"


export default function WhyChoseUs(){
    return(
        <section className="text-gray-300 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font font-bold sm:text-5xl text-3xl mb-4 font-serif "><span className="firstLetter">W</span>
      <span className="text-white">hy</span> <span className="firstLetter">C</span>
      <span className="text-white">hoose</span> <span className="firstLetter">U</span> 
       <span className="text-white">s</span> <span className="firstLetter">?</span>
      </h1>
      <p className="mb-8 leading-relaxed">
      At <span className="text-xl font-bold">FabricNest</span>, we’re more than just a clothing store — we’re your partner in style. Here’s why our customers love shopping with us:

<h1 className="text-2xl font-bold text-gray-100">1. Premium Quality</h1>
We offer only the finest fabrics and clothing, ensuring durability, comfort, and unmatched elegance for every piece.

<h1 className="text-2xl font-bold text-gray-100">2. Trend-Forward Designs</h1>
Stay ahead of the fashion curve with our handpicked collections that blend modern trends with timeless style.

<h1 className="text-2xl font-bold text-gray-100">3. Affordable Luxury</h1>
Look and feel your best without breaking the bank. Our collections offer luxury designs at pocket-friendly prices.

<h1 className="text-2xl font-bold text-gray-100">4. Tailored for You</h1>
Our wide variety ensures there’s something for everyone, no matter your taste, size, or occasion.

<h1 className="text-2xl font-bold text-gray-100">5. Exceptional Customer Service</h1>
We’re here to make your shopping experience smooth and enjoyable. From advice to after-sales support, we’ve got you covered.

<h1 className="text-2xl font-bold text-gray-100"> 6. Sustainable Choices</h1>
Fashion that cares! Our commitment to sustainability ensures we provide eco-friendly options for conscious shoppers.

FabricNest — Where style meets comfort, and your wardrobe dreams come true.
</p>

      <div className="flex justify-center">
        <Link href={'/about'}>
        <button className="inline-flex button py-2 px-6 text-lg">Read More</button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
      width={2000}
      height={2000} 
      className="object-fill object-center rounded" 
      alt="hero" 
      src="/assets/banner3.jpg"
      />
    </div>
  </div>
</section>
    )
}