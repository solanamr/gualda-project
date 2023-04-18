import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../redux/states/films/filmsSlice";

const CharacterDetail = ({filmId}) => {
    
    const dispatch = useDispatch()
    const charfilm = useSelector((state) => state.films.characters);
    // console.log(charfilm, 'selector')
    const status = useSelector((state) => state.films.status);
    console.log(status)
    


      useEffect(() =>{
        dispatch(fetchCharacters(filmId))
      }, [dispatch, filmId])



    return (
        <div>
      <h2 style={{fontWeight: "800"}}>Characters in Film {filmId}</h2>
      <ul>
      {status === 'loading' && <div>Loading...</div>}
        {status === 'succeeded' && 
        charfilm.map((character, i) => (
          <div>
            <li key={i}>{character.name}</li>
            <li key={i}>{character.gender}</li>
            <li key={i}>{character.eye_color}</li>
          </div>
          
        ))}
      </ul>
    </div>
    );
}
 
export default CharacterDetail;