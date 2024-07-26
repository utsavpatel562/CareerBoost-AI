import Header from "./dashboard/_components/Header";
import HeroSection from "./dashboard/_components/HeroSection";
import HomeStats from "./dashboard/_components/HomeStats"
import Footer from "./dashboard/_components/Footer";
import MyTabs from "./dashboard/_components/MyTabs";
export default function Home() {
  return (
  <>
  <div>
    <Header/>
    <HeroSection/>
    <HomeStats/>
    <MyTabs/>
    <Footer/>
  </div>
  </>  
  );
}
