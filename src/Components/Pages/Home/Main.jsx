import About from "../About";
import Banner from "../Banner";
import Products from "../Products";
import Projects from "../Projects";
import Support from "../Support";

const Main = () => {
    return (
        <div className="bg-black">
            <Banner></Banner>
            <About></About>
            <div className="divide-y divide-zinc-900 px-12">
            <Products></Products>
            <Projects></Projects>
            <Support></Support>
            </div>
        </div>
    );
};

export default Main;