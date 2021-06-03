import Form from '../Form/Form';
import List from '../List/List';
import './App.css';
import { Provider } from 'react-redux';
import store from '../../redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
        <List />
      </div>
    </Provider>
  );
}

export default App;
