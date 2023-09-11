import Cit from "../../Components/Home/Cit/Cit";
import ContactSection from "../../Components/Home/ContactSection/ContactSection";
import FooterHome from "../../Components/Home/Footer/FooterHome";
import HeroSection from "../../Components/Home/HeroSection/HeroSection";
import ManageTeam from "../../Components/Home/ManageTeam/ManageTeam";
import OurBrand from "../../Components/Home/OurBrand/OurBrand";

const Home = () => {
  return (
    <main>
      {/* <HeaderHome/> */}
      <HeroSection />
      <OurBrand />
      <Cit />
      <ManageTeam />
      <ContactSection />
      <FooterHome/>
      {/* <LandingPage/> */}
    </main>
  );
};

export default Home;
