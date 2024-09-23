export const Socials = ({className}: {className: string}) => {
return (

  <div className={["absolute","w-[16vw]","top-[5.5vh]","h-[3vw]",
  "left-[64vw]","flex","justify-center","space-between","items-center",
  "mt-[.15vh]"].join(" ")}>
    <a href="https://www.linkedin.com/in/marcusandrist/" target="_blank">
    <div className={["bg-[url('/linkedin2.png')]","w-[4vh]","h-[4vh]",
    "bg-contain","bg-no-repeat","mx-[1.33vw]"].join(" ")}
    href="https://www.linkedin.com/in/marcusandrist/" />
    </a>

    <a  href="https://github.com/marcusandrist" target="_blank">
    <div className={["bg-[url('/github3.png')]","w-[4vh]","h-[4vh]",
    "bg-contain","bg-no-repeat","mx-[1.33vw]"].join(" ")} />
    </a>

    <a href="https://dough-flow.com/" target="_blank">
    <div className={["bg-[url('/icon1.png')]","w-[4vh]","h-[4vh]",
    "bg-contain","bg-no-repeat","mx-[1.33vw]"].join(" ")} />
    </a>
  </div>

)
}
