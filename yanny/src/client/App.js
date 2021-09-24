import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CreateBlog from './components/CreateBlog';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/createblog" >
          <CreateBlog />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
