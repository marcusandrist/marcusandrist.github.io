import logo from './logo.svg';
import videoFile from "./test-vid.mp4";
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
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Resume Copy (PDF)</a></li>
          </ul>
        </nav>

      <main>

      <article>
        <h2>Professional Experience</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam
          lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam
          viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent
          et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt
          congue enim, ut porta lorem lacinia consectetur.
        </p>

        <h3>Subsection</h3>

        <p>
          Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem.
          Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.
        </p>

        <p>
          Pelientesque auctor nisi id magna consequat sagittis. Curabitur
          dapibus, enim sit amet elit pharetra tincidunt feugiat nist imperdiet.
          Ut convallis libero in urna ultrices accumsan. Donec sed odio eros.
        </p>

        <h3>Another subsection</h3>

        <p>
          Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum
          soclis natoque penatibus et manis dis parturient montes, nascetur
          ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem
          facilisis semper ac in est.
        </p>

        <p>
          Vivamus fermentum semper porta. Nunc diam velit, adipscing ut
          tristique vitae sagittis vel odio. Maecenas convallis ullamcorper
          ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi
          diam iaculis velit, is fringille sem nunc vet mi.
        </p>
      </article>
    </main>

    <footer>
      <p>Created using React</p>
    </footer>
  </body>
    </div>
  );
}

export default App;
