import { useDispatch, useSelector } from "react-redux";

import {
  filterGender,
  filterEyeColor,
} from "../../redux/states/films/filmsSlice";

import _uniq from "underscore/modules/uniq.js";

import logo from "../../assets/imgs/swLogo.svg";
import { Link } from "react-router-dom";



const NavBar = () => {
  const dispatch = useDispatch();
  const copyCharacters = useSelector((state) => state.films.charactersCopy);

  const genders = copyCharacters.map((g) => g.gender);
  const filteredGender = _uniq(genders, false);

  const eyeColor = copyCharacters.map((e) => e.eye_color);
  const filteredEyeColors = _uniq(eyeColor, false);

  const handleGender = (e) => {
    e.preventDefault();
    dispatch(filterGender(e.target.value));
    // setCurrentPage(1)
    // setOrden(`Ordenado ${e.target.value}`)
  };
  const handleEyeColors = (e) => {
    e.preventDefault();
    dispatch(filterEyeColor(e.target.value));
    // setCurrentPage(1)
    // setOrden(`Ordenado ${e.target.value}`)
  };

  return (
    <div className="flex justify-between border-b-2 border-grey pb-4">
      <Link to="/">
        <img src={logo} alt="" className="w-32 pt-4 pl-5" />
      </Link>

      {/* gender filter */}
      <select 
      onChange={(e) => {handleGender(e)}}
      className="bg-black text-white border-2 border-blue rounded px-2 h-10 mt-5">
        {filteredGender.map((g) => {
          return <option value={g}>{g}</option>;
        })}
      </select>

      {/* eye color filter */}
      <select 
      onChange={(e) => {handleEyeColors(e)}}
      className="bg-black text-white border-2 border-red rounded w-32 px-2 h-10 mt-5 mr-8">
        {filteredEyeColors.map((e) => {
          return <option value={e}>{e}</option>;
        })}
      </select>
    </div>
  );
};

export default NavBar;
