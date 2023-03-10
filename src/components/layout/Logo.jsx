import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src="/images/logo.svg" alt="s-time logo" width={32} height={32} />

      <p className="text-2xl text-[#009688] font-bold">s-time</p>
    </div>
  );
};

export default Logo;
