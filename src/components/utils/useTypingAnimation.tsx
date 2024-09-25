import { useEffect, useRef } from "react";

interface TypingAnimationProps {
  text: string;
  typingDelay: number;
  textRef: React.RefObject<HTMLParagraphElement>;
  cursorRef: React.RefObject<HTMLParagraphElement>;
}

export default function useTypingAnimation(
{ text, 
  typingDelay, 
  textRef, 
  cursorRef }: TypingAnimationProps) {
  
  let start;
  let prevElapsed;
  
  useEffect(() => {
    const content = textRef.current;
    const cursor = cursorRef.current;
    if (!content || !cursor) return;

    function step(timestamp) {
      if (start === undefined) {start = timestamp;} 
      if (prevElapsed === undefined) {
        prevElapsed = -1;
      }

      const elapsed = Math.floor((timestamp - start) / typingDelay);

      if (elapsed < text.length && elapsed !== prevElapsed) 
      {
        content.innerHTML += text.charAt(elapsed);
        cursor.innerHTML = " " + cursor.innerHTML;
      }

      prevElapsed = elapsed;
      requestAnimationFrame(step);
    } requestAnimationFrame(step);


    return () => {
      content.innerHTML = "";
      cursor.innerHTML = "█";
    };
  }, [text, cursorRef, textRef]);
}
