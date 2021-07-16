import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Notes from './pages/Notes';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/register">
          <SignUp />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
