import React from 'react';



import ApplicationNavigator from './src/navigation/AppNavigator';

import {Provider} from 'react-redux';
import RootStore from './src/presenter/store/RootStore';



const App = () => {
  return (
    <Provider store={RootStore}>
      <ApplicationNavigator/>
    </Provider>
  );
};

export default App;
