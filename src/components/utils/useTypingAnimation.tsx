import { useEffect, useRef } from "react";

interface TypingAnimationProps {
  text: string;
  typingVelociy: number;
  textRef: React.RefObject<HTMLParagraphElement>;
  cursorRef: React.RefObject<HTMLParagraphElement>;
}

export default function useTypingAnimation(
{ text, 
  typingVelocity, 
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

      const elapsed = Math.floor((timestamp - start) / typingVelocity);

      if (elapsed < text.length && elapsed !== prevElapsed) 
      {
        content.innerHTML += text.charAt(elapsed);
        cursor.innerHTML = " " + cursor.innerHTML;
      }

      prevElapsed = elapsed;
      requestAnimationFrame(step);
    } requestAnimationFrame(step);

    return () => {
      if (content.innerHTML.length !== text.length) return;
      content.innerHTML = "";
      cursor.innerHTML = "█";
    };
  }, [text, cursorRef, textRef]);
}
