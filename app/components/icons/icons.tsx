export const ArrowRightDown = ({
  strokeWidth = 5,
  color = "white",
  size = 20,
  className,
  ...props
}: {
  strokeWidth?: number;
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
    >
      <path d="M5,5 L35,35 M35,5 v30 h-30" fill="none" />
    </svg>
  );
};
export const ArrowRightUp = ({
  strokeWidth = 5,
  color = "white",
  size = 20,
  className,
  ...props
}: {
  strokeWidth?: number;
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
    >
      <path d="M5,35 l30,-30 M5,5 h30 v30" fill="none" />
    </svg>
  );
};

export const Crates = ({
  strokeWidth = 5,
  color = "white",
  size = 20,
  className,
  ...props
}: {
  strokeWidth?: number;
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
      strokeLinejoin="round"
    >
      <path d="M2,3 l1,-1 h13 l1,1 v13 l-1,1 h-13 l-1,-1 v-13z" />
      <path d="M23,3 l1,-1 h13 l1,1 v13 l-1,1 h-13 l-1,-1 v-13z" />
      <path d="M2,24 l1,-1 h13 l1,1 v13 l-1,1 h-13 l-1,-1 v-13z" />
      <path d="M23,24 l1,-1 h13 l1,1 v13 l-1,1 h-13 l-1,-1 v-13z" />
    </svg>
  );
};

export const Bullseye = ({
  strokeWidth = 5,
  color = "white",
  size = 20,
  className,
  ...props
}: {
  strokeWidth?: number;
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
      strokeLinecap="round"
    >
      <circle cx="50%" cy="50%" r="30%" fill="none" />
      <circle cx="50%" cy="50%" r="1%" fill="none" />
      <path d="M5, 20 h3" fill="none" />
      <path d="M32, 20 h3" fill="none" />
      <path d="M20, 5 v3" fill="none" />
      <path d="M20, 32 v3" fill="none" />
    </svg>
  );
};

export const TripleConnection = ({
  strokeWidth = 5,
  color = "white",
  size = 20,
  className,
  ...props
}: {
  strokeWidth?: number;
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
      strokeLinecap="round"
    >
      <path d="M20,20 v-12" fill="none" />
      <path d="M20,20 l12,12" fill="none" />
      <path d="M20,20 l-12,12" fill="none" />
      <circle cx="50%" cy="10%" r="8%" fill="none" />
      <circle cx="12%" cy="88%" r="8%" fill="none" />
      <circle cx="88%" cy="88%" r="8%" fill="none" />
    </svg>
  );
};
