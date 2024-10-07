import { TypingBar, ScrollingBar } from "./display/Bar";
import { Carousel } from "./display/Carousel";
import { Socials } from "./display/Card";
import { Earth } from "./display/Earth";
// Look into why json won't import from relative public path?
import messages from "../data/messages.json";
import { About } from "./display/Card";

export const Header = () => {

  const jsonParams = { file: messages, objName: "messages"};

  return (

  <div className=
    {["absolute","z-10","mx-[10vw]","w-[80vw]","h-[41vh]","border-x-4",
    "bg-lighterpalecreme","bg-opacity-90","border-opacity-70","border-black",
    "flex-1","mt-[1vh]"].join(" ")}
  >

    {/* Banner */}
    <ScrollingBar />

    {/* Socials and TypingBar elements and About */}
    <div className="flex flex-row items-center mt-[2vh] bg-bluegray mx-[3vw]
    border-2 border-darkpurple">
      <TypingBar text={ messages["messages"] } />
      <Socials />
    </div>


    {/* About */}
    <About />

  </div>

  );
}
