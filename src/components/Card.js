import React, { useState } from 'react'
import axios from 'axios';
import './card.css';

const Card = (props) => {
  const[id, setId] = useState("");
  const[window, setWindow] = useState(false);
  const[joke, showJoke] = useState("");

  const handleClick = (id) => {
    setWindow(true);
    axios.get("https://api.chucknorris.io/jokes/random?category={id}")
        .then((response) => {
            console.log(response);
        })
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
    </div>
  )
}

export default Card