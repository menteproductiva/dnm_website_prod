import { useTranslations } from "next-intl";

export const Solutions = () => {
  const t = useTranslations("home.section_solutions");
  return (
    <section className="relative flex flex-col justify-around items-center gap-10 lg:mr-auto px-5 py-20 w-full lg:w-1/2 text-white">
      <p className="opacity-60 w-full text-xl text-left">
        {t("title-prologue")}
      </p>
      <p className="font-semibold text-5xl"> {t("title")} </p>
      <p className="opacity-60 text-xl">{t("title-paragraph")}</p>
    </section>
  );
};
