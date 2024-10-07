//import questionAnswers from "../../../public/data/question_answer.json";
import questionAnswers from "../../data/question_answer.json";

interface QACardProps {
  question:string;
  answer:string;
  id:number;
}

export const Socials = ({className}: {className: string}) => {
  
  return (

  <div className={["relative","flex","md:flex-row","md:my-[1vw]","flex-col",
  "ml-[5vw]","md:ml-[1.5vw]"].join(" ")}>

    <a href="https://www.linkedin.com/in/marcusandrist/" target="_blank">
    <div className={["bg-[url('/images/linkedin2.png')]","w-[4vh]","h-[4vh]","rounded-md",
    "bg-contain","bg-no-repeat","mx-[1.33vw]"].join(" ")} />
    </a>

    <a  href="https://github.com/marcusandrist" target="_blank">
    <div className={["bg-[url('/images/github3.png')]","w-[4vh]","h-[4vh]","rounded-md",
    "bg-contain","bg-no-repeat","mx-[1.33vw]"].join(" ")} />
    </a>

    <a href="https://dough-flow.com/" target="_blank">
    <div className={["bg-[url('/images/icon1.png')]","w-[4vh]","h-[4vh]",
    "bg-contain","bg-no-repeat","mx-[1.33vw]"].join(" ")} />
    </a>
  </div>

  )
}

/*
    Mobile-styling ideas, make this a grid that goes from 1x5
    to 2x(2+3). Just keep a relatively clean standard that scales.
    We all know that the socials bar and banner will be more
    difficult, along with the carousel possibly. This should be
    the freeest cheese of the bunch.
*/

export const About = () => {

  return (

  <div className="mx-[3vw] bg-cyan flex bg-opacity-10  h-[15vh] my-[6vh] relative
  rounded-md flex flex-row border-palecreme border-2">
    <div className="flex flex-row">
      {questionAnswers.QA.map((QA, index) => {
        
        const question = Object.keys(QA)[0];
        const answer = QA[question];
        return (
        
        <QACard question={question} answer={answer} key={index} />
        
        );
      })}
    </div>
  </div>

  );
}

const QACard = ({ question, answer, id }: QACardProps) => {
  return (
    
    <div className={["flex", "flex-col","text-xl"].join(" ")} key={id}>
      <h1 className={[].join(" ")}
      >{question}</h1>
      <p className={[].join(" ")}
      >{answer}</p>
    </div>

  );
}
