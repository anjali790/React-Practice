import React, { useContext } from 'react';
import {CountStateContext} from '../context/CountContext';

export function ComponentC() {
    const { handleCount } = useContext(CountStateContext)

    return (
        <>
            <div className='componentC'>
                <h1>Component C</h1>
                <button onClick={handleCount}>set count</button>
            </div>
        </>
    )
}
