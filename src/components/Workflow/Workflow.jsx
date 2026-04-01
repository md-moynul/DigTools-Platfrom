import { MoveRight, Play } from 'lucide-react';
import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-15 px-10 lg:px-0 lg:py-30  '>
            <div className='max-w-7xl mx-auto space-y-10 text-center text-white'>
                <div className='space-y-4 '>
                    <h2 className='font-extrabold text-3xl lg:text-5xl'>Ready to Transform Your Workflow?</h2>
                    <h4 className=''>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</h4>
                </div>
                <div className='space-y-4 '>
                    <div className="flex flex-col lg:flex-row gap-4 pt-4 justify-center">
                        <button className="btn btn-white text-[#9514FA] rounded-full px-4 py-7 hover:bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:text-white">Explore Products <MoveRight /></button>
                        <button className="btn btn-white btn-outline rounded-full px-4 py-7 hover:text-[#9514FA]"><Play />View Pricing</button>
                    </div>
                    <h4>14-day free trial • No credit card required • Cancel anytime</h4>
                </div>

            </div>
        </div>
    );
};

export default Workflow;