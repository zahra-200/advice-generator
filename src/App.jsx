import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import patternMobile from "./assets/images/pattern-divider-mobile.svg";
import patternDesktop from "./assets/images/pattern-divider-desktop.svg";
import dice from "./assets/images/icon-dice.svg";
function App() {
  const [getAdvice, setGetAdvice] = useState({
    advice: "Click on the dice",
    id: "",
  });

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((result) => {
        setGetAdvice(result.data.slip); // `slip` contains the advice object
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="backdrop-blur-md w-72 h-72 min-h-max shadow-2xl rounded-2xl py-8 px-[26px] text-center flex flex-col gap-5 relative md:w-96 md:backdrop-blur-none md:bg-[#261e12] md:text-white md:px-7">
      {/* Advice ID */}
      <p className=" text-sm tracking-widest">
        ADVICE{" "}
        {getAdvice.id ? (
          `# ${getAdvice.id}`
        ) : (
          <FontAwesomeIcon className="text-lg" icon={faHeart} />
        )}
      </p>
      {/* Advice Text */}
      <div className="h-[50%] min-h-max leading-7 text-xl flex gap-2 items-center justify-center">
        <p>
          <FontAwesomeIcon className="text-xs" icon={faQuoteLeft} />{" "}
          {getAdvice.advice ? getAdvice.advice : "Click on the dice"}{" "}
          <FontAwesomeIcon className="text-xs" icon={faQuoteRight} />
        </p>
      </div>
      {/* Divider */}
      <div className="m-auto">
        <picture>
          <source media="(min-width:768)" srcSet={patternDesktop}></source>
          <img src={patternMobile} alt="" />
        </picture>
      </div>
      {/* Dice Button */}
      <div
        className="cursor-pointer bg-[#e5c5ac] rounded-full w-14 h-14 transition-all duration-300 hover:shadow-[#e5c5ac] hover:shadow-[0px_0px_16px,0px_0px_32px] -bottom-6 right-[114px] flex justify-center items-center absolute md:right-40 md:-bottom-7 md:bg-[#b59a6b] "
        onClick={fetchAdvice}
      >
        <img src={dice} alt="Click here" />
      </div>
    </div>
  );
}

export default App;
