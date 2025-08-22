import React from 'react'
import { BrowserRouter as Router , Routes ,Route}  from 'react-router-dom';

//Components
import Navbar from "../src/components/Navbar";

// Pages
import Home from "./Pages/Home";
import Comment from "./Pages/comment";
import About from "./Pages/about";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup"



const App = () => {
  return (
    <Router>
        <main>
          <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/comment' element={<Comment/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
            </Routes>
        </main>
    </Router>
  )
}

export default App