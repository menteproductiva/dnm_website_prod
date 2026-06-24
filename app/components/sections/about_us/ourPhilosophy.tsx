import { useTranslations } from "next-intl";
import Image from "next/image";

export const OurPhilosophy = () => {
  const t = useTranslations("about_us.section_ourPhilosophy");

  const cardsIconProps = {
    width: 200,
    height: 200,
    alt: "card_image",
    className: "w-8 h-8 aspect-square relative",
  };

  const cardsInfo = [
    {
      icon: <Image src="/icons/CircleDotOrange.svg" {...cardsIconProps} />,
      title: t("cards_info_0.title.0"),
      titleHighlight: t("cards_info_0.title.1"),
      text: t("cards_info_0.text"),
      gradientTop: false,
    },
    {
      icon: <Image {...cardsIconProps} src="/icons/CompassOrange.svg" />,
      title: t("cards_info_1.title.0"),
      titleHighlight: t("cards_info_1.title.1"),
      text: t("cards_info_1.text"),
      gradientTop: false,
    },
    {
      icon: <Image {...cardsIconProps} src="/icons/CompassOrange.svg" />,
      title: t("cards_info_2.title.0"),
      titleHighlight: t("cards_info_2.title.1"),
      text: t("cards_info_2.text"),
      gradientTop: true,
    },
    {
      icon: <Image {...cardsIconProps} src="/icons/LayersOrange.svg" />,
      title: t("cards_info_3.title.0"),
      titleHighlight: t("cards_info_3.title.1"),
      text: t("cards_info_3.text"),
      gradientTop: true,
    },
  ];

  return (
    <section className="relative flex flex-col justify-around items-center gap-7 xl:gap-9 bg-black mx-auto px-5 py-20 w-full h-full">
      {/* ----------  Top ----------   */}
      <div className="flex flex-col gap-5 mx-auto w-3/5 text-white">
        <h1 className="w-full text-center">{t("pre-title")}</h1>
        <h2 className="w-full text-center">
          <span className="">{t("title.0")}</span>
          <span className="text-primary2-500">{t("title.1")}</span>
          <span className="">{t("title.2")}</span>
        </h2>
        <p className="w-full text-center">{t("sub-title")}</p>
      </div>

      {/* ----------  Grid ----------   */}
      <div className="flex flex-col bg-slate-900/20 border-white/20 border-r w-full h-full text-white">
        <div className="flex flex-row items-stretch w-full h-1/2">
          <Card {...cardsInfo[0]} />
          <Card {...cardsInfo[1]} />
        </div>
        <div className="flex flex-row items-stretch border-white/20 border-t border-b w-full h-1/2">
          <Card {...cardsInfo[2]} />
          <Card {...cardsInfo[3]} />
        </div>
      </div>
    </section>
  );
};

const Card = ({
  icon,
  title,
  titleHighlight,
  text,
  gradientTop,
}: {
  icon: any;
  title: string;
  titleHighlight: string;
  text: string;
  gradientTop: boolean;
}) => {
  return (
    <div className="group relative flex flex-col gap-3 p-10 pt-15 border-white/20 border-l w-full h-full">
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 pointer-events-none ${
          gradientTop
            ? "bg-linear-to-b from-white/10 to-transparent"
            : "bg-linear-to-b from-transparent to-white/10"
        }`}
      />

      {icon}
      <h3 className="relative flex flex-col pl-0 group-hover:pl-2 duration-500">
        <span className="font-semibold"> {title}</span>
        <span className="font-semibold text-primary2-500">
          {titleHighlight}
        </span>
      </h3>
      <p className="relative flex flex-col pt-3">
        <span className="h-20">{text}</span>
      </p>

      <p className="top-1/3 left-0 absolute bg-slate-500 rounded-r-2xl w-2 h-10 group-hover:h-14 duration-500" />
    </div>
  );
};
