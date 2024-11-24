import Gallery from '@/components/Gallery';
import HeroSection from '@/components/HeroSection';
import Reviews from '@/components/Reviews';
import Stats from '@/components/Stats';
import TopSelling from '@/components/TopSelling';
import WhyChoseUs from '@/components/WhyChooseUs';


const HomePage = () => {
  const images = [
    "/assets/banner.jpg",
    "/assets/banner3.jpg",
    "/assets/banner4.jpg",
    "/assets/banner5.jpg",
    "/assets/banner6.jpg"
  ];
  const title = "Discover Your Style Haven at FabricNest";
  const paragraph =
    "Explore a world of premium fabrics, trendy outfits, and timeless elegance. Redefine your wardrobe with us.";
  return (
    <>
     <HeroSection images={images} title={title} paragraph={paragraph} />
     <WhyChoseUs/>
     <TopSelling/>
     <Gallery/>
     <Stats/>
      <Reviews/>
    </>
  );
};

export default HomePage;
