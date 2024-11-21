// Code by Utsav Patel
import Header from "./dashboard/_components/Header";
import HeroSection from "./dashboard/_components/HeroSection";
import HomeStats from "./dashboard/_components/HomeStats"
import Footer from "./dashboard/_components/Footer";
import AIPower from "./dashboard/_components/AIpower";
export default function Home() {
  return (
  <>
  <div>
    <Header/>
    <HeroSection/>
    <HomeStats/>
    <AIPower/>
    <Footer/>
  </div>
  </>  
  );
}
