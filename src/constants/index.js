import Categories from "../section/Categories";

export const navLinks = [
  { title: 'Home', link: '/' },
  { title: 'Products', link: '/product',
//      children: [
//     {title: 'All', link:'/product'},
//     { title: 'Electronics', link: '/products/electronics' },
//     { title: 'Gadgets', link: '/products/gadgets' },
//     { title: 'Accessories', link: '/products/accessories' },
//     // Add more categories as needed
//   ]},
  },

  {
    title: 'My Account', link:'/account',
    children: [
    { title: 'Profile', link: '/user/profile' },
    { title: 'Cart', link: '/cart' },
    { title: 'Logout', link: '/login' },
    // Add more categories as needed
  ]
  }
  // Add more navigation items as needed
];

export const navL= [
    { title: 'Home', link: '/' },
    
      { title: 'Products', link: '/product'
        //  children: [
// //         {title: 'All', link:'/product'},
// //     { title: 'Electronics', link: '/products/electronics' },

// //     { title: 'Gadgets', link: '/products/gadgets' },
// //     { title: 'Accessories', link: '/products/accessories' },
// //     // Add more categories as needed
// //   ]},
}]

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];


export const products = [
    {
        imgURL: '/product.jpg',
        name: "Play Station 4",
        price: "$200.20",
        categories: "Accessories"
    },
    {
        imgURL: '/nexus2.jpg',
        name: "Nexus 55'Inches UHD 4K Smart TV (NX-TV55 U4K624B) - Black + 1 Year Warranty",
        price: "$210.20",
         categories: "gadget"
    },
    {
        imgURL: '/product3.jpg',
        name: "Asus ROG Strix SCAR 16 Gaming G634JZ 13th Gen Intel Core I9 32GB RAM/1TB SSD 12GB Nvidia 4080 Win 11",
        price: "$2900.20",
    },
    {
        imgURL: '/product2.jpg',
        name: "Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium",
        price: "$1200.20",
    },
];


export const reviews = [
    {
        imgURL: '/man.jpeg',
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: '/woman.svg',
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const productse = [
  {
    id: 1,
    name: 'Samsung Galaxy S22 Ultra 5G',
    price: 699,
    description: 'Samsung Galaxy S22 Ultra 5G (SM-S908E/DS) Dual SIM 256GB/ 12GB RAM, GSM Unlocked International Version - Green',
    image: '/sam1.jpg',
    category: 'electronics',
    slug: 'p-1',
    pay:'pay-1'
  },
  {
    id: 2,
    name: 'Music Pioneer Bluetooth Headset',
    price: 199,
    description: 'Crystal clear sound and noise cancellation',
    image: '/m-pioneer.jpg',
    category: 'gadgets',
    slug: 'p-2',
    pay:'pay-2'
  },
  {
    id: 3,
    name: 'Ultra Smart watch 8',
    price: 129,
    description: 'A smartwatch with fitness tracking',
    image: '/ultra-8.jpg',
    category: 'accessories',
    slug: 'p-3',
    pay:'pay-3'
  },

      {
        id:4,
        image: '/product.jpg',
        name: "Sony Ps4 Console 500 GB WITH 2 CONTROLLER",
        price: "200.20",
        category: "accessories",
        description:'Your Favorite Franchises Live Here: Dig g a huge catalog of exclusive games, including generation defining titles like entries in popular franchises like .',
        slug: 'p-4',
    pay:'pay-4'
    },
    {
        id:5,
        image: '/nexus2.jpg',
        name: "Nexus 55'Inches ",
        price: "210.20",
         category: "gadgets",
         description:" Nexus 55'Inches UHD 4K Smart TV (NX-TV55 U4K624B) - Black + 1 Year Warranty",
         slug:'p-5',
        pay:'pay-5'
    },
    {
        id:6,
        image: '/product3.jpg',
        name: "Asus ROG Strix SCAR 16 ",
        price: "854.20",
        description: "Asus ROG Strix SCAR 16 Gaming G634JZ 13th Gen Intel Core I9 32GB RAM/1TB SSD 12GB Nvidia 4080 Win 11",
        category: "accessories",
        slug:'p-6'  ,
    pay:'pay-6'
    },
    {
        id:7,
        image: '/product2.jpg',
        name: "Apple IPhone 15 Pro Max ",
        price: "900.20",
        description: "Apple IPhone 15 Pro Max 512gb - Nano Sim - Natural Titanium",
        category:"gadgets",
        slug:'p-7',
    pay:'pay-7'
    },

    {
        id:8,
        image: '/canoncam.jpg',
        name: "Canon EOS 5D Mark IV DSLR Camera ",
        price: "900",
        description: "Canon EOS 5D Mark IV DSLR Camera with 24-105mm f/4L II Lens",
        category:"electronics",
        slug:'p-8',
    pay:'pay-8'
    },

    {
        id:9,
        image: '/ps5.jpg',
        name: "Sony PlayStation 5 (PS5) Console - Standard Edition ",
        price: "865",
        description: "Explore uncharted virtual territories and slay dragons with this sleek Sony PlayStation 5 gaming console. The 825GB SSD allows ultra-fast load times, while 3-D audio output produces crisp acoustics. This Sony PlayStation 5 gaming console supports haptic feedback for effortless communication in multiplayer setups, and adaptive triggers allow immersive gameplay.",
        category:"electronics",
        slug:'p-9',
    pay:'pay-9'
    },

    {
        id:10,
        image: '/home1.jpg',
        name: "LG 600W Bluetooth DVD Home Theatre System ",
        price: "856",
        description: "The dual subwoofer integrated into the LG X-Boom Theater gives more power to the base tones, creating a soul shaking sound. When watching a movie, the 2.2 channel creates a rich surround sound. The engineered wood gives the speakers a high quality look.",
        category:"electronics",
        slug:'p-10',
    pay:'pay-10'
    },

    {
        id:11,
        image: '/macbook1.jpg',
        name: "Apple MacBook Pro 16.2 - 32GB - 1TB - 10 Cores - M1 Max - Silver ",
        price: "900",
        description: "The new MacBook Pro delivers game-changing performance for pro users. Choose the powerful M1 Max to supercharge pro-level workflows while getting amazing battery life.(1) And with an immersive 16-inch Liquid Retina XDR display and an array of pro ports, you can do more than ever with MacBook Pro.(2)",
        category:"electronics",
        slug:'p-11',
    pay:'pay-11'
    },

      {
        id:12,
        image: '/drone1.jpg',
        name: "GPS 5G WiFi Dual Camera 4K HD Drone FPV Foldable 1KM Long Distance Quadcopter WITH 2 BATTERIES ",
        price: "400",
        description: "F188 Camera Drone 6K GPS 5G WiFi FPV Brushless Professional Foldable 1KM Long Distance RC Dron Quadcopter",
        category:"electronics",
        slug:'p-12',
    pay:'pay-12'
    },

        {
        id:13,
        image: '/var1.jpg',
        name: "Meta Quest 3 Advanced All-in-One VR Headset (512GB) ",
        price: "400",
        description: "Step into mixed reality with the 512GB version of the Meta Quest 3 Advanced All-in-One VR Headset. The third gen PC-free headset combines VR with AR, using dual RGB cameras to provide full-color passthrough into your real world surroundings. This can be used to insert games, screens, and other virtual objects into your environment.",
        category:"gadgets",
        slug:'p-13',
    pay:'pay-13'
    },

        {
        id:14,
        image: '/pb1.jpg',
        name: "Anywhere Cart PowerBank Rechargeable Li-Ion Battery ",
        price: "129",
        description: "Keep your devices charged on the go with the PowerBank Rechargeable Li-Ion Battery from Anywhere Cart. Offering a 22,000mAh capacity, battery features two USB-C and two USB-A charging ports. Keep track of your chargers current battery level with the built-in LED charge indicator. A power button helps you conserve battery life",
        category:"gadgets",
        slug:'p-14',
    pay:'pay-14'
    },

        {
        id:15,
        image: '/tstat.jpg',
        name: "Lennox ComfortSense 5500 Programmable Thermostat | Energy Savings & Custom Comfo ",
        price: "180",
        description: "Programmable thermostat with versatile programming options for custom comfort and energy savings",
        category:"gadgets",
        slug:'p-15',
    pay:'pay-15'
    },

  {id: 16,
    image:'/access1.jpg',
    name:'X9 Performance Full-Size USB Keyboard and Mouse with Mouse Pad for Windows',
    price:'35',
    description:'The X9 Performance Full-Size USB Keyboard and Mouse with Mouse Pad for Windows includes a USB keyboard, a 6-button USB wired mouse, and a mouse pad. Featuring 104 keys, the full size keyboard utilizes a standard QWERTY layout with a concave keycap design for a comfortable and efficient typing experience',
    category:'accessories',
    slug:'p-16',
    pay:'p-16',
  },

 {id: 17,
    image:'/access2.jpg',
    name:'Smart Watch, 1.9',
    price:'21',
    description:'Smart Watch, 1.9" Full Touch Screen Smart Watch for Android & iOS Phones',
    category:'accessories',
    slug:'p-17',
    pay:'p-17',
  },

 {id: 18,
    image:'/access3.jpg',
    name:'3 in 1 Fast Wireless Charging Station for Apple Watch, AirPods, and iPhone - Foldable Stand, Qi-Certified',
    price:'45',
    description:'Equipped with 18W upgraded large power adapter for fast charging speed of approximately 3-4 hours for phone and other devices',
    category:'accessories',
    slug:'p-18',
    pay:'p-18',
  },

 {id: 19,
    image:'/access4.jpg',
    name:'Galaxy Z Fold4 2022 Case With Pen, Magnetic Hinge Protection Built In Screen & Lens Protector Cover For Samsung Galaxy Z Fold 4 5G',
    price:'30',
    description:"Protects your device's screen from scratches and impacts",
    category:'accessories',
    slug:'p-19',
    pay:'p-19',
  },

 {id: 20,
    image:'/elect1.jpg',
    name:'Hisense 8KG Front Loader Automatic Washing Machine - WM 8014T-WFQP',
    price:'450',
    description:'The Hisense 8KG Front Loader Automatic Washing Machine - WM 8014T-WFQP is designed to provide efficient and convenient laundry care. With its advanced features and user-friendly interface, this washing machine ensures that your clothes are cleaned thoroughly and gently.',
    category:'electronics',
    slug:'p-20',
    pay:'p-20',
  },

 {id: 21,
    image:'/cctv1.jpg',
    name:' Solar Powered Cctv 4G Simcard Intelligent Rotational Camera',
    price:'150',
    description:'Sound and motion detection, when someone breaks into the shooting area, the action detects and sends a push notification on your phone., Real-time remote viewing',
    category:'gadgets',
    slug:'p-21',
    pay:'p-21',
  },

   {id: 22,
    image:'/tab1.jpg',
    name:'Maxim [Upgraded] MatrixPad Ultra Slim 10.1" 6GB 128GB 5G Android 13 Tablet PC',
    price:'160',
    description:"Maxim MatrixPad S13 comes with a 10.1 inch HD display, 6GB RAM, 128GB ROM (expandable up to 512 GB), 4GLTE network, 5G + 2.4G Wifi, Octa-Core processor, Android 13.0 OS, Dual SIM, Dual cameras(8MP rear camera), 5G WiFi Browsing, FM, GPS. What's more, it's featured the Read mode, with which you can enjoy immersive reading in black and white. Complete tasks, enjoy movies on the go, watch online recipes or drama on FaceBook, read E-books, play light games or use offline Google map outdoor. Make your day joyful and convenient.",
    category:'electronics',
    slug:'p-22',
    pay:'p-22',
  },

   {id: 23,
    image:'/lbag.jpg',
    name:'Black Fashion Waterproof Business Portable Laptop Bag',
    price:'10',
    description:'Is a bag that gives you comfort while carrying your Laptop. It is made of cloth material and the Laptop is insulated by foam to protect it against fall. It comes with a strong strap that allows you carry your laptop conveniently on your shoulders and a handle made of polyurehane and fabric which allows you work smartly to the office or that meeting even when holding the case.',
    category:'accessories',
    slug:'p-23',
    pay:'p-23',
  },

   {id: 24,
    image:'/v1.jpg',
    name:' Vision 55" INCHES SMART UHD 4K TV',
    price:'450',
    description:'A New Standard of Sharpness Behold every grain of sand, every blade of grass, every star in the night sky. Vision  4K Ultra HD TVs contain over 8.2 million pixels, so their resolution is four times that of Full HD. The result? Breathtaking clarity and fine picture details that will amaze, even when viewed up close.',
    category:'electronics',
    slug:'p-24',
    pay:'p-24',
  },
  // More products...
];