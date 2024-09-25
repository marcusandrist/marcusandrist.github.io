/**
  Carousel for technology cards! Should end with mobile-touch support
  auto-scrolling, and hover+select functionality. If you can map the
  position of a card inside the box, or better yet and offset of the
  flex items inside, with intersecting elements being rendered, and
  un-intersected elements being appended to the beginning of the items,
  that would be great. However, I have no clue how that API even works.

  Another approach: Still involves editing the queue of Card components
  in the parents container* Animated the container itself since it has
  overflow-hidden to just slowly scroll across(100% gonna need to use
  JavaScript/TypeScript animation), the buttons on the left and right 
  can maintain the scrolled state and just shift it similarly to the
  animation Hook!

  Big IDEA* Either utilize a custom card-queue component+hook,
  or animate the cards individually in the container. I like a queue
  that functions like this:

          <--My Carousel Viewport as Displayed to User-->
  Card-Card-Card-Card-Card-Card-Card.... This last Card at index 10
  becomes the new card at index 0, and the whole goal is maintaining
  the cards offset horizontally on each side; otherwise, if that's
  too difficult, set a single-scroll direction... would be lame tho
  But to each their own, you will definitely have some failures, but
  try to abstract the movement into a hook or function so that the
  touch functionality can utilize that interface! DO ANIMATIONS AT
  THE LOWEST-LAYER POSSIBLE AND YOU WILL SUCCEED.
**/

interface navigateProps {
  width: number;
  height: number;
  color: string;
  classname: string;
}

export const Carousel = () => {

  let color = "#DBD3D2";

 return (

  <div className={["w-full","bg-opacity-85","bg-darkpurple",
  "mt-[4vh]","border-bluegray","border-4","rounded-md","h-[45vh]","overflow-hidden",
  ].join(" ")}>
    <div className={["flex","w-full","h-full","items-center"].join(" ")}>
    <div className={["flex","absolute"].join(" ")}>
      <NavigateLeft width={120} height={120} color={color} 
      classname={[""].join(" ")}
      />
      <NavigateLeft width={70} height={70} color={color} 
      classname={["md:hidden"].join(" ")}
      />
    </div>
    <div className={["w-full","flex","bg-white","mx-[5vw]","mt-[.5vh]",
    "overflow-hidden","mb-[1vh]"].join(" ")}>
      <div className={["text-palecreme","font-jaro","flex","flex-row",].join(" ")}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <div className={["flex","absolute","right-0"].join(" ")}>
      <NavigateRight width={120} height={120} color={color} 
      classname={["",""].join(" ")}
      />
      <NavigateRight width={70} height={70} color={color} 
      classname={["md:hidden"].join(" ")}
      />
    </div>
    </div>
  </div>

  );
}

const Card = () => {
  return (

  <div className={["w-[15vw]","h-[37vh]","bg-darkpurple","mx-[.42vw]"].join(" ")}>
    example card
  </div>

  );

}



const NavigateLeft = ({ width, height, color, classname }: navigateProps) => {
  return (

  <div>
    <svg className={classname} width={width} height={height} viewBox="0 0 200 200">
    <path d="M100 -8, 25 -40 Q120 -60, 90 -20"
      fill="none" stroke={color} strokeWidth="5" transform="translate(-20, 88)"/>
    <path d="M100 8, 25 40 Q120 60, 90 20"
      fill="none" stroke={color} strokeWidth="5" transform="translate(-20,0)"/>
    </svg>
  </div>  

  );
}

const NavigateRight = ({ width, height, color, classname }: navigateProps) => {
  return (

  <div>
    <svg className={classname} width={width} height={height} viewBox="0 0 200 200">
    <path d="M-100 -8, -25 -40 Q-120 -60, -90 -20"
      fill="none" stroke={color} strokeWidth="5" transform="translate(140, 88)"/>
    <path d="M-100 8, -25 40 Q-120 60, -90 20"
      fill="none" stroke={color} strokeWidth="5" transform="translate(140,0)"/>
    </svg>
  </div>

  );
}

/*  
<div>
    <svg width={width} height={height} viewbox="0 0 200 200">
    <path d="M100 -8, 25 -40 Q120 -60, 90 -20"
      fill="none" stroke={color} stroke-width="5" transform="translate(0, 88)"/>
    <path d="M100 8, 25 40 Q120 60, 90 20"
      fill="none" stroke={color} stroke-width="5" />
    </svg>
  </div>  
  */
