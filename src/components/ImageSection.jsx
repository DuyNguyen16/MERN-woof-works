import React, { useContext } from "react";
import { mainContext } from "../App";
import Cards from "./Cards";

const ImageSection = () => {
  const context = useContext(mainContext);

  return (
    <div className="flex justify-center">
      {!context.dogs ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex flex-wrap justify-center">
          {context.dogs.map(
            (dog) =>
              (dog.breed_group === context.type ? (
                <Cards
                  id={dog.id}
                  url={dog.image.url}
                  key={dog.id}
                  name={dog.name}
                  breed={dog.breed_group}
                  bredFor={dog.bred_for}
                />
              ) : (
                null
              ))
          )}
        </div>
      )}
    </div>
  );
};

export default ImageSection;
