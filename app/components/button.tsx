import Link from "next/link";
import { ArrowRightUp } from "./icons/icons";

export const Button = ({
  link,
  text,
  className = "",
}: {
  link: string;
  text: string;
  className?: string;
}) => {
  return (
    <div className="group bottom-10 z-10 flex w-fit">
      <Link
        href={link}
        className={
          "flex flex-row gap-3 bg-black group-hover:bg-primary2-500 mt-auto px-10 py-4 border-2 border-primary2-500 rounded-xl duration-500 " +
          className
        }
      >
        <span className="my-auto uppercase">{text}</span>
        <ArrowRightUp
          strokeWidth={4}
          className="my-auto group-hover:-translate-y-2 group-hover:translate-x-2 duration-500"
          size={15}
        />
      </Link>
    </div>
  );
};

export const ButtonOrange = ({
  link,
  text,
}: {
  link: string;
  text: string;
}) => {
  return (
    <div className="group bottom-10 z-10 flex">
      <Link
        href={link}
        className="flex flex-row gap-3 bg-black group-hover:bg-primary2-500 mt-auto px-15 py-2 border-2 border-primary2-500 rounded-xl duration-500"
      >
        <span className="my-auto border uppercase">{text}</span>
        <ArrowRightUp
          strokeWidth={4}
          className="my-auto group-hover:-translate-y-2 group-hover:translate-x-2 duration-500"
          size={15}
        />
      </Link>
    </div>
  );
};
