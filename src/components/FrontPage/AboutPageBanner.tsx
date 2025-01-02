import React from "react";

const AboutPageBanner = () => {
  return (
    <div
      className="relative w-full h-[100vh] flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/abstract-modern-interior-with-green-plant-dark-orange-wall-copy-space_115594-2194.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid')",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Container */}
      <div className="relative text-center px-6 md:px-12 z-10 max-w-4xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg tracking-wider">
          Welcome to <span className=" primaryColor">Lustria</span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-xl md:text-2xl primaryColor font-semibold drop-shadow-sm">
          Our Journey to Dreams
        </p>

        {/* Paragraph */}
        <p className="mt-6 text-lg md:text-xl text-white leading-relaxed drop-shadow-sm">
          Empowering all people to be plant people — a collection of articles
          from The Sill’s team of Plant Experts across a variety of plant care
          topics to inspire confidence in the next generation of plant parents.
          Welcome to Plant Parenthood™.
        </p>
      </div>
    </div>
  );
};

export default AboutPageBanner;
