import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Media from './Components/Media/Media';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import Auth from './Auth';
import About from './About/About';
import Footer from './Footer/Footer';
import MediaDetail from './Components/Media/MediaDetail/MediaDetail';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-15 bg-[#0B0C10]">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/media' element={<Auth><Media></Media></Auth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/about' element={<Auth><About></About></Auth>}></Route>
        <Route path='/mediaDetail/:id' element={<Auth><MediaDetail></MediaDetail></Auth>}></Route>
      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
