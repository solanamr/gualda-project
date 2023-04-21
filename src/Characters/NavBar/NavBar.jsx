import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { filterGender, filterEyeColor} from "../../redux/states/films/filmsSlice";

import _uniq from "underscore/modules/uniq.js";

import logo from "../../assets/imgs/swLogo.svg";

const NavBar = () => {


  const dispatch = useDispatch();

  // characters copy state
  const copyCharacters = useSelector((state) => state.films.charactersCopy);

  const genders = copyCharacters.map((g) => g.gender);
  const filteredGender = _uniq(genders, false);


  const eyeColor = copyCharacters.map((e) => e.eye_color);
  const filteredEyeColors = _uniq(eyeColor, false);


  const handleGender = (e) => {
    e.preventDefault();
    dispatch(filterGender(e.target.value));
  };


  const handleEyeColors = (e) => {
    e.preventDefault();
    dispatch(filterEyeColor(e.target.value));
  };

  return (
    <div className="flex justify-between border-b-2 border-grey pb-4">

      {/* logo */}
      <Link to="/">
        <img src={logo} alt="" className="w-32 pt-4 lg:ml-5" />
      </Link>

      {/* botón para volver a home */}
      <Link to="/">
        <p className="text-white mt-5 bg-grey px-4 py-2 rounded font-semibold">Home</p>
      </Link>

      {/* gender filter */}
      <select 
      onChange={(e) => {handleGender(e)}}
      className="bg-black text-white border-2 border-blue rounded px-2 h-10 mt-5">
        <option value="">Géneros</option>
        {filteredGender.map((g) => {
          return <option value={g}>{g}</option>;
        })}
      </select>

      {/* eyes colors filter */}
      <select 
      onChange={(e) => {handleEyeColors(e)}}
      className="bg-black text-white border-2 border-red rounded px-2 h-10 mt-5 mr-1 lg:mr-8">
        <option value="">Color de ojos</option>
        {filteredEyeColors.map((e) => {
          return <option value={e}>{e}</option>;
        })}
      </select>
    </div>
  );
};

export default NavBar;
