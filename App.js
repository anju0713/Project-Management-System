import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import  {Routes , Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';

import { useEffect, useState } from 'react';


function App() {
  const [auth , setauth] = useState(false);
  const[auth1 , setauth1] = useState(false);

  const isLoggedIn = async () => {
    try{
      const res = await fetch('/auth',{
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
         credentials : "include"
      });
      if(res.status === 200) {
        setauth(true)
        setauth(false)
      }
      if(res.status === 401) {
        setauth(false)
        setauth(true)
      }
      
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
   <>
   
    
   <Navbar/>
   <Routes> 
   
    <Route exact path = "/" element = {<Home/>}/>
    <Route exact path = "/about" element = {<About/>}/>
    <Route exact path = "/service" element = {<Services/>}/>
    <Route exact path = "/contact" element = {<Contact/>}/>
    
    <Route exact path = "/login" element = {<Login/> }  />
    <Route exact path = "/register" element = {<Register/>}  />
    <Route exact path = "/dashboard" element = {<Dashboard/>}  />
    <Route exact path = "/logout" element = {<Logout/>} />

    
    </Routes>
   
   
   <Footer/>
   </>
  );
}

export default App;
