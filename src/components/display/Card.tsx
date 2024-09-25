export const Socials = ({className}: {className: string}) => {
  
  return (

  <div className={["relative","flex","md:flex-row","md:my-[1vw]","flex-col",
  "ml-[5vw]","md:ml-[1.5vw]"].join(" ")}>

    <a href="https://www.linkedin.com/in/marcusandrist/" target="_blank">
    <div className={["bg-[url('/linkedin2.png')]","w-[4vh]","h-[4vh]","rounded-md",
    "bg-contain","bg-no-repeat","mx-[1.33vw]"].join(" ")} />
    </a>

    <a  href="https://github.com/marcusandrist" target="_blank">
    <div className={["bg-[url('/github3.png')]","w-[4vh]","h-[4vh]","rounded-md",
    "bg-contain","bg-no-repeat","mx-[1.33vw]"].join(" ")} />
    </a>

    <a href="https://dough-flow.com/" target="_blank">
    <div className={["bg-[url('/icon1.png')]","w-[4vh]","h-[4vh]",
    "bg-contain","bg-no-repeat","mx-[1.33vw]"].join(" ")} />
    </a>
  </div>

  )
}

export const About = () => {

  return (

  <div className="mx-[3vw] bg-cyan flex bg-opacity-5 h-[15vh] my-[6vh] relative
  rounded-md flex flex-row">
    <div className="flex flex-col">
    <h1 className="flex mx-[1vw] text-3xl font-jaro">
      What do I like to do? 
    </h1>
    <p className="font-daddytime">
      Have fun!
    </p>
    </div>
  </div>

  );
}
