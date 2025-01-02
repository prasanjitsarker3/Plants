"use client";

const Banner = () => {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/bannerVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Centered Text */}
      <div className="relative z-10 w-full md:px-0 px-4 container mx-auto  flex flex-col md:items-start items-center justify-center text-start h-full text-white">
        <h1 className="text-2xl md:text-5xl font-bold vigaRegular">
          Go Green,
          <span className=" primaryColor vigaRegular">Feel Fresh</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl  font-mono md:text-start text-center ">
          The collection provide you indoor and office plant to relax you spaces
        </p>
        <button className="mt-6 px-12 py-2 border border-[#028355] brightness-100  primaryColor rounded-full">
          Shop Plants
        </button>
      </div>
    </div>
  );
};

export default Banner;
