import { TypingBar, ScrollingBar } from "./display/Bar";
import { Carousel } from "./display/Carousel";
import { Socials } from "./display/Card";
import { Earth } from "./display/Earth";
import messages from "../app/messages.json";
import { About } from "./display/Card";

export const Header = () => {
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
      <TypingBar text={ ParseMessages(messages) } />
      <Socials />
    </div>


    {/* About */}
    <About />

  </div>

  );
}

function ParseMessages(messages) {
  const jsonString = JSON.stringify(messages);
  const jsonObj = JSON.parse(jsonString);
  return jsonObj.messages;
}
