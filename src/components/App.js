import React, {Component, useState} from "react";
import '../styles/App.css';
import Slides from "./Slides";
import  {slides} from './../data';


const App = () => {
    const [currentSlide, setCurrentSlide] = React.useState(1);
    const nextSlide=()=>{
        let copyCurrentSlide=currentSlide;
        copyCurrentSlide++;
        setCurrentSlide(copyCurrentSlide);
    }
    const prevSlide=()=>{
        let copyCurrentSlide=currentSlide;
        copyCurrentSlide--;
        setCurrentSlide(copyCurrentSlide);
    }
    const resetSlide=()=>{
        setCurrentSlide(1);
    }
    return (
        <>
            <Slides currentSlide={slide[currentSlide]}/>
            <button disabled={currentSlide===slide.length} onClick={nextSlide} data-testid="button-next">Next</button>
            <button disabled={currentSlide===1} onClick={prevSlide} data-testid="button-prev">Previous</button>
            <button disabled={currentSlide===1} onClick={resetSlide} data-testid="button-restart">Reset</button>
        </>
    )
}


export default App;
