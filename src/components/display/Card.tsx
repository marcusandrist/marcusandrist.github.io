export const Socials = ({className}: {className: string}) => {
return (

  <div className={["absolute","w-[16vw]","md:top-[5.5vh]","md:h-[3vw]",
  "left-[64vw]","flex","justify-center","space-between","items-center",
  "mt-[.15vh]","flex-col","md:flex-row","top-[8vh]","h-[16vw]"].join(" ")}>

    <a href="https://www.linkedin.com/in/marcusandrist/" target="_blank">
    <div className={["bg-[url('/linkedin2.png')]","w-[4vh]","h-[4vh]",
    "bg-contain","bg-no-repeat","mx-[1.33vw]","cursor-pointer"].join(" ")} />
    </a>

    <a  href="https://github.com/marcusandrist" target="_blank" className="cursor-pointer">
    <div className={["bg-[url('/github3.png')]","w-[4vh]","h-[4vh]",
    "bg-contain","bg-no-repeat","mx-[1.33vw]","cursor-pointer"].join(" ")} />
    </a>

    <a href="https://dough-flow.com/" target="_blank">
    <div className={["bg-[url('/icon1.png')]","w-[4vh]","h-[4vh]",
    "bg-contain","bg-no-repeat","mx-[1.33vw]","cursor-pointer"].join(" ")} />
    </a>
  </div>

)
}
