const Projects = () => {
    return (
        <div>
            <div className="text-white py-12">
                <h1 className="text-center text-4xl font-semibold py-8">Built for all types of projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-3 md:px-12 pt-4 pb-6">
                    <div>
                        <div className="card h-52 bg-zinc-900 text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">App Chains</h2>
                                <p className="text-lg text-zinc-400">Extend your chain <br /> functionality with <br /> powerful Analytics and <br /> reliable APIs</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card h-52 bg-zinc-900 text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Wallets</h2>
                                <p className="text-lg text-zinc-400">Forget about managing <br /> your own infrastructure <br /> and focus on building a <br /> great wallet experience.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card h-52 bg-zinc-900 text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Validators</h2>
                                <p className="text-lg text-zinc-400">Measure delegator loyalty <br /> and build tools to engage <br /> with them.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card h-52 bg-zinc-900 text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Analysts</h2>
                                <p className="text-lg text-zinc-400">Dive deep into Cosmos <br /> on-chain data and run <br /> complex analysis.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card h-52 bg-zinc-900 text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">MEV</h2>
                                <p className="text-lg text-zinc-400">Access on-chain data <br /> and necessary <br /> infrastructure.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card h-52 bg-zinc-900 text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Smart Contracts</h2>
                                <p className="text-lg text-zinc-400">Obtain on-chain data and <br /> get custom endpoints for <br /> your smart contract.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card h-52 bg-zinc-900 text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Defi Apps</h2>
                                <p className="text-lg text-zinc-400">Forget about complex <br /> RPC queries and request <br /> all data from one single <br /> platform.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card h-52 bg-zinc-900 text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">IBC Apps</h2>
                                <p className="text-lg text-zinc-400">The most comprehensive <br /> data set for IBC chains <br /> and scalable IBC <br /> infrastructure.</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default Projects;