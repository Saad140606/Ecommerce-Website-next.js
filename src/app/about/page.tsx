import React from 'react'
import Ourstory from '@/components/OurStory'
import HeroSection from '@/components/HeroSection'
import AboutUs from '@/components/AboutUs';
import OurVission from '@/components/OurVission';

export default function About() {
  const title = "ABOUT US";
  const paragraph =
"FabricNest is your one-stop destination for premium, stylish, and comfortable clothing for the entire family. We specialize in thoughtfully curated collections for men, women, and children, designed to suit every occasion—from casual outings to formal events and seasonal trends. With a commitment to using the finest fabrics and exceptional craftsmanship, our clothing combines durability, elegance, and timeless appeal. At FabricNest, we believe fashion should be accessible, enjoyable, and an expression of individuality, offering a variety of styles to help you look and feel your best. Your style finds its perfect home at FabricNest!";
  return (
    <div>
       <HeroSection
        images={["/assets/Shoes/shirts12.jpg"]}
        title={title} paragraph={paragraph}
      />
      <AboutUs/>
      <OurVission/>
      <Ourstory/>
    </div>
  )
}
