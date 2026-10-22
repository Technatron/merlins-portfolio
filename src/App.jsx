import React, { useEffect } from 'react'
import { Routes, BrowserRouter, Route } from 'react-router';
import {Home, About, Projects, Contact} from './pages'
import Navbar from './components/Navbar';

const App = () => {

    useEffect(() => {
        const handleHeight = () => console.log("current window height: ",window.innerHeight);

        window.addEventListener("resize", handleHeight);
        
        return () => window.removeEventListener("resize", handleHeight);
    });

    return (
        <>
            <main className='bg-slate-300/100 h-max'>
                <BrowserRouter>
                <Navbar/>
                    <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/projects' element={<Projects/>}></Route>
                        <Route path='/about' element={<About/>}></Route>
                        <Route path='/contact' element={<Contact/>}></Route>
                    </Routes>
                </BrowserRouter>
            </main>
        </>
    )
}

export default App;