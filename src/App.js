import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/style.css';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Movie from './Pages/Movie';
import Card from './Pages/Card';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
    
<Nav />


<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/shop" element={<Shop/>}/>
  <Route path="/movie" element={<Movie/>}/>
  <Route path="/card" element={<Card/>}/>``
  <Route path="/login" element={<Login/>}/>n
  <Route path="/register" element={<Register/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
</Routes>

</BrowserRouter> 

  );
}

export default App;


