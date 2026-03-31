import React, { use } from 'react';
import Card from './Card';
import Carts from './Carts';

const PremiumToolsBody = ({ dataPromise, status, carts, setCarts }) => {
    const data = use(dataPromise);


    return (
        <div>
            {
                status === 'card'
                    ?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 '>
                        {
                            data.map(
                                item =>
                                    <Card
                                        key={item.id}
                                        item={item}
                                        carts={carts}
                                        setCarts={setCarts}
                                    />
                            )
                        }
                    </div>
                    :
                    <div className=''>
                        <Carts
                            carts={carts}
                            setCarts={setCarts}
                        />
                    </div>

            }

        </div>

    );
};

export default PremiumToolsBody;