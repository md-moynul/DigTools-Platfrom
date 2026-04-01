import { MoveRight, Play } from "lucide-react";

const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-15 py-8  lg:py-15 items-center  p-6 lg:p-0 ">
            <div className="space-y-4 flex-1">
                <div>
                    <span
                        className="bg-[#E1E7FF]  px-4 py-2 rounded-full text-[#9514FA] hover:text-white inline-flex items-center gap-2 transition-all duration-300 hover:bg-[#839cf5]">
                        <div className="h-4 w-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-[0_0_8px_#8a2be2] rounded-full animate-pulse">   
                        </div>
                        <h4 className="">New: AI-Powered Tools Available</h4>
                        
                    </span>
                </div>
                <h1 className="text-4xl lg:text-7xl font-extrabold leading-10 lg:leading-20 ">Supercharge Your <br />Digital Workflow</h1>
                <p>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />
                    Explore Products
                </p>
                <div className="flex flex-col md:flex-row gap-4 pt-4 ">
                    <button className="btn btn-primary rounded-full px-7 py-4 hover:bg-white hover:text-primary">Explore Products <MoveRight /></button>
                    <button className="btn btn-primary btn-outline rounded-full px-7 py-4">    <Play /> Watch Demo</button>
                </div>
            </div>
            <div className="">
                <img src="/assets/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;