"use client"
import { useEffect, useRef, useState } from "react";
import useAnimationDelay from "../utils/useAnimationDelay";
import useTypingAnimation from "../utils/useTypingAnimation";

export const ScrollingBar = () => {

  useAnimationDelay({id: "initWelcomeText", styles: ["hidden"], delay:6400, 
  shown:true});
  useAnimationDelay({id: "finalWelcomeText", styles: ["md:ml-[16vw]",
  "animate-welcome","ml-[10vw]"], delay:5800, shown:false});

  return(

  <div className={["relative","bg-black","border-white","border-y-2","select-none",
  "border-opacity-50","text-white","px-[1vw]","pt-[.5vh]","overflow-hidden",
  "whitespace-nowrap","md:h-[5vh]","md:text-[3vh]","font-slab","w-full",
  "text-[2vw]","h-[3vh]"].join(" ")}>
    <p id="initWelcomeText" className={["animate-dabarV2","md:ml-[0vw]",
    "ml-[-10vw]"].join(" ")}>
      Welcome! My name's Marcus and I love software engineering. Woooooooooo
    </p>
    <p id="finalWelcomeText" className={["hidden"].join(" ")}>
      Welcome! My name's Marcus and I love software engineering
    </p>
  </div>

  );
}
export const TypingBar = ({ text }: { text:string[] }) => {

  let currentMessage;

  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [typingText, setTypingText] = useState<string>(text[0]);

  useTypingAnimation({text:typingText, typingVelocity:200, textRef:containerRef,
  cursorRef:cursorRef});

  function switchMessage() {
    let newMessage;
    do { newMessage = (Math.random() * (text.length-.5)|0); } 
    while (newMessage === currentMessage);
    currentMessage = newMessage;
    return currentMessage;
  }

  
  useEffect(() => {
    const intervalId = setInterval(() => {
    const newMessage = switchMessage();
    setTypingText(text[newMessage]);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (

  <div className={["bg-black","pt-[.5vh]","h-[4vh]","w-[60vw]","ml-[2vw]",
  "pl-[1vw]","select-none","text-2xl"].join(" ")}>
    <div className={["bg-black","text-green","inline-block",
    ""].join(" ")} ref={containerRef}>
    </div>
    <div ref={cursorRef} className={["inline-block","text-green",
    "bg-opacity-0"].join(" ")}>
    █
    </div>
  </div>

  );
}
