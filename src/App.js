import logo from './logo.svg';
import videoFile from "./test-vid.mp4";
import pdfFile from "./Andrist-Marcus-Resume.pdf"
import ReactPlayer from "react-player";
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <div className="Top">
          <header>
            <h1 id="myname">Marcus Andrist</h1>
          </header>
          <div className="Videos">
            <video src={videoFile} autoPlay loop muted></video>
            <video src={videoFile} autoPlay loop muted></video>
          </div>
        </div>
        <nav className="Touch">
          <ul>
            <li><a href="#credentials" title="Contact Info Section">Contact</a></li>
            <li><a href={pdfFile} title="View PDF in browser" target="_blank" >Resume (PDF)</a></li>
            <li><a href="https://github.com/marcusandrist" title="My GitHub: https://github.com/marcusandrist" target="_blank">Github</a></li>
          </ul>
        </nav>

      <main>

      <article>
        <p>
          Senior undergraduate student of computer science searching for a
          entry-level position or internship in the field of software engineering, 
          front-end development, devops, or full-stack development.</p>
	<p>
	  I am looking to further my technical experience, explore job opportunities, and find long-term employment with software development companies.
        </p>
	<p> I invite you to check out some of the public code from my professional work as a python application developer on <a href="https://github.com/marcusandrist/py-connect-wise/" title="Python App Repository">GitHub</a></p>


        <p id="availability">
          <b>Work Availability during Fall 2023 semester (August 28- Dec 15, 2024)(Central Standard Time)</b>: <strong>&lt;30hrs/week</strong></p>
	<p id="schedule">Monday/Wednesday 6:00am-10:45am, 2:00pm-8:00pm <br />Tuesday/Thursday 6:00am-7:45am, 11:00am-1:45pm, 3:30pm-8:00pm<br />Friday/Saturday ALL DAY</p>
        <h2>About me</h2>
	  <p>
          I am a current fourth year college student with 1 year of experience in the realm of technical
          industry. From assistant teaching computer science, to managing an IT office, to creating distributable python applications, I have always been into computers and programming.</p>
	  <p>Resourcefulness and innovative research are my developmental focuses, practicing ethical principles of computing along the way! I have a good grasp on markup languages including html/css and xml, alongside proficiency in Python and Java with 2 and 3 years experience in each, respectively</p>
	  <p>My main goal of this portfolio is to find a shot to bring my everyday curiosity and passion to a business setting or job opportunity today.</p>

	<h2 id="credentials">Contact Info</h2>
        <p>
        Email: marcusandrist@drake.edu
        </p>

        <p>
          Located in Des Moines, IA
        </p>
      </article>
    </main>
    <br></br>
    <footer>
      <p>Marcus Andrist Personal Site-Created using React</p>
    </footer>
    <br></br>
    <br></br>
  </body>
    </div>
  );
}

export default App;
