import Navigator from '@/navigator/index';
import store from '@/config/dva';
import {Provider} from 'react-redux';

const App = () => {
  console.log(store);
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
