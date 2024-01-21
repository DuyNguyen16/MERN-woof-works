import React from "react";

const Home = () => {
  return (
    <div className="w-full bg-[url(src/assets/hero.jpg)] h-[80vh] md:h-[90vh] bg-no-repeat bg-cover start:max-md:bg-picture md:bg-contain xl:bg-cover" id="home">
      <div className="w-full h-full flex justify-center flex-col lg:px-24 md:pb-48 lg:pb-32 md:px-16 pb-42">
        <div className="about md:w-[34rem] lg:w-[42rem] px-4 py-4 bg-light md:bg-lighter mx-3">
          <p className="md:text-[3rem] lg:text-[4rem] text-black font-bold text-[2.8rem]">Woof Works</p>
          <p className="uppercase font-bold md:text-[1.5rem] lg:text-[2rem] text-white tracking-[0.03rem] text-[1.2rem] words">
            Learn More About Dogs
          </p>
          <div className="w-full py-4">
            <p className="text-white font-[600] md:text-[1.1rem] text-[1.2rem] words">
              Discover diverse dog breeds, health insights, and care tips on our
              platform. Enhance your understanding of man's best friend with
              breed specifics and valuable canine information.
            </p>
          </div>
          <div className="uppercase flex pt-5">
            <button className="outline px-6 py-2 hover:bg-black hover:text-white outline-black duration-150 ease-in-out font-bold">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
