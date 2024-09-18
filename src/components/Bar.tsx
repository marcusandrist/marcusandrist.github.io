"use client"
import { useEffect } from "react";

export const ScrollingBar = () => {

  useEffect(() => {
    const welcomeText = document.getElementById('welcomeText');
    setTimeout(() => {
      welcomeText.classList.remove("hidden");
      welcomeText.classList.add("inline-block");
      welcomeText.classList.add("animate-dabar");
      console.log(welcomeText.classList);
    }, 6969);
  }, []);

return(

  <div className={["relative","bg-black","border-white","border-y-2",
  "border-opacity-50","text-white","px-[1vw]","pt-[0.5vh]","overflow-hidden",
  "whitespace-nowrap","h-[5vh]","text-[3vh]"
  ].join(" ")}>
    <p className={["inline-block","animate-dabar",
    "absolute",
    ""].join(" ")}>
      Welcome! My name is Marcus Andrist and I am a full-stack software engineer
    </p>
    <p className={["hidden","absolute",""].join(" ")}
    id="welcomeText">
      Welcome! My name is Marcus Andrist and I am a full-stack software engineer
    </p>
  </div>

);
}

export const TypingBar = () => {
return (
<div>
  {/* Pointer/Typing Character */}
  <div className={["bg-black","text-2xl","text-white","px-[1vw]","pt-[0.5vh]",
  ].join(" ")}>
    |
  </div>
  {/* Typed Text */}
</div>
);
}
