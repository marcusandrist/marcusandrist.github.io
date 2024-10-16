"use client"
import { useEffect, useState, useRef } from "react";
interface NavigateProps {
  width: number;
  height: number;
  color: string;
  classname: string;
};

interface CardQueueItem {
  type: "right" | "left";
  card: React.ReactNode;

}

export const Carousel = ({ cards }: { cards: React.ReactNode[]}) => {

  let color = "#DBD3D2";
  // 5 cards in the end for overflow?
  // ofc
  const [cQ, setCQ] = useState<CardQueueItem[]>([
    <Card content={"Moon"} />,
  ]);
  // Here's this: 
  const [cardList, setCardList] = useState<React.ReactNode[]>([
    <Card content={"Moon"} />,
    <Card content={"Up in this ho"}  />,
    <Card content={"Watch me dance"} />,
    <Card content={"Watchj me roll"} />
  ]);

  function navLeft() {
    console.log("Popped something?.");
    const newList = [...cardList]
    const extra = newList.shift();

    const newQueue = [...cQ]
    newQueue.push(extra);
    setCQ(newQueue);
    // List logci for overflow
    // navLeft specific overflow push and shifft
    // first instance yuou know the rest

    newList.push(<Card content={"Watch me crank that moonman"}/>)
    setCardList(newList);

  }
  function navRight() {
    console.log("Shifted something?.");
    const newList = [...cardList]
    newList.pop()
    newList.unshift(<Card content={"In the backseat of my motor-car"} />)
    setCardList(newList);
  }

  return (

  <div className={["w-full","bg-opacity-85","bg-darkpurple",
  "mt-[4vh]","border-bluegray","border-4","rounded-md","h-[45vh]","overflow-hidden",
  ].join(" ")}>
    <div className={["flex","w-full","h-full","items-center"].join(" ")}>
    <div className={["flex","absolute"].join(" ")}>
      <button onClick={()=>navLeft()}>
        <NavigateLeft width={120} height={120} color={color} 
        classname={[""].join(" ")} />
        <NavigateLeft width={70} height={70} color={color} 
        classname={["md:hidden"].join(" ")} />
      </button>
    </div>

    <div className={["w-full","flex","","mx-[5vw]","mt-[.5vh]",
    "overflow-hidden","mb-[1vh]"].join(" ")}>
      <CardList cards={cardList} />
    </div>

    <div className={["flex","absolute","right-0"].join(" ")}>
      <button onClick={()=>navRight()}>
        <NavigateRight width={120} height={120} color={color} 
        classname={["",""].join(" ")} />
        <NavigateRight width={70} height={70} color={color} 
        classname={["md:hidden"].join(" ")} />
      </button>
    </div>
    </div>
  </div>

  );
}

interface CardListProps {
  cards: React.ReactNode[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  
  return (

  <div className={["text-palecreme","font-jaro","flex","flex-row","justify-center",
  ].join(" ")} style={{ transform: `translateX(${0}px)` }}>
  {cards.map((card, index) => (
    <div key={index} className="flex">
      {card}
    </div>
  ))}
  </div>

  );
}

export const Card = ({ content }: { content:string; }) => {
  return (

  <div className={["w-[15.5vw]","h-[37vh]","bg-darkpurple","mx-[.42vw]"].join(" ")}>
    {content}
  </div>

  );

}



const NavigateLeft = ({ width, height, color, classname }: NavigateProps) => {
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

const NavigateRight = ({ width, height, color, classname }: NavigateProps) => {
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
