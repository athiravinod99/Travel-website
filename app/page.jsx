import Hero from "@/components/Hero";
import Updates from "@/components/Updates";
import Navbar from "@/components/Navbar";
import Review from "@/components/Review";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";
import Destinations from "@/components/Destinations";
import Highlights from "@/components/Highlights";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Updates />
    <Blogs />
    <Destinations />
    <Highlights />
    <Review />
    <Footer />
    </>
  );
}
