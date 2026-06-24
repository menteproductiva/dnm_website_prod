"use client";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { ArrowRightDown, Instagram, Send, WhatsApp } from "../../icons/icons";
import Image from "next/image";
import Link from "next/link";
import { useElementIntersectsScreen } from "@/app/hooks/useElementIntersectsScreen";

export const ContactForm = () => {
  const t = useTranslations("home.section_contact");

  const currentYear = new Date().getFullYear();

  const [showBrandStageOptions, setShowBrandStageOptions] = useState(false);

  //   const { loading, error, isWrong, signInWithPassword } = createAccount();

  // -------------------- Handle information submition ------------------------------
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // createAccount({
    //   username: "Facosa",
    //   full_name: "Facosa Coronado",
    //   email: "facosa99@gmail.com",
    //   phone: "3314709200",
    //   password: "password",
    // });
  };
  // -----------------------------------------------------------------------------------------------------

  // -------------------- Handle form information ------------------------------
  const [form, setForm] = useState({
    name: "",
    business_name: "",
    email: "",
    brand_stage: t("form_placeholders.brand_stage"),
    challenge: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // -----------------------------------------------------------------------------------------------------

  // -------------------- CONTACT SUMMARY: Check when element enters the screen, trigger animations ------------------------------
  const containerRef = useRef<HTMLDivElement>(null);
  const { intersecting } = useElementIntersectsScreen(containerRef);
  // -----------------------------------------------------------------------------------------------------

  // -------------------- FORM: Check when element enters the screen, trigger animations ------------------------------
  const FormContainerRef = useRef<HTMLDivElement>(null);
  const { intersecting: FormIntersecting } =
    useElementIntersectsScreen(FormContainerRef);
  // -----------------------------------------------------------------------------------------------------

  return (
    <section className="relative flex flex-col items-center gap-10 w-full">
      <div className="relative flex lg:flex-row flex-col lg:justify-around items-center lg:items-start gap-5 lg:gap-10 px-5 md:px-15 lg:px-0 w-full lg:w-3/4 text-white">
        {/* -------------------- CONTACT SUMMARY -------------------- */}
        <div
          className="flex flex-col gap-5 lg:gap-15 lg:w-2/5 h-full"
          ref={containerRef}
          style={
            intersecting
              ? {
                  transformOrigin: "50% 60%",
                  animation: "SlideFromBottom linear",
                  animationDuration: ".3s",
                  animationIterationCount: "1",
                  animationFillMode: "backwards",
                  animationDelay: "2s",
                }
              : { opacity: 0 }
          }
        >
          {/* Title  */}
          <h2 className="mr-auto w-full" style={{ textTransform: "none" }}>
            {t("title.0")}
            <span className="text-primary2-500">{t("title.1")}</span>
            {t("title.2")}
          </h2>
          {/* Main paragraph  */}
          <p className="flex flex-col text-neutral2-100 text-lg">
            <span className="w-full">{t("subtitle")}</span>
          </p>

          {/* Socials  */}
          <div className="flex flex-col gap-5 xl:gap-7 text-neutral2-100 text-lg">
            <p className="w-full">{t("socials")}</p>
            <div className="flex flex-row gap-15">
              <Link href="https://instagram.com/dnm.com">
                <WhatsApp color="#fff" size={30} strokeWidth={0.5} />
              </Link>
              <Link href="https://instagram.com/dnm.com">
                <Instagram color="#fff" size={30} strokeWidth={0.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* -------------------- FORM -------------------- */}
        <div
          ref={FormContainerRef}
          className={` rounded-xl w-full text-white align-middle  duration-500  lg:w-2/5 `}
          style={
            FormIntersecting
              ? {
                  transformOrigin: "50% 60%",
                  animation: "SlideFromBottom linear",
                  animationDuration: ".3s",
                  animationIterationCount: "1",
                  animationFillMode: "backwards",
                  animationDelay: "2s",
                  padding: ".12rem",
                  background:
                    "linear-gradient(220deg,  var(--color-primary2-500), #0000",
                }
              : {
                  opacity: 0,
                  padding: ".12rem",
                  background:
                    "linear-gradient(220deg,  var(--color-primary2-500), #0000",
                }
          }
        >
          <form
            onSubmit={handleSubmit}
            className="z-10 relative flex flex-col space-y-6 bg-black p-5 rounded-xl"
          >
            <div className="space-y-5">
              {/* First row */}
              <div className="flex md:flex-row flex-col gap-5">
                {/* Name  */}
                <div className="flex flex-col w-full">
                  <p className="mb-1">
                    {t("form_labels.name")} <Obligatory />
                  </p>
                  <div className="group after:absolute relative after:inset-0 bg-gray-500/50 after:bg-[linear-gradient(190deg,var(--color-primary2-500),#0000)] focus-within:bg-primary2-500! after:opacity-0 hover:after:opacity-100 focus-within:after:opacity-0 p-0.5 rounded-2xl after:rounded-2xl transition-all after:transition-opacity duration-500 after:duration-500 after:pointer-events-none /* The Gradient Layer */">
                    <input
                      required
                      name="name"
                      onChange={handleChange}
                      className="z-10 relative bg-gray-900 px-5 py-4.5 rounded-[calc(1rem-2px)] outline-none w-full font-bold text-slate-200 transition-all"
                      placeholder={t("form_placeholders.name")}
                    />
                  </div>
                </div>
                {/* business_name  */}
                <div className="flex flex-col w-full">
                  <p className="mb-1">
                    {t("form_labels.business_name")} <Obligatory />
                  </p>
                  <div className="group after:absolute relative after:inset-0 bg-gray-500/50 after:bg-[linear-gradient(190deg,var(--color-primary2-500),#0000)] focus-within:bg-primary2-500! after:opacity-0 hover:after:opacity-100 focus-within:after:opacity-0 p-0.5 rounded-2xl after:rounded-2xl transition-all after:transition-opacity duration-500 after:duration-500 after:pointer-events-none /* The Gradient Layer */">
                    <input
                      required
                      name="business_name"
                      onChange={handleChange}
                      className="z-10 relative bg-gray-900 px-5 py-4.5 rounded-[calc(1rem-2px)] outline-none w-full font-bold text-slate-200 transition-all"
                      placeholder={t("form_placeholders.business_name")}
                    />
                  </div>
                </div>
              </div>

              {/* email  */}
              <div className="flex flex-col w-full">
                <p className="mb-1">
                  {t("form_labels.email")}
                  <Obligatory />
                </p>
                <div className="group after:absolute relative after:inset-0 bg-gray-500/50 after:bg-[linear-gradient(190deg,var(--color-primary2-500),#0000)] focus-within:bg-primary2-500! after:opacity-0 hover:after:opacity-100 focus-within:after:opacity-0 p-0.5 rounded-2xl after:rounded-2xl transition-all after:transition-opacity duration-500 after:duration-500 after:pointer-events-none /* The Gradient Layer */">
                  <input
                    required
                    name="email"
                    onChange={handleChange}
                    className="z-10 relative bg-gray-900 px-5 py-4.5 rounded-[calc(1rem-2px)] outline-none w-full font-bold text-slate-200 transition-all"
                    placeholder={t("form_placeholders.email")}
                  />
                </div>
              </div>

              {/* brand_stage  */}
              <div className="flex flex-col w-full">
                <p className="mb-1">
                  {t("form_labels.brand_stage")}
                  <Obligatory />
                </p>
                <div className="group after:absolute relative after:inset-0 bg-gray-500/50 after:bg-[linear-gradient(190deg,var(--color-primary2-500),#0000)] focus-within:bg-primary2-500! after:opacity-0 hover:after:opacity-100 focus-within:after:opacity-0 p-0.5 rounded-2xl after:rounded-2xl transition-all after:transition-opacity duration-500 after:duration-500 after:pointer-events-none /* The Gradient Layer */">
                  <div
                    onClick={() => {
                      setShowBrandStageOptions(true);
                    }}
                    className={`z-10 relative  flex flex-row bg-gray-900 px-5 py-4.5 rounded-[calc(1rem-2px)] outline-none transition-all ${showBrandStageOptions ? "rounded-b-none" : ""} `}
                  >
                    <div
                      className={`w-full font-bold  ${t("form_placeholders.brand_stage") === form.brand_stage ? "text-slate-200/50" : "text-slate-200"}`}
                    >
                      {form.brand_stage}
                    </div>
                    <Image
                      src="/icons/arrow-up.svg"
                      width={20}
                      height={20}
                      alt="send"
                      className={` duration-500 ${showBrandStageOptions ? "rotate-180" : "rotate-0"}`}
                    />
                  </div>

                  <div
                    className={`z-10 relative flex flex-col  bg-gray-900 duration-100   overflow-hidden px-3  rounded-b-2xl ${showBrandStageOptions ? "  pt-2 gap-2 py-3 max-h-screen" : "max-h-0"}`}
                  >
                    {new Array(5).fill(null).map((_, index) => (
                      <div
                        key={`brand_stage_option_${index}`}
                        className="hover:bg-slate-200/20 px-4 py-2 rounded-xl duration-500"
                        onClick={() => {
                          setForm({
                            ...form,
                            brand_stage: t(
                              `form_placeholders.brand_stage_options.${index}`,
                            ),
                          });
                          setShowBrandStageOptions(false);
                        }}
                      >
                        {t(`form_placeholders.brand_stage_options.${index}`)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* challenge  */}
              <div className="flex flex-col w-full">
                <p className="mb-1"> {t("form_labels.challenge")}</p>
                <div className="group after:absolute relative after:inset-0 bg-gray-500/50 after:bg-[linear-gradient(190deg,var(--color-primary2-500),#0000)] focus-within:bg-primary2-500! after:opacity-0 hover:after:opacity-100 focus-within:after:opacity-0 p-0.5 rounded-2xl after:rounded-2xl transition-all after:transition-opacity duration-500 after:duration-500 after:pointer-events-none /* The Gradient Layer */">
                  <div className="z-10 relative bg-gray-900 px-5 py-4.5 rounded-[calc(1rem-2px)] w-full font-bold text-slate-200 transition-all">
                    <textarea
                      className="outline-none w-full h-full"
                      required
                      name="challenge"
                      onChange={handleChange}
                      rows={3}
                      placeholder={t("form_placeholders.challenge")}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* SUBMIT BUTTON  */}
            <button
              type="submit"
              className="z-10 relative flex justify-center items-center gap-3 bg-primary2-500 hover:bg-primary2-700 shadow-xl mx-auto py-5 rounded-2xl w-full md:w-1/2 lg:w-2/3 lg:w-3/4 font-black text-white uppercase transition-all duration-500"
            >
              <Send className="" />
              <span className="">{t("form_button")}</span>
            </button>
          </form>
        </div>
      </div>

      {/* -------------------- Bottom Glow -------------------- */}
      <svg
        className="bottom-0 z-10 absolute border-green-500 w-full h-full object-fill overflow-visible pointer-events-none"
        style={
          intersecting
            ? {
                animation: "FlashBang linear",
                animationDuration: ".25s",
                animationIterationCount: "1",
                animationFillMode: "backwards",
                animationDelay: "2s",
                opacity: 0.5,
                transformOrigin: "bottom",
              }
            : { opacity: 0 }
        }
      >
        <defs>
          <radialGradient
            id="radialGlowFooter"
            cx="50%"
            cy="30%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="50%" stopColor="#9f6637" stopOpacity="1" />
            <stop offset="70%" stopColor="#9f6637" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse
          cx="50%"
          cy="120%"
          ry={"50%"}
          rx={`100%`}
          fill="url(#radialGlowFooter)"
          strokeWidth={0}
          stroke="white"
        />
      </svg>

      {/* -------------------- FOOTER -------------------- */}
      <div
        className="z-10 relative flex flex-col gap-3 mt-10 lg:w-4/5"
        style={
          FormIntersecting
            ? {
                transformOrigin: "50% 60%",
                animation: "OpacityFrames linear",
                animationDuration: ".5s",
                animationIterationCount: "1",
                animationFillMode: "backwards",
                animationDelay: "2.5s",
              }
            : { opacity: 0 }
        }
      >
        <p className="w-full text-center">
          &copy; {currentYear} DNM. {t("footer_text")}
        </p>
        {/* Gradient decorator */}
        <div
          className={`h-1 w-full `}
          style={{
            background:
              "linear-gradient(90deg,#0000,  var(--color-primary2-500),#FFF, var(--color-primary2-500), #0000)",
          }}
        />
      </div>
    </section>
  );
};

const Obligatory = () => {
  return <span className="font-bold text-primary2-500"> *</span>;
};
