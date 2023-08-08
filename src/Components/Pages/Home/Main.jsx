import About from "../About";
import Banner from "../Banner";
import Products from "../Products";

const Main = () => {
    return (
        <div className="bg-black">
            <Banner></Banner>
            <About></About>
            <Products></Products>
        </div>
    );
};

export default Main;