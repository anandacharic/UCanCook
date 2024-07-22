import react from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import Home from "./pages/home"
import Notfound from "./pages/notfound"
import ProtectedRoute from "./components/ProtectedRoute"
import Cuisine from "./pages/Cuisine"
import Cuisines from "./pages/Cuisine"

function Logout(){
  localStorage.clear()
  return <Navigate to="/login"/>
}

function RegisterAndLogOut(){
  localStorage.clear();
  return <register></register>
}

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route 
          path ="/" 
          element={
            <ProtectedRoute> 
                <Home></Home>
            </ProtectedRoute>}>
          </Route>

          <Route 
          path ="/cuisines" 
          element={
            <ProtectedRoute> 
                <Cuisines></Cuisines>
            </ProtectedRoute>}>
          </Route>

          <Route path="/login" element={<Login/>}></Route>
          <Route path="/logout" element={<Logout></Logout>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
