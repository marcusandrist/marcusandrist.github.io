import Orbiter from "../components/Orbiter";
import { Information, Header, ScrollingBar } from "../components/Information";

export default function Home() {
return (
<div>
  
  <Header />

  <Information />

  {/* Orbiting earth png */}
  <Orbiter image_path="/earth.png" mobile_image_path="/earth.png"/>

</div>
);
}
