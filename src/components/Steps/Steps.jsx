import React from 'react';

const Steps = () => {
    return (
        <div className='max-w-7xl mx-auto  py-30 space-y-10 text-center'>
            <div className='space-y-3 '>
                <h3 className='font-extrabold text-5xl '>Get Started in 3 Steps</h3>
                <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-3'>
                <div className='space-y-4 p-6 shadow rounded-xl bg-base-100 w-95  h-95 flex flex-col justify-center relative'>
                    <span className='flex justify-center items-center '>
                        <div className='bg-linear-to-l from-[#4F39F6]/10 to-[#9514FA]/10 p-5 rounded-full '>
                            <img src="/public/assets/user.png" alt="" />
                        </div>
                    </span>

                    <h3 className='font-bold text-2xl '>Create Account</h3>
                    <p >Sign up for free in seconds. No credit card required to get started.</p>
                    <span className='bg-linear-to-l from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-full flex justify-center items-center font-bold text-xs text-white absolute top-5 right-5 '>01</span>
                </div>
                <div className='space-y-4 p-6 shadow rounded-xl bg-base-100 w-95  h-95 flex flex-col justify-center relative'>
                    <span className='flex justify-center items-center '>
                        <div className='bg-linear-to-l from-[#4F39F6]/10 to-[#9514FA]/10 p-5 rounded-full '>
                            <img src="/public/assets/package.png" alt="" />
                        </div>
                    </span>

                    <h3 className='font-bold text-2xl '>Choose Products</h3>
                    <p >Browse our catalog and select the tools that fit your needs.</p>
                    <span className='bg-linear-to-l from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-full flex justify-center items-center font-bold text-xs text-white absolute top-5 right-5 '>02</span>
                </div>
                <div className='space-y-4 p-6 shadow rounded-xl bg-base-100 w-95  h-95 flex flex-col justify-center relative'>
                    <span className='flex justify-center items-center '>
                        <div className='bg-linear-to-l from-[#4F39F6]/10 to-[#9514FA]/10 p-5 rounded-full '>
                            <img src="/public/assets/rocket.png" alt="" />
                        </div>

                    </span>

                    <h3 className='font-bold text-2xl '>Start Creating</h3>
                    <p >Download and start using your premium tools immediately.</p>
                    <span className='bg-linear-to-l from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-full flex justify-center items-center font-bold text-xs text-white absolute top-5 right-5 '>03</span>
                </div>
            </div>
        </div>
    );
};

export default Steps;