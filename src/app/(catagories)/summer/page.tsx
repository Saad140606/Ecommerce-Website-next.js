"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  slug: string;
  category: string;
  img: string;
}

const Accessories = () => {
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
        const shoes = data.filter(product => product.category === 'Summer');
        setProducts(shoes);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to fetch products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  const title = "SUMMER COLLECTION";
  const paragraph =
    "Explore FabricNest's Summer Collection: Embrace the sunny days in style with FabricNest's vibrant summer collection. Designed to keep you cool and comfortable, our range features breezy fabrics, lightweight designs, and trendy styles for men, women, and children. From airy dresses and linen shirts to playful t-shirts and casual shorts, we’ve got everything you need to elevate your summer wardrobe. Whether it’s a beach day, a casual outing, or a sunny vacation, our summer collection ensures you look effortlessly chic while staying perfectly comfortable. Dive into the season with confidence and flair!";
  return (
    <div>
      <HeroSection
        images={["/assets/Summer/summer9.jpg"]}
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
          className=" object-fill object-center w-full h-full block" 
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

export default Accessories;
