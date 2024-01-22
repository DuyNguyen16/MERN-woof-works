import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Cards = ({ id, url, name, breed, bredFor }) => {
  return (
    <section className="shadow-md md:w-[250px] w-[300px] md:min-h-[320px] bg-[#fafafa] mx-3 my-3 flex px-2 py-3 justify-center rounded ">
      <div className="flex flex-col justify-between">
        <img
          src={url}
          className="md:w-[230px] md:h-[200px] object-cover rounded"
        ></img>
        <div className="px-1 pb-2">
          <p className="font-bold text-lg pt-1 pb-1">{name}</p>
          <hr className="pb-1"></hr>
          <p className="font-bold">Breed Group:</p>
          <p className="pb-1"> {breed}</p>
          <p className="font-bold">Bred For:</p>
          {!bredFor ? <p>Because why not?</p> : <p>{bredFor}</p>}
        </div>
        <Link className="w-full" to={`/${name}`} key={id}>
          <button className="bg-[#7ab730] rounded py-2 hover:bg-[#619b26] w-full ease-in-out duration-200 text-white text-[1rem] font-bold">
            Read More<i className="uil uil-arrow-right"></i>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Cards;
