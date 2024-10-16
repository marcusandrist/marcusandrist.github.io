import { MobileNav } from "../components/Navigation";

export default function Home() { 

  

  return (

  <div className="">

    <nav className={
      ["bg-lighttan","bg-opacity-95","mt-[11vh] mx-[1vw]",
      "w-[98vw] h-[17vh] "].join(" ")
      + 
      ["bg-opacity-95","md:w-[68vw]","md:h-[15vh]",
      "md:mx-[16vw]","md:border-b-4","md:border-palecreme",
      "md:border-opacity-90","md:mt-[1vh]",
      "md:rounded-t"].join(" ")
    }>
      <MobileNav classname={
        ["mx-[1vw]","w-[96vw]","h-[11vh]","top-0","md:hidden"].join(" ")
      }/>
    </nav>

    <></>
    {/* Content includes scrolling  */}

  </div>

  );
}
