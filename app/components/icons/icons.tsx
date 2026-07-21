export const ArrowSimpleDown = ({
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
      <path d="M1,10 L20,30 L39,10" fill="none" />
    </svg>
  );
};
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
export const Building = ({
  strokeWidth = 0.2,
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      viewBox="0 0 30 30"
      strokeWidth={strokeWidth}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 1.25C20.9946 1.25 21.9481 1.64537 22.6514 2.34863C23.3546 3.05189 23.75 4.00544 23.75 5V10H25C25.9946 10 26.9481 10.3954 27.6514 11.0986C28.3546 11.8019 28.75 12.7554 28.75 13.75V25C28.75 25.9946 28.3546 26.9481 27.6514 27.6514C26.9481 28.3546 25.9946 28.75 25 28.75H5C4.00544 28.75 3.05189 28.3546 2.34863 27.6514C1.64537 26.9481 1.25 25.9946 1.25 25V17.5C1.25 16.5054 1.64537 15.5519 2.34863 14.8486C3.05189 14.1454 4.00544 13.75 5 13.75H6.25V5C6.25 4.00544 6.64537 3.05189 7.34863 2.34863C8.05189 1.64537 9.00544 1.25 10 1.25H20ZM23.75 26.25H25C25.3315 26.25 25.6494 26.1182 25.8838 25.8838C26.1182 25.6494 26.25 25.3315 26.25 25V13.75C26.25 13.4185 26.1182 13.1006 25.8838 12.8662C25.6494 12.6318 25.3315 12.5 25 12.5H23.75V26.25ZM5 16.25C4.66848 16.25 4.35063 16.3818 4.11621 16.6162C3.88179 16.8506 3.75 17.1685 3.75 17.5V25C3.75 25.3315 3.88179 25.6494 4.11621 25.8838C4.35063 26.1182 4.66848 26.25 5 26.25H6.25V16.25H5ZM10 3.75C9.66848 3.75 9.35063 3.88179 9.11621 4.11621C8.88179 4.35063 8.75 4.66848 8.75 5V26.25H21.25V5C21.25 4.66848 21.1182 4.35063 20.8838 4.11621C20.6494 3.88179 20.3315 3.75 20 3.75H10Z"
        fill={color}
      />
      <path
        d="M17.5 6.25C18.1904 6.25 18.75 6.80964 18.75 7.5C18.75 8.19036 18.1904 8.75 17.5 8.75H12.5C11.8096 8.75 11.25 8.19036 11.25 7.5C11.25 6.80964 11.8096 6.25 12.5 6.25H17.5Z"
        fill={color}
      />
      <path
        d="M17.5 11.25C18.1904 11.25 18.75 11.8096 18.75 12.5C18.75 13.1904 18.1904 13.75 17.5 13.75H12.5C11.8096 13.75 11.25 13.1904 11.25 12.5C11.25 11.8096 11.8096 11.25 12.5 11.25H17.5Z"
        fill={color}
      />
      <path
        d="M17.5 16.25C18.1904 16.25 18.75 16.8096 18.75 17.5C18.75 18.1904 18.1904 18.75 17.5 18.75H12.5C11.8096 18.75 11.25 18.1904 11.25 17.5C11.25 16.8096 11.8096 16.25 12.5 16.25H17.5Z"
        fill={color}
      />
      <path
        d="M17.5 21.25C18.1904 21.25 18.75 21.8096 18.75 22.5C18.75 23.1904 18.1904 23.75 17.5 23.75H12.5C11.8096 23.75 11.25 23.1904 11.25 22.5C11.25 21.8096 11.8096 21.25 12.5 21.25H17.5Z"
        fill={color}
      />
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

export const Instagram = ({
  strokeWidth = 1,
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
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
      strokeLinecap="round"
    >
      <g clipPath="url(#clip0_1934_1208)">
        <path
          d="M24.5703 7.5C24.5312 6.25 24.2969 5.35156 24.0234 4.53125C23.75 3.71094 23.3203 3.04688 22.6562 2.38281C21.9922 1.71875 21.3281 1.32812 20.5469 1.01562C19.7656 0.703125 18.9062 0.507813 17.5781 0.46875C16.2109 0.390625 15.8203 0.390625 12.5 0.390625C9.17969 0.390625 8.82812 0.390625 7.5 0.429688C6.17188 0.46875 5.35156 0.703125 4.53125 0.976562C3.71094 1.25 3.04688 1.71875 2.38281 2.38281C1.71875 3.04688 1.28906 3.71094 1.01562 4.53125C0.703125 5.3125 0.507813 6.17188 0.46875 7.5C0.429688 8.82812 0.390625 9.17969 0.390625 12.5C0.390625 15.8203 0.390625 16.1719 0.429688 17.5C0.46875 18.8281 0.703125 19.6484 0.976562 20.4688C1.25 21.2891 1.67969 21.9531 2.34375 22.6172C3.00781 23.2812 3.71094 23.7109 4.49219 23.9844C5.27344 24.2578 6.13281 24.4922 7.46094 24.5312C8.78906 24.6094 9.14062 24.6094 12.4609 24.6094C15.7812 24.6094 16.1328 24.6094 17.4609 24.5703C18.7891 24.5312 19.6094 24.2969 20.4297 24.0234C21.25 23.75 21.9141 23.3203 22.5781 22.6562C23.2422 21.9922 23.6719 21.2891 23.9453 20.5078C24.2188 19.7266 24.4531 18.8672 24.4922 17.5391C24.5312 16.2891 24.5312 15.8984 24.5312 12.5781C24.5312 9.25781 24.6094 8.82812 24.5703 7.5ZM22.3828 17.3828C22.3438 18.5547 22.1094 19.1797 21.9531 19.6484C21.7188 20.1953 21.4453 20.625 21.0156 21.0156C20.5859 21.4453 20.1953 21.6797 19.6484 21.9531C19.2188 22.1094 18.5938 22.3438 17.3828 22.3828C16.1328 22.3828 15.7422 22.3828 12.5391 22.3828C9.33594 22.3828 8.90625 22.3828 7.65625 22.3438C6.48438 22.3047 5.85938 22.0703 5.39062 21.9141C4.84375 21.6797 4.41406 21.4062 4.02344 20.9766C3.59375 20.5469 3.35938 20.1562 3.08594 19.6094C2.92969 19.1797 2.69531 18.5547 2.65625 17.3438C2.65625 16.1328 2.65625 15.7422 2.65625 12.5C2.65625 9.25781 2.65625 8.86719 2.69531 7.61719C2.73438 6.44531 2.96875 5.82031 3.125 5.35156C3.35938 4.80469 3.63281 4.375 4.02344 3.98438C4.45312 3.55469 4.84375 3.32031 5.39062 3.08594C5.82031 2.92969 6.44531 2.69531 7.65625 2.65625C8.90625 2.61719 9.29687 2.61719 12.5391 2.61719C15.7812 2.61719 16.1719 2.61719 17.4219 2.65625C18.5938 2.69531 19.2188 2.92969 19.6875 3.08594C20.2344 3.32031 20.6641 3.59375 21.0547 3.98438C21.4844 4.41406 21.7188 4.80469 21.9922 5.35156C22.1484 5.78125 22.3828 6.40625 22.4219 7.61719C22.4609 8.86719 22.4609 9.25781 22.4609 12.5C22.4609 15.7422 22.4219 16.1328 22.3828 17.3828Z"
          fill="white"
        />
        <path
          d="M12.501 6.28906C9.02441 6.28906 6.29004 9.10156 6.29004 12.5C6.29004 15.9766 9.10254 18.7109 12.501 18.7109C15.8994 18.7109 18.751 15.9766 18.751 12.5C18.751 9.02344 15.9775 6.28906 12.501 6.28906ZM12.501 16.5625C10.2354 16.5625 8.43848 14.7266 8.43848 12.5C8.43848 10.2734 10.2744 8.4375 12.501 8.4375C14.7666 8.4375 16.5635 10.2344 16.5635 12.5C16.5635 14.7656 14.7666 16.5625 12.501 16.5625Z"
          fill="white"
        />
        <path
          d="M19.0234 7.46094C19.8217 7.46094 20.4688 6.81383 20.4688 6.01562C20.4688 5.21738 19.8217 4.57031 19.0234 4.57031C18.2252 4.57031 17.5781 5.21738 17.5781 6.01562C17.5781 6.81383 18.2252 7.46094 19.0234 7.46094Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1934_1208">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Email = ({
  strokeWidth = 1,
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
      stroke={color}
      strokeWidth={strokeWidth}
      className={className + " "}
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        transform="translate(0 3)"
        d="M21.2109 0H2.46094C1.13281 0 0 1.09375 0 2.46094V15.1172C0 16.4453 1.09375 17.5781 2.46094 17.5781H21.2109C22.5391 17.5781 23.6719 16.4844 23.6719 15.1172V2.42188C23.6719 1.09375 22.5391 0 21.2109 0ZM21.2109 1.75781C21.25 1.75781 21.2891 1.75781 21.3281 1.75781L11.8359 7.85156L2.34375 1.75781C2.38281 1.75781 2.42188 1.75781 2.46094 1.75781H21.2109ZM21.2109 15.7422H2.46094C2.07031 15.7422 1.75781 15.4297 1.75781 15.0391V3.47656L10.8984 9.33594C11.1719 9.53125 11.4844 9.60938 11.7969 9.60938C12.1094 9.60938 12.4219 9.53125 12.6953 9.33594L21.8359 3.47656V15.0781C21.9141 15.4687 21.6016 15.7422 21.2109 15.7422Z"
        fill="white"
      />
    </svg>
  );
};

export const LongArrow = ({
  strokeWidth = 1,
  color = "white",
  size = 20,
  className,
  direction = "up",
  ...props
}: {
  strokeWidth?: number;
  color?: string;
  size?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}) => {
  const directionClass = direction === "up" ? "rotate-180" : "";

  return (
    <svg
      width={size}
      height={size}
      stroke={color}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeWidth={strokeWidth}
      className={`${className} ${direction === "down" ? "rotate-180" : direction === "left" ? "-rotate-90" : direction === "right" && "rotate-90"}`}
    >
      <path d="M3 3 l 2 -2 l2 2 " />
      <path d="M5 1 v8 " fill="none" />
    </svg>
  );
};

export const Send = ({
  strokeWidth = 0.2,
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
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
    >
      <path
        d="M16.9941 8.72671C16.8691 8.50796 16.6816 8.35171 16.4629 8.22671L2.05661 0.164214C1.80661 0.0392136 1.52536 -0.0232864 1.24411 0.00796356C0.962856 0.0392136 0.712856 0.132964 0.494106 0.320464C0.275356 0.507964 0.119106 0.757964 0.0566059 1.00796C-0.0371441 1.28921 -0.00589414 1.57046 0.0878559 1.85171L2.77536 9.44546L0.0878559 17.0392C-0.00589414 17.3205 -0.0058941 17.6017 0.0566059 17.8517C0.119106 18.133 0.275356 18.3517 0.494106 18.5392C0.712856 18.7267 0.962856 18.8205 1.24411 18.8517C1.27536 18.8517 1.33786 18.8517 1.36911 18.8517C1.58786 18.8517 1.83786 18.7892 2.05661 18.6642L16.4629 10.6017C16.6816 10.4767 16.8691 10.3205 16.9941 10.1017C17.1191 9.88296 17.1816 9.63296 17.1816 9.41421C17.1816 9.19546 17.1191 8.94546 16.9941 8.72671ZM1.43161 1.41421L14.4941 8.72671H4.02536L1.43161 1.41421ZM1.43161 17.4767L4.05661 10.1642H14.5254L1.43161 17.4767Z"
        fill="white"
      />
    </svg>
  );
};

export const Compass = ({
  strokeWidth = 0.2,
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
    >
      <path
        d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"
        fill="#F5F5F3"
      />
      <path
        d="M15.924 6.81075C16.2833 6.69119 16.6797 6.78521 16.9475 7.05294C17.2151 7.32077 17.3074 7.71715 17.1877 8.07638L15.0686 14.4358C14.969 14.7344 14.7344 14.969 14.4358 15.0686L8.07638 17.1877C7.71715 17.3074 7.32077 17.2151 7.05294 16.9475C6.78521 16.6797 6.69119 16.2833 6.81075 15.924L8.93185 9.56466L9.0295 9.35372C9.15138 9.15677 9.34039 9.0066 9.56466 8.93185L15.924 6.81075ZM10.6701 10.6701L9.34005 14.6584L13.3283 13.3283L14.6584 9.34005L10.6701 10.6701Z"
        fill="#F5F5F3"
      />
    </svg>
  );
};

export const Target = ({
  strokeWidth = 0.2,
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
    >
      <path
        d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"
        fill="#F5F5F3"
      />
      <path
        d="M17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12ZM19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z"
        fill="#F5F5F3"
      />
      <path
        d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
        fill="#F5F5F3"
      />
    </svg>
  );
};

export const Layers = ({
  strokeWidth = 0.2,
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
    >
      <path
        d="M11.7715 1.02735C11.9968 0.974432 12.236 0.999839 12.4473 1.10548L22.4473 6.10548C22.786 6.27487 23 6.62124 23 7.00001C23 7.37878 22.786 7.72515 22.4473 7.89454L12.4473 12.8945C12.1657 13.0353 11.8343 13.0353 11.5527 12.8945L1.55273 7.89454C1.21395 7.72515 1 7.37878 1 7.00001C1 6.62124 1.21395 6.27487 1.55273 6.10548L11.5527 1.10548L11.7715 1.02735ZM4.23633 7.00001L12 10.8809L19.7637 7.00001L12 3.1172L4.23633 7.00001Z"
        fill="#F5F5F3"
      />
      <path
        d="M21.5528 16.1054C22.0468 15.8584 22.6476 16.0587 22.8946 16.5527C23.1416 17.0467 22.9413 17.6475 22.4473 17.8945L12.4473 22.8945C12.1658 23.0352 11.8343 23.0352 11.5528 22.8945L1.5528 17.8945C1.05882 17.6475 0.858548 17.0467 1.10554 16.5527C1.35253 16.0587 1.95336 15.8584 2.44733 16.1054L12.0001 20.8808L21.5528 16.1054Z"
        fill="#F5F5F3"
      />
      <path
        d="M21.5528 11.1054C22.0468 10.8584 22.6476 11.0587 22.8946 11.5527C23.1416 12.0467 22.9413 12.6475 22.4473 12.8945L12.4473 17.8945C12.1658 18.0352 11.8343 18.0352 11.5528 17.8945L1.5528 12.8945C1.05882 12.6475 0.858548 12.0467 1.10554 11.5527C1.35253 11.0587 1.95336 10.8584 2.44733 11.1054L12.0001 15.8808L21.5528 11.1054Z"
        fill="#F5F5F3"
      />
    </svg>
  );
};

export const User = ({
  strokeWidth = 0.2,
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
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className}
    >
      <path
        d="M22.5 26.25V23.75C22.5 22.7554 22.1046 21.8019 21.4014 21.0986C20.6981 20.3954 19.7446 20 18.75 20H11.25C10.2554 20 9.30189 20.3954 8.59863 21.0986C7.89537 21.8019 7.5 22.7554 7.5 23.75V26.25C7.5 26.9404 6.94036 27.5 6.25 27.5C5.55964 27.5 5 26.9404 5 26.25V23.75C5 22.0924 5.65895 20.5032 6.83105 19.3311C8.00316 18.159 9.5924 17.5 11.25 17.5H18.75C20.4076 17.5 21.9968 18.159 23.1689 19.3311C24.341 20.5032 25 22.0924 25 23.75V26.25C25 26.9404 24.4404 27.5 23.75 27.5C23.0596 27.5 22.5 26.9404 22.5 26.25Z"
        fill={color}
      />
      <path
        d="M18.75 8.75C18.75 6.67893 17.0711 5 15 5C12.9289 5 11.25 6.67893 11.25 8.75C11.25 10.8211 12.9289 12.5 15 12.5C17.0711 12.5 18.75 10.8211 18.75 8.75ZM21.25 8.75C21.25 12.2018 18.4518 15 15 15C11.5482 15 8.75 12.2018 8.75 8.75C8.75 5.29822 11.5482 2.5 15 2.5C18.4518 2.5 21.25 5.29822 21.25 8.75Z"
        fill={color}
      />
    </svg>
  );
};

export const Tiktok = ({
  strokeWidth = 0.2,
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
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 220"
      stroke={color}
      fill={color}
      strokeWidth={strokeWidth}
      className={className + " overflow-visible"}
      width={size}
      height={size}
    >
      <path
        transform="translate(-20 -12)"
        d="M224,72 a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z"
      />
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

export const WhatsApp = ({
  strokeWidth = 1,
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
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className + " overflow-visible"}
      strokeLinecap="round"
    >
      <path
        d="M18.2188 3.09375C16.225 1.1 13.5094 0 10.725 0C4.88125 0 0.103125 4.74375 0.103125 10.5875C0.103125 12.4781 0.584375 14.2656 1.5125 15.9156L0 21.3813L5.67188 19.9375C7.21875 20.7625 8.97188 21.2438 10.7594 21.2438C16.5688 21.2094 21.3125 16.4656 21.3125 10.5875C21.3125 7.76875 20.2125 5.12188 18.2188 3.09375ZM10.6906 19.4219C9.14375 19.4219 7.52812 18.975 6.1875 18.15L5.84375 17.9438L2.50938 18.8031L3.4375 15.5719L3.23125 15.2281C2.37187 13.8188 1.89062 12.1688 1.89062 10.5188C1.89062 5.67188 5.80937 1.75312 10.6906 1.75312C13.0281 1.75312 15.2281 2.68125 16.8781 4.33125C18.5281 5.98125 19.4562 8.21563 19.4562 10.5875C19.525 15.5031 15.5375 19.4219 10.6906 19.4219ZM15.5375 12.8219C15.2625 12.6844 13.9906 12.0313 13.6812 11.9969C13.4406 11.8938 13.2344 11.8594 13.0969 12.1344C12.9594 12.4094 12.4094 12.9594 12.2719 13.1656C12.1344 13.3031 11.9969 13.3719 11.6875 13.2C11.4125 13.0625 10.5875 12.8219 9.55625 11.8594C8.76562 11.1719 8.21562 10.3125 8.1125 10.0031C7.975 9.72813 8.07812 9.625 8.25 9.45313C8.3875 9.31563 8.525 9.17813 8.62813 8.97188C8.76562 8.83438 8.76562 8.69688 8.90312 8.525C9.04062 8.3875 8.9375 8.18125 8.86875 8.04375C8.76562 7.90625 8.28438 6.6 8.04375 6.05C7.8375 5.5 7.59688 5.60313 7.45938 5.60313C7.32188 5.60313 7.11562 5.60313 6.97812 5.60313C6.84062 5.60313 6.49687 5.6375 6.29062 5.94688C6.05 6.22188 5.3625 6.875 5.3625 8.18125C5.3625 9.4875 6.29062 10.6906 6.4625 10.9313C6.6 11.0688 8.35313 13.7844 10.9656 14.9531C11.5844 15.2281 12.0656 15.4 12.4781 15.5375C13.0969 15.7438 13.6812 15.675 14.1281 15.6406C14.6437 15.6063 15.675 15.0219 15.9156 14.3688C16.1219 13.7844 16.1219 13.2 16.0531 13.0969C15.9844 13.0281 15.7781 12.925 15.5375 12.8219Z"
        fill={color}
      />
    </svg>
  );
};

export const YouTube = ({
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
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 30 30"
      stroke={color}
      strokeWidth={strokeWidth}
      className={className + " overflow-visible"}
      fill="none"
    >
      <g>
        <path
          d="M27.9727 3.12324 C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
          fillRule="evenodd"
          transform="translate(0.7 5) "
        />
      </g>
    </svg>
  );
};
