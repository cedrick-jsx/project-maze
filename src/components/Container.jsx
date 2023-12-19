export default function Container(props) {
  return (
    <section
      className={`flex flex-col place-content-center place-items-center ${
        props.value === "center" &&
        "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      }`}
    >
      {props.children}
    </section>
  );
}
