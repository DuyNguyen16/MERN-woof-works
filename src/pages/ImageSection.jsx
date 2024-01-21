import React, { useContext } from "react";
import { mainContext } from "../App";
import Cards from "../components/Cards";

const ImageSection = () => {
  const context = useContext(mainContext)

  return (
    <div className="flex justify-center">
      {!context.dogs ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex flex-wrap justify-center">
          {context.dogs.map((dog) => (
            <Cards
              id={dog.id}
              url={dog.url}
              key={dog.id}
              name={dog.breeds[0].name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSection;
