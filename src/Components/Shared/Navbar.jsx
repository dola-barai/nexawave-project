import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import logo from '../../assets/logo2.png'

const Navbar = () => {
    const navOptions = <>
        <li><Link className="font-semibold text-lg hover:text-red-600" to='/'>Home</Link></li>
        <li><Link className="font-semibold text-lg hover:text-red-600" to='https://docs.google.com/forms/d/e/1FAIpQLSfRYxYUtbgLPMdEMB6_ao05S56hxUwpK6-KUS6O73lST49-Vg/viewform'>Contact</Link></li>
        <li><Link className="font-semibold text-lg text-red-600" to='https://docs.numia.xyz/overview/what-is-numia'>Docs<BsArrowRight></BsArrowRight></Link></li>
    </>
    return (
        <div className="">
            <div className="navbar bg-black text-white py-3 px-12">
                <div className="navbar-start">
                    <img className="h-12" src={logo} />
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        {navOptions}
                    </ul>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <AiOutlineMenu></AiOutlineMenu>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;