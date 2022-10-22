import React, { useContext } from 'react';
import { CountStateContext } from '../context/CountContext';
import { CountContext } from '../context/CountDecrease';

import { ComponentB } from './ComponentB';

export function ComponentA() {
    const {countdec} = useContext(CountContext);
    const { count } = useContext(CountStateContext);

    return (
        <>
            <div className='componentA'>
                <h1>count:- {count}</h1>
                <h1>count1:- {countdec}</h1>
            </div>
            <ComponentB />
        </>
    )
}
