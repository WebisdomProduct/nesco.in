"use client";

import Pagewrapper from "@/components/layout/pagewrapper";
import ScrollSnip from "@/components/layout/scrollSnipEffect/scrollSnip";
import ShareBanner from "./ShareBanner";
import ShareInvestor from "./shareInvestor";
import ShareCorner from "./ShareCorner";
import ShareUnclaimed from "./shareUnclaimed";
import ShareDetail from "./ShareDetail";

function MainShareholder() {
  // const [activeSlide, setActiveSlide] = useState(0);

  // const handleSlideChange = () => {
  //   setActiveSlide(1);

  const Children = [
    {
      comp: <ShareBanner />,
      classCss: "",
    },
    {
      comp: <ShareInvestor />,
      classCss: "",
    },
    {
      comp: <ShareCorner />,
      classCss: "",
    },
    {
      comp: <ShareUnclaimed />,
      classCss: "",
    },
    {
      comp: <ShareDetail />,
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

export default MainShareholder;
