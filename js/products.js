/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - name: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
    // ************ MENS (c1) : p1-p20 **************************// 
  {
      id: "p1",
      name: "Nike Air Max 90",
      description: "Classic style with modern comfort.",
      price: 8999,
      discontinued: false,
      categories: ["c1"],
    },
    {
      id: "p2",
      name: "Adidas Ultraboost",
      description: "High-performance sneakers for ultimate comfort and energy return.",
      price: 12999,
      discontinued: false,
      categories: ["c1"],
  },
  {
    id: "p3",
    name: "Nike Air Force 1 '07",
    description: "The radiance lives on with the b-ball original.",
    price: 14500,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p4",
    name: "Air Jordan 1 Mid",
    description: "Inspired by the original AJ1.",
    price: 16580,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p5",
    name: "Nike Dunk High Retro",
    description: "Created for the hardwood but taken to the streets.",
    price: 19720,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p6",
    name: "Air Jordan 1 Low",
    description: "Inspired by the original that debuted in 1985.",
    price: 12430,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p7",
    name: "New Balance 574",
    description: "Versatile sneakers with a retro vibe.",
    price: 7999,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p8",
    name: "Jordan Retro 1",
    description: "Iconic basketball shoes with a timeless design.",
    price: 10999,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p9",
    name: "Puma Suede Classic",
    description: "Stylish and comfortable sneakers for everyday wear.",
    price: 6999,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p10",
    name: "Reebok Club C 85",
    description: "Classic tennis-inspired sneakers with a clean look.",
    price: 8999,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p11",
    name: "Converse Chuck Taylor All Star",
    description: "Timeless sneakers that go with any outfit.",
    price: 5999,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p12",
    name: "Vans Old Skool",
    description: "Skate-inspired sneakers with a cool and casual style.",
    price: 6499,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p13",
    name: "Asics Gel-Lyte III",
    description: "Comfortable and supportive sneakers with a retro aesthetic.",
    price: 8999,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p14",
    name: "Saucony Jazz Original",
    description: "Classic running shoes with a timeless appeal.",
    price: 7499,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p15",
    name: "Under Armour HOVR Phantom",
    description: "Innovative running shoes with responsive cushioning.",
    price: 11999,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p16",
    name: "Timberland 6-Inch Premium Waterproof",
    description: "Sturdy and durable boots for outdoor adventures.",
    price: 14999,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p17",
    name: "Merrell Moab 2 Ventilator",
    description: "Versatile hiking shoes for outdoor enthusiasts.",
    price: 9999,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p17",
    name: "Columbia Redmond Waterproof",
    description: "Waterproof hiking shoes for all-weather performance.",
    price: 10999,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p18",
    name: "Salomon Speedcross 5",
    description: "Trail running shoes with excellent grip and stability.",
    price: 12999,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p19",
    name: "ASICS Gel-Kayano 28",
    description: "Premium running shoes with superior cushioning and stability.",
    price: 15999,
    discontinued: false,
    categories: ["c1"],
  },
  {
    id: "p20",
    name: "Nike Air Force 1",
    description: "Iconic basketball-inspired sneakers with a timeless design.",
    price: 9999,
    discontinued: false,
    categories: ["c1"],
  },

    // ************ WOMENS (c2) : p21-p40 **************************// 
    {
      id: "p21",
      name: "Nike Air Zoom Pegasus",
      description: "Versatile running shoes with a stylish design.",
      price: 9999,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p22",
      name: "New Balance Fresh Foam Roav",
      description: "Comfortable sneakers with a sleek and modern look.",
      price: 7999,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p23",
      name: "Adidas Superstar",
      description: "Classic sneakers with a timeless appeal.",
      price: 8999,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p24",
      name: "Puma Cali",
      description: "Fashionable sneakers that blend retro and modern styles.",
      price: 7999,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p25",
      name: "Reebok Classic Leather",
      description: "Iconic sneakers with a clean and minimalist design.",
      price: 8499,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p26",
      name: "Converse Chuck Taylor All Star",
      description: "The timeless Converse sneakers loved by women worldwide.",
      price: 5999,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p27",
      name: "Vans Old Skool",
      description: "Stylish and versatile sneakers for women.",
      price: 6999,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p28",
      name: "Nike Blazer Mid '77",
      description: "Classic basketball sneakers with a vintage-inspired design.",
      price: 10999,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p29",
      name: "Adidas Stan Smith",
      description: "Clean and minimalist sneakers with an iconic silhouette.",
      price: 8499,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p30",
      name: "New Balance 574",
      description: "Versatile sneakers with a sporty yet fashionable look.",
      price: 8999,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p31",
      name: "Puma RS-X",
      description: "Bold and colorful sneakers for women who want to stand out.",
      price: 9999,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p32",
      name: "Reebok Club C 85",
      description: "Timeless sneakers with a retro tennis-inspired design.",
      price: 7999,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p33",
      name: "Converse One Star",
      description: "Trendy sneakers loved by women for their unique style.",
      price: 6999,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p34",
      name: "Vans Authentic",
      description: "Classic and versatile sneakers for women.",
      price: 5999,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p35",
      name: "Nike Air Max 270",
      description: "Comfortable and stylish sneakers with a visible Air unit.",
      price: 11999,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p36",
      name: "Adidas NMD R1",
      description: "Modern and futuristic sneakers loved by women.",
      price: 12999,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p37",
      name: "New Balance 990v5",
      description: "Premium sneakers with superior cushioning and support.",
      price: 16999,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p38",
      name: "Puma Suede Classic",
      description: "Iconic sneakers with a timeless design loved by women.",
      price: 7999,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p39",
      name: "Reebok Freestyle Hi",
      description: "Stylish and comfortable high-top sneakers for women.",
      price: 8999,
      discontinued: false,
      categories: ["c2"],
    },
    {
      id: "p40",
      name: "Converse Chuck 70",
      description: "Classic sneakers with a retro-inspired design for women.",
      price: 7999,
      discontinued: false,
      categories: ["c2"],
    },

    // ************ KIDS (c3) p41-p60 **************************// 
    {
      id: "p41",
      name: "Nike Air Max 90 Kids",
      description: "Classic style with modern comfort, designed for kids.",
      price: 6999,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p42",
      name: "Adidas Superstar Kids",
      description: "Iconic sneakers with a timeless appeal, made for kids.",
      price: 5999,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p43",
      name: "Puma Suede Classic Kids",
      description: "Classic sneakers with a stylish design, specially made for kids.",
      price: 4999,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p44",
      name: "New Balance 574 Kids",
      description: "Versatile and comfortable sneakers for active kids.",
      price: 5499,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p45",
      name: "Converse Chuck Taylor All Star Kids",
      description: "Iconic canvas sneakers for cool kids.",
      price: 4599,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p46",
      name: "Vans Authentic Kids",
      description: "Classic skate shoes for young sneaker enthusiasts.",
      price: 4999,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p47",
      name: "Reebok Classic Leather Kids",
      description: "Timeless sneakers with a retro vibe, perfect for kids.",
      price: 5499,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p48",
      name: "Nike Revolution 5 Kids",
      description: "Comfortable and lightweight sneakers for active kids.",
      price: 3999,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p49",
      name: "Adidas Stan Smith Kids",
      description: "Iconic tennis shoes with a clean and minimalist design, made for kids.",
      price: 5999,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p50",
      name: "Puma RS-X3 Kids",
      description: "Chunky sneakers with a retro-inspired design, specially made for kids.",
      price: 6499,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p51",
      name: "New Balance Fresh Foam Arishi Kids",
      description: "Comfortable and stylish sneakers for kids on the move.",
      price: 5499,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p52",
      name: "Converse One Star Kids",
      description: "Classic sneakers with a distinctive star logo, perfect for kids.",
      price: 5499,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p53",
      name: "Vans Sk8-Hi Kids",
      description: "High-top sneakers with a cool and casual style, made for kids.",
      price: 5999,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p54",
      name: "Nike Huarache Kids",
      description: "Stylish and comfortable sneakers with a snug fit, designed for kids.",
      price: 7999,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p55",
      name: "Adidas Gazelle Kids",
      description: "Iconic sneakers with a retro design, made for kids.",
      price: 5999,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p56",
      name: "Puma Carson 2 Kids",
      description: "Lightweight and breathable sneakers for active kids.",
      price: 4499,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p57",
      name: "New Balance FuelCore Reveal Kids",
      description: "Versatile and comfortable sneakers for kids on the go.",
      price: 4999,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p58",
      name: "Converse Chuck 70 Kids",
      description: "Classic canvas sneakers with a retro vibe, made for kids.",
      price: 5499,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p59",
      name: "Vans Slip-On Kids",
      description: "Easy-to-wear slip-on sneakers with a cool and casual style, made for kids.",
      price: 4999,
      discontinued: false,
      categories: ["c3"],
    },
    {
      id: "p60",
      name: "Nike Air Force 1 Kids",
      description: "Iconic sneakers with a timeless design, perfect for kids.",
      price: 6999,
      discontinued: false,
      categories: ["c3"],
    },
  
    // ************ SPORTS PERFORMACE (c4) : p61-p80 **************************// 
    {
      id: "p61",
      name: "Nike Metcon 6",
      description: "Versatile training shoes for high-intensity workouts.",
      price: 11999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p62",
      name: "Adidas Solarboost",
      description: "Running shoes with responsive cushioning and energy return.",
      price: 10999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p63",
      name: "Under Armour HOVR Infinite",
      description: "Performance running shoes with advanced cushioning and connectivity.",
      price: 12999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p64",
      name: "New Balance FuelCell Propel",
      description: "Lightweight and responsive running shoes for performance athletes.",
      price: 9999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p65",
      name: "Nike Zoom Fly 3",
      description: "Fast and responsive running shoes for speed enthusiasts.",
      price: 13999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p66",
      name: "Adidas Ultraboost 21",
      description: "High-performance running shoes with exceptional comfort and energy return.",
      price: 16999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p67",
      name: "Reebok Nano X1",
      description: "Versatile training shoes for CrossFit and functional fitness workouts.",
      price: 10999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p68",
      name: "New Balance Fresh Foam 1080v11",
      description: "Plush and cushioned running shoes for long-distance comfort.",
      price: 12999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p69",
      name: "Nike Air Zoom Pegasus 38",
      description: "Versatile running shoes with a stylish design.",
      price: 10999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p70",
      name: "Adidas Adizero Boston 10",
      description: "Lightweight and responsive running shoes for speed and performance.",
      price: 13999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p71",
      name: "Under Armour Project Rock 3",
      description: "Training shoes designed in collaboration with Dwayne 'The Rock' Johnson.",
      price: 14999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p72",
      name: "New Balance FuelCell Rebel",
      description: "Lightweight and fast running shoes for quick and agile movements.",
      price: 10999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p73",
      name: "Nike Air Zoom Structure 24",
      description: "Stability running shoes with a supportive and comfortable design.",
      price: 11999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p74",
      name: "Adidas Adizero Adios Pro",
      description: "High-performance racing shoes for competitive runners.",
      price: 21999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p75",
      name: "Under Armour Charged Assert 8",
      description: "Versatile running shoes for everyday training and workouts.",
      price: 7999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p76",
      name: "New Balance Fresh Foam More v3",
      description: "Plush and cushioned running shoes for a luxurious ride.",
      price: 12999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p77",
      name: "Nike React Infinity Run Flyknit 2",
      description: "Stability running shoes with a supportive and responsive design.",
      price: 12999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p78",
      name: "Adidas Terrex Speed Ultra",
      description: "Trail running shoes for rugged terrains and outdoor adventures.",
      price: 13999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p79",
      name: "Under Armour HOVR Sonic 4",
      description: "Lightweight and comfortable running shoes for everyday runners.",
      price: 9999,
      discontinued: false,
      categories: ["c4"],
    },
    {
      id: "p80",
      name: "New Balance Fresh Foam 860v11",
      description: "Supportive and cushioned running shoes for stability and comfort.",
      price: 11999,
      discontinued: false,
      categories: ["c4"],
    }

];