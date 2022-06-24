import React from "react";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Posts from "./components/posts/Posts";
import Topbar from "./components/topbar/Topbar";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter,Route, Routes} from 'react-router-dom'

function App() {
  const user= false;
  return (
    <>
    <BrowserRouter>
    <Topbar/>
     <Routes>
     <Route exact path="/" element={<Home />}>
      </Route>
      <Route  path="/register" element={user ? <Home/>:<Register />}>
      </Route>
      <Route  path="/login" element={user ? <Home/>:<Login />}>
      </Route>
      <Route  path="/write" element={user ? <Write/>:<Write/>}>
      </Route>
      <Route path="/settings" element={user ? <Settings/>:<Register />}>
      </Route>
      <Route path="/single" element={<Single />}>
      </Route>
      <Route path="/posts" element={<Posts />}>
      </Route>
     </Routes>
     </BrowserRouter>
     </>
          //https://console.firebase.google.com/project/blog-3572f/firestore/data/~2F

  );
 
}

export default App;
