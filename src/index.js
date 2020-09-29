import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/global';
import Routes from './routes';
import DataContextsProvider from './contexts/DataContexts';
import NewDataContextsProvider from './contexts/NewDataContexts';

ReactDOM.render(
  <React.StrictMode>
    <DataContextsProvider>
      <NewDataContextsProvider>
        <Routes />
        <GlobalStyles />
     </NewDataContextsProvider>
    </DataContextsProvider>
  </React.StrictMode>,
document.getElementById('root')
);

