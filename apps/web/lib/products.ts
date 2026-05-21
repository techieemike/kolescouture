export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  sizes: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Silk Evening Gown",
    price: 1200,
    description: "Hand-stitched Italian silk with a flowing silhouette. Features delicate beading along the neckline and a concealed back zip. Perfect for galas and formal events.",
    category: "Dresses",
    image: "/images/picture 1.jpeg",
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "2",
    name: "Tailored Wool Blazer",
    price: 890,
    description: "Single-breasted blazer cut from premium virgin wool. Notched lapels, padded shoulders, and interior pockets. The foundation of any sophisticated wardrobe.",
    category: "Outerwear",
    image: "/images/picture 2.jpeg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
  },
  {
    id: "3",
    name: "Cashmere Turtleneck",
    price: 450,
    description: "Two-ply Mongolian cashmere with a ribbed finish. Incredibly soft against the skin with a relaxed fit. Available in an curated palette of seasonal colors.",
    category: "Knitwear",
    image: "/images/picture 3.jpeg",
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "4",
    name: "Leather Crossbody Bag",
    price: 680,
    description: "Full-grain Italian leather with gold-toned hardware. Adjustable strap, three interior compartments, and a detachable card holder. Designed to transition from day to evening.",
    category: "Accessories",
    image: "/images/picture 4.jpeg",
    sizes: ["One Size"],
    featured: false,
  },
  {
    id: "5",
    name: "Gold Statement Earrings",
    price: 320,
    description: "18k gold-plated geometric drop earrings. Handcrafted with cubic zirconia accents. Lightweight enough for all-day wear but striking enough for special occasions.",
    category: "Accessories",
    image: "/images/picture 5.jpeg",
    sizes: ["One Size"],
    featured: false,
  },
  {
    id: "6",
    name: "Merino Wool Scarf",
    price: 195,
    description: "Extra-fine merino wool woven in Italy. Generous 70x200cm dimensions allow for multiple styling options. Finished with hand-rolled edges and silk fringe.",
    category: "Accessories",
    image: "/images/picture 11.jpeg",
    sizes: ["One Size"],
    featured: false,
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export const allImages = Array.from({ length: 16 }, (_, i) => `/images/picture ${i + 1}.jpeg`);
