import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCharacters } from "../../redux/states/films/filmsSlice";

import NavBar from "../../Characters/NavBar/NavBar";
import Pagination from "../Pagination/Pagination";

import PropagateLoader from "react-spinners/PropagateLoader";

const CharacterDetail = ({ filmId }) => {

  const dispatch = useDispatch();

  // estado de films
  const charState = useSelector((state) => state.films.characters);

  const status = useSelector((state) => state.films.status);

  // pagination functions
  const [pageCount, setPageCount] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const maxPages = charState.length / perPage;

  const itemSlice = charState.slice(
    (pageCount - 1) * perPage,
    (pageCount - 1) * perPage + perPage
  );


  useEffect(() => {
    dispatch(fetchCharacters(filmId));
  }, [dispatch, filmId]);

  return (
    <div className="bg-black h-full lg:h-screen">

      <NavBar />

      <div>

        {/* loader */}

        {status === "loading" && (
          <div className="flex justify-center items-center pt-10 pb-16">
            <PropagateLoader
              color="#fff"
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}

        {/* título */}

        <h2 className="text-white font-bold text-center text-3xl pt-10">
          Personajes en Episodio {filmId}
        </h2>

          {/* contenedor personajes */}

        <div className="flex flex-wrap justify-center mt-10">
          {status === "succeeded" &&
            itemSlice.map((character, i) => (
              <div className="border-2 border-softGrey w-64 h-56 p-5 ml-8 mb-5 rounded-sm shadow-2xl shadow-grey text-center">
                <h2 key={i} className="text-white text-2xl font-bold">
                  {character.name}
                </h2>
                <h4 key={i} className="text-white text-xl font-semibold pt-2">
                  Género
                </h4>
                <h4 key={i} className="text-white text-xl">
                  {character.gender}
                </h4>
                <h4 key={i} className="text-white text-xl font-semibold pt-2">
                  Color de ojos
                </h4>
                <h4 key={i} className="text-white text-xl">
                  {character.eye_color}
                </h4>
              </div>
            ))}
        </div>
      </div>

      <Pagination
        pageCount={pageCount}
        setPageCount={setPageCount}
        maxPages={maxPages}
      />
    </div>
  );
};

export default CharacterDetail;
