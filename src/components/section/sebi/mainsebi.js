"use client";

import SebiDetails from "./sebiDetails";
import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import SebiBanner from "./sebiBanner";
import AnimateOnScroll from "@/components/common/animateContent/animation";

function Mainsebi() {
  // const [activeSlide, setActiveSlide] = useState(0);

  // const handleSlideChange = () => {
  //   setActiveSlide(1);

  const Children = [
    {
      comp: <SebiBanner />,
      classCss: "section",
    },
    {
      comp: (
        <div className="mt-14 flex justify-center items-center mb-20">
          <SebiDetails />
        </div>
      ),
      classCss: "",
    },
  ];

  return (
    <Pagewrapper>
      {/* <div className="">
        <Image
          src={sebiImage}
          alt="Sebi Image"
          className="w-full object-cover mx-auto h-screen"
        />
      </div>
      <div className="mt-14 flex flex-wrap justify-center items-center mb-32">
        <SebiDetails />
      </div> */}
      <ScrollSnip Children={Children} />
    </Pagewrapper>
  );
}

export default Mainsebi;
