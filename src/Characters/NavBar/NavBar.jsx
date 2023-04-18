import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterGender, filterEyeColor } from "../../redux/states/films/filmsSlice";
import _uniq from 'underscore/modules/uniq.js'

const NavBar = () => {

    const dispatch = useDispatch();
    const copyCharacters = useSelector((state) => state.films.charactersCopy);
    

    const genders = copyCharacters.map(g => g.gender)
    const filteredGender = _uniq(genders, false)
    
    const eyeColor = copyCharacters.map(e => e.eye_color)
    const filteredEyeColors = _uniq(eyeColor, false)

    
    const handleGender = (e) =>{
        e.preventDefault()
        dispatch(filterGender(e.target.value))
        // setCurrentPage(1)
        // setOrden(`Ordenado ${e.target.value}`)
    }
    const handleEyeColors = (e) =>{
        e.preventDefault()
        dispatch(filterEyeColor(e.target.value))
        // setCurrentPage(1)
        // setOrden(`Ordenado ${e.target.value}`)
    }

    return (
        <div>
            {/* gender filter */}
            <select name="" id="" onChange={e => {handleGender(e)}}>
                {
                    filteredGender.map(g =>{
                        return(

                            <option value={g}>{g}</option>
                        )
                    })
                }
            </select>

            {/* eye color filter */}
            <select name="" id="" onChange={e => {handleEyeColors(e)}}>
                {
                    filteredEyeColors.map(e =>{
                        return(

                            <option value={e}>{e}</option>
                        )
                    })
                }
            </select>


        </div>
    );
}
 
export default NavBar;