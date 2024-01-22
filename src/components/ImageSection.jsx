import React, { useContext } from "react";
import { mainContext } from "../App";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const ImageSection = () => {
  const context = useContext(mainContext);

  return (
    <div className="flex justify-center">
      {!context.dogs ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex flex-wrap justify-center">
          {context.dogs.map((dog) =>
            dog.breed_group === context.type ? (
              <Cards
                id={dog.id}
                key={dog.id}
                url={dog.image.url}
                name={dog.name}
                breed={dog.breed_group}
                bredFor={dog.bred_for}
              />
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default ImageSection;
