import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";

const Home = lazy(() => import("./Movies/Home/Home"));
const Details = lazy(() =>import("./Characters/CharactersDetail/CharactersDetail"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="bg-black h-screen flex justify-center items-center">
          <PropagateLoader
            color="#fff"
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      }
    >
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/detail/1" element={<Details filmId={1} />} />
          <Route path="/detail/2" element={<Details filmId={2} />} />
          <Route path="/detail/3" element={<Details filmId={3} />} />
          <Route path="/detail/4" element={<Details filmId={4} />} />
          <Route path="/detail/5" element={<Details filmId={5} />} />
          <Route path="/detail/6" element={<Details filmId={6} />} />

          {/* <Route path="/detail/:id" element={<Details filmId={1}/>} /> */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
