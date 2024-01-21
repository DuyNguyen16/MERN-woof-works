import React, { useContext } from "react";
import { mainContext } from "../App";
import Cards from "../components/Cards";
import ImageSection from "../components/ImageSection";

const BreedSection = () => {
  const context = useContext(mainContext);

  const groupList = [
    {
      name: "Mixed",
      id: 1,
    },
    {
      name: "Working",
      id: 2,
    },
    {
      name: "Hound",
      id: 3,
    },
    {
      name: "Sporting",
      id: 4,
    },
    {
      name: "Non-Sporting",
      id: 5,
    },
    {
      name: "Toy",
      id: 6,
    },
    {
      name: "Herding",
      id: 7,
    },
    {
      name: "Terrier",
      id: 8,
    },
  ];

  return (
    <div className="min-h-dvh pt-24" id="breeds">
      <div className="flex justify-center text-[2rem] pb-10 pt-8">
        <h1 className="text-[3rem]">Dog Breeds</h1>
      </div>
      <div></div>
      {!context.breed ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex flex-col justify-center items-center px-5">
          <div className="mb-8 shadow-md px-8 py-2 rounded-lg">
            <ul className="flex flex-wrap flex-row gap-5 justify-center">
              {groupList.map(({ name, id }) => (
                <li
                  className={name === context.type ? `cursor-pointer text-main`: `cursor-pointer`}
                  onClick={() => context.setType(name)}
                  key={id}
                >
                  <a className="font-bold">{name}</a>
                </li>
              ))}
            </ul>
          </div>

          <ImageSection />
        </div>
      )}
    </div>
  );
};

export default BreedSection;
