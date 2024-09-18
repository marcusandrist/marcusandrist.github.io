import { TypingBar, ScrollingBar } from "./Bar";

export const Header = () => {
return (
  <div className=
    {["absolute","z-10","mx-[10vw]","w-[80vw]","h-[50vh]","border-x-4",
    "bg-lighterpalecreme","bg-opacity-90","border-opacity-70","border-black",
    "flex-1"].join(" ")}
  >
  <ScrollingBar />
  <TypingBar />

  {/* LinkedIn, Contact, About Me, Technologies/Projects */}
  </div>
);
}

export const Information = () => {
return (
  <div className=
    {["absolute","z-0","mx-[10vw]","w-[80vw]","h-[80vh]","top-[50vh]",
    "border-b-4","border-x-4","bg-lighterpalecreme","opacity-90",
    "border-opacity-70","border-black"].join(" ")}
  >
    Other Text That Allows the Earth to orbit in front of it
  </div>
);
}
