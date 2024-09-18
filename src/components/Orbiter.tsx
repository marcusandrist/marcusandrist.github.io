interface OrbiterProps {
  mobile_image_path: string;
  image_path: string;
}

export default function Orbiter({ mobile_image_path, image_path }: OrbiterProps) {
return (
<div>
  <div className=
    {["absolute","top-[20vh]","left-[50vw]","z-1","h-[25vh]","w-[25vw]",
    "md:bg-[url('/earth.png')]","bg-no-repeat","bg-[url('/small_earth.png')]",
    "animate-orbit"].join(" ")}
  >
  </div>
  </div>
);
}
