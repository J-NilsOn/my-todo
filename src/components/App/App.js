import Form from '../Form/Form';
import List from '../List/List';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import WrapperApp from './WripperApp';

function App() {
  return (
    <Provider store={store}>
      <WrapperApp className="App">  {/*презентационный компонент*/}
        <Form />
        <List />
      </WrapperApp>
    </Provider>
  );
}

export default App;
