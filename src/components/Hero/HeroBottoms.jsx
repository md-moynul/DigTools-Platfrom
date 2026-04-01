import React from 'react';

const HeroBottoms = () => {
    return (
        <div className='py-15 w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] '>
            <div className=' grid grid-cols-3 max-w-7xl mx-auto '>
                <div className='text-center space-y-3 text-primary-content '>
                    <h3 className='text-3xl lg:text-6xl font-bold '>50K+</h3>
                    <h4 className='text-[16px] font-medium '>Active Users</h4>
                </div>
                <div className='text-center space-y-3 text-primary-content '>
                    <h3 className='text-3xl lg:text-6xl font-bold '>200+</h3>
                    <h4 className='text-[16px] font-medium '>Premium Tools</h4>
                </div>
                <div className='text-center space-y-3 text-primary-content '>
                    <h3 className='text-3xl lg:text-6xl font-bold '>4.9</h3>
                    <h4 className='text-[16px] font-medium'>Rating</h4>
                </div>
            </div>

        </div>
    );
};

export default HeroBottoms;