
import './App.css';
import NavigationBar from './Components/Navigation_bar/NavigationBar';
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import ProductList from './Components/Products/ProductList';
import AddProd from './Components/Products/AddProd';
import ProductDetails from './Components/Products/ProductDetails';
import EditProduct from './Components/Products/EditProduct';
function App() {
  return (
    <div className="App">
   <NavigationBar/>
   <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/products" element={<ProductList/>}/>
<Route path="/add" element={<AddProd/>}/>
<Route path="/products/details" element={<ProductDetails/>}/>
<Route path='/products/edit' element={<EditProduct/>} />
   </Routes>
    </div>
  );
}

export default App;
