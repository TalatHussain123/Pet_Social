import './App.css';
import Header from './components/header';
import Feature from './components/feature';
import Signup from './components/signup';
import Footer from './components/footer';
import Instruction from './components/instruction';

import React from 'react';



function App() {
    return ( <div className = "App" >
        <Header / >
        <Feature / >
        <Instruction / >
     
        <Signup / >
        <Footer / >


        </div>

    );
}

export default App;