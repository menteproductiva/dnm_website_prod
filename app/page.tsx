import Image from "next/image";
import { ArrowRightDown } from "./components/icons/icons";
import { ArrowRightUp } from "./components/icons/icons";
import { Crates } from "./components/icons/icons";
import { Bullseye } from "./components/icons/icons";
import { TripleConnection } from "./components/icons/icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="justify-center items-center bg-zinc-50 dark:bg-black min-h-screen font-sans">
      <Hero />
      <Introduction />
      <Info />
      <div className="bg-white/20 mx-auto my-10 w-3/4 h-0.5" />
      <Branding
        title="MARCA PERSONAL"
        subtitle="Para líderes que necesitan dirección, no exposición"
        text="La estrategia no es igual para todos. Definimos rutas según el tipo de decisión que tu marca debe tomar."
        graphic="home/graphic1.svg"
        link="/"
      />
      <div className="bg-white/20 mx-auto my-10 w-3/4 h-0.5" />
      <Branding
        title="MARCA EMPRESARIAL"
        subtitle="Para empresas que necesitan estructura, no improvisación."
        text="Negocios en crecimiento que requieren coherencia, alineación interna y dirección estratégica."
        graphic="home/graphic2.svg"
        link="/"
      />
    </main>
  );
}

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-around items-center px-5 py-20 w-screen h-screen">
      {/* ---------- Glow Background ----------   */}
      <svg className="absolute w-full h-full object-fill">
        <defs>
          <radialGradient
            id="heroGlow"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="white" stopOpacity=".5" />
            <stop offset="40%" stopColor="#9f6637" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0.5" />
          </radialGradient>
        </defs>

        <circle cx="100%" cy="45%" r="50%" fill="url(#heroGlow)" opacity={0.8}>
          <animate
            attributeName="r"
            from="0"
            to="50%"
            dur="2s"
            repeatCount="1"
          />
        </circle>
      </svg>
      {/* ---------- Hero Title ----------   */}
      <div className="flex flex-col gap-10">
        <p className="flex flex-row gap-5 w-full align-middle">
          <Image
            src="/branding/isotipo.svg"
            alt="isotipo.svg"
            height={200}
            width={200}
            className="opacity-10 w-1/2 object-contain"
          />
          <Image
            src="/branding/name_logo2.svg"
            alt="isotipo.svg"
            height={300}
            width={300}
            className="my-auto w-1/2 object-contain"
          />
        </p>
        <p className="text-white text-2xl">
          CONSULTORÍA & ESTRATEGIA PARA MARCAS PERSONALES & EMPRESARIALES
        </p>
      </div>

      {/* ----------  Introduction ----------   */}
      <div className="flex flex-col gap-10 w-full h-1/3 text-white">
        {/* PERSONAL  */}
        <div className="flex flex-col gap-6">
          <p className="flex flex-col w-full">
            <span className="w-full font-semibold text-xl">
              Tu nombre ya tiene peso
            </span>
            <span className="opacity-80 w-full text-lg">
              Ahora necesitas dirección
            </span>
          </p>
          <div className="flex flex-row gap-3 w-full">
            <p className="text-lg">
              <span className="font-semibold text-primary1-500">
                MARCA PERSONAL
              </span>
              <span className="opacity-80 w-full"> para lideres</span>
            </p>
            <ArrowRightDown
              color="#9f6637"
              size={20}
              className="my-auto"
              strokeWidth={6}
            />
          </div>
        </div>
        {/* BUSINESS  */}
        <div className="flex flex-col gap-6">
          <p className="flex flex-col w-full">
            <span className="w-full font-semibold text-xl">
              Tu empresa está creciendo
            </span>
            <span className="opacity-80 w-full text-lg">
              Tu empresa debe sostenerlo
            </span>
          </p>
          <div className="flex flex-row gap-3 w-full">
            <p className="text-lg">
              <span className="font-semibold text-primary1-500">
                MARCA EMPRESARIAL
              </span>
              <span className="opacity-80 w-full"> para empresas</span>
            </p>
            <ArrowRightDown
              color="#9f6637"
              className="my-auto"
              strokeWidth={6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Introduction = () => {
  const bulletPoints = [
    {
      icon: <Crates strokeWidth={3} />,
      title: "Diseño sin estrategia",
    },
    {
      icon: <Bullseye strokeWidth={3} />,
      title: "Marketing sin posicionamiento",
    },
    {
      icon: <TripleConnection strokeWidth={3} />,
      title: "Crecimiento sin estructura",
    },
  ];
  return (
    <section className="relative flex flex-col justify-around items-center px-5 py-20 w-screen h-screen">
      {/* ---------- Glow Top ----------   */}
      <svg className="absolute w-full h-full object-fill">
        <defs>
          <radialGradient
            id="radialGlowIntro"
            cx="50%"
            cy="30%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="white" stopOpacity=".4" />
            <stop offset="40%" stopColor="#9f6637" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0.5" />
          </radialGradient>
          <linearGradient
            id="linearGlowIntro"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="transparent" stopOpacity="0" />
            <stop offset="20%" stopColor="#9f6637" stopOpacity="0.5" />
            <stop offset="50%" stopColor="white" stopOpacity="0.25" />
            <stop offset="80%" stopColor="#9f6637" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>
        </defs>

        <circle
          cx="50%"
          cy="0%"
          r="30%"
          fill="url(#radialGlowIntro)"
          opacity={0.8}
        ></circle>
        <rect
          x="0%"
          y="0"
          width="100%"
          height="2"
          fill="url(#linearGlowIntro)"
          // fill="white"
        />
      </svg>

      {/* ---------- Title ----------   */}
      <div className="flex flex-col gap-7 w-full text-white">
        <p className="font-semibold text-5xl"> El problema no es el diseño</p>
        <p className="text-xl">
          Muchas marcas invierten en identidad, marketing y contenido sin una
          decisión estratégica clara.
        </p>
      </div>

      {/* ---------- Decorative divisor ----------   */}
      <div className="bg-primary1-500/30 mr-auto w-1/2 h-0.5"></div>

      {/* ----------  Bullet Points ----------   */}
      <div className="flex flex-col gap-10 w-full h-1/3 text-white">
        {bulletPoints.map(({ title, icon }, index) => (
          <p
            key={`bulletPoint-${index}`}
            className="flex flex-row gap-6 w-full"
          >
            <span className="bg-primary-500 p-2 border-2 border-primary1-500 rounded">
              {icon}
            </span>
            <span className="my-auto w-full text-xl">{title}</span>
          </p>
        ))}
      </div>

      {/* ----------  Quote ----------   */}
      <div className="flex flex-col gap-5 w-full font-bold text-2xl">
        <p className="bg-clip-text bg-linear-to-r from-white to-white/10 w-fit text-transparent">
          La dirección no se diseña.
        </p>
        <p className="bg-clip-text bg-linear-to-l from-white to-white/10 ml-auto w-fit text-transparent text-right">
          Se define.
        </p>
      </div>
    </section>
  );
};

const Info = () => {
  return (
    <section className="relative flex flex-col justify-around items-center gap-10 px-5 py-20 w-full text-white">
      <p className="opacity-60 w-full text-xl text-left">
        SOLUCIONES ESTRATÉGICAS
      </p>
      <p className="font-semibold text-5xl"> ¿Quién necesita este orden? </p>
      <p className="opacity-60 text-xl">
        La estrategia no es igual para todos. Definimos rutas según el tipo de
        decisión que tu marca debe tomar.
      </p>
    </section>
  );
};

const Branding = ({
  title,
  subtitle,
  text,
  graphic,
  link,
}: {
  title: string;
  subtitle: string;
  text: string;
  graphic: string;
  link: string;
}) => {
  return (
    <section className="relative flex flex-col justify-around items-center gap-10 px-5 py-10 w-full text-white">
      <p className="w-full text-primary1-500 text-3xl text-left">{title}</p>
      <p className="font-semibold text-lg">{subtitle}</p>
      <p className="opacity-60 text-xl">{text}</p>
      <Image
        src={graphic}
        alt="isotipo.svg"
        height={200}
        width={200}
        className="my-auto w-full object-contain"
      />

      {/* Black Gradient  */}
      <div className="bottom-10 absolute bg-linear-to-b from-transparent to-black w-full h-1/2 to"></div>

      <div className="bottom-10 z-10 absolute flex">
        <Link
          href={link}
          className="flex flex-row gap-3 bg-black mt-auto px-10 py-5 border-2 border-primary1-500 rounded-xl"
        >
          <span className="my-auto">EXPLORAR RUTA</span>
          <ArrowRightUp strokeWidth={4} className="my-auto" size={15} />
        </Link>
      </div>
    </section>
  );
};
