import React, {createContext, useState} from 'react';

const CountStateContext = createContext();

function CountContext({children}) {
   const [count, setCount] = useState(0);
   const handleCount = () =>{
    setCount(count+1)
   }

  return (
    <>
    <CountStateContext.Provider value={{count, handleCount}}>
        {children}
    </CountStateContext.Provider>
    </>
  )
}

export {CountContext, CountStateContext}