import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightUp, Building, User } from "../../icons/icons";
import image1 from "@/public/home/graphic1.png";
import image2 from "@/public/home/graphic2.png";
import { Button } from "../../button";

export const Branding = ({}: {}) => {
  const t = useTranslations("home.section_branding");
  const images = [image1, image2];
  const branding = [
    {
      icon: <User color="#c3682b" size={30} />,
      image: image1,
    },
    {
      icon: <Building color="#c3682b" size={30} />,
      image: image2,
    },
  ];
  return (
    <section className="flex lg:flex-row flex-col mx-auto px-0 md:px-5 lg:px-0 py-10 w-full md:h-auto">
      <div className="bg-white/20 mx-auto my-10 md:my-0 w-3/4 md:w-0.5 h-0.5 md:h-auto" />
      {branding.map(({ icon, image }, index) => (
        <div key={index} className="flex md:flex-row flex-col w-full lg:w-1/2">
          <BrandingSection
            icon={icon}
            title={t(`branding_titles.${index}`)}
            subtitle={t(`branding_subtitles.${index}`)}
            text={t(`branding_texts.${index}`)}
            image={image}
            link="/"
          />
          {/* Bottom decorator (Mobile) */}
          <div className="md:hidden bg-white/20 mx-auto my-10 w-3/4 h-0.5" />
          {/* Vertical decorator (Desktop) */}
          <div className="bg-white/20 w-0.5 h-auto" />
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
  icon,
}: {
  title: string;
  subtitle: string;
  text: string;
  image: any;
  link: string;
  icon: any;
}) => {
  const t = useTranslations("home.section_branding");

  return (
    <div className="group relative flex flex-col justify-around items-center gap-14 hover:bg-white/10 px-5 py-10 w-full text-white duration-500">
      <p className="flex flex-row items-center gap-2 md:px-10 w-full text-primary2-500 text-3xl text-left">
        {icon}
        <span>{title}</span>
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
      <div className="bottom-0 absolute bg-linear-to-b from-transparent to-black w-full h-1/2 to"></div>

      {/* <Button link={link} text={t("btn")} /> */}
    </div>
  );
};
