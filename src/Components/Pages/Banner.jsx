const Banner = () => {
    return (
        <div className="pt-20 pb-10 px-12">
            <h3 className="text-white text-4xl md:text-8xl">The Cosmos <span className="text-cyan-600">Data</span> & <br /> <span className="text-pink-600">Development</span> Platform</h3>
            <p className="pt-12 pb-8 text-slate-50 text-xl font-thin">Infrastructure to BUILD, MONITOR and GROW your project in Cosmos.</p>
        
             <p className="pt-12 text-slate-400 font-thin pb-5">Trusted by the top projects in Cosmos</p>
             <div className="grid grid-cols-6 gap-6">
                <div><img src="https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646e1999e3d48e15ebfdeee0_osmosis-logo.png" /></div>
                <div><img src="https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646e1e0f4ce2e765acbe97e0_evmos-logo.png" /></div>
                <div><img src="https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646e1e1066f31612fe9cfaaf_stride-logo.png" /></div>
                <div><img src="https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646e1e0fab34c57022119cac_quasar-logo.png" /></div>
                <div><img src="https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646e1ecaf9ec8f9d0f65685a_umee-logo.png" /></div>
                <div><img src="https://uploads-ssl.webflow.com/646e162a57dc9c48b5ef8bd8/646e7610547b46adab4b5a3e_wynd-logo.png" /></div>
             </div>
        </div>
    );
};

export default Banner;