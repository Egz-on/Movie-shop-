import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './css/style.css';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Movie from './Pages/Movie';
import Card from './Pages/Card';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Nav from './components/Nav';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200">

    <BrowserRouter>
    
<Nav />
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/shop" element={<Shop/>}/>
  <Route path="/movie/:id" element={<Movie/>}/>
  <Route path="/card" element={<Card/>}/>
  <Route path="/login" element={<Login/>}/>n
  <Route path="/register" element={<Register/>}/>
</Routes>

</BrowserRouter> 
</div>
  );
}

export default App;


