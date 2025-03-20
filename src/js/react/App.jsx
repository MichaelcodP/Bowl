import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Products from "./sections/Products.jsx";
import Location from "./sections/Location.jsx";
import Footer from './components/Footer.jsx';
import HeroMenu from './sections/HeroMenu.jsx';
import DishesMenu from './sections/DishesMenu.jsx';
import HeroAbout from './sections/HeroAbout.jsx';

// Компонент для головної сторінки
const HomePage = () => {
    return (
        <main className="page">
            <Hero />
            <Products />
            <Location />
        </main>
    )	
}

// Компонент для сторінки продуктів
const MenuPage = () => {
    return (
        <main className="page">
            <HeroMenu />
            <DishesMenu />
        </main>
    )	
}

const AboutPage = () => {
    return (
        <main className="page">
            <HeroAbout />
            <Location />
        </main>
    )	
}

const App = () => (
    <Router>
        <Navbar /> {/* Navbar залишиться на всіх сторінках */}
        <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/menu' element={ <MenuPage /> } />
            <Route path='/about' element={ <AboutPage /> } />
            <Route path='*' element={ <h1>404 - Page Not Found</h1> } />
        </Routes>		
        <Footer />	{/* Footer на всіх сторінках */}
    </Router>
);

export default App
