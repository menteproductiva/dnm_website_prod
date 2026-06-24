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
    <section className="relative flex flex-row justify-around items-center gap-7 xl:gap-9 bg-black mx-auto px-5 py-20 w-full h-full">
      {/* ----------  Left Side ----------   */}
      <div className="flex flex-col gap-5 mb-5 xl:mb-auto w-full h-1/3 text-white">
        <h1>{t("pre-title")}</h1>
        <h2 className="flex flex-col">
          <span className="">{t("title.0")} </span>
          <span className="text-primary2-500">{t("title.1")} </span>
          <span className="">{t("title.2")}</span>
          <span className="">{t("title.3")}</span>
        </h2>
      </div>

      {/* ----------  Bullet Points ----------   */}
      <div className="flex flex-col gap-10 mb-5 xl:mb-10 w-full h-1/3 text-white">
        <p>
          <span className="font-bold">{t("text.0")}</span>
          {t("text.1")}
        </p>
        <p>{t("text.2")}</p>
        <p>{t("text.3")}</p>

        <p className="bg-white/10 h-0.5" />

        <div className="flex flex-row gap-2">
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
    <div className="flex flex-row lg:flex-col gap-6 w-full lg:h-fit">
      <p className="bg-slate-900 p-2 border-2 border-primary2-500 rounded w-fit h-fit">
        {icon}
      </p>
      <p className="flex flex-col gap-3">
        <span className="lg:h-fit font-bold text-lg">{title}</span>
        <span className="lg:h-fit text-gray-300 text-md">{text}</span>
      </p>
    </div>
  );
};
