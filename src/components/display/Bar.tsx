"use client"
import useAnimationDelay from "../utils/useAnimationDelay";

//const useAnimationDelay = ({id, styles, delay}: useAnimationDelayProps) => {

export const ScrollingBar = () => {

  useAnimationDelay({id: "welcomeText", 
  styles: ["inline-block", "animate-dabar2"], delay: 700,});

  return(

  <div className={["relative","bg-black","border-white","border-y-2",
  "border-opacity-50","text-white","px-[1vw]","pt-[.5vh]","overflow-hidden",
  "whitespace-nowrap","h-[5vh]","text-[3vh]","font-slab","w-full",
  "select-none",].join(" ")}>
    <p className={["inline-block","animate-dabar2","absolute","font-mono",
    ].join(" ")}>
      Welcome! My name's Marcus and I
    </p>
    <p className={["hidden","absolute"].join(" ")} id="welcomeText">
      love software engineering Woooooooooo
    </p>
  </div>

  );
}

export const TypingBar = () => {
  return (

  <div>
    {/* Pointer/Typing Character */}
    <div className={["bg-black","text-2xl","text-white","pt-[.5vh]",
    "h-[4vh]","mt-[1.5vh]","w-[60vw]","ml-[2vw]","pl-[1vw]","select-none",
    ].join(" ")}>
      |
    </div>

    {/* Typed Text */}{/*
    <div className="font-slab">
      <p>hiiiiii hello, font? hello. pleas.e</p>
    </div>
    <div className="inline-block font-mono">
      hiiiiii hello, font? hello. pleas.e
    </div>*/}
  </div>

  );
}
