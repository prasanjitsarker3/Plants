import { Eye } from "lucide-react";
import Image from "next/image";
import React from "react";

const PlantGallery = () => {
  const platsData = [
    {
      id: 1,
      name: "Fiddle Leaf Fig",
      img: "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024949.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
    },
    {
      id: 2,
      name: "Snake Plant",
      img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022044.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
    },
    {
      id: 3,
      name: "Monstera Deliciosa",
      img: "https://img.freepik.com/premium-photo/monstera-obliqua-fiddle-leaf-fig-ficus-lyratain-concrete-pot-white-wood-table-wall-surface-with-copy-space-araceae-window-leaf-plant_63726-2136.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
    },
    {
      id: 4,
      name: "Spider Plant",
      img: "https://img.freepik.com/premium-photo/monstera-obliqua-fiddle-leaf-fig-ficus-lyratain-concrete-pot-white-wood-table-wall-surface-with-copy-space-araceae-window-leaf-plant_63726-2136.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
    },
    {
      id: 5,
      name: "Peace Lily",
      img: "https://img.freepik.com/premium-photo/golden-pothos-snake-plant-white-wooden-table_46250-1385.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
    },
    {
      id: 6,
      name: "Aloe Vera",
      img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022055.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
    },
    {
      id: 7,
      name: "Rubber Plant",
      img: "https://img.freepik.com/free-photo/golden-pothos-epipremnum-aureum-white-table-living-room-home-garden_114579-1393.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
    },
    {
      id: 8,
      name: "Pothos",
      img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022047.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
    },
    {
      id: 9,
      name: "ZZ Plant",
      img: "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024956.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
    },
  ];

  return (
    <div className=" py-12 w-full container mx-auto md:px-0 px-4">
      <div>
        <h1 className=" text-center text-3xl text-slate-900 pb-6">
          There is no such thing as a green thumb.
          <br /> Plants take practice — just like anything else.
        </h1>
      </div>

      <div className="grid grid-cols-12 gap-4 pb-4 ">
        {platsData.slice(0, 4).map((data) => (
          <div
            key={data.id}
            className=" relative md:col-span-3 col-span-6 bg-gray-100 h-48 rounded-xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={data.img}
              alt=""
              width={300}
              height={300}
              className=" h-full w-full rounded-xl transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Name */}
            <div className="absolute bottom-0 left-0 right-0 text-center text-white text-lg font-semibold p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-[-50%]">
              <div className=" flex justify-center items-center">
                <Eye />
              </div>
              <h1> {data.name}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* First column - spans 4 columns */}
        <div className="md:col-span-4  col-span-12 ">
          <div className="grid grid-cols-12 gap-4">
            {platsData.slice(4, 6).map((data) => (
              <div
                key={data.id}
                className=" relative col-span-6 h-48  rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={data.img}
                  alt={data.name}
                  width={300}
                  height={300}
                  className="h-full w-full rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Name */}
                <div className="absolute bottom-0 left-0 right-0 text-center text-white text-lg font-semibold p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-[-50%]">
                  <div className=" flex justify-center items-center">
                    <Eye />
                  </div>
                  <h1> {data.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second column - spans 5 columns */}
        <div className=" col-span-12 md:col-span-5  gap-4 ">
          <div className="grid grid-cols-12 gap-4">
            {platsData.slice(7, 9).map((data) => (
              <div
                key={data.id}
                className=" relative md:col-span-6 col-span-6  h-48 rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={data.img}
                  alt={data.name}
                  width={300}
                  height={300}
                  className="h-full w-full rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Name */}
                <div className="absolute bottom-0 left-0 right-0 text-center text-white text-lg font-semibold p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-[-50%]">
                  <div className=" flex justify-center items-center">
                    <Eye />
                  </div>
                  <h1> {data.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third column - spans 3 columns */}
        <div className="md:col-span-3 col-span-12 h-48 rounded-xl relative overflow-hidden group cursor-pointer">
          <Image
            src={platsData[8].img}
            alt={""}
            width={300}
            height={300}
            className="h-full w-full rounded-xl transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Name */}
          <div className="absolute bottom-0 left-0 right-0 text-center text-white text-lg font-semibold p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-[-50%]">
            <div className=" flex justify-center items-center">
              <Eye />
            </div>
            <h1> {platsData[8].name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantGallery;
