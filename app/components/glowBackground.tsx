const GlowBackground = ({ left = false }: { left?: boolean }) => {
  return (
    <svg className="w-full h-full object-fill" stroke="white" strokeWidth={0}>
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
        cx={left ? "0%" : "100%"}
        cy="35%"
        r="0%"
        fill="url(#heroGlow)"
        opacity={0.5}
        stroke="white"
      >
        <animate
          attributeName="r"
          from="0%"
          to="50%"
          dur="1.5s"
          repeatCount="1"
          fill="freeze"
        />
      </circle>
      <ellipse
        cx={left ? "0%" : "100%"}
        cy="35%"
        rx="0%"
        ry="0%"
        fill="url(#heroGlow)"
        opacity={0.5}
        stroke="white"
      >
        <animate
          attributeName="rx"
          from="0%"
          to="120%"
          dur="1s"
          repeatCount="1"
          fill="freeze"
        />
        <animate
          attributeName="ry"
          from="0%"
          to="60%"
          dur="2.5s"
          fill="freeze"
          repeatCount="1"
        />
      </ellipse>
    </svg>
  );
};

export default GlowBackground;
