import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/global';
import Routes from './routes';
import DataContextProvider from './contexts/DataContexts';

ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider>
      <Routes />
      <GlobalStyles />
    </DataContextProvider>
  </React.StrictMode>,
document.getElementById('root')
);

