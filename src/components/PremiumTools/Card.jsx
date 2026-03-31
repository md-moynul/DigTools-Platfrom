import React, { useState } from 'react';
import Features from './Features';
import { toast } from 'react-toastify';


const Card = ({ item ,carts ,setCarts }) => {
    const { name, description, price, period, features, icon, tagType } = item;
    
    
    const [status, setStatus] = useState(false)
    const handleClicked = ()=>{
        setStatus(true)
        const isIn  = carts.find(element => element.id === item.id)
        if(isIn){
            toast.error(`${item.name} is already in carts`);
            return 
        }
        
       const newCarts = [...carts ,item];
       setCarts(newCarts)
       toast.success(`${item.name} is added in carts`)
    }


    return (
        <div className='p-6 space-y-4 shadow rounded-xl relative'>
            <div>
                <img className=' object-contain ' src={icon} alt="" />
                <span className={`absolute top-2.5 right-2.5 py-1.5 px-3 rounded-full ${tagType.toLowerCase() == 'best seller' ? 'bg-amber-100 text-amber-500' : tagType.toLowerCase() == 'popular' ? 'bg-blue-100 text-primary ' : tagType.toLowerCase() == 'new' ? 'bg-green-100 text-green-500 ' : 'bg-red-300'}  `}>{tagType}</span>
            </div>
            <h3 className='text-2xl font-bold '>{name}</h3>
            <p >{description}</p>
            <p ><span className='text-2xl font-bold '>${price}</span><span>/{period}</span></p>
            <div>
                {features.map((element, index) => <Features element={element} key={index} />)}
            </div>
            <button
             onClick={()=>{handleClicked()}} 
             className={`btn w-full   px-7 py-4 rounded-full  ${status?'btn-success text-white':'btn-primary hover:bg-white hover:text-primary '}`}>
                {status ? 'Added to cart' :'Buy now'}
            </button>
        </div>
    );
};

export default Card;