"use client"
import useAnimationDelay from "../utils/useAnimationDelay";

export const ScrollingBar = () => {

  useAnimationDelay({id: "welcomeText", 
  styles: ["animate-dabar","md:inline-block"], delay: 4500,});

  return(

  <div className={["relative","bg-black","border-white","border-y-2","select-none",
  "border-opacity-50","text-white","px-[1vw]","pt-[.5vh]","overflow-hidden",
  "whitespace-nowrap","h-[5vh]","md:text-[3vh]","font-slab","w-full",
  "text-[1.5vh]"].join(" ")}>
    <p className={["inline-block","animate-dabar","absolute","font-mono",
    ].join(" ")}>
      Welcome! My name's Marcus and I love software engineering Woooooooooo
    </p>
    <p className={["hidden","absolute"].join(" ")} id="welcomeText">
      Welcome! My name's Marcus and I love software engineering Woooooooooo
    </p>
  </div>

  );
}

export const TypingBar = () => {
  return (

  <div>
    {/* Pointer/Typing Character */}
    <div className={["bg-black","text-md","text-white","pt-[.5vh]",
    "h-[4vh]","mt-[1.5vh]","w-[60vw]","ml-[2vw]","pl-[1vw]","select-none",
    ].join(" ")}>
      |
    </div>

    {/* Typed Text */}

  </div>

  );
}
