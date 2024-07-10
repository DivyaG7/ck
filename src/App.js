
import './App.css';
import { About } from './components/about';
import { CustomNavbar } from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Service } from './components/service';
import { Contact } from './components/contact';
import { Home } from './components/home';
import { Footer } from './components/footer';


function App() {
  return (
    <div className="App">
      <Router>
      <CustomNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
