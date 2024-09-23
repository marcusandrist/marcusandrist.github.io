import { TypingBar, ScrollingBar } from "./display/Bar";
import { Socials } from "./display/Card";
import { Earth } from "./display/Earth";
import Typer from "./display/Typer";

export const Header = () => {
  return (

  <div className=
    {["absolute","z-10","mx-[10vw]","w-[80vw]","h-[50vh]","border-x-4",
    "bg-lighterpalecreme","bg-opacity-90","border-opacity-70","border-black",
    "flex-1","mt-[1vh]",].join(" ")}
  >

  {/* Banner */}
  <ScrollingBar />

  {/* Socials and TypingBar elements */}
  <div className="flex flex-row items-center mt-[2vh]">
    {/*<TypingBar />*/}
    {/*<Typer text="helloooo"/>*/}
    <TypingBar text={["helloooo","buhhh byeee","Third text option"]} />
    <Socials />
  </div>

  {/* Technologies Carousel */}

  </div>

  );
}


