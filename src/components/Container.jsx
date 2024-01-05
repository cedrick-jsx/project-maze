export default function Container(props) {
  return (
    <section
      className={`flex flex-col place-content-center place-items-center ${
        props.value === "center" &&
        "absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 origin-center"
      }`}
    >
      {props.children}
    </section>
  );
}

const HeaderDiv = (props) => {
  return (
    <div
      className={
        "w-full py-[3%] bg-gradient-to-t from-pink-50 via-pink-500 to-pink-700"
      }
    >
      {props.children}
    </div>
  );
};

const MarginDiv = () => {
  return <div className={"py-[5%]"}></div>;
};

const AbsoluteDiv = (props) => {
  return (
    <div
      className={`grid 4xs:grid-cols-[175px_auto] 4xs:w-[280px] 3xs:grid-cols-[175px_auto] 3xs:w-[280px] 2xs:grid-cols-[235px_auto] 2xs:w-[380px] xs:grid-cols-[305px_auto] xs:w-[480px] sm:grid-cols-[375px_auto] sm:w-[580px] md:grid-cols-[375px_auto] md:w-[580px] lg:grid-cols-[375px_auto] lg:w-[580px] xl:absolute xl:top-[50] xl:left-[-55%] xl:grid-cols-1 xl:place-content-center xl:place-items-center 2xl:absolute 2xl:top-[50] 2xl:left-[-60%] 2xl:grid-cols-1 2xl:place-content-center 2xl:place-items-center ${
        props.value === "guide" &&
        "hidden xl:grid xl:left-full xl:right-[-45%] 2xl:grid 2xl:left-full 2xl:right-[-50%]"
      }`}
    >
      {props.children}
    </div>
  );
};

const GuideParentContainer = (props) => {
  return (
    <div
      className={
        "lg:flex xl:flex 2xl:flex 4xs:w-[95%] 3xs:w-[95%] 2xs:w-[80%] xs:w-[75%] sm:w-[75%] md:w-[70%] lg:w-[1000px] xl:w-[1100px] 2xl:w-[1200px]"
      }
    >
      {props.children}
    </div>
  );
};

const GuideMainContainer = (props) => {
  return (
    <div
      className={`flex mt-[5%] px-[5%] w-full mb-[30px] lg:flex-col xl:flex-col 2xl:flex-col ${
        props.value === "arrowKeys" && "lg:order-2 xl:order-2 2xl:order-2"
      }`}
    >
      {props.children}
    </div>
  );
};

const GuideChildrenContainer = (props) => {
  return (
    <div
      className={
        "flex flex-col place-content-center place-items-center w-full lg:mb-[5%] xl:mb-[5%] 2xl:mb-[5%]"
      }
    >
      {props.children}
    </div>
  );
};

const GuideContainer = (props) => {
  return (
    <div
      className={`font-concert font-medium tracking-[1px] flex place-content-center place-items-center w-full uppercase mb-[20px] 4xs:text-[14px] 3xs:text-[14px] 2xs:text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px]`}
    >
      {props.children}
    </div>
  );
};

const GuideContent = (props) => {
  return (
    <p
      className={
        "4xs:w-[80%] 3xs:w-[80%] 2xs:w-[320px] xs:w-[460px] sm:w-[510px] md:w-[560px] lg:w-[600px] xl:w-[650px] 2xl:w-[700px] text-[#f1eaff] drop-shadow-textShadow"
      }
    >
      {props.children}
    </p>
  );
};

const GuideContentChildren = (props) => {
  return (
    <div
      className={
        "lg:flex lg:flex-col lg:place-content-center lg:place-items-center xl:flex xl:flex-col xl:place-content-center xl:place-items-center 2xl:flex 2xl:flex-col 2xl:place-content-center 2xl:place-items-center"
      }
    >
      {props.children}
    </div>
  );
};

const GuideKey = (props) => {
  return (
    <div className="w-full uppercase tracking-[1px] font-concert font-bold text-pink-500 drop-shadow-textShadow 4xs:text-[2rem] 3xs:text-[2rem] 2xs:text-[2.3rem] xs:text-[2.6rem] sm:text-[2.9rem] md:text-[3.2rem] lg:text-[3.5rem] xl:text-[3.8rem] 2xl:text-[4.2rem] lg:text-center xl:text-center 2xl:text-center">
      <p>{props.children}</p>
    </div>
  );
};

export {
  HeaderDiv,
  MarginDiv,
  AbsoluteDiv,
  GuideParentContainer,
  GuideMainContainer,
  GuideChildrenContainer,
  GuideContainer,
  GuideContent,
  GuideContentChildren,
  GuideKey,
};
