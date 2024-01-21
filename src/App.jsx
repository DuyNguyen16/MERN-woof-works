import { createContext, useEffect, useState } from "react";
import Cards from "./components/Cards";
import { API_KEY } from "../backend/api.jsx";
import axios from "axios";
import ImageSection from "./pages/ImageSection.jsx";
import Header from "./components/Header.jsx";
import Home from "./home/Home.jsx";

export const mainContext = createContext({});

function App() {
  const [dogs, setDogs] = useState();

  const api = `https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=true&api_key=${API_KEY}`;

  const context = {
    dogs,
    setDogs,
  };

  useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        setDogs(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <mainContext.Provider value={context}>
      <Header />
      <main className="h-screen md:mt-20 mt-[4.5rem]">
        <Home />
      </main>
    </mainContext.Provider>
  );
}

export default App;
