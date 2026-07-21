import { useTranslations } from "next-intl";
import { Compass, Layers, Target } from "../../icons/icons";

export const WhoAreWe = () => {
  const t = useTranslations("about_us.section_whoAreWe");

  const bulletPoints = [
    {
      icon: <Compass strokeWidth={0.2} />,
    },
    {
      icon: <Compass strokeWidth={0.2} />,
    },
    {
      icon: <Layers strokeWidth={0.2} />,
    },
  ];
  return (
    <section className="relative flex md:flex-row flex-col justify-around items-center gap-7 xl:gap-9 bg-black mx-auto px-5 lg:px-0 py-20 w-full h-full">
      {/* ----------  Left Side ----------   */}
      <div className="flex flex-col gap-2 md:gap-5 mb-5 xl:mb-auto w-full md:w-1/3 h-1/3 text-white">
        <h1>{t("pre-title")}</h1>
        <h2 className="md:flex md:flex-col">
          <span className="text-3xl md:text-6xl">{t("title.0")} </span>
          <span className="text-primary2-500 text-3xl md:text-6xl">
            {t("title.1")}{" "}
          </span>
          <span className="text-3xl md:text-6xl">{t("title.2")} </span>
          <span className="text-3xl md:text-6xl">{t("title.3")} </span>
        </h2>
      </div>

      {/* ----------  Bullet Points ----------   */}
      <div className="flex flex-col gap-10 mb-5 xl:mb-10 w-full md:w-2/3 h-1/3 text-neutral2-500">
        <p>
          <span className="font-bold text-white">{t("text.0")}</span>
          {t("text.1")}
        </p>
        <p>{t("text.2")}</p>
        <p>{t("text.3")}</p>

        <p className="bg-white/10 h-0.5" />

        <div className="flex md:flex-row flex-col gap-4 md:gap-2">
          {bulletPoints.map(({ icon }, index) => (
            <BulletPoint
              key={`bulletPoint-${index}`}
              icon={icon}
              title={t(`bullet_point_${index}.0`)}
              text={t(`bullet_point_${index}.1`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const BulletPoint = ({
  icon,
  text,
  title,
}: {
  icon: any;
  text: string;
  title: string;
}) => {
  return (
    <div className="group flex flex-row lg:flex-col gap-6 w-full lg:h-fit">
      <p className="bg-slate-900 p-2 border-2 border-primary2-500 rounded w-fit h-fit group-hover:-translate-y-2 duration-500">
        {icon}
      </p>
      <p className="flex flex-col gap-3">
        <span className="lg:h-fit font-bold text-white text-lg md:text-xl">
          {title}
        </span>
        <span className="lg:h-fit text-md">{text}</span>
      </p>
    </div>
  );
};
