import { useTranslations } from "next-intl";
import { LongArrow } from "../icons/icons";

export const AboutUs = () => {
  return (
    <section>
      <ContentDesktop />
      <ContentMobile />
    </section>
  );
};

const ContentMobile = () => {
  return (
    <div
      className={` lg:hidden my-10 rounded-xl mx-auto  h-fit text-white align-middle duration-500 w-full lg:w-3/4 `}
    >
      <Content />
    </div>
  );
};
const ContentDesktop = () => {
  return (
    <div
      className={`hidden lg:block my-10 rounded-xl mx-auto  h-fit text-white align-middle duration-500 w-full lg:w-3/4 `}
      style={{
        padding: ".12rem",
        background: `linear-gradient( 0deg, #0000, #fff5, var(--color-primary2-500),   var(--color-primary2-500),   #fff5, #0000`,
      }}
    >
      <Content />
    </div>
  );
};

const Content = () => {
  const t = useTranslations("home.section_about_us");

  return (
    <div className="flex flex-col gap-5 md:gap-7 lg:gap-10 lg:bg-gray-950 md:px-20 py-10 rounded-2xl w-full h-full">
      <p className="relative flex flex-col justify-around items-center gap-5 lg:gap-10 mr-auto lg:mr-auto px-5 w-full md:w-4/5 font-semibold text-white text-3xl md:text-4xl">
        {/* Sin estrategia, la marca  */}
        {t("title")}
      </p>

      <p className="flex md:flex-row flex-col justify-around items-center gap-5 md:ml-auto px-5 w-full lg:w-3/4 text-white mx:auto">
        <span className="flex flex-row md:justify-end gap-5 mr-auto w-full font-semibold">
          {/* Quienes somos  */}
          <span className={"w-auto my-auto"}>{t("subtitle")}</span>
          <LongArrow
            className="hidden md:block my-auto w-10 h-10"
            direction="right"
          />
        </span>
        <span className="bg-primary2-500 px-4 py-2 rounded-xl w-3/4 md:w-full text-xl text-center line-clamp-1 mx:auto">
          {/* Conocer DNM */}
          {t("btn")}
        </span>
      </p>
    </div>
  );
};
