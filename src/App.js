import React from 'react';
import {Route,Routes} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


// const HatsPage = () =>(
// <div>
//   <h1>Hats Page</h1>
// </div>
// )

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/shop' element={<ShopPage />} />
      <Route path='/signin' element={<SignInAndSignUpPage />} />
      </Routes>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
