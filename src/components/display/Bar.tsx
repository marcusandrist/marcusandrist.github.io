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
  "whitespace-nowrap","h-[5vh]","text-[3vh]","font-slab","w-full",
  ].join(" ")}>
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

  let messageIndex: number;

  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [typingText, setTypingText] = useState<string>(text[0]);
  const [isActive, setIsActive] = useState<boolean>(true);

  function switchMessage() {
    let newMessageIndex: number;
    do { newMessageIndex = (Math.random() * (text.length-.5)|0); } 
    while (newMessageIndex === messageIndex);
    messageIndex = newMessageIndex;
    return messageIndex;
  }

  function handleVisChange() {
    if (document.hidden) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisChange);
    }
  }, []);

  useEffect(() => {
    
    const intervalId = setInterval(() => {
    const newMessage = switchMessage();
    setTypingText(text[newMessage]);
    }, 6000);

    return () => clearInterval(intervalId);

  }, []);

  // typing begins to break at a delay < 15 // 55 is kinda chill
  useTypingAnimation({text:typingText, typingDelay:15, textRef:containerRef,
  cursorRef:cursorRef});

  return (

  <div className={["bg-black","pt-[.5vh]","h-[4vh]","w-[60vw]","ml-[2vw]",
  "pl-[1vw]","select-none","text-2xl","overflow-hidden"].join(" ")}>
    {isActive && <div>
      <div className={["bg-opacity-0","text-green","inline-block",
      ""].join(" ")} ref={containerRef}>
      </div>
      <div ref={cursorRef} className={["inline-block","text-green",
      "bg-opacity-0"].join(" ")}>
      █
      </div>
    </div>}
  </div>

  );
}
