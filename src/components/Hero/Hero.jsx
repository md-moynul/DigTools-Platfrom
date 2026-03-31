
const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto flex gap-15 py-15 items-center ">
            <div className="space-y-4 flex-1">
                <div>
                    <span className="bg-[#E1E7FF] text-[#9514FA] px-4 py-2 rounded-full "><span><span></span></span>New: AI-Powered Tools Available</span>
                </div>

                <h1 className="text-7xl font-extrabold leading-20 ">Supercharge Your <br />Digital Workflow</h1>
                <p className=" text-[#627382]">Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />
                    Explore Products
                </p>
                <div className="flex gap-4 pt-4 ">
                    <button className="btn btn-primary rounded-full px-7 py-4 hover:bg-white hover:text-primary">Explore Products</button>
                    <button className="btn btn-primary btn-outline rounded-full px-7 py-4">Watch Demo</button>
                </div>
            </div>
            <div className="">
                <img src="/assets/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;