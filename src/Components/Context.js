import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const[state,setState] = useState({
        open : false,
        spot : '',
        spot2 : '',
        id : null,
        weekend : true,
        weekendId : null,
        Longweekendid : null,
    })
  
  return (
    <DataContext.Provider value={{ state,setState }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);