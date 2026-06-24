export const MediaQueryIndicator = () => {
  return (
    <div className="bottom-10 left-10 z-50 fixed rounded-xl w-auto h-auto overflow-hidden text-2xl">
      <p className="md:hidden bg-green-500 px-5 py-2">SM: Mobile</p>
      <p className="hidden lg:hidden md:block bg-blue-500 px-5 py-2">
        MD: Tablet
      </p>
      <p className="hidden xl:hidden lg:block bg-yellow-500 px-5 py-2">
        LG: HD
      </p>
      <p className="hidden 2xl:hidden xl:block bg-orange-500 px-5 py-2">
        XL: FHD
      </p>
      <p className="hidden 2xl:block bg-purple-500 px-5 py-2">2XL: 2K+</p>
    </div>
  );
};
