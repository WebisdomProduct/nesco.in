import React, { createContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <DataContext.Provider value={{ data, setData, activeSlide, setActiveSlide }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
