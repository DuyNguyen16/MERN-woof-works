import React, { useContext, useState, useEffect } from "react";
import Cards from "../components/Cards";
import { mainContext } from "../App";

const SearchSection = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState();
  const [dogs, setDogs] = useState();

  const context = useContext(mainContext);

  useEffect(() => {
    const getRandomDog = async () => {
      try {
        const res = await fetch(
          `https://api.thedogapi.com/v1/breeds?limit=10&has_breeds=true`
        );
        const data = await res.json();
        setDogs(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getRandomDog();
  }, []);

  const searchDog = async (e) => {
    try {
      const res = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${e}`
      );
      const data = await res.json();
      setResult(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setInput("");
    setResult(undefined);
  };

  return (
    <section
      className="min-h-dvh pt-16 md:pt-24 flex justify-center"
      id="search"
    >
      <div className="flex flex-col items-center gap-8">
        <div className="md:w-[32rem] flex justify-center flex-col items-center w-[20rem]">
          <h1 className=" text-[2.3rem] md:text-[3rem] font-bold pb-8">
            Search For Dog
          </h1>
          <form
            className="w-full flex-row flex gap-2"
            onSubmit={(e) => handleOnSubmit(e)}
          >
            <input
              placeholder="Search For a Dog/Breed"
              className="w-full outline rounded md:px-3 md:py-1 px-3 py-3"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                searchDog(e.target.value);
              }}
            ></input>
            <button className={result === undefined ? " bg-[#aae660] text-white px-6 rounded py-2 font-[600] disabled:" :"hover:bg-[#619b26] bg-[#7ab730] text-white px-6 rounded py-2 font-[600]"}>
              Clear
            </button>
          </form>
        </div>
        {result && <p>Found {result.length} results</p>}
        <div>
          <div className="flex justify-center">
            {!result ? (
              <div className="flex justify-center">
                {!dogs ? (
                  <h1>Loading</h1>
                ) : (
                  <div className="flex flex-wrap justify-center">
                    {dogs.map((dog) => (
                      <Cards
                        id={dog.id}
                        key={dog.id}
                        url={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                        name={dog.name}
                        breed={dog.breed_group}
                        bredFor={dog.bred_for}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-wrap justify-center">
                {result.map((dog) => (
                  <Cards
                    id={dog.id}
                    key={dog.id}
                    url={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                    name={dog.name}
                    breed={dog.breed_group}
                    bredFor={dog.bred_for}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
