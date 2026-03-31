import React, { useState } from 'react';
import PremiumToolsHeading from './PremiumToolsHeading';
import PremiumToolsBody from './PremiumToolsBody';

const PremiumTools = ({ dataPromise, carts, setCarts }) => {
    const [status, setStatus] = useState('card');

    return (
        <div className='py-30 space-y-10'>
            <PremiumToolsHeading
                status={status}
                setStatus={setStatus}
                carts={carts}
            />
            <PremiumToolsBody
                status={status}
                carts={carts}
                setCarts={setCarts}
                dataPromise={dataPromise}
            />
        </div>
    );
};

export default PremiumTools;