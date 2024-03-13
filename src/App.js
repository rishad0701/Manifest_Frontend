import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Components/pages/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Services from './Components/pages/Services';
import AboutUs from './Components/pages/AboutUs';
import ContactUs from './Components/pages/ContactUs';
import Book from './Components/Book';
import { DataProvider } from './Components/Context';
import CardItem from './Components/CardItem';

function App() {
  return (
    <div className='App'>
      <DataProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
      <Route exact path="/" element = {<Home />}/>
      <Route exact path="/login" element = {<Login />}/>
      <Route exact path="/register" element = {<Register/>}/>
      <Route exact path="/services" element = {<Services/>}/>
      <Route exact path="/aboutus" element = {<AboutUs/>}/>
      <Route exact path="/contactus" element = {<ContactUs/>}/>
      <Route exact path="/book" element = {<Book/>}/>
      <Route exact path="/carditem" element = {<CardItem/>}/>
      </Routes>
      </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
