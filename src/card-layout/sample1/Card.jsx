import React from "react";
import img1 from "./assets/img2.jpg";
import img2 from "./assets/img1.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import category from "./assets/icons/category.png";
import calender from "./assets/icons/calendar.png";
import locationIcon from "./assets/icons/locationIcon.png";

//to pass elipsis to text (must use <p> tag)
const myStyle = {
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
};

//for create avatar as name
const myFun = (myName) => {
  const data = myName.toUpperCase().split(" ");
  const avtarName = data.map((data) => data.charAt(0));
  return avtarName;
};

//JSON to jenerate dummy database
const apiData = [
  {
    category: "Lorem, ipsum dolor.",
    title:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Accusamus, mollitia dolorem cupiditat necessitatibus ad quaerepudiandae cumque quos numquam a, natus quod expedita, dictaveniam porro minus delectus eos nemo?",
    date: new Date().toDateString(),
    location: "Iscon, Ahmedabad",
    subCategory: "Ocean",
    price: "Free",
    image: img1,
    name: "infynno solution",
  },
  {
    category: "Lorem, ipsum dolor.",
    title:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Accusamus, mollitia dolorem cupiditat necessitatibus ad quaerepudiandae cumque quos numquam a, natus quod expedita, dictaveniam porro minus delectus eos nemo?",
    date: new Date().toDateString(),
    location: "Gota, Ahmedabad",
    subCategory: "Ocean",
    price: "Free",
    image: img2,
    name: "React js",
  },
  {
    category: "Lorem, ipsum dolor.",
    title:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Accusamus, mollitia dolorem cupiditat necessitatibus ad quaerepudiandae cumque quos numquam a, natus quod expedita, dictaveniam porro minus delectus eos nemo?",
    date: new Date().toDateString(),
    location: "Sola, Ahmedabad",
    subCategory: "Ocean",
    price: "$52",
    image: img3,
    name: "Laravel development",
  },
  {
    category: "Lorem, ipsum dolor.",
    title: " Lorem ipsum dol",
    date: new Date().toDateString(),
    location: "Sarkhej, Ahmedabad",
    subCategory: "Ocean",
    price: "Free",
    image: img4,
    name: "Infynno",
  },
  {
    category: "Lorem, ipsum dolor.",
    title: " Lorem ipsum dol",
    date: new Date().toDateString(),
    location: "Godrej garden, Ahmedabad",
    subCategory: "Ocean",
    price: "$150",
    image: img5,
    name: "Ganesh glory",
  },
];

const Cards = () => {
  return (
    <div className="bg-black bg-opacity-20">
      <div className="container mx-auto">
        {/* card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 text-left mx-5 xl:mx-0">
          {Array(4).fill(
            apiData.map((data, index) => (
              <div
                className="border-[1px] rounded-lg hover:drop-shadow-md overflow-hidden relative bg-white"
                key={index}
              >
                {/* image and avatar block */}
                <div className="cursor-pointer h-48 overflow-hidden">
                  <img
                    src={data.image}
                    alt="not found"
                    className="w-full hover:scale-125 delay-200 duration-300 ease-in-out "
                  />
                  <span className="absolute top-4 right-4 w-8 h-8 items-center bg-gray-100 flex justify-center rounded-full">
                    {data.name && myFun(data.name)}
                  </span>
                </div>
                {/* card fields section  */}
                <div className="p-4 space-y-2 relative h-[240px]">
                  <div>
                    <p className="text-sm font-bold text-gray-400 truncate">
                      {data.category}
                    </p>
                  </div>
                  <div>
                    <span
                      style={myStyle}
                      className="text-xl font-bold text-gray-600 overflow-hidden"
                    >
                      {data.title}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={category} alt="not found" className="w-4 h-4" />
                    <span className="text-sm font-normal">
                      {data.subCategory}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={calender} alt="not found" className="w-4 h-4" />
                    <span className="text-sm font-normal">{data.date}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      src={locationIcon}
                      alt="not found"
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-normal">{data.location}</span>
                  </div>
                  {/* fix bottom section */}
                  <div className="bottom-2 absolute inset-x-0">
                    <div className="border-t-[1px] mt-2 mb-2"></div>
                    <span className="text-xl text-gray-600 pl-4">
                      {data.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Cards;
