import React from "react";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";

import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

const App = () => {
  const {user} = useContext(Context);
  return (
    <>
      <div className="App">
        <Router>
          <TopBar/>        
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/register" element={user ? <Home/> : <Register/>}></Route>
            <Route path="/login" element={user ? <Home/> : <Login/>}></Route>
            <Route path="/about" element={user ? <About/> : <Register/>}></Route>
            <Route path="/write" element={user ? <Write/> : <Register/>}></Route>
            <Route path="/contact" element={user ? <Contact/> : <Register/>}></Route>
            <Route path="/settings" element={user ? <Settings/> : <Register/>}></Route>
            <Route path="/post/:postId" element={<Single/>}></Route>
          </Routes>
        </Router>
      </div>
    </>  
    );
}

export default App;


