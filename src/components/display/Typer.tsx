"use client"
import React, { useEffect, useRef } from 'react';

const Typer = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    const cursor = cursorRef.current;
    
    if (!element || !cursor) return;

    let index = 0;
    let start = null;

    function typeCharacter(timestamp: number) {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      // Control the typing speed (adjust delay here)
      const typingSpeed = 1000; // milliseconds between characters

      if (progress >= typingSpeed && index < text.length) {
        // Add one character at a time to the element
        //element.innerHTML += text.charAt(index);
        element.innerHTML += "L";
        index++;

        // Reset start time for the next character
        start = timestamp;

        // Move the cursor (you can adjust movement and size based on letter spacing)
        const charWidth = 12; // Assuming each character is about 12px wide (adjust if needed)
        cursor.style.transform = `translateX(${index * charWidth}px)`;
      }

      if (index < text.length) {
        requestAnimationFrame(typeCharacter); // Continue typing if more characters remain
      }
    }

    // Start typing animation
    requestAnimationFrame(typeCharacter);
  }, [text]);

  return (

  <div className={["inline-block","relative","bg-black","text-[1vw]",
  "text-green","pt-[1vh]","h-[4vh]","w-[60vw]","ml-[2vw]","pl-[1vw]",
  "select-none"].join(" ")}>

    {/* The text will be typed here */}
    <span ref={containerRef}></span>
    {/* The rectangle cursor
    <div ref={cursorRef} className={["absolute","bg-black","w-[1vh]",
    "h-1vh]","inline-block","left-0","right-0"].join(" ")}>
    </div>*/}
      <div ref={cursorRef} className={["inline-block","w-[.65vw]","h-[2.5vh]",
      "bg-white","absolute","left-0","right-0","ml-[2vw]"].join(" ")}>
      </div>
  </div>

  );
};

export default Typer;

