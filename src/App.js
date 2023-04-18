import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Movies/Home/Home";
import Prueba from "./Characters/CharactersDetail/CharactersDetail";

function App() {
  return (

    // <div>
      
    //   <Home />
    //   {/* {/* <Prueba filmId={1}/> */}
    //   <Prueba filmId={2}/> 
    //   <Prueba filmId={3}/>

    // </div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/" element={<Prueba filmId={2}/>} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
