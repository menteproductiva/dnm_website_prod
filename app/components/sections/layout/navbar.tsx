"use client";
import Image from "next/image";
import { useState } from "react";
import { WhatsApp } from "../../icons/icons";
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
  const t = useTranslations("layout.section_navbar");

  const OptionList = [
    { name: "aboutUs", text: t("options.aboutUs"), href: "#section-about-us" },
    { name: "method", text: t("options.method"), href: "#section-cases" },
    { name: "cases", text: t("options.cases"), href: "#section-method" },
    {
      name: "contact",
      text: t("options.contact"),
      href: "#section-contact-form",
    },
  ];

  return (
    <div className="top-0 left-0 z-50 fixed backdrop-blur-lg w-full h-20">
      <NavbarMobile options={OptionList} />
      <NavbarDesktop options={OptionList} />
    </div>
  );
};

const NavbarMobile = ({ options }: { options: any }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <header className="lg:hidden left-0 z-10 absolute flex flex-row justify-between px-6 py-7 w-full text-white text-lg">
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
              {options.map((option: any) => {
                return (
                  <Link
                    href={option.href}
                    key={`navbar-option-${option.name}`}
                    onClick={closeMenu}
                  >
                    {option.text}
                  </Link>
                );
              })}
            </div>
            {/* ---------- Whatsapp ----------   */}
            {/* <p className="flex flex-row justify-center gap-5 bg-green-500 mx-auto px-6 py-3 rounded-full w-full md:w-fit h-min text-center">
              <Whatsapp
                color="white"
                size={20}
                strokeWidth={0.75}
                className="my-auto"
              />
              <span className="">{t("whatsappBtn")}</span>
            </p> */}
            {/* ---------- Language ----------   */}
            <div className="mt-auto mb-15">
              <LanguageButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavbarButton = () => {
  return (
    <p>
      <span>NavbarButton</span>
      <div></div>

      <p>
        <ul className="bg-red-500 border-2">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </p>
    </p>
  );
};

const NavbarDesktop = ({ options }: { options: any }) => {
  const t = useTranslations("layout.section_navbar");

  return (
    <header className="hidden left-0 z-10 absolute lg:flex flex-row justify-between px-[100px] py-7 lg:py-2 2xl:py-4 w-full text-white 2xl:text-md text-lg">
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
        {options.map((option: any, index: number) => {
          return (
            <Link
              href={option.href}
              key={`navbar-option-${option.name}`}
              className="hover:bg-slate-200/20 my-auto px-4 py-2 rounded-xl w-fit h-min align-middle duration-500"
            >
              {option.text}
            </Link>
          );
        })}
      </div>
      {/* -------------------- {right-side menu here} -------------------- */}
      <div className="flex flex-row gap-5 text-sm">
        <LanguageButton />
        <WhatsAppButton />
      </div>
    </header>
  );
};

const WhatsAppButton = () => {
  const t = useTranslations("layout.section_navbar");
  const [showAnimation, setShowAnimation] = useState(false);

  // return <></>;

  return (
    <div
      className={`flex cursor-pointer relative flex-row  duration-500 my-auto px-5 py-1   lg:border  2xl:border-2 rounded-full w-fit h-fit ${showAnimation ? "bg-green-500 border-green-500" : "bg-primary1-500 border-primary2-100"}`}
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
        className={`   my-auto bg    duration-200 ${showAnimation ? "opacity-100 translate-x-0 mr-2 w-4 h-4" : " w-0 h-0 opacity-0 translate-x-10/12 mr-0"}`}
      />
      {/* <p className={`    ${showAnimation ? "w-4 h-4 mr-5" : "w-0 h-0 mr-0"}`} /> */}
      <span className="my-auto w-full h-fit">{t("whatsappBtn")}</span>
      <Image
        src={whatsappIcon}
        alt="platiquemos"
        width={20}
        height={20}
        className={` my-auto ${!showAnimation ? "w-4 h-4 ml-2" : "w-0 h-0 ml-0"}`}
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
      className="relative flex"
      onMouseEnter={() => {
        setShowAnimation(true);
      }}
      onMouseLeave={() => {
        setShowAnimation(false);
      }}
      onClick={toggleLanguage}
    >
      <div
        className={` duration-500  flex flex-row gap-5 bg-primary1-500  my-auto px-2 2xl:px-4 py-1 border border-primary2-100 2xl:border-2 rounded-full w-fit lg:h-fit transition-all cursor-pointer ${showAnimation ? "opacity-100 " : "opacity-0"}`}
      >
        <span className="my-auto w-fit h-fit font-bold align-middle">
          {!isEn ? "EN" : "ES"}
        </span>
        <Image
          src={!isEn ? usFlag : mxFlag}
          alt="language flag"
          width={20}
          height={20}
          className="my-auto w-4 h-4"
        />
      </div>
      <div
        onClick={toggleLanguage}
        className={`my-auto top-1/2  -translate-y-1/2 duration-500  absolute flex flex-row gap-5 bg-primary1-500 hover:bg-opacity-80 lg:my-auto px-2 2xl:px-4 py-1 border border-primary2-100 2xl:border-2 rounded-full w-fit lg:h-fit transition-all cursor-pointer ${!showAnimation ? "opacity-100 " : "opacity-0"}`}
      >
        <Image
          src={isEn ? usFlag : mxFlag}
          alt="language flag"
          width={20}
          height={20}
          className="my-auto w-4 h-4"
        />
        <span className="my-auto w-fit h-fit font-bold uppercase align-middle">
          {locale}
        </span>
      </div>
    </div>
  );
};
