import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <div className="text-white py-12">
            <h1 className="text-center text-4xl font-bold py-8">Products</h1>

            <div className="grid grid-cols-3 gap-2 px-12 pt-4">
                <div>
                    <div className="card w-full bg-zinc-900 rounded-lg shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-bold">SQL Access</h2>
                        </div>
                        <figure><img src="https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646f147125e89c906ac8ccde_sql-banner-p-800.png" /></figure>
                    </div>
                    <div className="py-6 px-5 ">
                        <h2 className="text-3xl font-semibold pb-6">Query on-chain data</h2>
                        <p className="text-xl font-thin">Run SQL queries across all Cosmos chains to run analytics for your app and the whole ecosystem.</p>
                        <Link className="font-semibold text-lg flex pt-2 text-orange-700 " to='https://docs.numia.xyz/overview/what-is-numia'><span className="border-b-2 hover:border-b-4 border-orange-700 flex">Get SQL Access<span> </span><BsArrowRight className="pt-2 h-6 hover:animate-bounce"></BsArrowRight></span></Link>
                    </div>
                </div>
                <div>
                    <div className="card w-full bg-zinc-900 rounded-lg shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-bold">RPC Access</h2>
                        </div>
                        <figure><img src="https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646f14cb759f502b1d1ad21c_rpc-banner-p-800.png" /></figure>
                    </div>
                    <div className="py-6 px-5 ">
                        <h2 className="text-3xl font-semibold pb-6">Scalable and fast RPCs</h2>
                        <p className="text-xl font-thin">Distributed RPC nodes for all Cosmos chains so that you can focus on product. Scalable, reliable and fast.</p>
                        <Link className="font-semibold text-lg flex pt-2 text-orange-700 " to='https://docs.numia.xyz/overview/what-is-numia'><span className="border-b-2 hover:border-b-4 border-orange-700 flex">Get RPC Access<span> </span><BsArrowRight className="pt-2 h-6 hover:animate-bounce"></BsArrowRight></span></Link>
                    </div>
                </div>
                <div>
                    <div className="card w-full bg-zinc-900 rounded-lg shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-bold">Advanced API</h2>
                        </div>
                        <figure><img src="https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/64b7914758a3b6529220b76a_api-banner-p-800.png" /></figure>
                    </div>
                    <div className="py-6 px-5 ">
                        <h2 className="text-3xl font-semibold pb-6">Aggregated API endpoints</h2>
                        <p className="text-xl font-thin">A suite of API endpoints that will save you hours of development and complex calculations.</p>
                        <Link className="font-semibold text-lg flex pt-2 text-orange-700 " to='https://docs.numia.xyz/overview/what-is-numia'><span className="border-b-2 hover:border-b-4 border-orange-700 flex">Get API Access<span> </span><BsArrowRight className="pt-2 h-6 hover:animate-bounce"></BsArrowRight></span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;