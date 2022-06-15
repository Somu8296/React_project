import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import UserPortal from './components/userPortal';
import AdminPortal from './components/adminPortal';
import AddBooks from './components/AddBooks';
import AddUsers from './components/AddUsers';
import BookList from './components/BookList';
import UserList from './components/UserLists';
import UserBookList from './components/userBooklist';




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'><HomePage /></Route>
          <Route exact path='/adminlogin'> <AdminLogin /></Route>
          <Route exact path='/userlogin'> <UserLogin /></Route>
          <Route exact path='/adminportal'> <AdminPortal /></Route>
          <Route exact path='/userportal'> <UserPortal /></Route>
          <Route exact path='/addbooks'><AddBooks /></Route>
          <Route exact path='/addusers'><AddUsers /></Route>
          <Route exact path='/booklist'><BookList /></Route>
          <Route exact path='/userlist'><UserList /></Route>
          <Route exact path='/userbooklist'><UserBookList /></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
