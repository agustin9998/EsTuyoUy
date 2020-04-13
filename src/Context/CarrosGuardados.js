import React, {useState, createContext} from 'react';

export const CarrosContext = createContext();

export const CarrosDelivery = props => {
    const [carros, setCarros] = useState([
    [{
        prod: '1',
        cant: 1
    },
    {
        prod: '3',
        cant: 2
    },
    {
        prod: '2',
        cant: 1
    }],
    [{
        prod: '0',
        cant: 5
    },
    {
        prod: '1',
        cant: 3
    }], 
    [{
        prod: '3',
        cant: 2
    },
    {
        prod: '1',
        cant: 2
    },
    {
        prod: '0',
        cant: 1
    }]]);
    
    return (
        <CarrosContext.Provider value={[carros, setCarros]}>
            {props.children}
        </CarrosContext.Provider>
    )
}