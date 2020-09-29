import React, {createContext, useState} from 'react';

export const NewDataContexts = createContext();

export default function NewDataContextsProvider({ children }) {
  const [newUserData, setNewUserData] = useState([]);

  return (
    <NewDataContexts.Provider 
      value={[
        newUserData,
        setNewUserData
      ]} 
    >
      {children}
    </NewDataContexts.Provider>
  );
}