import { CircleCheck } from 'lucide-react';
import React from 'react';

const Pricing = () => {
    return (
        <div className='max-w-7xl mx-auto  space-y-10 py-30'>
            <div className='text-center space-y-4'>
                <h3 className='text-5xl font-extrabold '>Simple, Transparent Pricing</h3>
                <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-7 '>
                <div className='flex flex-col shadow p-6 w-95 space-y-3 bg-[#F9FAFC] rounded-xl'>
                    <div className='space-y-2 '>
                        <h3 className='font-bold text-2xl'>Starter</h3>
                        <p>Perfect for getting started</p>
                    </div>
                    <div className='flex'>
                        <h3 className='font-bold text-[40px] '>$0<span className='text-xl text-gray-400'>/Month</span></h3>
                    </div>
                    <ul className='space-y-2 flex-1 '>
                        <p className='flex gap-2'><CircleCheck className="w-4 text-green-500" />Access to 10 free tools</p>
                        <p className='flex gap-2'><CircleCheck className="w-4 text-green-500" />Basic templates</p>
                        <p className='flex gap-2'><CircleCheck className="w-4 text-green-500" />Community support</p>
                        <p className='flex gap-2'><CircleCheck className="w-4 text-green-500" />1 project per month</p>
                    </ul>
                    <button className='btn w-full bg-linear-to-l from-[#4F39F6] to-[#9514FA] font-bold text-white rounded-full'>Get Started Free</button>
                </div>
                <div className='flex flex-col shadow p-6 w-95 space-y-3 bg-linear-to-l from-[#4F39F6] to-[#9514FA]  text-white rounded-xl'>
                    <div className='space-y-2 '>
                        <h3 className='font-bold text-2xl'>Pro</h3>
                        <h4>Best for professionals</h4>
                    </div>
                    <div className='flex'>
                        <h3 className='font-bold text-[40px] '>$29<span className='text-xl'>/Month</span></h3>
                    </div>
                    <ul className='space-y-2 flex-1 '>
                        <li className='text-white flex gap-2'><CircleCheck className="w-4 text-green-500" /> to all premium tools</li>
                        <li className='text-white flex gap-2'><CircleCheck className="w-4 text-green-500" />Unlimited templates</li>
                        <li className='text-white flex gap-2'><CircleCheck className="w-4 text-green-500" />Priority support</li>
                        <li className='text-white flex gap-2'><CircleCheck className="w-4 text-green-500" />Unlimited projects</li>
                        <li className='text-white flex gap-2'><CircleCheck className="w-4 text-green-500" />Cloud sync</li>
                        <li className='text-white flex gap-2'><CircleCheck className="w-4 text-green-500" />Advanced analytics</li>
                    </ul>
                    <button className='btn w-full btn-white  font-bold text-primary rounded-full'>Get Start Pro Trial</button>
                </div>
                <div className='flex flex-col shadow p-6 w-95 space-y-3 bg-[#F9FAFC] rounded-xl'>
                    <div className='space-y-2 '>
                        <h3 className='font-bold text-2xl'>Enterprise</h3>
                        <p>For teams and businesses</p>
                    </div>
                    <div className='flex'>
                        <h3 className='font-bold text-[40px] '>$99<span className='text-xl text-gray-400'>/Month</span></h3>
                    </div>
                    <ul className='space-y-2 flex-1 '>
                        <p className='flex gap-2'><CircleCheck className="w-4 text-green-500" />Everything in Pro</p>
                        <p className='flex gap-2'><CircleCheck className="w-4 text-green-500" />Team collaboration</p>
                        <p className='flex gap-2'><CircleCheck className="w-4 text-green-500" />Custom integrations</p>
                        <p className='flex gap-2'><CircleCheck className="w-4 text-green-500" />Dedicated support</p>
                        <p className='flex gap-2'><CircleCheck className="w-4 text-green-500" />SLA guarantee</p>
                        <p className='flex gap-2'><CircleCheck className="w-4 text-green-500" />SLA guarantee</p>
                    </ul>
                    <button className='btn w-full bg-linear-to-l from-[#4F39F6] to-[#9514FA] font-bold text-white rounded-full'>Get Contact Sales</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;