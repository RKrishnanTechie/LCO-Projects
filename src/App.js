import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, link, Route} from "react-router-dom"

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"

import firebase from "firebase/compat/app"
import "firebase/compat/auth"

import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { UserContext } from './context/UserContext';

import Footer from './layout/Footer';
import Header from './layout/Header';


import firebaseConfig from "./config/FirebaseConfigs"
// init firebaSE 
firebase.initializeApp(firebaseConfig)


const App = () => {

  const [user, setUser] = useState(null)
  return (
    <div className="App">
    <Router>
    <ToastContainer/>
    <UserContext.Provider value={{user,setUser}}>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </UserContext.Provider>
    
    </Router>
    </div>
  );
}

export default App;



