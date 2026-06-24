const NoiseBackground = () => {
  return (
    <svg className="w-full h-full object-fill" stroke="white" strokeWidth={0}>
      <defs>
        <filter
          id="noise-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="linearRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.2"
            numOctaves="4"
            seed="15"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          />
          <feSpecularLighting
            surfaceScale="11"
            specularConstant="3"
            specularExponent="5"
            lightingColor="#FFF"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="specularLighting"
          >
            <feDistantLight azimuth="3" elevation="123" />
          </feSpecularLighting>
        </filter>
      </defs>
      {/* Mobile  */}
      <rect
        width="100%"
        height="100%"
        fill="#FFF0"
        opacity={0.0}
        filter="url(#noise-filter)"
        className="lg:hidden"
      >
        <animate
          attributeName="opacity"
          from="0"
          to=".040"
          dur="2s"
          repeatCount="1"
          fill="freeze"
        />
      </rect>
      {/* Desktop  */}
      <rect
        width="100%"
        height="100%"
        fill="#FFFf"
        opacity={0.0}
        filter="url(#noise-filter)"
        className="hidden lg:block"
      >
        <animate
          attributeName="opacity"
          from="0"
          to=".05"
          dur="2s"
          repeatCount="1"
          fill="freeze"
        />
      </rect>
    </svg>
  );
};

export default NoiseBackground;
