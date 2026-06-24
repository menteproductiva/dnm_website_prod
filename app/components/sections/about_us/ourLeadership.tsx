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
      instagram: "/instagram_link",
      tiktok: "/tiktok_link",
      roles: t("cards_info.card_0.roles"),
    },
    {
      imageSrc: "/leadership/martinez.png",
      title: t("cards_info.card_1.title"),
      subtitle: t("cards_info.card_1.subtitle"),
      text: t("cards_info.card_1.text"),
      instagram: "/instagram_link",
      tiktok: "/tiktok_link",
      roles: t("cards_info.card_1.roles"),
    },
  ];

  return (
    <section className="relative flex flex-col justify-around items-center gap-7 xl:gap-9 bg-black mx-auto px-5 py-20 w-full h-full">
      {/* ----------  Top ----------   */}
      <div className="flex flex-row justify-between gap-5 w-full text-white">
        <div className="w-2/5">
          <h1 className="w-full text-left">{t("pre-title")}</h1>
          <h2 className="w-full text-left">
            <span className="">{t("title.0")} </span>
            <span className="text-primary2-500">{t("title.1")} </span>
            <span className="">{t("title.2")}</span>
          </h2>
        </div>
        <p className="my-auto w-2/5 text-lg">{t("text")}</p>
      </div>

      {/* ----------  Grid ----------   */}
      <div className="flex flex-col bg-slate-900/20 w-full text-white">
        <div className="flex flex-row w-full">
          <Card {...cardsInfo[0]} />
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
    <div className="group relative flex flex-col border-white/20 w-full h-full">
      <Image
        src={imageSrc}
        alt="card_image"
        className="w-full h-auto"
        width="1000"
        height="1000"
      />
      <div className="flex flex-col gap-5 bg-slate-950/50 p-7">
        {/* Head  */}
        <h3 className="relative flex flex-col pl-0 duration-500">
          <span className="font-semibold"> {title}</span>
          <span className="font-semibold text-primary2-500 uppercase">
            {subtitle}
          </span>
        </h3>
        {/* Body  */}
        <p className="relative flex flex-col">
          <span className="lg:h-fit">{text}</span>
        </p>
        <div className="bg-slate-800 w-full h-0.5" />
        {/* Footer  */}
        <p className="relative flex flex-row gap-2 text-slate-200/80">
          <Link href={tiktok} className="">
            <Image
              src="/icons/tiktok.svg"
              width={200}
              height={200}
              alt="tiktok"
              className="w-10 h-10"
            />
          </Link>
          <Link href={instagram} className="">
            <Image
              src="/icons/instagram.svg"
              width={200}
              height={200}
              alt="tiktok"
              className="w-10 h-10"
            />
          </Link>
          <span className="my-auto w-full uppercase">{roles}</span>
        </p>
      </div>
    </div>
  );
};
