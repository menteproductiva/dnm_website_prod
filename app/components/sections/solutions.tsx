import { useTranslations } from "next-intl";

export const Solutions = () => {
  const t = useTranslations("home.section_solutions");
  return (
    <section className="mx-auto w-full lg:w-3/4" id="section-branding">
      <p className="relative flex flex-col justify-around items-center gap-5 lg:gap-10 lg:mr-auto px-5 py-20 w-full lg:w-1/2 text-white">
        <span className="w-full text-primary2-500 text-xl text-left">
          {t("title-prologue")}
        </span>
        <span className="mr-auto w-3/4 lg:w-full font-semibold text-3xl mf:text-3xl lg:text-5xl">
          {t("title")}
        </span>
        <span className="opacity-60 text-xl">{t("title-paragraph")}</span>
      </p>
    </section>
  );
};
