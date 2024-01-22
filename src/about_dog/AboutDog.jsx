import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_KEY } from "../../backend/api";

const AboutDog = () => {
  const [dog, setDog] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch(
          `https://api.thedogapi.com/v1/breeds/search?q=${name}`
        );
        const data = await res.json();
        setDog(data);
        console.log(data);
      } catch (error) {
        console.log(eroor);
      }
    };

    fetchDogData();
  }, [name]);
  return (
    <section className="min-h-dvh flex justify-center w-full items-center px-8 py-8">
      {dog.map((item) => (
        <div
          className="flex md:flex-row flex-col gap-8 shadow-lg md:pr-4 rounded-md dog"
          key={item.id}
        >
          <div className="w-full md:w-[25rem]">
            <img
              className="w-full h-full object-cover md:rounded-picture rounded-picture2"
              src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
            ></img>
          </div>
          <div className="lg:w-[30rem] pb-4 md:py-4 md:w-[20rem] px-6 md:px-0 flex flex-col justify-between">
            <div>
              <h1 className="font-bold md:text-[1.5rem] lg:text-[2rem] pb-2">
                {item.name}
              </h1>
              <hr className="pb-4"></hr>
              {item.description && (
                <p className="pb-4 lg:text-[1rem] md:text-[0.9rem]">
                  {item.description}
                </p>
              )}
              {item.description && <hr className="pb-4"></hr>}
              <ul className="lg:text-[1rem] md:text-[0.9rem]  ">
                {item.bred_for ? (
                  <li className="flex">
                    <p className="font-bold">Bred For:&nbsp;</p> {item.bred_for}
                  </li>
                ) : (
                  <li className="flex">
                    <p className="font-bold">Bred For:&nbsp;</p>Cuteness
                  </li>
                )}
                <li className="flex">
                  <p className="font-bold">Bred Group:&nbsp;</p>{" "}
                  {item.breed_group}
                </li>
                <li className="flex">
                  <p className="font-bold">Height:&nbsp;</p>
                  {item.height.metric} cms
                </li>
                <li className="flex">
                  <p className="font-bold">Weight:&nbsp;</p>
                  {item.weight.metric} kgs
                </li>
                <li className="flex">
                  <p className="font-bold">Life Span:&nbsp;</p> {item.life_span}
                </li>
                <li className="flex">
                  <p className="font-bold">Temperament:&nbsp;</p>
                  {item.temperament}
                </li>
              </ul>
            </div>
            <div className="w-full flex justify-end pt-4">
              <Link to="/">
                <button className="rounded-md bg-[#7ab730] hover:bg-[#619b26] px-8 text-white py-2 font-bold text-[1.1rem]">
                  <i className="uil uil-arrow-left pr-1 text-[1.1rem]"></i>Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutDog;
