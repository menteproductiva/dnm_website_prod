"use client";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Email, Instagram, Send, Tiktok, WhatsApp } from "../../icons/icons";
import Image from "next/image";
import Link from "next/link";
import { useElementIntersectsScreen } from "@/app/hooks/useElementIntersectsScreen";
import { currentYear, WhatsAppLink } from "@/app/constants/constants";
import { FormState, useNotionSubmit } from "@/app/hooks/useNotionSubmit";

export const ContactForm = () => {
  const t = useTranslations("home.section_contact");

  // -------------------- CONTACT SUMMARY: Check when element enters the screen, trigger animations ------------------------------
  const containerRef = useRef<HTMLDivElement>(null);
  const { intersecting } = useElementIntersectsScreen(containerRef);
  // -----------------------------------------------------------------------------------------------------

  // -------------------- FORM: Check when element enters the screen, trigger animations ------------------------------
  const FormContainerRef = useRef<HTMLDivElement>(null);
  const { intersecting: FormIntersecting } =
    useElementIntersectsScreen(FormContainerRef);
  // -----------------------------------------------------------------------------------------------------

  const socialsClassname = `p-3 duration-500 rounded-full relative overflow-hidden group `;
  return (
    <section className="relative flex flex-col items-center gap-10 pt-10 lg:pt-20 w-full">
      <div
        className="relative flex lg:flex-row flex-col lg:justify-around items-center lg:items-start gap-5 lg:gap-10 px-5 md:px-15 lg:px-[100px] w-full text-white"
        style={
          intersecting
            ? {
                transformOrigin: "50% 60%",
                animation: "SlideFromBottom linear",
                animationDuration: ".3s",
                animationIterationCount: "1",
                animationFillMode: "backwards",
                animationDelay: "1s",
              }
            : { opacity: 0 }
        }
      >
        {/* -------------------- CONTACT SUMMARY -------------------- */}
        <div
          className="flex flex-col gap-5 lg:gap-8 lg:w-2/5 h-full"
          ref={containerRef}
        >
          {/* Title  */}
          <h2 className="mr-auto w-full" style={{ textTransform: "none" }}>
            {t("title.0")}
            <span className="text-primary2-500">{t("title.1")}</span>
            {t("title.2")}
          </h2>
          {/* Main paragraph  */}
          <p className="flex flex-col text-neutral2-500 text-lg">
            <span className="w-full">{t("subtitle")}</span>
          </p>

          {/* Socials  */}
          <div className="flex flex-col gap-5 xl:gap-7 lg:mt-7 text-neutral2-500 text-lg">
            <p className="w-full">{t("socials")}</p>
            <div className="flex flex-row gap-7">
              <Link
                className={socialsClassname + " "}
                href="https://www.instagram.com/dnm.mx/"
              >
                <div className="top-0 left-0 absolute bg-linear-to-b from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 w-full h-full duration-500" />
                <Instagram
                  color="#fff"
                  size={30}
                  strokeWidth={0.5}
                  className="relative"
                />
              </Link>
              <Link className={socialsClassname + ""} href={WhatsAppLink}>
                <div className="top-0 left-0 absolute bg-linear-to-b from-green-400 to-green-700 opacity-0 group-hover:opacity-100 w-full h-full duration-500" />

                <WhatsApp
                  color="#fff"
                  size={30}
                  strokeWidth={0.5}
                  className="relative"
                />
              </Link>
              <Link
                className={socialsClassname + " "}
                href="https://www.tiktok.com/@dnm.mx?_r=1&_t=ZS-97oZc3ViYcR"
              >
                <div className="top-0 left-0 absolute bg-linear-to-b from-cyan-500 to-red-500 opacity-0 group-hover:opacity-100 w-full h-full duration-500" />
                <Tiktok
                  color="#fff"
                  size={30}
                  strokeWidth={5}
                  className="relative"
                />
              </Link>

              <Link
                className={socialsClassname + " "}
                href="mailto:contacto@agenciadnm.com"
              >
                <div className="top-0 left-0 absolute bg-linear-to-b from-primary2-400 to-primary2-700 opacity-0 group-hover:opacity-100 w-full h-full duration-500" />
                <Email color="#fff" size={30} className="relative" />
              </Link>
            </div>
          </div>
        </div>

        {/* -------------------- FORM -------------------- */}
        <div
          ref={FormContainerRef}
          className={` rounded-xl relative  w-full text-white align-middle  duration-500  lg:w-3/5 `}
        >
          <Form />
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
                animationDelay: "1s",
                opacity: 0.4,
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
                animationDelay: "1s",
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

const Form = () => {
  const t = useTranslations("home.section_contact");

  // -------------------- Keep the form information stored and updated ------------------------------
  // Store the information
  const [form, setForm] = useState<FormState>({
    nombre: null,
    empresa: null,
    correo: null,
    posicion: null,
    liderazgo: null,
    motivo: null,
  });
  // Keep the information updated in relaton to the form fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // -----------------------------------------------------------------------------------------------------

  // -------------------- Check that information is complete and correct ------------------------------
  const [wrongField, setWrongField] = useState<string | null>("");
  const auditFields = (): boolean => {
    // Check that all Required fields are filled
    if (!form.nombre || !form.nombre.trim()) {
      setWrongField("nombre");
      return false;
    }
    if (!form.empresa || !form.empresa.trim()) {
      setWrongField("empresa");
      return false;
    }
    if (!form.correo || !form.correo.trim()) {
      setWrongField("correo");
      return false;
    }

    // Check via regex that the provided email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.correo)) {
      setWrongField("correo"); // Custom marker or message
      return false;
    }

    // Check that the selected option is not empty
    if (!form.posicion || form.posicion === t("form.placeholders.role")) {
      setWrongField("posicion");
      return false;
    }

    // If all checks pass, clear any errors and return true
    setWrongField(null);
    return true;
  };
  // -----------------------------------------------------------------------------------------------------

  // -------------------- Handle information submit process ------------------------------
  const { submitToNotion, loading, error, isSubmitted, resetSubmit } =
    useNotionSubmit();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check information provided for errors. If an issue is found, stop function execution.
    if (!auditFields()) {
      console.log("Validation failed on field:", wrongField);
      return;
    }

    // Call and run the hook's submit logic
    const success = await submitToNotion(form);
    if (success) {
      console.log("Successfully recorded in Notion!");
    }
  };
  // -----------------------------------------------------------------------------------------------------

  // -------------------- Form Fields Structure ------------------------------
  // List of fields, with their type, text, placeholder, etc.
  const FormFields = [
    {
      name: "nombre",
      label: t("form.labels.name"),
      required: true,
      placeholder: t("form.placeholders.name"),
      type: "text",
      value: form.nombre,
      onChange: handleChange,
      className: "",
      error: wrongField === "nombre",
    },
    {
      name: "empresa",
      label: t("form.labels.business_name"),
      required: true,
      placeholder: t("form.placeholders.business_name"),
      type: "text",
      value: form.empresa,
      onChange: handleChange,
      className: "",
      error: wrongField === "empresa",
    },
    {
      name: "correo",
      label: t("form.labels.email"),
      required: true,
      placeholder: t("form.placeholders.email"),
      type: "text",
      value: form.correo,
      onChange: handleChange,
      className: "col-span-2",
      error: wrongField === "correo",
    },
    {
      name: "posicion",
      label: t("form.labels.role"),
      required: true,
      placeholder: t("form.placeholders.role"),
      options: [
        t("form.placeholders.role_options.0"),
        t("form.placeholders.role_options.1"),
        t("form.placeholders.role_options.2"),
        t("form.placeholders.role_options.3"),
        t("form.placeholders.role_options.4"),
      ],
      type: "text",
      value: form.posicion,
      onChange: handleChange,
      className: "col-span-2",
      error: wrongField === "posicion",
    },
    {
      name: "liderazgo",
      label: t("form.labels.leadership"),
      required: false,
      placeholder: t("form.placeholders.leadership"),
      options: [
        t("form.placeholders.leadership_options.0"),
        t("form.placeholders.leadership_options.1"),
        t("form.placeholders.leadership_options.2"),
      ],
      type: "text",
      value: form.liderazgo,
      onChange: handleChange,
      className: "col-span-2",
    },
    {
      name: "motivo",
      label: t("form.labels.motive"),
      required: false,
      placeholder: t("form.placeholders.motive"),
      type: "text",
      value: form.motivo,
      onChange: handleChange,
      className: "col-span-2",
      textfield: true,
    },
  ];
  // -----------------------------------------------------------------------------------------------------

  return (
    <form
      onSubmit={handleSubmit}
      className={`z-10 relative flex flex-col space-y-6 bg-black p-5 rounded-xl `}
    >
      {/* GRADIENT BORDER  */}
      <svg className="top-0 left-0 z-0 absolute w-full h-full object-fill overflow-visible">
        <defs>
          <linearGradient
            id="contactFormGradient"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="var(--color-primary2-500)"
              stopOpacity="1"
            />
            <stop
              offset="50%"
              stopColor="var(--color-primary2-500)"
              stopOpacity=".5"
            />
            {/* Changed offset to 100% and opacity to 1 so the color reaches the border */}
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="none"
          rx="10px"
          ry="10px"
          stroke="url(#contactFormGradient)"
          strokeWidth=".5vh"
        />
      </svg>
      {/* FORM FIELDS  */}
      <div className="relative gap-3 grid grid-cols-2">
        {FormFields.map((field, index) => {
          return (
            <div
              className={"flex flex-col w-full  " + field.className}
              key={`contact_form_field_${index}`}
            >
              <p className="mb-1">
                {field.label} {field.required && <Obligatory />}
              </p>
              <GradientBorder error={field.error}>
                {field.options ? (
                  <FormFieldDropDown
                    name={field.name}
                    placeholder={field.placeholder}
                    form={form}
                    setForm={setForm}
                    options={field.options}
                  />
                ) : field.textfield ? (
                  <div className="z-10 relative bg-gray-900 p-3 rounded-[calc(1rem-2px)] w-full font-bold text-slate-200 transition-all">
                    <textarea
                      className="outline-none w-full h-full"
                      required={field.required}
                      name="motivo"
                      onChange={handleChange}
                      rows={3}
                      placeholder={field.placeholder}
                    />
                  </div>
                ) : (
                  <input
                    required={field.required}
                    name={field.name}
                    onChange={handleChange}
                    className="z-10 relative bg-gray-900 p-3 rounded-[calc(1rem-2px)] outline-none w-full font-bold text-slate-200 transition-all"
                    placeholder={field.placeholder}
                  />
                )}
              </GradientBorder>
            </div>
          );
        })}
      </div>

      {/* ERROR MESSAGE */}
      <p
        className={"min-h-[2lh] relative text-red-500 "}
        style={{
          minHeight: "3lh",
        }}
      >
        {wrongField === "nombre" && t("form.error.nombre")}
        {wrongField === "empresa" && t("form.error.empresa")}
        {wrongField === "correo" && t("form.error.correo")}
        {wrongField === "posicion" && t("form.error.rol")}
        {error && error}
      </p>

      {/* SUBMIT BUTTON  */}
      <div
        className={`relative ${loading ? "opacity-50   pointer-events-none " : ""}`}
      >
        <button
          type="submit"
          disabled={loading}
          className={`z-10 relative flex justify-center items-center gap-3 bg-primary2-500 hover:bg-primary2-700 shadow-xl mx-auto py-5 rounded-2xl w-full md:w-1/2 lg:w-3/4 font-black text-white uppercase transition-all duration-500 `}
        >
          {loading ? <Send className="animate-spin" /> : <Send className="" />}

          <span className="">{t("form.button")}</span>
        </button>
      </div>

      {/* SUCCESS MESSAGE */}
      {isSubmitted && <SuccessMessage buttonAction={resetSubmit} />}

      {/* DEBUG WINDOW */}
      {false && (
        <p className={"text-green-500 relative flex flex-col gap-1 text-sm"}>
          <span> wrongField: {"" + wrongField} </span>
          <span> loading: {"" + loading} </span>
          <span> error: {"" + error} </span>
          <span> isSubmitted: {"" + isSubmitted} </span>
          <span> form: {"" + JSON.stringify(form)} </span>
        </p>
      )}
    </form>
  );
};

const GradientBorder = ({
  children,
  error,
}: {
  children: any;
  error: boolean | undefined;
}) => {
  return (
    <div
      className={`group after:absolute relative after:inset-0 after:opacity-0 hover:after:opacity-100 focus-within:after:opacity-0 p-0.5 rounded-2xl after:rounded-2xl transition-all after:transition-opacity duration-500 after:duration-500 after:pointer-events-none
        ${error ? " bg-red-500 " : " bg-gray-500/50 after:bg-[linear-gradient(190deg,var(--color-primary2-500),#0000)] focus-within:bg-primary2-500! "}  `}
    >
      {children}
    </div>
  );
};

const SuccessMessage = ({ buttonAction }: { buttonAction: any }) => {
  const t = useTranslations("home.section_contact.form.success");
  return (
    <div className="top-0 right-0 z-20 absolute flex flex-col justify-center gap-5 bg-slate-100/10 backdrop-blur-lg border-2 rounded-xl w-full h-full text-white text-center">
      {/* ---------- Title  ---------- */}
      <p className="mx-auto w-full md:w-1/2 lg:w-3/4 font-bold text-xl">
        {t("title")}
      </p>
      {/* ---------- Paragraph  ---------- */}
      <p className="mx-auto w-full md:w-1/2 lg:w-3/4 text-lg">
        {t("paragraph")}
      </p>
      {/* ---------- Button  ---------- */}
      <button
        type="submit"
        onClick={buttonAction}
        className={` relative flex justify-center items-center gap-3 bg-primary2-500 hover:bg-primary2-700 shadow-xl mx-auto py-5 rounded-2xl w-full md:w-1/2 lg:w-3/4 font-black text-white uppercase transition-all duration-500 `}
      >
        <span className="">{t("accept")}</span>
      </button>
    </div>
  );
};

const FormFieldDropDown = ({
  name,
  placeholder,
  form,
  setForm,
  options,
}: {
  name: string;
  placeholder: string;
  form: any;
  setForm: any;
  options: any[];
}) => {
  const [showOptionList, setShowOptions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [isBlinking, setIsBlinking] = useState(false);

  // Reference to the container to handle clicking/focusing outside
  const containerRef = useRef<HTMLDivElement>(null);

  // -------------------- Update currently selected option --------------------
  const handleOptionSelect = ({
    field,
    option,
  }: {
    field: any;
    option: string;
  }) => {
    setForm({
      ...form,
      [field]: option,
    });
    setShowOptions(false);
    blinkAnimation();
  };

  // -------------------- Animate the field when current option is updated --------------------
  const blinkAnimation = () => {
    setIsBlinking(true);
    setTimeout(() => {
      setIsBlinking(false);
    }, 300);
  };

  // Reset highlight index when dropdown closes/opens
  useEffect(() => {
    if (!showOptionList) {
      setHighlightedIndex(-1);
    } else {
      // If there's already a selected option, highlight it on open
      const currentVal = form[name];
      const selectedIdx = options.indexOf(currentVal);
      if (selectedIdx !== -1) {
        setHighlightedIndex(selectedIdx);
      } else {
        setHighlightedIndex(0); // Default to first item
      }
    }
  }, [showOptionList, form, name, options]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // -------------------- Keyboard Navigation Handler --------------------
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!showOptionList) {
        setShowOptions(true);
      } else if (highlightedIndex >= 0 && highlightedIndex < options.length) {
        handleOptionSelect({ field: name, option: options[highlightedIndex] });
      }
    }

    if (e.key === "Escape") {
      setShowOptions(false);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!showOptionList) {
        setShowOptions(true);
      } else {
        setHighlightedIndex((prev) => (prev + 1) % options.length);
      }
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!showOptionList) {
        setShowOptions(true);
      } else {
        setHighlightedIndex(
          (prev) => (prev - 1 + options.length) % options.length,
        );
      }
    }
  };

  const nothingSelectedYet = form[name] === "" || form[name] === null;

  return (
    <div ref={containerRef} className="relative flex flex-col w-full">
      {/* Current Selected Option | Default placeholder */}
      <div
        onClick={() => setShowOptions(!showOptionList)}
        onKeyDown={handleKeyDown}
        tabIndex={0} // Makes the div focusable via Keyboard (Tab key)
        className={`z-10 text-left relative cursor-pointer flex flex-row p-3 rounded-[calc(1rem-2px)] outline-none duration-500 transition-all focus:ring-2 focus:ring-primary2-500 ${
          isBlinking ? "bg-gray-500" : "bg-gray-900"
        }`}
      >
        <div
          className={`w-full font-bold ${nothingSelectedYet ? "text-slate-200/50" : "text-slate-200"}`}
        >
          {nothingSelectedYet ? placeholder : form[name]}
        </div>
        <Image
          src="/icons/arrow-up.svg"
          width={20}
          height={20}
          alt="arrow"
          className={`duration-500 ${showOptionList ? "rotate-180" : "rotate-0"}`}
        />
      </div>

      {/* Deployable List of Options */}
      <div
        className={`z-20 absolute top-full flex flex-col bg-gray-900 duration-100 overflow-hidden px-3 w-full rounded-2xl transition-all ${
          showOptionList
            ? "pt-2 gap-2 py-3 max-h-screen opacity-100"
            : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        {options.map((option, index) => (
          <div
            key={`brand_stage_option_${index}`}
            className={`px-4 py-2 rounded-xl text-slate-200 text-left duration-200 cursor-pointer ${
              highlightedIndex === index
                ? "bg-primary2-500"
                : "hover:bg-primary2-500/50"
            }`}
            onClick={() => handleOptionSelect({ field: name, option: option })}
            onMouseEnter={() => setHighlightedIndex(index)} // Sync keyboard highlight with mouse hover
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

const Obligatory = () => {
  return <span className="font-bold text-primary2-500"> *</span>;
};
