import React from "react";
import "./style.css";

const Animation = () => {
  return (
    <>
      <div className="bg-black bg-opacity-20 h-auto lg:h-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 text-left mx-5 xl:mx-0">
            {/* (1) Arc rotation */}
            <div className="bg-gray-200 flex justify-center py-6 h-48">
              <div class="flex items-center justify-center rounded-full h-36 w-36 animate-spin border-4 border-x-pink-600 border-y-pink-100">
                <div class="flex items-center justify-center rounded-full h-24 w-24 bg-white">
                  <div class="scale-100 skew-y-6  h-12 w-12 rounded-full bg-green-200"></div>
                </div>
              </div>
            </div>
            {/* (2) progress dots */}
            <div className="bg-gray-200 flex justify-center items-center h-48">
              <div class="flex gap-2 ">
                <div class="progress"></div>
                <div class="progress"></div>
                <div class="progress"></div>
              </div>
            </div>
            {/* Extenal css to add */}
            {/* 
              .progress {
                @apply h-8 w-8 bg-pink-600 rounded-full animate-bounce;
              }
              .progress:nth-child(1) {
                animation-delay: 0.1s;
              }
              .progress:nth-child(2) {
                animation-delay: 0.3s;
              }
              .progress:nth-child(3) {
                animation-delay: 0.5s;
              }

            {/*(3) clock */}
            <div className="bg-gray-200 flex justify-center items-center  h-48">
              <div class="relative">
                <div class="before:animate-[spin_10s_linear_infinite] after:animate-[spin_25s_linear_infinite] flex h-36 w-36 items-center justify-center rounded-full border-2 border-black bg-white before:absolute before:top-2/4 before:h-16 before:w-2 before:origin-top before:rounded before:bg-pink-600 after:absolute after:top-2/4 after:h-12 after:w-2 after:origin-top after:rounded after:bg-black">
                  <div class="z-40 h-4 w-4 rounded-full bg-black"></div>
                </div>
              </div>
            </div>
            {/*(4) jumping heart */}
            <div className="flex items-center justify-center bg-gray-200 pt-5  h-48">
              <div>
                <div class="flex-col">
                  <div class="animate-bounce relative h-16 w-16 bg-pink-600 before:absolute before:-left-8 before:h-16 before:w-16 before:rounded-full before:bg-pink-600 after:absolute after:-top-8 after:h-16 after:w-16 after:rounded-full after:bg-pink-600"></div>
                  <div class="animate-[bounce_2s_infinite_linear] translate-x-3 my-4 h-4 w-8 rounded-md bg-pink-600"></div>
                </div>
              </div>
            </div>
            {/*(5) button  */}
            <div className="bg-gray-200 py-16 flex items-center justify-center  h-48">
              <p className="w-24 h-12 bg-[#4E6560] text-white  font-bold flex items-center justify-center border-t-4 border-[#E29A5b] buttonone rounded-[0px_0px_4px_4px] origin-[50%_5em]">
                SAVE
              </p>
            </div>
            {/* Extenal css to add */}
            {/*    
            .buttonone {
              animation: wiggle 2s linear infinite;
            }
            @keyframes wiggle {
              0%,
              7% {
                transform: rotateZ(0);
              }
              15% {
                transform: rotateZ(-15deg);
              }
              20% {
                transform: rotateZ(10deg);
              }
              25% {
                transform: rotateZ(-10deg);
              }
              30% {
                transform: rotateZ(6deg);
              }
              35% {
                transform: rotateZ(-4deg);
              }
              40%,
              100% {
                transform: rotateZ(0);
              }
            }       
            */}
            {/*(6)Rotate dot clockwise */}
            <div className="relative bg-gray-200  h-48">
              <div class="absolute inset-0 m-auto rounded-full h-16 w-16 border border-pink-300 animate-[spin_3s_linear_infinite]">
                <div class="rounded-full h-4 w-4 bg-pink-600"></div>
              </div>
            </div>
            {/*(7) Rotate dot anticlockwise */}
            <div className="relative bg-gray-200  h-48">
              <div class="absolute inset-0 m-auto rounded-full h-16 w-16 border border-pink-300 animate-[spin_6s_linear_infinite_reverse]">
                <div class="rounded-full h-4 w-4 bg-pink-600"></div>
              </div>
            </div>
            {/*(8) Square with resize   */}
            <div className="relative flex justify-center items-center bg-gray-200  h-48">
              <div class="square w-24 h-24 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            </div>
            {/* Extenal css to add */}
            {/*
            .square {
              animation-name: grow-shrink;
              animation-duration: 5s;
              animation-iteration-count: infinite;
            }

            @keyframes grow-shrink {
              40% {
                transform: scale(1);
              }
              80% {
                transform: scale(0.5);
              }
            } 
             */}

            {/*(9) Square rotate horizontal axis */}
            <div className="bg-gray-200 py-10 flex justify-center items-center  h-48">
              <div class="rotateHorizontal w-24 h-24 bg-purple-400 rounded-xl"></div>
            </div>
            {/* Extenal css to add */}
            {/*
            .rotateHorizontal {
              animation: flip 7s linear infinite;
            }
            @keyframes flip {
              0% {
                transform: rotateY(0deg);
              }
              80% {
                transform: rotateY(360deg);
              }
            }
            */}

            {/*(10) rotate circle vertical */}
            <div className="bg-gray-200 py-10 flex justify-center items-center  h-48">
              <div class="verticleFlip w-24 h-24 bg-[#7F8C8D] rounded-full"></div>
            </div>
            {/* Extenal css to add */}
            {/* 
            .verticleFlip {
                animation: flipone 7s linear infinite;
              }
              @keyframes flipone {
                0% {
                  transform: rotateX(0deg);
                }
                80% {
                  transform: rotateX(360deg);
                }
              } */}

            {/*(11) Rotate two dots */}
            <div className="bg-gray-200 flex justify-center items-center relative  h-48">
              <div>
                <div class=" h-3 w-3 bg-pink-600 rounded-full halfCircle absolute">
                  <div class="h-3 w-3 bg-pink-600 rounded-full animate-pulse  absolute mt-10"></div>
                </div>
              </div>
            </div>
            {/* Extenal css to add */}
            {/* 
             .halfCircle {
                animation: spindemo 5s linear infinite;
              }
              
              @keyframes spindemo {
                0% {
                  transform: rotate(0deg);
                }
                40% {
                  transform: rotate(-90deg);
                }
              }
               */}

            {/*(12) Bouncing three dots  */}
            <div class="bg-gray-200 flex justify-center items-center h-48">
              <div class="b-container ">
                <span class="ball"></span>
                <span class="ball"></span>
                <span class="ball"></span>
              </div>
            </div>
            {/* Extenal css to add */}
            {/* 
            .b-container {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 60px;
              flex-direction: row;
            }
            
            .b-container .ball {
              background-color: #5b2c6f;
              border-radius: 50%;
              display: block;
              width: 15px;
              height: 15px;
              animation: jump 0.7s ease-in-out infinite;
            }
            
            .b-container .ball:nth-child(2) {
              animation-delay: 0.15s;
            }
            
            .b-container .ball:nth-child(3) {
              animation-delay: 0.3s;
            }
            
            @keyframes jump {
              0%,
              100% {
                transform: translateY(0);
              }
            
              50% {
                transform: translateY(-20px);
              }
            }
            
            */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Animation;
