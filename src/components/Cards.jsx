import React, { useContext } from "react";

const Cards = ({ id, url, name, breed, bredFor }) => {
  return (
    <section className="shadow-md w-[250px] min-h-[320px] bg-[#fafafa] mx-3 my-3 flex px-2 py-3 justify-center rounded ">
      <div className="flex flex-col">
        <img
          src={url}
          className="w-[230px] h-[200px] object-cover rounded cursor-pointer"
        ></img>
        <div className="px-1">
          <p className="font-bold text-lg pt-1 pb-1">{name}</p>
          <hr className="pb-1"></hr>
          <p className="font-bold">Breed Group:</p>
          <p className="pb-1"> {breed}</p>
          <p className="font-bold">Bred For:</p>
          {!bredFor ? <p>Because why not?</p> : <p>{bredFor}</p>}
        </div>
      </div>
    </section>
  );
};

export default Cards;
