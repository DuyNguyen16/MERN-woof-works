import { createContext, useEffect, useState } from "react";
import Cards from "./components/Cards";
import { API_KEY } from "../backend/api.jsx";
import axios from "axios";
import ImageSection from "./components/ImageSection.jsx";
import Header from "./components/Header.jsx";
import Home from "./home/Home.jsx";
import BreedSection from "./breeds/BreedSection.jsx";
import Footer from "./footer/Footer.jsx";

export const mainContext = createContext({});

function App() {
  const [dogs, setDogs] = useState();
  const breed = [];
  const [type, setType] = useState("Mixed");
  const [tab, currentTab] = useState("home");

  const api = `https://api.thedogapi.com/v1/breeds?limit=300&has_breeds=true&api_key=${API_KEY}`;

  const context = {
    dogs,
    setDogs,
    breed,
    type,
    setType,
    tab,
    currentTab,
  };

  useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        setDogs(response.data);
        response.data.map((dog) => {
          if (breed.includes(dog.breed_group)) {
          } else {
            breed.push(dog.breed_group);
          }
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <mainContext.Provider value={context}>
      <Header />
      <main className="h-screen md:mt-20 mt-[4.5rem]">
        <Home />
        <BreedSection />
        <Footer />
      </main>
    </mainContext.Provider>
  );
}

export default App;
