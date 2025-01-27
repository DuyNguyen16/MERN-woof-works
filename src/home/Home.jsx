import { useContext } from "react";
import { mainContext } from "../App";

const Home = () => {
  const context = useContext(mainContext);
  return (
    <section id="home" className="md:pt-20">
      <div className={`w-full back h-[80vh] md:h-[90vh] bg-no-repeat bg-cover start:max-md:bg-picture md:bg-contain xl:bg-cover`}>
        <div className="w-full h-full flex md:pt-20 lg:pt-36 pt-28 flex-col lg:px-24 md:pb-48 lg:pb-32 md:px-16 pb-42">
          <div className="about md:w-[34rem] lg:w-[42rem] px-4 py-4 bg-light md:bg-lighter mx-3">
            <p className="md:text-[3rem] lg:text-[4rem] text-black font-bold text-[2.8rem] words">
              Woof Works
            </p>
            <p className="uppercase font-bold md:text-[1.5rem] lg:text-[2rem] text-white tracking-[0.03rem] text-[1.2rem] words">
              Learn More About Dogs
            </p>
            <div className="w-full py-4">
              <p className="text-white font-[600] md:text-[1.1rem] text-[1.2rem] words">
                Explore diverse dog breeds and gain insights into man's best
                friend with our platform. Discover breed specifics, including
                weights, and valuable canine information for a deeper
                understanding.
              </p>
            </div>
            <div className="uppercase flex pt-5">
              <a
                className="outline px-6 py-2 hover:bg-black hover:text-white outline-black duration-150 ease-in-out font-bold"
                href="#search"
                onClick={() => context.currentTab("search")}
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
