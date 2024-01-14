import NavbarComp from './components/Navbar/NavbarComp';
import HeroComp from './components/Hero/HeroComp';
import ServicesComp from './components/Services/ServicesComp';
import GalleryComp from './components/GalleryComp';
import FooterComp from './components/Footer/FooterComp';
import FaqComp from './components/Faq/FaqComp';

function App() {
  return (
    <div>
      <HeroComp/>

      {/*Content*/}
      <NavbarComp/>
      <GalleryComp/>
      <ServicesComp/>
      <FaqComp/>
      {/*Content*/}

      <FooterComp/>

    </div>
  );
}

export default App;
