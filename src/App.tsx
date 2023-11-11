import React from 'react';
import './App.css';
import {Cars} from "./components/cars/Cars";
import {UseStateTraining} from "./components/useStateTraining/UseStateTraining";

function App() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <>
            <Cars topCars={topCars}/>
            <UseStateTraining/>
        </>

    );
}

export default App;
