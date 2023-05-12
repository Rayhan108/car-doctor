import Banner from "../Banner/Banner";
import AboutSection from "./AboutSection/AboutSection";
import Services from "./Services/Services";


const Home = () => {
    return (
        <div className="mb-4">
            <Banner></Banner>
           <AboutSection></AboutSection>
           <Services></Services>
        </div>
    );
};

export default Home;