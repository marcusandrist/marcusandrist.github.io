//import Image from "next/image";

export default function Home() {
  return (
<div className="bg-gray-50 min-h-screen flex items-center justify-center px-16">
  <div className="relative w-full max-w-lg">
    <div className="absolute top-0 -left-4 w-[44rem] h-[44rem] bg-black 
    rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob"></div>
    <div className="absolute top-0 -right-4 w-[44rem] h-[44rem] bg-yellow-300 rounded-full 
    mix-blend-multiply filter blur-xl opacity-77 animate-blobber animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-[44rem] h-[44rem] bg-pink-300 rounded-full 
    mix-blend-multiply filter blur-xl opacity-84 animate-blobber animation-delay-3000"></div>
  </div>
</div>
  );
}
