import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../assets/styles/App.css';
import Home from './components/Home';
import CreateBlog from './components/CreateBlog';
import CreateReply from './components/CreateReply';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route exact path="/createblog" component={CreateBlog}>
          <CreateBlog />
        </Route>
        <Route exact path="/reply" component={CreateReply}>
          <CreateReply />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
