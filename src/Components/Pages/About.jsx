import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="px-10 md:px-36 py-24 bg-zinc-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                    <h1 className="text-3xl font-semibold text-white">Scalable infrastructure to build <br /> Cosmos apps fast and easy.</h1>
                    <Link className="font-semibold text-lg flex pt-2 text-orange-700 " to='https://docs.numia.xyz/overview/what-is-numia'><span className="border-b-2 hover:border-b-4 border-orange-700 flex">Get Started<span> </span><BsArrowRight className="pt-2 h-6 hover:animate-bounce"></BsArrowRight></span></Link>
                </div>
                <div>
                    <h2  className=" text-slate-50 text-xl font-thin">NexaWave is an on-chain Data Indexer and RPC provider that <br /> gives you the infrastructure to build apps fast and easy. <br /> <br />

                        You can forget about managing complicated <br /> infrastructure or running complicated RPC queries for <br /> things that should be simple. <br /> <br />

                        NexaWave does this for you.</h2>
                </div>
            </div>
        </div>
    );
};

export default About;