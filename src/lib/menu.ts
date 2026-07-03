export type MenuItem = {
  name: string;
  price: number;
  priceLarge?: number;
};

export type MenuGroup = {
  label?: string;
  items: MenuItem[];
};

export type MenuSection = {
  id: string;
  title: string;
  icon: "matcha" | "coffee" | "iced" | "warm" | "waffle" | "mojito" | "extra" | "foam";
  groups: MenuGroup[];
};

export const CURRENCY = "KSh";

export const menu: MenuSection[] = [
  {
    id: "matcha",
    title: "Matcha",
    icon: "matcha",
    groups: [
      {
        label: "Classic Sips",
        items: [
          { name: "Matcha Latte", price: 650 },
          { name: "Vanilla Matcha Latte", price: 750 },
          { name: "Caramel Matcha Latte", price: 750 },
          { name: "Coconut Matcha Latte", price: 750 },
        ],
      },
      {
        label: "Fruity Sips",
        items: [
          { name: "Mango Matcha Latte", price: 750 },
          { name: "Blueberry Matcha Latte", price: 750 },
          { name: "Strawberry Matcha Latte", price: 750 },
          { name: "Mixed Berry Matcha Latte", price: 750 },
        ],
      },
      {
        label: "Decadent Sips",
        items: [
          { name: "Lotus Matcha Latte", price: 750 },
          { name: "White Choc Matcha Latte", price: 750 },
        ],
      },
    ],
  },
  {
    id: "coffee",
    title: "Coffee",
    icon: "coffee",
    groups: [
      {
        items: [
          { name: "Latte", price: 350 },
          { name: "Espresso", price: 200 },
          { name: "Cappuccino", price: 350 },
          { name: "Caffè Mocha", price: 400 },
          { name: "Flat White", price: 350 },
          { name: "Americano", price: 250 },
          { name: "Spanish Latte", price: 350 },
          { name: "Latte Macchiato", price: 350 },
          { name: "Espresso Macchiato", price: 250 },
        ],
      },
    ],
  },
  {
    id: "iced-coffee",
    title: "Iced Coffee",
    icon: "iced",
    groups: [
      {
        items: [
          { name: "Iced Latte", price: 400 },
          { name: "Iced Cappuccino", price: 400 },
          { name: "Iced Americano", price: 350 },
          { name: "Iced Mocha", price: 450 },
          { name: "Iced Spanish Latte", price: 500 },
        ],
      },
    ],
  },
  {
    id: "warm-drinks",
    title: "Warm Drinks",
    icon: "warm",
    groups: [
      {
        items: [
          { name: "Matcha Latte", price: 400 },
          { name: "Karak", price: 400 },
          { name: "Hot Chocolate", price: 350 },
          { name: "Dawa", price: 350 },
        ],
      },
    ],
  },
  {
    id: "iced-drinks",
    title: "Iced Drinks",
    icon: "iced",
    groups: [
      {
        items: [
          { name: "Iced Karak", price: 500 },
          { name: "Cold Dawa", price: 400 },
        ],
      },
    ],
  },
  {
    id: "mojitos",
    title: "Mojitos",
    icon: "mojito",
    groups: [
      {
        items: [
          { name: "Classic", price: 550, priceLarge: 650 },
          { name: "Strawberry", price: 550, priceLarge: 650 },
          { name: "Passion", price: 550, priceLarge: 650 },
          { name: "Mixed Berry", price: 550, priceLarge: 650 },
        ],
      },
    ],
  },
  {
    id: "waffles",
    title: "Waffles",
    icon: "waffle",
    groups: [
      {
        items: [
          { name: "Lotus Waffle", price: 650 },
          { name: "Chocolate Waffle", price: 650 },
          { name: "Pistachio Waffle", price: 650 },
          { name: "Scoop of Ice Cream", price: 100 },
        ],
      },
    ],
  },
  {
    id: "extras",
    title: "Extras",
    icon: "extra",
    groups: [
      {
        items: [
          { name: "Shot of Matcha", price: 150 },
          { name: "Shot of Flavour", price: 100 },
          { name: "Upsize to Large", price: 100 },
          { name: "Oat Milk", price: 100 },
          { name: "Almond Milk", price: 100 },
        ],
      },
    ],
  },
  {
    id: "cold-foams",
    title: "Cold Foams",
    icon: "foam",
    groups: [
      {
        items: [
          { name: "Sea Salt & Vanilla", price: 50 },
          { name: "Cinnamon & Coconut", price: 50 },
          { name: "Cardamom & Date", price: 50 },
        ],
      },
    ],
  },
];

export const bestSellers = [
  { name: "Matcha Latte", price: 650, flavor: "matcha" as const },
  { name: "Blue Dawa", price: 400, flavor: "blue" as const },
  { name: "Lotus Waffle", price: 650, flavor: "waffle" as const },
  { name: "Iced Spanish Latte", price: 500, flavor: "latte" as const },
];

export const site = {
  name: "MOMcha",
  tagline: "Sip. Smile. Repeat.",
  phone: "+254 700 123 456",
  phoneHref: "tel:+254700123456",
  whatsapp: "https://wa.me/254700123456",
  email: "hello@momcha.co.ke",
  instagram: "https://www.instagram.com/mombasamatcha/",
  tiktok: "https://www.tiktok.com/@mombasamatcha",
  handle: "@mombasamatcha",
  address: "Mombasa, Kenya",
  directions: "https://maps.app.goo.gl/vsKovLo7Uw9vJeNo8",
  hours: "Tuesday – Sunday · 11:00 AM – 11:00 PM",
  closed: "Closed on Mondays",
};
