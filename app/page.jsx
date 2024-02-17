import Hero from "@/components/Hero";
import Updates from "@/components/Updates";
import Navbar from "@/components/Navbar";
import Blog from "@/components/Blog";
import CarouselAnimation from "@/components/CarouselAnimation";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <CarouselAnimation />
    <Blog />
    <Footer />
    </>
  );
}
