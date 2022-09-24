import React, { useState } from "react";
import "./style.css";
import image1 from "./assets/img1.jpg";
import image2 from "./assets/img2.jpg";
import image3 from "./assets/img3.jpg";
import image4 from "./assets/img4.jpg";
import leftIcon from "./assets/left.svg";
import rightIcon from "./assets/right.svg";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3, image4];

  const decreseIndex = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(0);
    } else setCurrentIndex(currentIndex - 1);
  };

  const increseIndex = () => {
    if (currentIndex >= images.length - 1) {
      setCurrentIndex(images.length - 1);
    } else setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="w-[800px] relative">
          <div
            className="absolute inset-y-0 left-3 w-5 flex "
            onClick={decreseIndex}
          >
            <img src={leftIcon} alt="not found" className="cursor-pointer" />
          </div>
          <div>
            {images.map((img, index) => {
              if (currentIndex === index) {
                return (
                  <img
                    src={img}
                    alt="not found"
                    className="temporary-bounce animate-pulse"
                  />
                );
              } else return null;
            })}
          </div>
          <div
            className="absolute inset-y-0 right-3  w-5 flex"
            onClick={increseIndex}
          >
            <img src={rightIcon} alt="not found" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}
