// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React from 'react';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import CreatePost from './pages/Createpost';
function App() {
  return (
    <Router> 
     <div className="App"> 
      <Routes>
        <Route path="/" element={<Signup/>}>
        </Route>
        <Route path="/signin" element={<Signin/>}>
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}>
        </Route>
        <Route path="/profile" element={<Profile/>}>
        </Route>
        <Route path="/createpost" element={<CreatePost/>}>
        </Route>
      </Routes>
     </div>
    </Router>
  );
}

export default App;
