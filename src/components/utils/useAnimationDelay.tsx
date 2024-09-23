import { useEffect } from "react";

interface useAnimationDelayProps {
  id: string;
  styles: string[];
  delay: number;
}

/*
  (NOTE: add hidden to element with "id" to avoid mounting visibly)
  useAnimationDelay
    id: string *whatever the id of the element to delay is
    styles: string[] *list of styles to apply such as the animation
    delay: number *delay time (ms)
*/

export const useAnimationDelay = 
({ id, styles, delay }: useAnimationDelayProps) => {

  useEffect(() => {

    // retrieve dom element for hook
    const elementToDelay = document.getElementById(id);

    if (elementToDelay) {

      // set delay for animation
      setTimeout(() => {
        // assume hidden is added via method stub
        //elementToDelay.classList.remove("hidden");
        elementToDelay.classList.add(...styles);
      }, delay);

    } else { console.log(`item not found ${ id }`)}

    }, []);
};

export default useAnimationDelay;
