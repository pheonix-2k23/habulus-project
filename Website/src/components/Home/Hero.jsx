import React, { useEffect, useState } from "react";
import Home1 from "../../assets/image1.jpg";
import Home2 from "../../assets/image2.png";
import Home3 from "../../assets/image3.png";
import Home4 from "../../assets/image4.png";
import Home5 from "../../assets/image5.png";
import Home6 from "../../assets/image6.png";
import Home7 from "../../assets/image7.png";
import IntroImage from "../../assets/Front photo.jpg";
import { AiFillCloseSquare, AiOutlineClose } from "react-icons/ai";

const Hero = ({ refs }) => {
  const [count, setCount] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [data, setData] = useState([
    {
      image: Home1,
      title: "Habulus Sunrise",
      description: "Constructed by Habulus groups",
    },
    {
      image: Home2,
      title: "Habulus Enclave",
      description: "Constructed by Habulus groups",
    },
    {
      image: Home3,
      title: "Habulus Classic",
      description: "Constructed by Habulus groups",
    },
    {
      image: Home4,
      title: "Habulus Harmony",
      description: "Constructed by Habulus groups",
    },
    {
      image: Home5,
      title: "Habulus Samruddhi",
      description: "Constructed by Habulus groups",
    },
    {
      image: Home6,
      title: "Habulus Symphony",
      description: "Constructed by Habulus groups",
    },
    {
      image: Home7,
      title: "Habulus Sunrise",
      description: "Constructed by Habulus groups",
    },
  ]);

  const handleIndicatorClick = (index) => {
    setCount(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % data.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [data.length]);

  const handleItemClick = (itemName, ref) => {
    const isMobileOrTablet = window.innerWidth <= 768;
    if (ref && isMobileOrTablet) {
      window.open(`/#${itemName}`, "_self");
      ref.current?.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    } else {
      if (ref) {
        ref.current?.scrollIntoView({ behavior: "smooth", inline: "nearest" });
      }
    }
  };

  const handleCloseIntro = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <div className="relative h-[100vh] w-full">
          <img src={IntroImage} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-black bg-opacity-50 text-white py-11 px-8 rounded-lg text-center mx-auto w-full md:w-[70%] animate-slide-up">
              <p className="text-lg">
                Welcome to Habulus Groups, where precision meets passion in the
                realm of construction excellence. Transforming dreams into
                concrete reality, we build with innovation, integrity, and a
                commitment to quality that stands the test of time.
              </p>
            </div>
            <button
              className="bg-white text-black p-2 rounded-full absolute top-20 md:top-24 right-6 md:right-10"
              onClick={handleCloseIntro}
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <img
            src={data[count].image}
            className="w-full h-[100vh] object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center mt-14">
            <div className="bg-black bg-opacity-70 md:bg-opacity-50 text-white py-11 md:rounded-lg text-center mx-auto w-full md:w-[60%]">
              <h2 className="text-5xl font-extrabold mb-4 uppercase">
                {data[count].title}
              </h2>
              <p className="text-lg">{data[count].description}</p>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {data.map((_, index) => (
              <div
                key={index}
                className={`w-6 h-1 bg-white cursor-pointer rounded-sm ${
                  index === count ? "bg-opacity-100" : "bg-opacity-50"
                }`}
                onClick={() => handleIndicatorClick(index)}
              ></div>
            ))}
          </div>
        </div>
      )}
      <section className="bg-black w-full justify-center items-center flex-col py-16 hidden md:flex">
        <p className="text-white text-center font-medium text-2xl md:text-3xl">
          Welcome to our <br /> Construction Field website!
        </p>
        <p className="text-white text-center mt-4 mb-6 text-sm">
          Learn more about our company and our expertise.
        </p>
        <div className="gap-x-4 flex">
          <button
            className="border border-white text-white px-6 py-2 rounded-md text-sm"
            onClick={() => handleItemClick("contact", refs.contactRef)}
          >
            Contact Us
          </button>
          <button
            className="bg-white border border-white text-black px-6 py-2 rounded-md text-sm"
            onClick={() => handleItemClick("projects", refs.aboutRef)}
          >
            Learn More
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
