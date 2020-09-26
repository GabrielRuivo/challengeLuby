import React, {createContext, useState} from 'react';

export const DataContexts = createContext();

export default function DataContextsProvider({ children }) {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState([]);

  return (
    <DataContexts.Provider 
      value={[
        userName, 
        setUserName, 
        userData, 
        setUserData, 
      ]} 
    >
      {children}
    </DataContexts.Provider>
  );
}
