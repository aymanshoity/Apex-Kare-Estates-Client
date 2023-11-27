import About from "./HomePageSections/About";
import ApartmentLocation from "./HomePageSections/ApartmentLocation";
import Banner from "./HomePageSections/Banner";
import CouponSection from "./HomePageSections/CouponSection";
import Footer from "./HomePageSections/Footer";


const Home = () => {
    return (
        <div className="bg-[#ECF4D6]">
            <Banner></Banner>
            <About></About>
            <CouponSection></CouponSection>
            <ApartmentLocation></ApartmentLocation>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;