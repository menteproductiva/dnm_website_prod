import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const OurLeadership = () => {
  const t = useTranslations("about_us.section_ourLeadership");

  const cardsInfo = [
    {
      imageSrc: "/leadership/garnica.png",
      title: t("cards_info.card_0.title"),
      subtitle: t("cards_info.card_0.subtitle"),
      text: t("cards_info.card_0.text"),
      instagram: "https://www.instagram.com/arqui.jose.garnica/",
      tiktok: "https://www.tiktok.com/@arquijosegarnica",
      roles: t("cards_info.card_0.roles"),
    },
    {
      imageSrc: "/leadership/martinez.png",
      title: t("cards_info.card_1.title"),
      subtitle: t("cards_info.card_1.subtitle"),
      text: t("cards_info.card_1.text"),
      instagram: "https://www.instagram.com/javimartinezleyva1/",
      tiktok: "https://www.tiktok.com/@javimartinezleyva1",
      roles: t("cards_info.card_1.roles"),
    },
  ];

  return (
    <section className="relative flex flex-col justify-around items-center gap-4 bg-black mx-auto px-5 md:px-0 py-20 w-full h-full">
      {/* ----------  Header/Pre-title ----------   */}
      <h1 className="w-full text-left">{t("pre-title")}</h1>
      {/* ----------  Top ----------   */}
      <div className="flex md:flex-row flex-col justify-between gap-5 w-full text-white">
        {/* Title  */}
        <div className="w-full md:w-2/5">
          <h2 className="w-full text-left">
            <span className="text-5xl">{t("title.0")} </span>
            <span className="text-primary2-500 text-5xl">{t("title.1")} </span>
            <br />
            <span className="text-5xl">{t("title.2")}</span>
          </h2>
        </div>
        {/* body */}
        <p className="mb-auto w-full md:w-2/5 text-neutral2-500 text-lg">
          {t("text")}
        </p>
      </div>

      {/* ----------  Grid ----------   */}
      <div className="flex lg:flex-row flex-col bg-slate-900/20 mt-7 xl:mt-9 w-full text-white">
        <div className="w-full">
          <Card {...cardsInfo[0]} />
        </div>
        <div className="w-full">
          <Card {...cardsInfo[1]} />
        </div>
      </div>
    </section>
  );
};

const Card = ({
  imageSrc,
  title,
  subtitle,
  text,
  instagram,
  tiktok,
  roles,
}: {
  imageSrc: string;
  title: string;
  subtitle: string;
  text: string;
  instagram: string;
  tiktok: string;
  roles: string;
}) => {
  return (
    <div className="group relative flex flex-col border border-white/20 w-full h-min lg:h-full lg:aspect-2/3 grow">
      <Image
        src={imageSrc}
        alt="card_image"
        className="w-full lg:h-1/2 object-cover"
        width="1000"
        height="1000"
      />

      {/* -------------------- TEXT BODY -------------------- */}
      <div className="flex flex-col gap-5 bg-slate-950/50 p-7 md:p-4 lg:h-1/2 lg:text-sm md:text-lg text-xl xl:text-xl 2xl:text-2xl">
        {/* Head  */}
        <h3 className="relative flex flex-col pl-0 lg:h-1/5 duration-500">
          <span className="font-semibold"> {title}</span>
          <span className="text-primary2-500 uppercase">{subtitle}</span>
        </h3>
        {/* Body  */}
        <p className="relative flex flex-col lg:h-3/5">
          <span className="h-full text-neutral2-500">{text}</span>
        </p>
        <div className="bg-slate-800 w-full h-0.5" />
        {/* Footer  */}
        <p className="relative flex flex-row gap-2 lg:gap-1 lg:h-1/5 text-slate-200/80 lg:text-xs xl:text-lg 2xl:text-xl">
          <Link
            href={tiktok}
            className="bg-black hover:invert my-auto p-1 lg:p-0 rounded-full w-10 lg:w-8 xl:w-10 h-10 lg:h-8 xl:h-10 aspect-square duration-500"
          >
            <Image
              src="/icons/tiktok.svg"
              width={200}
              height={200}
              alt="tiktok"
              className="w-full h-full"
            />
          </Link>
          <Link
            href={instagram}
            className="bg-black hover:invert my-auto p-1 lg:p-0 rounded-full w-10 lg:w-8 xl:w-10 h-10 lg:h-8 xl:h-10 aspect-square duration-500"
          >
            <Image
              src="/icons/instagram.svg"
              width={200}
              height={200}
              alt="tiktok"
              className="w-full h-full"
            />
          </Link>
          <span className="my-auto w-full uppercase">{roles}</span>
        </p>
      </div>
    </div>
  );
};
