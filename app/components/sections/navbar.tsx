"use client";
import Image from "next/image";
import { useState } from "react";
import { Whatsapp } from "../icons/icons";
import { useLocale, useTranslations } from "next-intl";
// Assets
import isotipo from "@/public/branding/isotipo.svg";
import usFlag from "@/public/navbar/us.svg";
import mxFlag from "@/public/navbar/mx.svg";
import whatsappIcon from "@/public/navbar/whatsapp.svg";
import { usePathname, useRouter } from "next/navigation";

export const Navbar = () => {
  return (
    <>
      <NavbarMobile />
      <NavbarDesktop />
    </>
  );
};

const NavbarMobile = () => {
  const t = useTranslations("home.section_navbar");

  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="lg:hidden z-10 absolute flex flex-row justify-between px-6 py-7 w-full text-white text-lg">
      {/* Icon  */}
      <Image
        src={isotipo}
        alt="isotipo.svg"
        height={40}
        width={40}
        className="my-auto w-auto h-7"
      />
      {/* burger button  */}
      <svg
        className="p-1 border border-primary2-500 rounded-sm h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        height={40}
        width={40}
        onClick={() => {
          handleMenuClick();
        }}
      >
        <path
          d=" M 20,30 h 60 m-60,20 h60 m-60,20 h60"
          stroke="white"
          strokeWidth={10}
        />
      </svg>
      {/* -------------------- Menu --------------------   */}
      {showMenu && (
        <div
          className="top-0 left-0 absolute flex flex-col bg-black w-screen h-screen"
          style={{
            animationName: "OpacityFrames",
            animationDuration: "1s",
            animationIterationCount: "1",
          }}
        >
          {/* >>>>> Glow Background <<<<<   */}
          <svg
            className="top-0 absolute w-screen h-screen object-fill pointer-events-none"
            stroke="white"
            strokeWidth={0}
          >
            <defs>
              <radialGradient
                id="heroGlow"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" stopColor="#f9f0ea" stopOpacity=".7" />
                <stop
                  offset="40%"
                  stopColor="var(--color-primary2-500)"
                  stopOpacity="0.5"
                />
                <stop offset="100%" stopColor="transparent" stopOpacity="0.5" />
              </radialGradient>
            </defs>

            <circle
              cx="100%"
              cy="50%"
              r="100%"
              fill="url(#heroGlow)"
              opacity={0.5}
              stroke="white"
            />
          </svg>
          {/* >>>>> Top section <<<<<   */}
          <div className="z-10 flex flex-row justify-between px-6 py-7 w-full text-white text-lg">
            {/* Icon  */}
            <Image
              src={isotipo}
              alt="isotipo.svg"
              height={40}
              width={40}
              className="my-auto w-auto h-7"
            />
            {/* close button  */}
            <svg
              className="p-1 border border-primary2-500 rounded-sm h-full cursor-pointer"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              height={40}
              width={40}
              onClick={() => {
                handleMenuClick();
              }}
              stroke="white"
              strokeWidth={10}
            >
              <path d=" M 20,20 l 60,60 " />
              <path d=" M 80,20 l -60,60 " />
            </svg>{" "}
          </div>
          {/* >>>>> Body <<<<<   */}
          <div className="flex flex-col gap-5 p-5 w-full h-full">
            {/* ---------- Menu ----------   */}
            <p className="flex flex-col gap-5 text-white text-2xl">
              <span className="my-auto w-fit h-min align-middle">
                {t("options.aboutUs")}
              </span>
              <span>{t("options.solutions")}</span>
              <span>{t("options.cases")}</span>
              <span>{t("options.method")}</span>
              <span>{t("options.contact")}</span>
            </p>
            {/* ---------- Whatsapp ----------   */}
            <p className="flex flex-row justify-center gap-5 bg-green-500 mx-auto px-6 py-3 rounded-full w-full md:w-fit h-min text-center">
              <Whatsapp
                color="white"
                size={20}
                strokeWidth={0.75}
                className="my-auto"
              />
              <span className="">{t("whatsappBtn")}</span>
            </p>
            {/* ---------- Language ----------   */}
            <div className="mt-auto mb-5">
              <LanguageButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavbarDesktop = () => {
  const t = useTranslations("home.section_navbar");

  return (
    <header className="hidden z-10 absolute lg:flex flex-row justify-between px-6 lg:px-10 py-7 lg:py-2 2xl:py-4 w-full text-white 2xl:text-md text-lg">
      {/* -------------------- {left-side menu here} -------------------- */}
      {/* Icon  */}
      <div className="flex flex-row lg:gap-10 text-white">
        <Image
          src={isotipo}
          alt="isotipo.svg"
          height={40}
          width={40}
          className=""
        />

        {/* Options  */}
        <span className="my-auto w-fit h-min align-middle">
          {t("options.aboutUs")}
        </span>
        <span className="my-auto w-fit h-min align-middle">
          {t("options.solutions")}
        </span>
        <span className="my-auto w-fit h-min align-middle">
          {t("options.cases")}
        </span>
        <span className="my-auto w-fit h-min align-middle">
          {t("options.method")}
        </span>
        <span className="my-auto w-fit h-min align-middle">
          {t("options.contact")}
        </span>
      </div>
      {/* -------------------- {right-side menu here} -------------------- */}
      <div className="flex flex-row gap-5">
        <LanguageButton />

        <Button>
          <span className="my-auto w-fit h-full align-middle">
            {t("whatsappBtn")}
          </span>
          <Image
            src={whatsappIcon}
            alt="platiquemos"
            width={50}
            height={50}
            className="my-auto w-auto h-7"
          />
        </Button>
      </div>
    </header>
  );
};

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="flex flex-row gap-5 bg-primary1-500 my-auto px-5 2xl:px-7 py-1 lg:border border-primary2-100 2xl:border-2 rounded-full w-fit h-full">
      {children}
    </p>
  );
};
const LanguageButton = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const isEn = locale === "en";
  const nextLocale = isEn ? "es" : "en";

  const toggleLanguage = () => {
    // This removes the current locale from the start of the path
    // and replaces it with the new one
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath || `/${nextLocale}`);
  };

  return (
    <div
      onClick={toggleLanguage}
      className="flex flex-row gap-5 bg-primary1-500 hover:bg-opacity-80 lg:my-auto px-5 2xl:px-4 py-1 border border-primary2-100 2xl:border-2 rounded-full w-fit lg:h-full transition-all cursor-pointer"
    >
      <Image
        src={isEn ? usFlag : mxFlag}
        alt="language flag"
        width={50}
        height={50}
        className="my-auto w-auto h-7"
      />
      <span className="my-auto w-fit h-full font-bold align-middle">
        {isEn ? "EN" : "ES"}
      </span>
    </div>
  );
};
