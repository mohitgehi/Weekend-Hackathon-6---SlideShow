import React, {Component, useState} from "react";
import '../styles/App.css';
import Slides from "./Slides";


const App = (props) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const slides=props.slides;
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
        setCurrentSlide(0);
    }
    return (
        <>
            <Slides currentSlide={slides[currentSlide]}/>
            <button disabled={currentSlide===slides.length-1} onClick={nextSlide} data-testid="button-restart">Next</button>
            <button disabled={currentSlide===0} onClick={prevSlide} data-testid="button-prev">Prev</button>
            <button disabled={currentSlide===0} onClick={resetSlide} data-testid="button-restart">Restart</button>
        </>
    )
}


export default App;
