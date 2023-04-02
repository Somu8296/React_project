import Home from './components/Pages/home';
import Navbar from './components/Pages/navbar';
import Movielist from './components/Movielist';
import Footer from './components/Pages/footer';
import Notfound from './components/Pages/404';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from './components/contact';
import MyComponent from './components/Storedata';

function App() {
  return (
    <div className='App'>

      <Router>
        <Navbar />
        <Switch >
          <Route exact path='/'> <Home />  </Route>
          <Route exact path='/Movielist'><Movielist /></Route>
          <Route exact path='/contact'> <Contact /></Route>
          <Route exact path='/Storedata'><MyComponent /> </Route>
          <Route path='*'><Notfound /> </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;













































































