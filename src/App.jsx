import { createContext, useEffect, useState } from "react";
import { API_KEY } from "../backend/api.jsx";
import axios from "axios";
import Header from "./header/Header.jsx";
import Home from "./home/Home.jsx";
import BreedSection from "./breeds/BreedSection.jsx";
import Footer from "./footer/Footer.jsx";
import SearchSection from "./search/SearchSection.jsx";
import Contact from "./contact/Contact.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          if (!breed.includes(dog.breed_group)) {
            breed.push(dog.breed_group);
          }   
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <mainContext.Provider value={context}>
<ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  closeOnClick
  pauseOnHover
  draggable
  theme="light"
/>

      <Header />
      <main className="">
        <Home />
        <SearchSection />
        <BreedSection />
        <Contact />
        <Footer />
      </main>
    </mainContext.Provider>
  );
}

export default App;
