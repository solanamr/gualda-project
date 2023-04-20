import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchFilms } from "../../redux/states/films/filmsSlice";

// images
import wp4 from "../../assets/imgs/wp4.jpg";
import logo from "../../assets/imgs/swLogo.svg";

// loader
import PropagateLoader from "react-spinners/PropagateLoader";

const Home = () => {

  const dispatch = useDispatch();

  const filmsState = useSelector((state) => state.films.films);

  const status = useSelector((state) => state.films.status);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <div className="bg-kindaBlack h-full lg:bg-none lg:h-0">

      {/* background image */}
      <img src={wp4} alt="" className="invisible lg:visible absolute opacity-90" />

      {/* logo on navbar */}
      <Link to="/">
        <img src={logo} alt="" className="relative w-32 pt-4 pl-5" />
      </Link>

      {/* loader */}
      {status === "loading" && <div className="flex justify-center items-center pt-[20%] ">
            <PropagateLoader
              color="#fff"
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>}

          {/* contenedor films */}
      <div className="flex flex-wrap justify-center pt-7">
        {status === "succeeded" &&
          filmsState.map((f, i) => {
            return (
              <div
                key={i}
                className="relative border-2 border-softGrey w-96 h-80 p-5 lg:ml-5 mb-5 rounded-sm">
                <h1 className="text-white text-center font-bold text-4xl pt-10">
                  {f.title}
                </h1>
                <h4 className="text-white text-center font-semibold text-2xl pt-3">
                  Episode {f.episode_id}
                </h4>
                <h4 className="text-white text-center font-semibold text-2xl pt-3">
                  Director: {f.director}
                </h4>
                <Link to={`/detail/${f.episode_id}`}>
                  <h4 className="text-red text-center font-semibold text-2xl pt-3 underline decoration-blue">
                    Personajes
                  </h4>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
