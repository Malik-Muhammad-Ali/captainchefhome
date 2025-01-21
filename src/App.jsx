import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Menu from "./pages/menu/Menu";
import Subscriptions from "./pages/subscriptions/Subscriptions";
// import New from './pages/new/New';
import Layout from "./components/layout/Layout";
import Careers from "./pages/careers/Careers";
import ApplyNow from "./pages/applynow/ApplyNow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/join" element={<Menu />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/apply" element={<ApplyNow />} />
          {/* <Route path='/new' element={<New/>}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
