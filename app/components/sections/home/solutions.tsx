import { useTranslations } from "next-intl";

export const Solutions = () => {
  const t = useTranslations("home.section_solutions");
  return (
    <section className="mx-auto w-full" id="section-branding">
      <div className="relative flex flex-col justify-around items-center gap-5 lg:gap-7 xl:gap-3  lg:mr-auto px-5 py-20 w-full lg:w-1/2 text-white">
        <h1 className="">{t("title-prologue")}</h1>
        <h2 className="mr-auto w-3/4 lg:w-full">
          {t("title.0")}
          <span className="text-primary2-500"> {t("title.1")}</span>
          {t("title.2")}
          <span className="text-primary2-500"> {t("title.3")}</span>
          {t("title.4")}
        </h2>
        <p className="opacity-60 text-xl">{t("title-paragraph")}</p>
      </div>
    </section>
  );
};
