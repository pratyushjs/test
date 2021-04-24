import { Route, Switch } from 'react-router-dom';
import TestOne from './pages/TestOne';
import TestTwo from './pages/TestTwo';
import './App.css';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact render={() => <TestOne />} />
        <Route path="/two" exact render={() => <TestTwo />} />
      </Switch>
    </div>
  )
}




export default App;
