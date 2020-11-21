import React, {Component, useState} from "react";
import '../styles/App.css';

const Slides = (props) => {
    return (
        <>
            <h1 data-testid="title">{props.currentSlide.title}</h1>
            <p data-testid="text">{props.currentSlide.text}</p>
        </>
    )
}


export default App;
