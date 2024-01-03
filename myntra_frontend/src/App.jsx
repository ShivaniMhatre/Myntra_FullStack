import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Profile/Login';
import Register from './Component/Profile/Register';
import Men_Multiple from './Component/Men/Men_Multiple';
import Add_Product from './Component/Product/Add_Product';
import Men_Single from './Component/Men/Men_Single';
import All_Categories from './Component/Product/All_Categories';
import Women_Multiple from './Component/Women/Women_Multiple';
import Women_Single from './Component/Women/Women_Single';
import Profile from './Component/Profile/Profile';
import Cart from './Component/Cart/Cart';
import Update_Product from './Component/Product/Update_Product';
import YourProduct from './Component/Product/YourProduct';
import Single from './Component/Product/Single';
import Footer from './Component/Home/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/add_product' element={<Add_Product/>}/>
        <Route exact path='/updateproduct/:productId' element={<Update_Product/>}/>
        <Route exact path='/yourProduct' element={<YourProduct/>}/>
        <Route exact path='/all_cate' element={<All_Categories/>}/>
        <Route exact path='/single/:productId' element={<Single/>}/>
        <Route exact path='/men_multiple' element={<Men_Multiple/>}/>
        <Route exact path='/men_single/:id' element={<Men_Single/>}/>
        <Route exact path='/women_multiple' element={<Women_Multiple/>}/>
        <Route exact path='/women_single/:id' element={<Women_Single/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/cart' element={<Cart/>}/>  
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
