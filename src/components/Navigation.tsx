import Image from "next/image";
import linkedInIcon from "../../public/images/linkedin.png";

export function MobileNav({classname}:{classname:string;}) {

  return (

  <div className={[classname,"absolute","bg-purple","bg-opacity-95"].join(" ")} >
    <Image
      src={linkedInIcon}
      alt="My LinkedIn"
    />
  </div>

  );
}
{/*
function JsonImage(id: { id: string }) {

  const { src, x, y, alt } = images[id];

  return (
  
  <Image
    src={src}
    width={width}
    height={height}
    alt={alt}
  />

  );
}
*/}
