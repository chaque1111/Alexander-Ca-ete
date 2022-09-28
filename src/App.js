import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path={"/"} component={About}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
