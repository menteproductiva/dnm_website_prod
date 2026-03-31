import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightUp } from "../icons/icons";

export const Branding = ({}: {}) => {
  const t = useTranslations("home.section_branding");
  return (
    <section className="flex lg:flex-row flex-col lg:gap-5 py-10 lg:h-auto">
      <div className="bg-white/20 mx-auto lg:mx-0 my-10 lg:my-0 w-3/4 lg:w-0.5 h-0.5 lg:h-auto" />
      {new Array(2).fill(null).map((_, index) => (
        <div key={index} className="w-1/2">
          <BrandingSection
            title={t(`branding_titles.${index}`)}
            subtitle={t(`branding_subtitles.${index}`)}
            text={t(`branding_texts.${index}`)}
            graphic={`home/graphic${index + 1}.svg`}
            link="/"
          />
          <div className="bg-white/20 mx-auto lg:mx-0 my-10 lg:my-0 w-3/4 lg:w-0.5 h-0.5 lg:h-auto" />
        </div>
      ))}

      <div className="bg-white/20 mx-auto lg:mx-0 my-10 lg:my-0 w-3/4 lg:w-0.5 h-0 lg:h-auto" />
    </section>
  );
};

const BrandingSection = ({
  title,
  subtitle,
  text,
  graphic,
  link,
}: {
  title: string;
  subtitle: string;
  text: string;
  graphic: string;
  link: string;
}) => {
  const t = useTranslations("home.section_branding");

  return (
    <div className="relative flex flex-col justify-around items-center gap-14 px-5 py-10 w-full text-white">
      <p className="lg:px-10 w-full text-primary2-500 text-3xl text-left">
        {title}
      </p>
      <p className="flex flex-col gap-6 lg:px-10">
        <span className="font-semibold text-lg">{subtitle}</span>
        <span className="opacity-60 text-xl">{text}</span>
      </p>
      <Image
        src={graphic}
        alt="isotipo.svg"
        height={200}
        width={200}
        className="my-auto w-full h-auto object-cover"
      />

      {/* Black Gradient  */}
      <div className="bottom-10 absolute bg-linear-to-b from-transparent to-black w-full h-1/2 to"></div>

      <div className="bottom-10 z-10 absolute flex">
        <Link
          href={link}
          className="flex flex-row gap-3 bg-black mt-auto px-10 py-5 border-2 border-primary2-500 rounded-xl"
        >
          <span className="my-auto">{t("btn")}</span>
          <ArrowRightUp strokeWidth={4} className="my-auto" size={15} />
        </Link>
      </div>
    </div>
  );
};
