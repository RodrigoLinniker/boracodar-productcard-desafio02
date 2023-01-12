import sofa from "../../assets/sofa.png";
import sofagif from "../../assets/sofagif.gif";
import rounded from "../../assets/rounded.svg";
import close from "../../assets/close.svg";
import { useState } from "react";

export function Sofa() {
  const [viewGif, setViewGif] = useState(false);

  const handleChangeViewGif = () => {
    setViewGif(!viewGif);
  };

  return (
    <div className="relative">
      {!viewGif ? (
        <>
          <img src={sofa} alt="sofa" />
          <button
            className="absolute right-[50px] top-2"
            onClick={handleChangeViewGif}
          >
            <img src={rounded} alt="360" />
          </button>
        </>
      ) : (
        <>
          <img className="w-[449px] h-[253px]" src={sofagif} alt="sofagif" />
          <button
            className="absolute right-[50px] top-2"
            onClick={handleChangeViewGif}
          >
            <img src={close} alt="close" />
          </button>
        </>
      )}
    </div>
  );
}
