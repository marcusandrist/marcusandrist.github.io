import { TypingBar, ScrollingBar } from "./display/Bar";
import { Socials } from "./display/Card";
import { Earth } from "./display/Earth";

export const Header = () => {
return (
  <div className=
    {["absolute","z-10","mx-[10vw]","md:w-[80vw]","h-[50vh]","border-x-4",
    "bg-lighterpalecreme","bg-opacity-90","border-opacity-70","border-black",
    "flex-1","mt-[1vh]"].join(" ")}
  >

  {/* Banner Elements */}
  <ScrollingBar />
  <TypingBar />

  {/* Fixed socials element */}
  <Socials />

  {/* Technologies Carousel */}

  </div>
);
}


