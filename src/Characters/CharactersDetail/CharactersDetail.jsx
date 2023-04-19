import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../redux/states/films/filmsSlice";

import NavBar from "../../Characters/NavBar/NavBar";

import PropagateLoader from "react-spinners/PropagateLoader";

const CharacterDetail = ({ filmId }) => {
  const dispatch = useDispatch();

  const charfilm = useSelector((state) => state.films.characters);

  const status = useSelector((state) => state.films.status);

  const [numOfElements, setNumOfElements] = useState(10);

  const slice = charfilm.slice(0, numOfElements);
  const loadMore = () => {
    setNumOfElements(numOfElements + numOfElements);
  };

  useEffect(() => {
    dispatch(fetchCharacters(filmId));
  }, [dispatch, filmId]);

  return (
    <div className="bg-black h-full">
      <NavBar />

      <div>
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
        <h2 className="text-white font-bold text-center text-3xl pt-10">
          Characters in Episode {filmId}
        </h2>

        <div className="flex flex-wrap justify-center mt-10">
          {status === "succeeded" &&
            slice.map((character, i) => (
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

      <button
        onClick={() => loadMore()}
        className="bg-red hover:bg-blue transition duration-300
       text-white px-20 py-2 mt-10 mb-5 rounded ml-[28%] lg:ml-[43%]"
      >
        Load more
      </button>
    </div>
  );
};

export default CharacterDetail;
