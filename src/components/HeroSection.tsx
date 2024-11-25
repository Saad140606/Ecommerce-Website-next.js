"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface HeroSectionProps {
  images: string[];
  title: string;
  paragraph: string;
}

export default function HeroSection({ images, title, paragraph }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  const slideCount = images.length;

  useEffect(() => {
    if (slideCount > 1) {
      const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
      };

      slideInterval.current = setInterval(goToNextSlide, 3000);

      return () => {
        if (slideInterval.current) {
          clearInterval(slideInterval.current);
        }
      };
    }
  }, [slideCount]);

  return (
    <main className="heroSection relative flex min-h-screen flex-col items-center justify-center p-0">
      <div
        className="slider absolute top-0 left-0 w-full h-full flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="slide w-full h-full flex items-center justify-center relative"
          >
            <Image 
            width={2000}
            height={2000}
            src={image} 
            alt={`Slide ${index + 1}`} 
            className="w-full h-full object-fill" />
            <div className=""></div>
          </div>
        ))}
      </div>

      <div className="bg-black text-white ">
        <div className="">
          <div className="relative w-full md:w-2/4 space-y-5 mt-10">
            <h1 className=" text-5xl  font-medium text-grey font-bold ">Discover Your Style Haven at <span className='secondLetter'>FabricNest</span></h1>
            <div className="relative">
              <div className="relative z-10 space-y-3">
                <p className="  text-lg lg:text-2xl font-medium text-grey font-bold">
                Explore a world of premium fabrics, trendy outfits, and timeless elegance. Redefine your wardrobe with us.
                </p>
              </div>
             
              <div className=""></div>
            </div><br />
            <span><Link href={'/menOutfits'}>
        <button className="inline-flex button py-2 px-6 text-lg" >Shop Now</button> 
        </Link></span> 
        <span><Link href={'/summer'}>
        <button className="inline-flex button py-2 px-6 text-lg">Explore Collections</button>
        </Link></span>
          </div>
        </div>
        </div>
    </main>
  );
}
