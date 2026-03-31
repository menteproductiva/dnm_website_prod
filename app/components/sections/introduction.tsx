import { useTranslations } from "next-intl";
import { Bullseye, Crates, TripleConnection } from "../icons/icons";

export const Introduction = () => {
  const t = useTranslations("home.section_introduction");

  const bulletPoints = [
    {
      icon: <Crates strokeWidth={3} />,
    },
    {
      icon: <Bullseye strokeWidth={3} />,
    },
    {
      icon: <TripleConnection strokeWidth={3} />,
    },
  ];
  return (
    <>
      <section className="relative flex flex-col justify-around items-center bg-black px-5 py-20 w-full h-full">
        {/* ---------- Title ----------   */}
        <div className="flex flex-col gap-7 lg:mr-auto w-full lg:w-1/2 text-white">
          <p className="font-semibold text-5xl"> {t("title")}</p>
          <p className="text-xl">{t("paragraph1")}</p>
          <p className="text-xl">{t("paragraph2")}</p>
        </div>

        {/* ---------- Decorative divisor ----------   */}
        <div className="bg-primary2-500/30 mr-auto w-1/2 h-0.5"></div>

        {/* ----------  Bullet Points ----------   */}
        <div className="flex lg:flex-row flex-col gap-10 w-full h-1/3 text-white">
          {bulletPoints.map(({ icon }, index) => (
            <p
              key={`bulletPoint-${index}`}
              className="flex flex-row lg:flex-col gap-6 w-full lg:h-fit"
            >
              <span className="bg-primary1-500 p-2 border-2 border-primary2-500 rounded w-fit h-fit">
                {icon}
              </span>
              <span className="my-auto w-full lg:h-fit text-xl lg:text-2xl">
                {t(`bullet_point${index + 1}`)}
              </span>
            </p>
          ))}
        </div>

        {/* ----------  Quote ----------   */}
        <div className="flex flex-col gap-5 w-full font-bold text-2xl lg:text-4xl">
          <p className="bg-clip-text bg-linear-to-r from-white to-white/10 w-fit text-transparent">
            {t(`quote1`)}
          </p>
          <p className="bg-clip-text bg-linear-to-l from-white to-white/10 ml-auto w-fit text-transparent text-right">
            {t(`quote2`)}
          </p>
        </div>
      </section>
    </>
  );
};
