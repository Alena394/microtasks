import React from 'react';
import './App.css';
import {Cars} from "./components/cars/Cars";
import {UseStateTraining} from "./components/useStateTraining/UseStateTraining";
import {TrainingButton} from "./components/button/TrainingButton";
import {Button} from "./components/button/Button";

function App() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const Btn = (subs:string) =>{
        console.log(subs)
    }

    return (
        <>
            <Cars topCars={topCars}/>
            <UseStateTraining/>
            <TrainingButton/>
            <Button title={"Subscribe"}  callBack={()=>Btn("You are subscribe! Hello!!!")}/>
            <Button title={"Unsubscribe"} callBack={()=>Btn("Bye :(")}/>
        </>

    );
}

export default App;
