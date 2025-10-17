import React from 'react';
import './App.css';
import Nav from './component/Nav';
import Home from './pages/home/Home';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
            <Footer />
    </div>
  );
}

export default App;
