import './App.css';
import { Route,Routes } from 'react-router';
import Home from "./components/Home"
import About from "./components/About"
import Blog from "./components/Blog"
import Navbar from "./components/Navbar"
import Product from './components/Product';
import Item from './components/Item';
import ItemDetail from './components/ItemDetail';
import Admin from './components/Admin';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/adminDashboard' element={<Admin/>}/>
        <Route path='/product/:key' element={<Item/>}/>
        <Route path="/product/:key/:name" element={<ItemDetail />}/>

        <Route path='*' element={<h1>Error Page</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
