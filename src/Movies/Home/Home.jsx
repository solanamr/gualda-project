import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchFilms,
  fetchCharacters,
} from "../../redux/states/films/filmsSlice";
import Prueba from "../../Characters/CharactersDetail/CharactersDetail";
import NavBar from "../../Characters/NavBar/NavBar";
import wp1 from "../../assets/imgs/wp1.jpg";
import wp2 from "../../assets/imgs/wp2.jpg";
import wp3 from "../../assets/imgs/wp3.jpg";
import wp4 from "../../assets/imgs/wp4.jpg";
import wp5 from "../../assets/imgs/wp5.jpg";

const Home = () => {
  const dispatch = useDispatch();
  const apiJSON = useSelector((state) => state.films.films);
  const status = useSelector((state) => state.films.status);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div >
      <img src={wp4} alt="" className="absolute opacity-90" />

      <NavBar />
      {status === "loading" && <div>Loading...</div>}

      <div className="flex flex-wrap justify-center">
      {status === "succeeded" &&

        apiJSON.map((f, i) => {
            return (
                <div key={i} className="relative border border-grey w-96 h-80 p-5 ml-5 mb-5">
              <h1 className="text-white text-center font-bold text-3xl pt-10">{f.title}</h1>
              <h4 className="text-white text-center font-semibold text-2xl pt-3">Episode {f.episode_id}</h4>
              <h4 className="text-white text-center font-semibold text-2xl pt-3">Dir {f.director}</h4>
              <Link to="/">
                <h4 className="text-red text-center font-semibold text-2xl pt-3 underline decoration-blue drop-shadow-lg">Personajes</h4>
              </Link>
            </div>
          );
        })
    }
    </div>

      {/* <Prueba filmId={2}/> */}
    </div>
  );
};

export default Home;
