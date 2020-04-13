import React, {useState, createContext} from 'react';

export const ActualContext = createContext();

export const ActualDelivery = props => {
    const [usuarioA, setActual] = useState(-1);
    return (
        <ActualContext.Provider value={[usuarioA, setActual]}>
            {props.children}
        </ActualContext.Provider>
    )
}