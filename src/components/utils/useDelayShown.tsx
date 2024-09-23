import { useEffect } from "react";

interface useDelayShownProps {
  id: string;
  delay: number;
}

/*
  (NOTE: add hidden to element with "id" to avoid mounting visibly)
  useDelayShown
    id: string *whatever the id of the element to delay is
    delay: number *delay time (ms)
*/

export const useDelayShown = 
({ id, delay }: useDelayShownProps) => {

  useEffect(() => {

    // retrieve dom element for hook
    const elementToDelay = document.getElementById(id);

    if (elementToDelay) {

      // set delay for animation
      setTimeout(() => {
        // assume hidden is added via method stub
        elementToDelay.classList.remove("hidden");
      }, delay);

    } else { console.log(`item not found ${ id }`)}

    }, []);
};

export default useDelayShown;
