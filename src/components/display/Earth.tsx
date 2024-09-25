export const Earth = () => {
  return (

  <div className={["absolute","top-[20vh]","left-[50vw]","z-1","h-[200px]",
    "w-[200px]","md:bg-[url('/earth.png')]","bg-no-repeat","animate-orbit",
    "bg-[url('/small_earth.png')]","animate-orbit","overflow-hidden",
    ].join(" ")}
  >
  </div>

  );
}
