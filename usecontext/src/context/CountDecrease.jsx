import React, {createContext, useState} from 'react';

const CountContext = createContext();

function CountDecrease({children}) {
   const [countdec, setCount] = useState(0);
   const handleCount = () =>{
    setCount(countdec-1)
   }

  return (
    <>
    <CountContext.Provider value={{countdec, handleCount}}>
        {children}
    </CountContext.Provider>
    </>
  )
}

export {CountDecrease, CountContext}
