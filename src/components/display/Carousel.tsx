interface navigateProps {
  width: number;
  height: number;
  color: string;
}

export const Carousel = () => {

  let color = "#DBD3D2";

 return (

  <div className={["mt-[1vh]","mx-[2vw]","bg-lighterpalecreme","bg-opacity-100",
  "rounded-xl","border-bluegray","border-2","h-[35vh]"].join(" ")}>
    <div className={["absolute"].join(" ")}>
      <NavigateLeft width={200} height={170} color={color} />
      <NavigateRight width={200} height={170} color={color} />
    </div>
  </div>

  );
}

const NavigateLeft = ({ width, height, color }: navigateProps) => {
  return (

  <div>
    <svg width={width} height={height} viewbox="0 0 200 200">
    <path d="M100 -8, 25 -40 Q120 -60, 90 -20"
      fill="none" stroke={color} stroke-width="5" transform="translate(0, 88)"/>
    <path d="M100 8, 25 40 Q120 60, 90 20"
      fill="none" stroke={color} stroke-width="5" />
    </svg>
  </div>  

  );
}

const NavigateRight = ({ width, height, color }: navigateProps) => {
  return (

  <div classname="">
    <svg width={width} height={height} viewbox="0 0 200 200">
    <path d="M-100 -8, -25 -40 Q-120 -60, -90 -20"
      fill="none" stroke={color} stroke-width="5" transform="translate(100, 88)"/>
    <path d="M-100 8, -25 40 Q-120 60, -90 20"
      fill="none" stroke={color} stroke-width="5" transform="translate(100,0)"/>
    </svg>
  </div>

  );
}
