import logo from './logo.svg';
import videoFile from "./test-vid.mp4";
import pdfFile from "./Andrist Resume.pdf"
import ReactPlayer from "react-player";
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <div className="Top">
          <header>
            <h1>Marcus Andrist</h1>
          </header>
          <div className="Videos">
            <video src={videoFile} autoPlay loop muted></video>
            <video src={videoFile} autoPlay loop muted></video>
          </div>
        </div>
        <nav className="Touch">
          <ul>
            <li><a href="#credentials">Contact</a></li>
            <li><a href={pdfFile} target="_blank" >View Resume (PDF)</a></li>
            <li><a href="https://github.com/marcusandrist" target="_blank">Github</a></li>
          </ul>
        </nav>

      <main>

      <article>
        <h2>Professional Goals</h2>

        <p>
          Senior undergraduate student of computer science searching for a
          entry-level position or internship in the field of software engineering, 
          front-end development, and/or database management. Looking to further my
          my technical experience, explore job opportunities, and find 
          long-term employment with team-led software development companies.
        </p>

        <h2>About me</h2>

        <p>
          Full-Time Work Availability: Present-
        </p>
        <p>
          Part-Time Work Availability (&lt;30hrs) (Academic Semester): September 11th-December 15th
        </p>

        <p>
          I am an active college student with years of experience in the realm of technical
          industries. From elementary small game development to web development to projects in the realm of
          distributable .NET and python applications I have always been into computers, programming, and
          applications. Whether it was interactions and UX or streamline menu development, I've always
          enjoyed using and analyzing programs. Methodology and functionality are huge components
          to my everyday life and my approach to substantial, ethical, impactful programming. I am
          looking for a shot to bring my everyday curiosity and passion to a business setting or
          job opportunity today.
        </p>

        <p>
          An agile approach and team collaboration have been things I've strived for in project
          work over my three years as an active developer. I bring a topical focus and conversational spark to 
          any environment that hopes to cultivate experiences that can be used in our joined approach to 
          developmental tasks. I really enjoy flexibility and a commitment to communication. Staying in the 
          loop and also remembering to update my peers are large focuses of mine. My style is consistent and
          laid-back, but never shy to get into a heated-debate about childhood mmorpgs.
        </p>

        <p>

        </p>

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
