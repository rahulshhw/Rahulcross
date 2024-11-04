import React from 'react';
import {BrowserRouter, Route, Routes} from react-router-dom;
import Home from '/pages/Home';
import Login from '/pages/Login';
import Signup from '/pages/Signup';
function App() {
return (
<>
<BrowserRouter>
      
      <Routes>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>


      

</>

// fill the routing part


);
}
export default App;