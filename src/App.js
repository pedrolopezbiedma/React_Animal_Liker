import { useState } from "react";

import AnimalShow from "./components/AnimalShow";

const animalPool = ['dog', 'cat', 'bird', 'cow', 'gator', 'horse'];

const getRandomAnimal = () => {
    return animalPool[parseInt(Math.random() * animalPool.length)];
}

const App = () => {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals,getRandomAnimal() ])
    }

    return (
        <div>
            <h1>This is the App</h1>
            <button onClick={handleClick}>Create an Animal</button>
            {
                animals.map((animal, index) => 
                    <AnimalShow key={index} animal={ animal } />
                )
            }
        </div>
    )
}

export default App;