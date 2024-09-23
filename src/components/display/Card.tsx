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
/*
  <div className={["absolute","w-[16vw]","md:top-[5.5vh]","md:h-[3vw]",
  "md:left-[64vw]","flex","justify-center","space-between","items-center",
  "mt-[.15vh]","flex-col","md:flex-row","top-[6.5vh]","h-[16vw]",
  "left-[62vw]",].join(" ")}>
*/
