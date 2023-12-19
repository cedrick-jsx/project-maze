export default function Header(props) {
  return (
    <h1
      className={`font-titan text-[2.5rem] text-center uppercase tracking-[5px] w-full bg-gradient-to-t from-[#e4f1ff] via-[#7e30e1,#e26ee5] to-[#fed9ed] bg-clip-text text-transparent drop-shadow-custom`}
    >
      {props.children}
    </h1>
  );
}
