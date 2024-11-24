"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';

interface Product {
  id: number;
name: string;
  price: number;
  description: symbol;
  slug: string;
  category: string;
  img: string;
}

const Shirts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json'); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        const shoes = data.filter(product => product.category === 'shirt');
        setProducts(shoes);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to fetch products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  const title = "T-Shirts";
  const paragraph =
    "Explore FabricNest Step into a world of premium men’s & women's t-shirt clothing at FabricNest, where style meets comfort. Our curated collection features elegant dresses, trendy tops, and versatile bottoms, crafted from the finest fabrics to elevate your wardrobe. Whether you’re embracing casual chic, office sophistication, or evening glamour, FabricNest ensures every piece is designed with impeccable quality and timeless charm. Redefine your fashion journey with us, one outfit at a time!";
  return (
    <div>
      <HeroSection
        images={["/assets/Shoes/shirts12.jpg"]}
        title={title} paragraph={paragraph}
      />
      {error && <p>{error}</p>}
      <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    {products.map(product => (
      <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={`/${product.slug}`} className="block relative h-96 md:h-72 rounded overflow-hidden">
          <Image 
          width={2000}
          height={2000}
          alt="ecommerce" 
          className="object-fill object-center w-full h-full block" 
          src={product.img}
          />
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
          <h2 className="text-white title-font text-lg font-medium">{product.name}</h2>
          <p className="mt-1">Price: ${product.price.toFixed(2)}</p>
        </div>
      </div>
    ))}
    </div>
  </div>
</section>
      </div>
    </div>
  );
};

export default Shirts;
