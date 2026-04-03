import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightUp } from "../icons/icons";
import image1 from "@/public/home/graphic1.png";
import image2 from "@/public/home/graphic2.png";

export const Branding = ({}: {}) => {
  const t = useTranslations("home.section_branding");
  const images = [image1, image2];
  return (
    <section className="flex md:flex-row flex-col mx-auto px-0 md:px-5 lg:px-0 py-10 w-full lg:w-3/4 md:h-auto">
      <div className="bg-white/20 mx-auto md:mx-3 my-10 md:my-0 w-3/4 md:w-0.5 h-0.5 md:h-auto" />
      {new Array(2).fill(null).map((_, index) => (
        <div key={index} className="flex md:flex-row flex-col w-full md:w-1/2">
          <BrandingSection
            title={t(`branding_titles.${index}`)}
            subtitle={t(`branding_subtitles.${index}`)}
            text={t(`branding_texts.${index}`)}
            image={images[index]}
            link="/"
          />
          {/* Bottom decorator (Mobile) */}
          <div className="md:hidden bg-white/20 mx-auto my-10 w-3/4 h-0.5" />
          {/* Vertical decorator (Desktop) */}
          <div className="bg-white/20 mx-3 w-0.5 h-auto" />
        </div>
      ))}
    </section>
  );
};

const BrandingSection = ({
  title,
  subtitle,
  text,
  image,
  link,
}: {
  title: string;
  subtitle: string;
  text: string;
  image: any;
  link: string;
}) => {
  const t = useTranslations("home.section_branding");

  return (
    <div className="relative flex flex-col justify-around items-center gap-14 px-5 py-10 w-full text-white">
      <p className="md:px-10 w-full text-primary2-500 text-3xl text-left">
        {title}
      </p>
      <p className="flex flex-col gap-6 md:px-10">
        <span className="font-semibold text-lg">{subtitle}</span>
        <span className="opacity-60 text-xl">{text}</span>
      </p>
      <Image
        src={image}
        alt="isotipo.svg"
        height={200}
        width={200}
        className="my-auto w-full h-auto object-cover"
      />

      {/* Black Gradient  */}
      <div className="bottom-10 absolute bg-linear-to-b from-transparent to-black w-full h-1/2 to"></div>

      {/* <div className="bottom-10 z-10 absolute flex">
        <Link
          href={link}
          className="flex flex-row gap-3 bg-black mt-auto px-10 py-5 border-2 border-primary2-500 rounded-xl"
        >
          <span className="my-auto">{t("btn")}</span>
          <ArrowRightUp strokeWidth={4} className="my-auto" size={15} />
        </Link>
      </div> */}
    </div>
  );
};
