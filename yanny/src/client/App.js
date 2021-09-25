import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home';
import CreateBlog from './components/CreateBlog';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/createblog" exact>
          <CreateBlog />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
