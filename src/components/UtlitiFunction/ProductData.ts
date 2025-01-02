interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  totalProduct: number;
  sold: number;
  description: string;
  size: string[];
  photo: { id: number; img: string }[];
}

export const productData: Product[] = [
  {
    id: 1,
    name: "Bird's Nest Fern",
    price: 23.0,
    img: "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024949.jpg",
    totalProduct: 50,
    sold: 10,
    description: "A low-maintenance indoor plant with beautiful wavy fronds.",
    size: ["S", "M", "L"],
    photo: [
      {
        id: 1,
        img: "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024949.jpg",
      },
      {
        id: 2,
        img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022055.jpg",
      },
      {
        id: 3,
        img: "https://img.freepik.com/free-photo/golden-pothos-epipremnum-aureum-white-table-living-room-home-garden_114579-1393.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    price: 25.0,
    img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022044.jpg",
    totalProduct: 40,
    sold: 20,
    description:
      "Known as the Swiss Cheese Plant, perfect for modern interiors.",
    size: ["S", "M", "L"],
    photo: [
      {
        id: 1,
        img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022044.jpg",
      },
      {
        id: 2,
        img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022055.jpg",
      },
      {
        id: 3,
        img: "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024956.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Snake Plant",
    price: 20.0,
    img: "https://img.freepik.com/premium-photo/monstera-obliqua-fiddle-leaf-fig-ficus-lyratain-concrete-pot-white-wood-table-wall-surface-with-copy-space-araceae-window-leaf-plant_63726-2136.jpg",
    totalProduct: 30,
    sold: 15,
    description:
      "An air-purifying plant with upright leaves, perfect for any room.",
    size: ["S", "M", "L"],
    photo: [
      {
        id: 1,
        img: "https://img.freepik.com/free-photo/golden-pothos-epipremnum-aureum-white-table-living-room-home-garden_114579-1393.jpg",
      },
      {
        id: 2,
        img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022055.jpg",
      },
      {
        id: 3,
        img: "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024956.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    price: 35.0,
    img: "https://img.freepik.com/premium-photo/monstera-obliqua-fiddle-leaf-fig-ficus-lyratain-concrete-pot-white-wood-table-wall-surface-with-copy-space-araceae-window-leaf-plant_63726-2136.jpg",
    totalProduct: 25,
    sold: 5,
    description:
      "A statement plant with large, glossy leaves for a modern touch.",
    size: ["M", "L"],
    photo: [
      {
        id: 1,
        img: "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024956.jpg",
      },
      {
        id: 2,
        img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022055.jpg",
      },
      {
        id: 3,
        img: "https://img.freepik.com/free-photo/golden-pothos-epipremnum-aureum-white-table-living-room-home-garden_114579-1393.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Golden Pothos",
    price: 18.0,
    img: "https://img.freepik.com/premium-photo/golden-pothos-snake-plant-white-wooden-table_46250-1385.jpg",
    totalProduct: 60,
    sold: 30,
    description:
      "A versatile and hardy trailing plant with vibrant green leaves.",
    size: ["S", "M"],
    photo: [
      {
        id: 1,
        img: "https://img.freepik.com/premium-photo/golden-pothos-snake-plant-white-wooden-table_46250-1385.jpg",
      },
      {
        id: 2,
        img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022055.jpg",
      },
      {
        id: 3,
        img: "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024956.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Areca Palm",
    price: 30.0,
    img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022055.jpg",
    totalProduct: 35,
    sold: 8,
    description: "A tall and elegant plant, ideal for corners or large spaces.",
    size: ["M", "L"],
    photo: [
      {
        id: 1,
        img: "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024956.jpg",
      },
      {
        id: 2,
        img: "https://img.freepik.com/free-photo/golden-pothos-epipremnum-aureum-white-table-living-room-home-garden_114579-1393.jpg",
      },
      {
        id: 3,
        img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022055.jpg",
      },
    ],
  },
  {
    id: 7,
    name: "Spider Plant",
    price: 15.0,
    img: "https://img.freepik.com/free-photo/golden-pothos-epipremnum-aureum-white-table-living-room-home-garden_114579-1393.jpg",
    totalProduct: 70,
    sold: 40,
    description:
      "A classic indoor plant with arching leaves and baby plantlets.",
    size: ["S", "M"],
    photo: [
      {
        id: 1,
        img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022044.jpg",
      },
      {
        id: 2,
        img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022055.jpg",
      },
      {
        id: 3,
        img: "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024956.jpg",
      },
    ],
  },

  {
    id: 8,
    name: "Peace Lily",
    price: 22.0,
    img: "https://img.freepik.com/free-photo/peace-lily-plant-white-pot-near-window_1253-123.jpg",
    totalProduct: 40,
    sold: 12,
    description:
      "A graceful plant known for its white flowers and air-purifying qualities.",
    size: ["S", "M"],
    photo: [
      {
        id: 1,
        img: "https://img.freepik.com/free-photo/peace-lily-plant-white-pot-near-window_1253-123.jpg",
      },
      {
        id: 2,
        img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022055.jpg",
      },
      {
        id: 3,
        img: "https://img.freepik.com/free-photo/golden-pothos-epipremnum-aureum-white-table-living-room-home-garden_114579-1393.jpg",
      },
    ],
  },
  {
    id: 9,
    name: "Aloe Vera",
    price: 15.0,
    img: "https://img.freepik.com/free-photo/aloe-vera-plant-glass-pot_1262-1234.jpg",
    totalProduct: 50,
    sold: 25,
    description:
      "A versatile plant with medicinal uses and striking spiky leaves.",
    size: ["S", "M"],
    photo: [
      {
        id: 1,
        img: "https://img.freepik.com/free-photo/aloe-vera-plant-glass-pot_1262-1234.jpg",
      },
      {
        id: 2,
        img: "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024956.jpg",
      },
      {
        id: 3,
        img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022055.jpg",
      },
    ],
  },
  {
    id: 10,
    name: "Calathea",
    price: 28.0,
    img: "https://img.freepik.com/free-photo/calathea-indoor-plant-pot_23-2149229157.jpg",
    totalProduct: 30,
    sold: 10,
    description:
      "A striking plant with beautifully patterned leaves that thrive indoors.",
    size: ["S", "M", "L"],
    photo: [
      {
        id: 1,
        img: "https://img.freepik.com/free-photo/calathea-indoor-plant-pot_23-2149229157.jpg",
      },
      {
        id: 2,
        img: "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024956.jpg",
      },
      {
        id: 3,
        img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022055.jpg",
      },
    ],
  },
  {
    id: 11,
    name: "ZZ Plant",
    price: 20.0,
    img: "https://img.freepik.com/free-photo/zz-plant-modern-white-pot_1253-214.jpg",
    totalProduct: 45,
    sold: 18,
    description:
      "A hardy and low-maintenance plant with shiny, deep green leaves.",
    size: ["M", "L"],
    photo: [
      {
        id: 1,
        img: "https://img.freepik.com/free-photo/zz-plant-modern-white-pot_1253-214.jpg",
      },
      {
        id: 2,
        img: "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024956.jpg",
      },
      {
        id: 3,
        img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022055.jpg",
      },
    ],
  },
  {
    id: 12,
    name: "Jade Plant",
    price: 18.0,
    img: "https://img.freepik.com/free-photo/jade-plant-mini-pot-wooden-table_23-2151525155.jpg",
    totalProduct: 50,
    sold: 22,
    description: "A succulent plant symbolizing good luck and prosperity.",
    size: ["S", "M"],
    photo: [
      {
        id: 1,
        img: "https://img.freepik.com/free-photo/jade-plant-mini-pot-wooden-table_23-2151525155.jpg",
      },
      {
        id: 2,
        img: "https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024956.jpg",
      },
      {
        id: 3,
        img: "https://img.freepik.com/free-photo/indoor-plants-studio_23-2151022055.jpg",
      },
    ],
  },
];

export const productInformationData = [
  {
    id: 1,
    name: "Details",
    details: `This product is crafted with the highest quality materials, ensuring long-lasting durability and a premium feel. 
  Designed to meet your everyday needs, it combines functionality with style. 
  Each piece undergoes rigorous quality checks to deliver unmatched performance. 
  Ideal for those who value both practicality and elegance in their purchases.`,
  },
  {
    id: 2,
    name: "Review & Rating",
    users: [
      {
        id: 1,
        name: "Cameron Williamson",
        rating: "4",
        comment: "Very Nice!!",
        like: 10,
        createAt: "2024-11-20",
      },
      {
        id: 2,
        name: "Alex Johnson",
        rating: "5",
        comment: "Amazing product, exceeded my expectations!",
        like: 15,
        createAt: "2024-11-22",
      },
    ],
    views: 121,
    rating: 4.5,
    userFeedBack: [
      { id: 5, value: 50 },
      { id: 4, value: 5 },
      { id: 3, value: 10 },
      { id: 2, value: 30 },
      { id: 1, value: 2 },
    ],
  },
  {
    id: 3,
    name: "Discussion",
    details: `This product is crafted with the highest quality materials, ensuring long-lasting durability and a premium feel. 
    Designed to meet your everyday needs, it combines functionality with style. 
    Each piece undergoes rigorous quality checks to deliver unmatched performance. 
    Ideal for those who value both practicality and elegance in their purchases.`,
  },
];
