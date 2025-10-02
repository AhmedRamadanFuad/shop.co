export const products = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    originalPrice: null,
    image: [
      {
        id: crypto.randomUUID(),
        url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
      },
    ],
    reviews: [
      {
        id: crypto.randomUUID(),
        name: "Alex M.",
        verified: true,
        rating: 4,
        date: "August 16, 2023",
        description:
          "Excellent quality and super comfortable! This t-shirt has joined the rest of my favorite wardrobe. The fit is just right, not too tight or too loose about, and the fabric breathes well. A flexible go-to item you'll.",
      },
    ],
    category: "T-shirts",
    colors: [
      { id: crypto.randomUUID, name: "Green", className: "bg-green-500" },
      { id: crypto.randomUUID, name: "Blue", className: "bg-blue-500" },
    ],
    sizes: [
      { id: crypto.randomUUID, name: "Small" },
      { id: crypto.randomUUID, name: "Medium" },
      { id: crypto.randomUUID, name: "Large" },
    ],
    style: "Casual",
  },
];

export function getProduct(id: number) {
  const product = myProducts.find((product) => product.id === Number(id));
  return product;
}

export const testProduct = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    // discount: 25,
    images: [
      {
        id: "1a",
        url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      },
      {
        id: "1b",
        url: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
      },
    ],
    reviews: [
      {
        id: "r1",
        name: "Alex M.",
        verified: true,
        rating: 4,
        date: "August 16, 2023",
        description: "Excellent quality and super comfortable!",
      },
      {
        id: "r2",
        name: "Ahmed L.",
        verified: true,
        rating: 3,
        date: "May 10, 2023",
        description:
          "perfect for any occasion. Crafted from a soft and breathable fabric",
      },
    ],
    category: "T-shirts",
    colors: [
      { id: "c1", name: "Green", class: "bg-green-500" },
      { id: "c2", name: "Black", class: "bg-black" },
    ],
    sizes: [
      { id: "s1", name: "Small" },
      { id: "s2", name: "Medium" },
    ],
    style: "Casual",
    description:
      "This Gradient Graphic T-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers a regularc omfortable wear.",
  },
  {
    id: 2,
    name: "Classic Hoodie",
    price: 220,
    discount: 15,
    images: [
      {
        id: "2a",
        url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
      },
      {
        id: "2b",
        url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
      },
      {
        id: "2c",
        url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop",
      },
    ],
    reviews: [
      {
        id: "r1",
        name: "Sophia L.",
        verified: true,
        rating: 5,
        date: "July 10, 2023",
        description: "Super warm and comfy, perfect for winter!",
      },
      {
        id: "r2",
        name: "Ahmed L.",
        verified: true,
        rating: 3,
        date: "May 10, 2023",
        description:
          "perfect for any occasion. Crafted from a soft and breathable fabric",
      },
    ],
    category: "Hoodie",
    colors: [
      { id: "c3", name: "Red", class: "bg-red-500" },
      { id: "c4", name: "White", class: "bg-white border border-gray-300" },
    ],
    sizes: [
      { id: "s3", name: "Large" },
      { id: "s4", name: "X-Large" },
    ],
    style: "Casual",
    description:
      "This Classic Hoodie is perfect for any occasion. Crafted from a soft and breathable fabric, it offers a regularc omfortable wear.",
  },
];
type Review = {
  id: string;
  name: string;
  verified: boolean;
  rating: number;
  date: string;
  description: string;
};

export function getRating(array: Review[]) {
  const sum = array.reduce((acc: number, curr) => acc + curr.rating, 0);
  const avg = array.length > 0 ? sum / array.length : 0;
  return parseFloat(avg.toFixed(1));
}

export function applyDiscount(price: number, percent: number) {
  return Math.round(price * (1 - percent / 100));
}

// const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
// const dressStyles = ["Casual", "Formal", "Party", "Gym"];
// const colors = [
//   { name: "Green", class: "bg-green-500" },
//   { name: "Red", class: "bg-red-500" },
//   { name: "Yellow", class: "bg-yellow-500" },
//   { name: "Orange", class: "bg-orange-500" },
//   { name: "Sky Blue", class: "bg-sky-500" },
//   { name: "Blue", class: "bg-blue-500" },
//   { name: "Purple", class: "bg-purple-500" },
//   { name: "Pink", class: "bg-pink-500" },
//   { name: "White", class: "bg-white border border-gray-300" },
//   { name: "Black", class: "bg-black" },
// ];
// const sizes = [
//   "XX-Small",
//   "X-Small",
//   "Small",
//   "Medium",
//   "Large",
//   "X-Large",
//   "XX-Large",
//   "3X-Large",
//   "4X-Large",
// ];

export const Newproducts = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    discount: 0,
    images: [
      {
        id: "1a",
        url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      },
      {
        id: "1b",
        url: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
      },
    ],
    reviews: [
      {
        id: "r1",
        name: "Alex M.",
        verified: true,
        rating: 4,
        date: "August 16, 2023",
        description: "Excellent quality and super comfortable!",
      },
      {
        id: "r2",
        name: "Ahmed L.",
        verified: true,
        rating: 3,
        date: "May 10, 2023",
        description:
          "perfect for any occasion. Crafted from a soft and breathable fabric",
      },
    ],
    category: "T-shirts",
    colors: [
      { id: "c1", name: "Green", class: "bg-green-500" },
      { id: "c2", name: "Black", class: "bg-black" },
    ],
    sizes: [
      { id: "s1", name: "Small" },
      { id: "s2", name: "Medium" },
    ],
    style: "Casual",
    description:
      "This Gradient Graphic T-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers a regular comfortable wear.",
  },
  {
    id: 2,
    name: "Classic Hoodie",
    price: 220,
    discount: 15,
    images: [
      {
        id: "2a",
        url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
      },
      {
        id: "2b",
        url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
      },
      {
        id: "2c",
        url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop",
      },
    ],
    reviews: [
      {
        id: "r1",
        name: "Sophia L.",
        verified: true,
        rating: 5,
        date: "July 10, 2023",
        description: "Super warm and comfy, perfect for winter!",
      },
      {
        id: "r2",
        name: "Ahmed L.",
        verified: true,
        rating: 3,
        date: "May 10, 2023",
        description:
          "perfect for any occasion. Crafted from a soft and breathable fabric",
      },
    ],
    category: "Hoodie",
    colors: [
      { id: "c3", name: "Red", class: "bg-red-500" },
      { id: "c4", name: "White", class: "bg-white border border-gray-300" },
    ],
    sizes: [
      { id: "s3", name: "Large" },
      { id: "s4", name: "X-Large" },
    ],
    style: "Casual",
    description:
      "This Classic Hoodie is perfect for any occasion. Crafted from a soft and breathable fabric, it offers a regular comfortable wear.",
  },
  // Additional sample products for better testing
  {
    id: 3,
    name: "Formal Shirt",
    price: 180,
    discount: 10,
    images: [
      {
        id: "3a",
        url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
      },
    ],
    reviews: [
      {
        id: "r3",
        name: "John D.",
        verified: true,
        rating: 4,
        date: "June 15, 2023",
        description: "Great for office wear!",
      },
    ],
    category: "Shirts",
    colors: [
      { id: "c5", name: "White", class: "bg-white border border-gray-300" },
      { id: "c6", name: "Blue", class: "bg-blue-500" },
    ],
    sizes: [
      { id: "s5", name: "Medium" },
      { id: "s6", name: "Large" },
    ],
    style: "Formal",
    description: "Professional formal shirt perfect for business meetings.",
  },
];

export const myProducts = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
    rating: 4.5,
    reviews: 123,
    category: "T-shirts",
    colors: ["Green", "Blue"],
    sizes: ["Small", "Medium", "Large"],
    style: "Casual",
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=300&h=400&fit=crop",
    rating: 4.2,
    reviews: 89,
    category: "T-shirts",
    colors: ["Red", "White"],
    sizes: ["Medium", "Large", "X-Large"],
    style: "Casual",
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 160,
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=300&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "T-shirts",
    colors: ["Black", "White"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    style: "Casual",
  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    price: 240,
    originalPrice: 260,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop",
    rating: 4.3,
    reviews: 203,
    category: "Jeans",
    colors: ["Blue"],
    sizes: ["Small", "Medium", "Large"],
    style: "Casual",
  },
  {
    id: 5,
    name: "Checkered Shirt",
    price: 180,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop",
    rating: 4.4,
    reviews: 167,
    category: "Shirts",
    colors: ["Red", "Blue", "White"],
    sizes: ["Medium", "Large", "X-Large"],
    style: "Formal",
  },
  {
    id: 6,
    name: "Sleeve Striped T-shirt",
    price: 130,
    originalPrice: 160,
    image:
      "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=300&h=400&fit=crop",
    rating: 4.6,
    reviews: 91,
    category: "T-shirts",
    colors: ["Orange", "White"],
    sizes: ["Small", "Medium"],
    style: "Casual",
  },
  {
    id: 7,
    name: "Vertical Striped Shirt",
    price: 212,
    originalPrice: 232,
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=300&h=400&fit=crop",
    rating: 4.1,
    reviews: 134,
    category: "Shirts",
    colors: ["Green", "White"],
    sizes: ["Medium", "Large", "X-Large", "XX-Large"],
    style: "Formal",
  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=300&h=400&fit=crop",
    rating: 4.0,
    reviews: 67,
    category: "Shorts",
    colors: ["Blue", "Sky Blue"],
    sizes: ["Medium", "Large", "X-Large"],
    style: "Casual",
  },
  {
    id: 10,
    name: "Party Hoodie",
    price: 200,
    originalPrice: null,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop",
    rating: 4.3,
    reviews: 145,
    category: "Hoodie",
    colors: ["Black", "Purple"],
    sizes: ["Large", "X-Large", "XX-Large"],
    style: "Party",
  },
];
