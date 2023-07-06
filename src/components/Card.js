import React, { useState } from 'react'
import axios from 'axios';
import './card.css';

const Card = (props) => {
//   const[id, setId] = useState("");
  const[selectedCategorie, setSelectedCategorie] = useState("");
  const[window, setWindow] = useState(false);
  const[joke, showJoke] = useState("");

  const handleClick = (categorie) => {
    setWindow(true);
    setSelectedCategorie(categorie);
    axios.get(`https://api.chucknorris.io/jokes/random?category=${categorie}`)
        .then((response) => {
            console.log(response);
            showJoke(response.data.value);
        })
    
  }

  const close = () =>{
    setWindow(false);
  }
  return (
    <div className="cards" >
        {
            props.categories.map((categorie, id) => {
                return(<div className='card' key={id} onClick={() => handleClick(categorie)}>
                    <h1 className="categorie_type">{categorie}</h1>
                    <p className="categorie_qty">unlimited jokes on {categorie}</p>
                </div>)
            })
        }
        {
            window && (
                <div className="displayJoke">
                    <button onClick={close}>X</button>
                    <h2>{selectedCategorie}</h2>
                    <p>{joke}</p>
                    <button onClick={() => handleClick(selectedCategorie)}>Next Joke</button>
                </div>
            )
        }
    </div>
  )
}

export default Card