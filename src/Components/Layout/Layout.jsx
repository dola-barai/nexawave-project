import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Layout = () => {
    return (
        <div>
            <div className="text-white py-2 text-center bg-red-500">
            We just launched Lenses - An advanced analytics dashboard for Osmosis - VISIT IT NOW -> <span className="text-purple-800 underline">datalenses.zone</span>
            </div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;