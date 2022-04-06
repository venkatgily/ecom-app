import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/header/header';
import Footer  from './component/footer/footer';
import Home from './routes/home';
import About from './routes/about';
import View from './routes/view';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css'

const App = () => {
    return (
        <BrowserRouter>
            <Container fluid className="p-0">
              <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/product-view" element={<View />} />
                </Routes>
                <Footer />  
            </Container>
        </BrowserRouter>
    );
}

export default App;
