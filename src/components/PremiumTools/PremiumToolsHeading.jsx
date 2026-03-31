import React from 'react';

const PremiumToolsHeading = ({setStatus ,carts}) => {
    const handelStatus =(cardOrCart) =>{
        setStatus(cardOrCart)
    }
    return (
        <div className='space-y-4 text-center '>
            <h3 className='text-5xl font-extrabold '>
                Premium Digital Tools
            </h3>
            <p className='text-gray-400'>
                Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
            </p>
            <div className='flex justify-center'>
                <div className="tabs tabs-box rounded-full p-1 bg-base-100 border border-gray-400">
                    <input
                        onClick={() =>{handelStatus('card')}}
                        type="radio" name="my_tabs_1"
                        className="tab px-5 py-2 rounded-full  checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white"
                        aria-label="Products"
                        defaultChecked
                    />
                    <input
                         onClick={() =>{handelStatus('carts')}}
                        type="radio"
                        name="my_tabs_1"
                        className="tab px-5 py-2 rounded-full  checked:bg-linear-to-r from-[#4F39F6] to-[#9514FA] checked:text-white"
                        aria-label={`Carts(${carts.length})`}
                    />
                </div>
            </div>
        </div>
    );
};

export default PremiumToolsHeading;