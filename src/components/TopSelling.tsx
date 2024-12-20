// "use client";
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';


// export default function TopSelling() {
// const products = [
//     {
//         "id": 1,
//         "name": "Running Shoes",
//         "price": 59.99,
//         "slug": "running-shoes",
//         "category": "shoes",
//         "img": "/assets/Shoes/shoes.jpg",
//         "description": "Lightweight running shoes designed for comfort and long-distance running."
//       },
//       {
//         "id": 2,
//         "name": "Basketball Shoes",
//         "price": 89.99,
//         "slug": "basketball-shoes",
//         "category": "shoes",
//         "img": "/assets/Shoes/shoes2.jpg",
//         "description": "Durable basketball shoes providing excellent grip and ankle support."
//       },
//       {
//         "id": 3,
//         "name": "Running Shoes",
//         "price": 59.99,
//         "slug": "running-shoes1",
//         "category": "shoes",
//         "img": "/assets/Shoes/shoes3.jpg",
//         "description": "Performance running shoes with breathable mesh upper and cushioned sole."
//       },
//       {
//         "id": 13,
//         "name": "Trail Runner Outfit",
//         "price": 59.99,
//         "slug": "trail-runner-outfit",
//         "category": "men",
//         "img": "/assets/Mens/men.jpg",
//         "description": "Perfect for running enthusiasts, this outfit offers lightweight shorts, a breathable T-shirt, and moisture-wicking socks for ultimate comfort."
//       },
//       {
//         "id": 14,
//         "name": "Pro Basketball Kit",
//         "price": 89.99,
//         "slug": "pro-basketball-kit",
//         "category": "men",
//         "img": "/assets/Mens/men2.jpg",
//         "description": "A complete basketball set featuring a performance jersey, breathable shorts, and cushioned socks to enhance your game on the court."
//       },
//       {
//         "id": 15,
//         "name": "City Runner Set",
//         "price": 59.99,
//         "slug": "city-runner-set",
//         "category": "men",
//         "img": "/assets/Mens/men3.jpg",
//         "description": "Designed for urban runners, this set includes a sweat-resistant T-shirt and running tights, helping you stay fresh during morning jogs."
//       },
//       {
//         "id": 25,
//         "name": "Ultimate Running Gear",
//         "price": 59.99,
//         "slug": "ultimate-running-gear",
//         "category": "Equipment",
//         "img": "/assets/Equipment/eq.jpg",
//         "description": "Get the most out of your runs with our ultimate running gear, featuring a high-performance GPS watch, hydration belt, and reflective accessories for safety."
//       },
//       {
//         "id": 26,
//         "name": "Pro Basketball Gear",
//         "price": 89.99,
//         "slug": "pro-basketball-gear",
//         "category": "Equipment",
//         "img": "/assets/Equipment/eq2.jpg",
//         "description": "Elevate your game with professional basketball gear, including a premium ball, adjustable hoop, and practice cones for skill development."
//       },
//       {
//         "id": 27,
//         "name": "Lightweight Running Essentials",
//         "price": 59.99,
//         "slug": "lightweight-running-essentials",
//         "category": "Equipment",
//         "img": "/assets/Equipment/eq3.jpg",
//         "description": "These lightweight essentials include a running belt, moisture-wicking headband, and grip socks to enhance your running experience."
//       },
//       {
//         "id": 37,
//         "name": "Essential Running Accessories",
//         "price": 59.99,
//         "slug": "essential-running-accessories",
//         "category": "Accessories",
//         "img": "/assets/Accessories/acc.jpg",
//         "description": "Upgrade your run with essential accessories, including a lightweight running belt, moisture-wicking headband, and reflective arm bands for safety."
//       },
//       {
//         "id": 38,
//         "name": "Pro Basketball Accessories",
//         "price": 89.99,
//         "slug": "pro-basketball-accessories",
//         "category": "Accessories",
//         "img": "/assets/Accessories/acc2.jpg",
//         "description": "Dominate the court with pro basketball accessories, featuring a durable backpack, sweat-wicking wristbands, and a versatile ball pump."
//       },
//       {
//         "id": 39,
//         "name": "Premium Running Gear",
//         "price": 59.99,
//         "slug": "premium-running-gear",
//         "category": "Accessories",
//         "img": "/assets/Accessories/acc3.jpg",
//         "description": "Ensure comfort and performance with premium running gear, including cushioned insoles, anti-chafing cream, and a reflective vest."
//       },
//       {
//         "id": 49,
//         "name": "Women's Running Essentials",
//         "price": 59.99,
//         "slug": "womens-running-essentials",
//         "category": "Women",
//         "img": "/assets/Women/women.jpg",
//         "description": "Stay comfortable and stylish during your runs with these essentials, featuring breathable tank tops, high-performance leggings, and lightweight running shoes."
//       },
//       {
//         "id": 50,
//         "name": "Women's Basketball Performance Set",
//         "price": 89.99,
//         "slug": "womens-basketball-performance-set",
//         "category": "Women",
//         "img": "/assets/Women/women2.jpg",
//         "description": "Elevate your game with this performance set, which includes moisture-wicking jerseys, supportive sports bras, and durable shorts designed for agility."
//       },
//       {
//         "id": 51,
//         "name": "Women's Running Gear",
//         "price": 59.99,
//         "slug": "womens-running-gear",
//         "category": "Women",
//         "img": "/assets/Women/women3.jpg",
//         "description": "Designed for optimal comfort, this running gear features padded running shoes, adjustable headbands, and lightweight windbreakers for unpredictable weather."
//       }
// ]

// const slideProducts = [...products, ...products.slice(0, 3)]; 

// const [currentSlide, setCurrentSlide] = useState(0);
// const totalSlides = slideProducts.length;

// const nextSlide = () => {
//   setCurrentSlide((prev) => (prev + 1) % totalSlides);
// };

// const prevSlide = () => {
//   setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
// };

// // Auto slide functionality
// useEffect(() => {
//   const intervalId = setInterval(nextSlide, 1000); 
//   return () => clearInterval(intervalId); 
// }, []);

// return (
//   <section className="body-font">
//     <div className="container px-5 py-24 mx-auto">
//       <h2 className="text-3xl font-extrabold mb-6 text-center wordTheme italic">Top Selling Products</h2>
//       <div className="relative">
//         <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}>
//           {slideProducts.map((product) => (
//             <div key={product.id} className="flex-shrink-0 w-full lg:w-1/3 md:w-1/2 p-4">
//               <Link href={`/${product.slug}`} className="block relative h-96 md:h-72 rounded overflow-hidden">
//                 <Image
//                   width={2000}
//                   height={2000}
//                   alt="ecommerce"
//                   className="object-fill object-center w-full h-full block"
//                   src={product.img}
//                 />
//               </Link>
//               <div className="mt-4">
//                 <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
//                 <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
//                 <p className="mt-1">Price: ${product.price.toFixed(2)}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2">
//           &#10094; 
//         </button>
//         <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2">
//           &#10095; 
//         </button>
//       </div>
//     </div>
//   </section>
// );
// }
"use client";
import { useEffect, useRef } from "react";
import Link from 'next/link';
import Image from 'next/image';

export default function TopSelling() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const products = [
    {
      "id": 8,
      "name": "Tie-Dye T-Shirt",
      "price": 89.99,
      "slug": "shirt8",
      "category": "shirt",
      "img": "/assets/Shirts/shirts8.jpg",
      "description": "Bring color and fun to your wardrobe with our tie-dye t-shirts, offering a playful, vibrant pattern that’s perfect for a laid-back, summer vibe."
    },
    {
      "id": 9,
      "name": "Ringer T-Shirt",
      "price": 59.99,
      "slug": "shirt9",
      "category": "shirt",
      "img": "/assets/Shirts/shirts9.jpg",
      "description": "Retro-inspired and modern at the same time, our ringer t-shirts feature contrasting color edges for a stylish, sporty look."
    },
    {
      "id": 10,
      "name": "Henley T-Shirt",
      "price": 89.99,
      "slug": "shirt10",
      "category": "shirt",
      "img": "/assets/Shirts/shirts10.jpg",
      "description": "A perfect mix of casual and classic, our henley t-shirts with their button-down collar provide a relaxed, stylish fit with a hint of vintage charm."
    },
    {
      "id": 11,
      "name": "Tech T-Shirt",
      "price": 59.99,
      "slug": "shirt11",
      "category": "shirt",
      "img": "/assets/Shirts/shirts11.jpg",
      "description": "Stay cool and comfortable with our tech t-shirts, designed with moisture-wicking fabric to keep you dry and fresh, whether you’re working out or going for a casual stroll."
    },
    {
      "id": 12,
      "name": "Pocket T-Shirt",
      "price": 89.99,
      "slug": "shirt12",
      "category": "shirts",
      "img": "/assets/Shirts/shirts12.jpg",
      "description": "Add a functional twist to your casual look with our pocket t-shirts, featuring a handy pocket and a relaxed fit for easygoing style."
    },
    {
      "id": 16,
      "name": "Three-Piece Suit",
      "price": 89.99,
      "slug": "court-dominator-kit",
      "category": "men",
      "img": "/assets/Mens/men4.jpg",
      "description": "Complete with a vest, this three-piece suit provides extra refinement and versatility, perfect for a formal look that stands out."
    },
    {
      "id": 17,
      "name": "Wool Suit",
      "price": 59.99,
      "slug": "endurance-track-outfit",
      "category": "men",
      "img": "/assets/Mens/men5.jpg",
      "description": "Made from premium wool, this suit is soft, breathable, and perfect for year-round wear, offering both comfort and a sharp look for any occasion."
    },
    {
      "id": 18,
      "name": "Charcoal Grey Suit",
      "price": 89.99,
      "slug": "elite-hoops-wear",
      "category": "men",
      "img": "/assets/Mens/men6.jpg",
      "description": "This sleek charcoal grey suit offers a refined, sophisticated look, perfect for professional settings and formal occasions."
    },
    {
      "id": 19,
      "name": "Navy Suit",
      "price": 59.99,
      "slug": "sprint-runner-outfit",
      "category": "men",
      "img": "/assets/Mens/men7.jpg",
      "description": "A versatile and classic choice, this navy suit delivers a timeless appeal, suitable for everything from office wear to evening gatherings."
    },
    {
      "id": 28,
      "name": "Jogger Pants",
      "price": 89.99,
      "slug": "all-star-basketball-kit",
      "category": "Childrens",
      "img": "/assets/Childrens/child5.jpg",
      "description": "These stretchy and comfortable jogger pants are ideal for active play, providing durability and ease of movement."
    },
    {
      "id": 29,
      "name": "Plaid Shirt",
      "price": 59.99,
      "slug": "advanced-running-accessories",
      "category": "Childrens",
      "img": "/assets/Childrens/child6.jpg",
      "description": "This classic plaid shirt combines style and comfort, making it a great choice for casual outings or family gatherings."
    },
    {
      "id": 30,
      "name": "Raincoat",
      "price": 89.99,
      "slug": "elite-basketball-training-set",
      "category": "Childrens",
      "img": "/assets/Childrens/child7.jpg",
      "description": "Keep your kids dry and happy with this colorful waterproof raincoat, designed for rainy-day fun and adventure."
    },
  
    {
      "id": 41,
      "name": "Tank Top and Jogger Shorts",
      "price": 59.99,
      "slug": "comfort-running-accessories",
      "category": "Summer",
      "img": "/assets/Summer/summer5.jpg",
      "description": "Beat the heat in a sporty tank top paired with comfy jogger shorts for active summer days."
    },
    {
      "id": 42,
      "name": "Flowy Maxi Dress",
      "price": 89.99,
      "slug": "all-in-one-basketball-accessories",
      "category": "Summer",
      "img": "/assets/Summer/summer6.jpg",
      "description": "Stay elegant and breezy in a lightweight, floral maxi dress, perfect for summer occasions."
    },
    {
      "id": 43,
      "name": "Crop Top and High-Waisted Shorts",
      "price": 59.99,
      "slug": "running-comfort-pack",
      "category": "Summer",
      "img": "/assets/Summer/summer7.jpg",
      "description": "Beat the heat in style with a trendy crop top and flattering high-waisted shorts."
    },
    {
      "id": 54,
      "name": "Chic Jumpsuit",
      "price": 89.99,
      "slug": "womens-basketball-game-day-gear",
      "category": "Women",
      "img": "/assets/Women/women3.jpg",
      "description": "This stylish one-piece jumpsuit blends sophistication and modern design, offering a seamless look that’s perfect for everything from casual to formal occasions."
    },
    {
      "id": 55,
      "name": "Printed Midi Dress",
      "price": 59.99,
      "slug": "comfortable-womens-running-outfit",
      "category": "Women",
      "img": "/assets/Women/women7.jpg",
      "description": "Featuring bold and eye-catching patterns, this printed midi dress makes a stylish statement, perfect for brunches, parties, or casual events."
    },
    {
      "id": 56,
      "name": "Palazzo Pants",
      "price": 89.99,
      "slug": "womens-basketball-training-kit",
      "category": "Women",
      "img": "/assets/Women/women8.jpg",
      "description": "These wide-leg palazzo pants offer an airy, all-day elegance that’s perfect for both relaxing weekends and dressier occasions."
    },
    {
      "id": 57,
      "name": "Floral Wrap Dress",
      "price": 59.99,
      "slug": "fashionable-womens-running-gear",
      "category": "Women",
      "img": "/assets/Women/women.jpg",
      "description": "A flattering wrap design adorned with delicate floral prints, this dress combines femininity and comfort, making it perfect for both daytime events and evening outings."
    },
    {
      "id": 58,
      "name": "Cardigan",
      "price": 89.99,
      "slug": "womens-basketball-all-star-outfit",
      "category": "Women",
      "img": "/assets/Women/women10.jpg",
      "description": "This cozy cardigan is the perfect layering essential, offering timeless versatility to add warmth and style to any outfit."
    },
]
useEffect(() => {
  const scrollContainer = scrollRef.current;
  let scrollAmount = 0;
  let maxScroll = 0;

  const updateMaxScroll = () => {
    if (scrollContainer) {
      maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    }
  };

  const scrollProducts = () => {
    if (scrollContainer) {
      scrollAmount += 2; // Adjust the increment for speed control
      scrollContainer.scrollLeft = scrollAmount;
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0; // Reset to loop back
      }
    }
  };

  const scrollInterval = setInterval(scrollProducts, 40); // Adjusted interval for smooth scrolling
  updateMaxScroll();
  window.addEventListener("resize", updateMaxScroll);

  return () => {
    clearInterval(scrollInterval);
    window.removeEventListener("resize", updateMaxScroll);
  };
}, []);

return (
  <section className="text-gray-600 body-font">
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold title-font text-center mb-10 tracking-wider wordTheme">
        TOP SELLING PRODUCTS
      </h1>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4"
        style={{
          scrollBehavior: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          whiteSpace: "nowrap",
        }}
      >
        <style jsx>{`
          /* Hide scrollbar for Chrome, Safari, and Opera */
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-72 p-4 rounded-lg shadow-lg bg-white"
          >
            <Link href={`/${product.slug}`} className="block relative h-64">
              <Image
                src={product.img}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {product.category}
              </h3>
              <h2 className="text-gray-900 text-lg font-medium">
                {product.name}
              </h2>
              <p className="mt-1">Price: ${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}