import React from 'react';



import ApplicationNavigator from './src/core/navigation/ApplicationNavigator';

import {Provider} from 'react-redux';
import RootStore from './src/presenter/RootStore';



const App = () => {
  return (
    <Provider store={RootStore}>
      <ApplicationNavigator/>
    </Provider>
  );
};

export default App;
