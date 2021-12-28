import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import UserPage from './components/pages/UserPage';
import TaskPage from './components/pages/TaskPage';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';
import AddTodo from './components/todos/AddTodo';
// import Task from './components/pages/Task';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/taskPage" component={TaskPage} />
        <Route exact path="/userPage" component={UserPage} />
        <Route exact path="/loginPage" component={LoginPage} />
        {/* <Route exact path="/todo" component={Task} /> */}
        <Route exact path="/todos/add" component={AddTodo} />

        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
    );
}

export default App;
