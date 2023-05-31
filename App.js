import React from 'react';



import AppNavigator from './src/navigation/AppNavigator';

import {Provider} from 'react-redux';
import RootStore from './src/presenter/store/RootStore';



const App = () => {
  return (
    <Provider store={RootStore}>
      <AppNavigator/>
    </Provider>
  );
};

export default App;
