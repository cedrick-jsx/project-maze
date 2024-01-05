export default function Header(props) {
  return (
    <h1
      className={`font-titan text-center uppercase tracking-[5px] w-full bg-[linear-gradient(to_top,#e4f1ff,#7e30e1,#e26ee5,#392467)] bg-clip-text text-transparent drop-shadow-custom 2xs:text-[2.3rem] xs:text-[2.6rem] sm:text-[2.9rem] md:text-[3.2rem] lg:text-[3.5rem] xl:text-[3.8rem] 2xl:text-[4.2rem] transition-all relative ${
        props.value === "guide"
          ? "hover:bg-gradient-to-t from-[#ee0a67] via-[#ee0979] to-[#fea1be] hover:duration-1000 before:absolute before:bottom-0 before:w-full before:h-[13%] before:rounded-full hover:before:bg-[#ee0a67] hover:before:animate-widthChange"
          : props.header === "play"
          ? "4xs:text-[1.7rem] 3xs:text-[1.7rem]"
          : " 4xs:text-[2rem] 3xs:text-[2rem]"
      }`}
    >
      {props.children}
    </h1>
  );
}
