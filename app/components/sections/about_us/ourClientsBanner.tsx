import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const OurClientsBanner = () => {
  const t = useTranslations("about_us.section_OurClientsBanner");

  return (
    <section className="relative flex flex-col justify-around items-center gap-7 xl:gap-9 bg-primary1-900 mx-auto px-0 py-20 w-full h-full">
      {/* ----------  Top ----------   */}
      <div className="flex flex-col justify-between gap-5 w-full text-white">
        <h1
          className="w-full text-center"
          style={{
            fontSize: "1.5rem",
          }}
        >
          <span className="md:text-2xl">{t("pre-title")}</span>
        </h1>
        <p className="w-full md:text-5xl text-center uppercase">{t("title")}</p>
      </div>

      {/* ---------- Banner ----------   */}
      <div className="flex flex-row w-full overflow-visible text-white scale-200 md:scale-100">
        <BannerContent />
        <BannerContent />
      </div>
    </section>
  );
};

const BannerContent = ({}: {}) => {
  const images = [
    "a_j_garnica",
    "elite",
    "gabriela_torres",
    "jgs",
    "l_m_de_oca",
  ];
  const imagesAttributes = {
    width: 1000,
    height: 200,
  };

  return (
    <div
      className="flex flex-row justify-around px-0 border-red-500 w-full text-white"
      style={{
        animationName: "ourClientsBannerSlide",
        animationDuration: "20s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
        flexShrink: 0,
        flexGrow: 1,
      }}
    >
      <style>
        {`
          @keyframes ourClientsBannerSlide 
          {
              0%    { transform: translateX(0%);      }
              100%  { transform: translateX(-100%);   }
          }
          `}
      </style>
      {images.map((image, index) => (
        <div
          className="relative border-green-500 w-1/6"
          key={"Client-image" + index}
        >
          <Image
            src={`/clients/${image}.svg`}
            alt={image}
            key={index + "A"}
            {...imagesAttributes}
            style={{
              flexShrink: 0,
              flexGrow: 1,
            }}
            className={` border-blue-500 w-full h-20  ${image === "elite" && "p-3"} ${image === "jgs" && "p-2"} ${image === "a_j_garnica" && "p-2"}`}
          />
        </div>
      ))}
    </div>
  );
};
