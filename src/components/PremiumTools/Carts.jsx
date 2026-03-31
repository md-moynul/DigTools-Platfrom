import React from 'react';
import Cart from './Cart';
import { toast } from 'react-toastify';

const Carts = ({ carts, setCarts }) => {
    const total = carts.reduce((sum, item) => sum + item.price, 0);
    const handelPayment = () => {
        setCarts([]);
        toast.success('Payment success!')
    }



    return (
        <div className='space-y-6 max-w-4xl mx-auto p-10 shadow '>
            <h1 className='text-2xl font-bold '>Your Cart </h1>

            {
                carts.length === 0 ?
                    <div className='flex justify-center flex-col text-center items-center gap-5 '>
                        <div className=''>
                            <img src="/assets/jobs.png" alt="" />
                        </div>

                        <p className='font-semibold'>Cart is empty</p>

                    </div> : <div className='space-y-6 '>
                        {
                            carts.map(item =>
                                <Cart
                                    key={item.id}
                                    item={item}
                                    carts={carts}
                                    setCarts={setCarts}
                                />)
                        }
                        <div className='flex justify-between'>
                            <p>Total : </p>
                            <p className='font-bold text-2xl'>${total}</p>
                        </div>
                        <button onClick={() => handelPayment()} className='btn w-full btn-primary rounded-full'>Proceed to Checkout</button>
                    </div>

            }

        </div>
    );
};

export default Carts;