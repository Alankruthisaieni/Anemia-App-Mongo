import React, { createContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import About  from "./components/About";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import SignUp from "./components/SignUp"
import ErrorPage from "./components/ErrorPage";
import MedicalHistory from "./components/MedicalHistory";
import Images from "./components/Images"
import Symptoms from "./components/Symptoms";
import {Routes,Route} from "react-router-dom"
import IFA from "./components/IFA";
import { initialState,reducer } from "./reducer/useReducer";
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

export const userContext=createContext();
const Router=()=>{
  return(
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/register" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/logout" element={<Logout/>}/>
    <Route path="/MedicalHistory" element={<MedicalHistory/>}/>
    <Route path="/images" element={<Images/>}/>
    <Route path="/Symptoms" element={<Symptoms/>}/>
    <Route path="/IFA" element={<IFA/>}/>
    <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  )
}
function App() {
  const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <>
    <userContext.Provider value={{state,dispatch}}>
    <Navbar/>
    <Router/>
    </userContext.Provider>
    </>
  );
}

export default App;
