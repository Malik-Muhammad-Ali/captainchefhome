import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Menu from './pages/menu/Menu';
import New from './pages/new/New';
import Services from './pages/service/Services';
import Layout from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/new' element={<New/>}/>
          <Route path='/services' element={<Services/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
