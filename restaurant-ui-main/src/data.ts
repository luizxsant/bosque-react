type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "Sonho",
    desc: "Redondo, fofinho e muito gostoso",
    img: "/temporary/sonho.png",
    price: 5.99,
   
  },
  {
    id: 2,
    title: "Pão Francês",
    desc: "O clássico para todas manhãs",
    img: "/temporary/pao01.png",
    price: 13.99,
   
  },
  {
    id: 3,
    title: "Brigadeiro",
    desc: "Doce típico da culinária brasileira",
    img: "/temporary/brigadeiro.png",
    price: 2.99,
    
  },
  {
    id: 4,
    title: "Croissant",
    desc: "O clássico francês feito do nosso jeito ",
    img: "/temporary/croissants.png",
    price: 9.99,
    
  },
  
];




export const pizzas: Products = [
  {
    id: 1,
    title: "Sonho",
    desc: "Redondo, fofinho e muito gostoso",
    img: "/temporary/sonho.png",
    price: 5.99,
   
  },
  {
    id: 2,
    title: "Pão Francês",
    desc: "O clássico para todas manhãs",
    img: "/temporary/pao01.png",
    price: 13.99,
   
  },
  {
    id: 3,
    title: "Brigadeiro",
    desc: "Doce típico da culinária brasileira",
    img: "/temporary/brigadeiro.png",
    price: 2.99,
    
  },
  {
    id: 4,
    title: "Croissant",
    desc: "O clássico francês feito do nosso jeito ",
    img: "/temporary/croissants.png",
    price: 9.99,
    
  },
  
];
export const burgers: Products = [
  
  {
    id: 2,
    title: "Pão Francês",
    desc: "O clássico para todas manhãs",
    img: "/temporary/pao01.png",
    price: 13.99,
   
  },
  
  {
    id: 4,
    title: "Croissant",
    desc: "O clássico francês feito do nosso jeito ",
    img: "/temporary/croissants.png",
    price: 9.99,
    
  },
  
];
export const pastas: Products = [
  {
    id: 1,
    title: "Sonho",
    desc: "Redondo, fofinho e muito gostoso",
    img: "/temporary/sonho.png",
    price: 5.99,
   
  },
  
  {
    id: 3,
    title: "Brigadeiro",
    desc: "Doce típico da culinária brasileira",
    img: "/temporary/brigadeiro.png",
    price: 2.99,
    
  },
 
  
];

export const singleProduct: Product = {
  id: 1,
  title: "Sicilian",
  desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  img: "/temporary/p1.png",
  price: 24.9,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};


type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Doces",
    desc: "",
    img: "/slide1.jpg",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Salgados",
    desc: "",
    img: "/paozao.jpg",
    color: "white",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Suco",
    desc: "",
    img: "/temporary/suco.jpg",
    color: "white",
  },
];
