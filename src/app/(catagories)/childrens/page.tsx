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

const Children = () => {
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
        const shoes = data.filter(product => product.category === 'Childrens');
        setProducts(shoes);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to fetch products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  const title = "CHILDRENS";
  const paragraph =
    "Explore FabricNest Children's Outfits: Discover FabricNest’s delightful collection of children’s summer outfits, designed for comfort, style, and play. From breathable cotton tees and shorts to adorable sundresses and rompers, each piece is crafted to keep your little ones cool and happy during sunny days. Whether it’s activewear for outdoor adventures, casual outfits for everyday wear, or charming dresses for special occasions, FabricNest offers a perfect blend of quality and design. Let your kids enjoy summer in style with outfits as vibrant and carefree as they are!";
  return (
    <div>
      <HeroSection
        images={["/assets/Childrens/child10.jpg"]}
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

export default Children;
