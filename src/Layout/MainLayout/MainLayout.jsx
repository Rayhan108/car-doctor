import { Outlet } from "react-router-dom";
import Navbar from "../../Home/Shared/Navbar/Navbar";
import Footer from "../../Home/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;