"use client";
import Image from "next/image";
import { useState } from "react";
import { Whatsapp } from "../icons/icons";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
// Assets
import isotipo from "@/public/branding/isotipo.svg";
import usFlag from "@/public/icons/us.svg";
import mxFlag from "@/public/icons/mx.svg";
import whatsappIcon from "@/public/icons/whatsapp.svg";
import arrowUp from "@/public/icons/arrow-up.svg";
import Link from "next/link";

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
  const [showSubMenu, setShowSubMenu] = useState(false);
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
            <div className="flex flex-col gap-5 text-white text-2xl">
              <span className="my-auto w-fit h-min align-middle">
                {t("options.aboutUs")}
              </span>
              <span>{t("options.solutions")}</span>

              <span>{t("options.cases")}</span>
              <span>{t("options.method")}</span>
              <span>{t("options.contact")}</span>
              <span
                className="flex flex-row gap-2"
                onClick={() => {
                  setShowSubMenu(!showSubMenu);
                }}
              >
                {t("options.solutions")}
                <Image
                  src={arrowUp}
                  alt="arrow"
                  width={15}
                  height={15}
                  className={` duration-1000 ${showSubMenu && "-rotate-180"}`}
                />
                <p className={`${showSubMenu ? "h-auto" : "h-0"}`} />
              </span>

              <span
                className={`flex flex-col gap-2 justify-around duration-500 ${showSubMenu ? "h-18 opacity-100" : "opacity-0 h-0"}`}
              >
                <Link href="/" className={`whitespace-nowrap pl-4`}>
                  {t("options.solutionsList.0")}
                </Link>
                <Link href="/" className={`whitespace-nowrap pl-4`}>
                  {t("options.solutionsList.1")}
                </Link>
              </span>
            </div>
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
  const [showSubMenu, setShowSubMenu] = useState(false);

  const Option = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="hover:bg-slate-200/20 my-auto px-4 py-2 rounded-xl w-fit h-min align-middle duration-500">
        {children}
      </div>
    );
  };

  return (
    <header className="hidden z-10 absolute lg:flex flex-row justify-between px-6 lg:px-10 py-7 lg:py-2 2xl:py-4 w-full text-white 2xl:text-md text-lg">
      {/* -------------------- {left-side menu here} -------------------- */}
      {/* Icon  */}
      <div className="flex flex-row lg:gap-5 text-white">
        <Image
          src={isotipo}
          alt="isotipo.svg"
          height={40}
          width={40}
          className=""
        />

        {/* Options  */}
        <Option>
          <Link href="/">{t("options.cases")}</Link>
        </Option>

        <Option>
          <span
            className="relative flex flex-row gap-2 my-auto w-fit h-min align-middle"
            onClick={() => {
              setShowSubMenu(!showSubMenu);
            }}
          >
            {t("options.solutions")}
            <Image
              src={arrowUp}
              alt="arrow"
              width={15}
              height={15}
              className={` duration-500 ${showSubMenu ? "-rotate-180" : "rotate-0"}`}
            />
            {showSubMenu && (
              <div className="-bottom-5 left-0 absolute flex flex-col gap-2 bg-black px-7 py-5 border border-slate-200/20 rounded w-auto h-min translate-y-full animate-fade-in duration-500">
                <p className="text-primary2-400">{t("options.solutions")}</p>
                <Link href="/" className="pl-4 whitespace-nowrap">
                  {t("options.solutionsList.0")}
                </Link>
                <Link href="/" className="pl-4 whitespace-nowrap">
                  {t("options.solutionsList.1")}
                </Link>
              </div>
            )}
          </span>
        </Option>

        <Option>
          <span>{t("options.cases")}</span>
        </Option>
        <Option>
          <span>{t("options.method")}</span>
        </Option>
        <Option>
          <span>{t("options.contact")}</span>
        </Option>
      </div>
      {/* -------------------- {right-side menu here} -------------------- */}
      <div className="flex flex-row gap-5">
        <LanguageButton />
        <WhatsAppButton />
      </div>
    </header>
  );
};

const WhatsAppButton = () => {
  const t = useTranslations("home.section_navbar");
  const [showAnimation, setShowAnimation] = useState(false);

  return (
    <div
      className={`flex cursor-pointer relative flex-row  duration-500 my-auto px-5  py-1 lg:border  2xl:border-2 rounded-full w-fit h-full ${showAnimation ? "bg-green-500 border-green-500" : "bg-primary1-500 border-primary2-100"}`}
      onMouseEnter={() => {
        setShowAnimation(true);
      }}
      onMouseLeave={() => {
        setShowAnimation(false);
      }}
    >
      <Image
        src={whatsappIcon}
        alt="platiquemos"
        width={20}
        height={20}
        className={`  top-1.5 absolute w-6 h-6  left-5 duration-200 ${showAnimation ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10/12"}`}
      />
      <p className={`    ${showAnimation ? "w-6 h-6 mr-5" : "w-0 h-0 mr-0"}`} />
      <span className="my-auto w-fit h-fit align-middle">
        {t("whatsappBtn")}
      </span>
      <Image
        src={whatsappIcon}
        alt="platiquemos"
        width={20}
        height={20}
        className={` my-auto ${!showAnimation ? "w-6 h-6 ml-5" : "w-0 h-0 ml-0"}`}
      />
    </div>
  );
};

const LanguageButton = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [showAnimation, setShowAnimation] = useState(false);

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
      className="relative w-30"
      onMouseEnter={() => {
        setShowAnimation(true);
      }}
      onMouseLeave={() => {
        setShowAnimation(false);
      }}
      onClick={toggleLanguage}
    >
      <div
        className={` duration-500 flex flex-row gap-5 bg-primary1-500 hover:bg-opacity-80 lg:my-auto px-5 2xl:px-4 py-1 border border-primary2-100 2xl:border-2 rounded-full w-fit lg:h-full transition-all cursor-pointer ${showAnimation ? "opacity-100 " : "opacity-0"}`}
      >
        <span className="my-auto w-fit h-fit font-bold align-middle">
          {!isEn ? "EN" : "ES"}
        </span>
        <Image
          src={!isEn ? usFlag : mxFlag}
          alt="language flag"
          width={20}
          height={20}
          className="my-auto w-6 h-6"
        />
      </div>
      <div
        onClick={toggleLanguage}
        className={`top-0  duration-500  absolute flex flex-row gap-5 bg-primary1-500 hover:bg-opacity-80 lg:my-auto px-5 2xl:px-4 py-1 border border-primary2-100 2xl:border-2 rounded-full w-fit lg:h-full transition-all cursor-pointer ${!showAnimation ? "opacity-100 " : "opacity-0"}`}
      >
        <Image
          src={isEn ? usFlag : mxFlag}
          alt="language flag"
          width={20}
          height={20}
          className="my-auto w-6 h-6"
        />
        <span className="my-auto w-fit h-fit font-bold uppercase align-middle">
          {locale}
        </span>
      </div>
    </div>
  );
};
