import { X } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ item, carts, setCarts }) => {

    console.log(carts);


    const { name, icon, price } = item;
    const handelDelete = (item) => {
        const newCart = carts.filter(e => e.id !== item.id)
        setCarts(newCart)
        toast.error(`${item.name} is removed from carts`)
    }



    return (
        <div className='p-4 bg-base-300  flex justify-between items-center shadow hover:shadow-2xl shadow-primary rounded-xl  transition-all duration-300 hover:scale-101'>
            <div className='flex gap-4 items-center '>
                <div className='p-3.5  rounded-full bg-base-100 flex items-center justify-center '>
                    <img className='w-8 h-8' src={icon} alt={name} />
                </div>

                <div className='space-y-2 '>
                    <h3 className='text-xl font-bold '>{name}</h3>
                    <h2 className='font-medium text-gray-400'>${price}</h2>
                </div>

            </div>
            <div>
                <button onClick={() => { handelDelete(item) }} className='text-error btn border-none '><X /></button>
            </div>
        </div>
    );
};

export default Cart;