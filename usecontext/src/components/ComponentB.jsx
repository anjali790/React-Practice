import React,{useContext} from 'react'
import { ComponentC } from './ComponentC';
import { CountContext } from '../context/CountDecrease';

export function ComponentB() {
    const {handleCount} = useContext(CountContext)
    return (
        <>
            <div className='componentB'>
                <h2>components B</h2>
                <button onClick={handleCount}>Decrease</button>
            </div>
            <ComponentC />
        </>
    )
}
