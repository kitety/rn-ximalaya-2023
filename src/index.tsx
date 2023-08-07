import Navigator from '@/navigator/index';
import store from '@/config/dva';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

const App = () => {
  console.log(store);
  return (
    <Provider store={store}>
      <Navigator />
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
    </Provider>
  );
};

export default App;
