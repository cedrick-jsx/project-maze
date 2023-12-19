import { useNavigate } from "react-router";

export default function Button(props) {
  const navigate = useNavigate("");

  return (
    <button
      className={
        "w-[180px] my-[15px] rounded-[0.25rem] bg-[#f1eaff] shadow-[0_2px_0_0_#000000,0_10px_0_0_#d0a2f7] drop-shadow-custom hover:bg-[#392467] hover:active:translate-y-[3px] hover:active:shadow-none"
      }
      onClick={() => {
        if (props.value === "about") navigate("/About", { replace: true });
        else if (props.value === "start" || props.value === "level")
          navigate("/Level", { replace: true });
        else if (props.value === "back") navigate("/", { replace: true });
        else if (props.value === "play") navigate("/Play", { replace: true });
      }}
    >
      {props.children}
    </button>
  );
}

const ButtonChildrenContainer = (props) => {
  return (
    <div
      className={
        "grid grid-cols-[auto_66%] place-content-center place-items-center text-[#392467] hover:text-[#f1eaff]"
      }
    >
      {props.children}
    </div>
  );
};

const ButtonChildren = (props) => {
  return (
    <p className={"font-titan text-[1.5rem] tracking-[3px] uppercase"}>
      {props.children}
    </p>
  );
};

export { ButtonChildrenContainer, ButtonChildren };
