import { Carousel, Card } from "./display/Carousel";

export const Blog = () => {

  // Hacky way to input cards, these should have a function
  // that returns them from json on demand.
  const cardArray: ReactNode[] = [];
  cardArray.push(<Card />);
  cardArray.push(<Card />);
  cardArray.push(<Card />);
  cardArray.push(<Card />);
  cardArray.push(<Card />);
  cardArray.push(<Card />);
  cardArray.push(<Card />);

return (
  <div className=
    {["absolute","z-0","mx-[10vw]","w-[80vw]","h-fit","top-[42vh]",
    "border-b-4","border-x-4","bg-lighterpalecreme","opacity-90",
    "border-opacity-70","border-black"].join(" ")}
  >
    {/* Carousel wrapper for expanding width */}
    <div className="mx-[2vw]">
      <Carousel cards={cardArray} className={[""].join(" ")}/>
    </div>
  </div>
    
);
}
