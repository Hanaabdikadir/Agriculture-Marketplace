/* Beeraley Direct — marketplace engine */

const initialProducts = [
  {
    id: 101,
    title: "Muus Afgooye oo cusub",
    category: "khadraad",
    priceUSD: 1.2,
    unit: "Kg",
    region: "Afgooye",
    regionFull: "Shabeellaha Hoose (Afgooye)",
    farmer: {
      name: "Jaamac Cali Cumar",
      phone: "+252 61 555 4321",
      initial: "J",
      experience: "12 Sano",
      totalHarvest: "45 Ton",
      verified: true
    },
    image: "assets/bananas.png",
    rating: 4.9,
    reviewsCount: 28,
    harvestDate: "Maanta",
    minOrder: "10 Kg"
  },
  {
    id: 102,
    title: "Yaanyo cusub oo bislaatay",
    category: "khadraad",
    priceUSD: 0.85,
    unit: "Kg",
    region: "Jowhar",
    regionFull: "Shabeellaha Dhexe (Jowhar)",
    farmer: {
      name: "Aamina Nuur Xasan",
      phone: "+252 61 888 1234",
      initial: "A",
      experience: "8 Sano",
      totalHarvest: "30 Ton",
      verified: true
    },
    image: "assets/tomatoes.png",
    rating: 4.8,
    reviewsCount: 34,
    harvestDate: "Shalay",
    minOrder: "5 Kg"
  },
  {
    id: 103,
    title: "Qaro macaan oo Balcad",
    category: "khadraad",
    priceUSD: 3.5,
    unit: "Xabo",
    region: "Balcad",
    regionFull: "Shabeellaha Dhexe (Balcad)",
    farmer: {
      name: "Cabdullaahi Maxamed",
      phone: "+252 61 777 9900",
      initial: "C",
      experience: "15 Sano",
      totalHarvest: "60 Ton",
      verified: true
    },
    image: "assets/watermelons.png",
    rating: 5.0,
    reviewsCount: 19,
    harvestDate: "Maanta",
    minOrder: "2 Xabo"
  },
  {
    id: 104,
    title: "Saliid sisin saafi ah",
    category: "saliid",
    priceUSD: 6.0,
    unit: "Liitar",
    region: "Beledweyne",
    regionFull: "Hiiraan (Beledweyne)",
    farmer: {
      name: "Ugaas Faarax",
      phone: "+252 61 999 4433",
      initial: "U",
      experience: "20 Sano",
      totalHarvest: "85 Ton",
      verified: true
    },
    image: "assets/sesame_oil.png",
    rating: 4.9,
    reviewsCount: 42,
    harvestDate: "Toddobaadkan",
    minOrder: "1 Liitar"
  },
  {
    id: 105,
    title: "Galley Qoryooley oo cusub",
    category: "badar",
    priceUSD: 22.0,
    unit: "Jooni",
    region: "Qoryooley",
    regionFull: "Shabeellaha Hoose (Qoryooley)",
    farmer: {
      name: "Saciid Axmed Xasan",
      phone: "+252 61 333 2211",
      initial: "S",
      experience: "10 Sano",
      totalHarvest: "120 Ton",
      verified: true
    },
    image: "assets/corn.png",
    rating: 4.7,
    reviewsCount: 15,
    harvestDate: "3 maalmood ka hor",
    minOrder: "1 Jooni"
  },
  {
    id: 106,
    title: "Cambe macaan oo Kismayo",
    category: "khadraad",
    priceUSD: 2.0,
    unit: "Kg",
    region: "Kismayo",
    regionFull: "Jubbada Hoose (Kismayo)",
    farmer: {
      name: "Mariam Cali Dhuxul",
      phone: "+252 61 444 8877",
      initial: "M",
      experience: "7 Sano",
      totalHarvest: "25 Ton",
      verified: true
    },
    image: "assets/mangoes.png",
    rating: 4.9,
    reviewsCount: 51,
    harvestDate: "Maanta",
    minOrder: "3 Kg"
  },
  {
    id: 107,
    title: "Basasha cas ee Jowhar",
    category: "khadraad",
    priceUSD: 0.95,
    unit: "Kg",
    region: "Jowhar",
    regionFull: "Shabeellaha Dhexe (Jowhar)",
    farmer: {
      name: "Xaliimo Cabdi",
      phone: "+252 61 222 5566",
      initial: "X",
      experience: "9 Sano",
      totalHarvest: "40 Ton",
      verified: true
    },
    image: "assets/onions.jpg",
    rating: 4.6,
    reviewsCount: 22,
    harvestDate: "Maanta",
    minOrder: "5 Kg"
  },
  {
    id: 108,
    title: "Babaay macaan oo Afgooye",
    category: "khadraad",
    priceUSD: 1.75,
    unit: "Kg",
    region: "Afgooye",
    regionFull: "Shabeellaha Hoose (Afgooye)",
    farmer: {
      name: "Axmed Guuleed",
      phone: "+252 61 666 7788",
      initial: "A",
      experience: "11 Sano",
      totalHarvest: "35 Ton",
      verified: true
    },
    image: "assets/papayas.jpg",
    rating: 4.8,
    reviewsCount: 17,
    harvestDate: "Shalay",
    minOrder: "3 Kg"
  },
  {
    id: 109,
    title: "Caano xoolo oo cusub",
    category: "saliid",
    priceUSD: 1.5,
    unit: "Liitar",
    region: "Beledweyne",
    regionFull: "Hiiraan (Beledweyne)",
    farmer: {
      name: "Nuuradiin Xasan",
      phone: "+252 61 111 3344",
      initial: "N",
      experience: "14 Sano",
      totalHarvest: "18 Ton",
      verified: true
    },
    image: "assets/farm_milk.jpg",
    rating: 4.7,
    reviewsCount: 29,
    harvestDate: "Maanta",
    minOrder: "2 Liitar"
  },
  {
    id: 110,
    title: "Qajaar cusub oo Afgooye",
    category: "khadraad",
    priceUSD: 0.7,
    unit: "Kg",
    region: "Afgooye",
    regionFull: "Shabeellaha Hoose (Afgooye)",
    farmer: {
      name: "Hodan Warsame",
      phone: "+252 61 505 1122",
      initial: "H",
      experience: "6 Sano",
      totalHarvest: "22 Ton",
      verified: true
    },
    image: "assets/cucumber.jpg",
    rating: 4.6,
    reviewsCount: 11,
    harvestDate: "Maanta",
    minOrder: "4 Kg"
  },
  {
    id: 111,
    title: "Baradho Afgooye oo cusub",
    category: "khadraad",
    priceUSD: 0.65,
    unit: "Kg",
    region: "Afgooye",
    regionFull: "Shabeellaha Hoose (Afgooye)",
    farmer: {
      name: "Yuusuf Cali Barre",
      phone: "+252 61 505 3344",
      initial: "Y",
      experience: "9 Sano",
      totalHarvest: "50 Ton",
      verified: true
    },
    image: "assets/potatoes.jpg",
    rating: 4.5,
    reviewsCount: 14,
    harvestDate: "Shalay",
    minOrder: "10 Kg"
  },
  {
    id: 112,
    title: "Bamiye Jowhar oo cusub",
    category: "khadraad",
    priceUSD: 1.2,
    unit: "Kg",
    region: "Jowhar",
    regionFull: "Shabeellaha Dhexe (Jowhar)",
    farmer: {
      name: "Sahra Maxamed",
      phone: "+252 61 606 2211",
      initial: "S",
      experience: "5 Sano",
      totalHarvest: "16 Ton",
      verified: true
    },
    image: "assets/okra.jpg",
    rating: 4.7,
    reviewsCount: 9,
    harvestDate: "Maanta",
    minOrder: "2 Kg"
  },
  {
    id: 113,
    title: "Bariis Jowhar oo saafi ah",
    category: "badar",
    priceUSD: 18.0,
    unit: "Jooni",
    region: "Jowhar",
    regionFull: "Shabeellaha Dhexe (Jowhar)",
    farmer: {
      name: "Cumar Faarax Diiriye",
      phone: "+252 61 606 7788",
      initial: "C",
      experience: "13 Sano",
      totalHarvest: "90 Ton",
      verified: true
    },
    image: "assets/rice.jpg",
    rating: 4.8,
    reviewsCount: 21,
    harvestDate: "Toddobaadkan",
    minOrder: "1 Jooni"
  },
  {
    id: 114,
    title: "Liin dhanaan oo Balcad",
    category: "khadraad",
    priceUSD: 1.1,
    unit: "Kg",
    region: "Balcad",
    regionFull: "Shabeellaha Dhexe (Balcad)",
    farmer: {
      name: "Fadumo Isxaaq",
      phone: "+252 61 707 1100",
      initial: "F",
      experience: "8 Sano",
      totalHarvest: "28 Ton",
      verified: true
    },
    image: "assets/oranges.jpg?v=liin2",
    rating: 4.8,
    reviewsCount: 16,
    harvestDate: "Maanta",
    minOrder: "8 Kg"
  },
  {
    id: 115,
    title: "Basal gaduud oo Balcad",
    category: "khadraad",
    priceUSD: 0.9,
    unit: "Kg",
    region: "Balcad",
    regionFull: "Shabeellaha Dhexe (Balcad)",
    farmer: {
      name: "Maxamed Deeq",
      phone: "+252 61 707 2200",
      initial: "M",
      experience: "7 Sano",
      totalHarvest: "24 Ton",
      verified: true
    },
    image: "assets/red-onions.jpg",
    rating: 4.6,
    reviewsCount: 12,
    harvestDate: "Shalay",
    minOrder: "5 Kg"
  },
  {
    id: 116,
    title: "Karoto Balcad oo cusub",
    category: "khadraad",
    priceUSD: 0.8,
    unit: "Kg",
    region: "Balcad",
    regionFull: "Shabeellaha Dhexe (Balcad)",
    farmer: {
      name: "Khadiija Nuur",
      phone: "+252 61 707 3300",
      initial: "K",
      experience: "10 Sano",
      totalHarvest: "20 Ton",
      verified: true
    },
    image: "assets/carrots.jpg",
    rating: 4.9,
    reviewsCount: 18,
    harvestDate: "Maanta",
    minOrder: "3 Kg"
  },
  {
    id: 117,
    title: "Qamadi cusub oo Beledweyne",
    category: "badar",
    priceUSD: 4.5,
    unit: "Kg",
    region: "Beledweyne",
    regionFull: "Hiiraan (Beledweyne)",
    farmer: {
      name: "Cabdiraxmaan Warsame",
      phone: "+252 61 808 4411",
      initial: "C",
      experience: "16 Sano",
      totalHarvest: "70 Ton",
      verified: true
    },
    image: "assets/wheat.jpg",
    rating: 4.8,
    reviewsCount: 26,
    harvestDate: "Toddobaadkan",
    minOrder: "5 Kg"
  },
  {
    id: 118,
    title: "Subag Beledweyne oo cusub",
    category: "saliid",
    priceUSD: 5.5,
    unit: "Kg",
    region: "Beledweyne",
    regionFull: "Hiiraan (Beledweyne)",
    farmer: {
      name: "Haliimo Faarax",
      phone: "+252 61 808 5522",
      initial: "H",
      experience: "12 Sano",
      totalHarvest: "15 Ton",
      verified: true
    },
    image: "assets/ghee.jpg",
    rating: 4.7,
    reviewsCount: 13,
    harvestDate: "Shalay",
    minOrder: "1 Kg"
  },
  {
    id: 119,
    title: "Qamadi Qoryooley oo saafi ah",
    category: "badar",
    priceUSD: 19.0,
    unit: "Jooni",
    region: "Qoryooley",
    regionFull: "Shabeellaha Hoose (Qoryooley)",
    farmer: {
      name: "Aamina Yusuf",
      phone: "+252 61 909 6611",
      initial: "A",
      experience: "11 Sano",
      totalHarvest: "80 Ton",
      verified: true
    },
    image: "assets/wheat.jpg",
    rating: 4.8,
    reviewsCount: 20,
    harvestDate: "Toddobaadkan",
    minOrder: "1 Jooni"
  },
  {
    id: 120,
    title: "Digir gaduud oo Qoryooley",
    category: "badar",
    priceUSD: 2.4,
    unit: "Kg",
    region: "Qoryooley",
    regionFull: "Shabeellaha Hoose (Qoryooley)",
    farmer: {
      name: "Bashiir Cali",
      phone: "+252 61 909 7722",
      initial: "B",
      experience: "8 Sano",
      totalHarvest: "32 Ton",
      verified: true
    },
    image: "assets/beans.jpg",
    rating: 4.5,
    reviewsCount: 10,
    harvestDate: "3 maalmood ka hor",
    minOrder: "5 Kg"
  },
  {
    id: 121,
    title: "Masago Qoryooley oo cusub",
    category: "badar",
    priceUSD: 1.15,
    unit: "Kg",
    region: "Qoryooley",
    regionFull: "Shabeellaha Hoose (Qoryooley)",
    farmer: {
      name: "Leyla Maxamuud",
      phone: "+252 61 909 8833",
      initial: "L",
      experience: "6 Sano",
      totalHarvest: "18 Ton",
      verified: true
    },
    image: "assets/sorghum.jpg",
    rating: 4.7,
    reviewsCount: 8,
    harvestDate: "Maanta",
    minOrder: "8 Kg"
  },
  {
    id: 122,
    title: "Bocor Kismayo oo macaan",
    category: "khadraad",
    priceUSD: 1.3,
    unit: "Kg",
    region: "Kismayo",
    regionFull: "Jubbada Hoose (Kismayo)",
    farmer: {
      name: "Idil Cumar",
      phone: "+252 61 404 1010",
      initial: "I",
      experience: "9 Sano",
      totalHarvest: "27 Ton",
      verified: true
    },
    image: "assets/pumpkin.jpg",
    rating: 4.8,
    reviewsCount: 19,
    harvestDate: "Maanta",
    minOrder: "6 Kg"
  },
  {
    id: 123,
    title: "Basbaas Kismayo oo cusub",
    category: "khadraad",
    priceUSD: 1.4,
    unit: "Kg",
    region: "Kismayo",
    regionFull: "Jubbada Hoose (Kismayo)",
    farmer: {
      name: "Cabdi Nuur Wehliye",
      phone: "+252 61 404 2020",
      initial: "C",
      experience: "14 Sano",
      totalHarvest: "21 Ton",
      verified: true
    },
    image: "assets/chili.jpg",
    rating: 4.9,
    reviewsCount: 23,
    harvestDate: "Shalay",
    minOrder: "3 Kg"
  },
  {
    id: 124,
    title: "Toon Kismayo oo cusub",
    category: "khadraad",
    priceUSD: 1.6,
    unit: "Kg",
    region: "Kismayo",
    regionFull: "Jubbada Hoose (Kismayo)",
    farmer: {
      name: "Ruqiyo Axmed",
      phone: "+252 61 404 3030",
      initial: "R",
      experience: "7 Sano",
      totalHarvest: "12 Ton",
      verified: true
    },
    image: "assets/garlic.jpg",
    rating: 4.6,
    reviewsCount: 11,
    harvestDate: "Maanta",
    minOrder: "1 Kg"
  }
];

const deliveryFees = {
  muqdisho: 2.5,
  afgooye: 1.0,
  jowhar: 4.0,
  balcad: 3.0,
  beledweyne: 8.0,
  kismayo: 10.0,
  hargeisa: 18.0,
  garowe: 15.0
};

const initialReviews = [
  {
    id: 1,
    name: "Maxamed Cusmaan",
    role: "Ganacsade · Muqdisho",
    initial: "M",
    rating: 5,
    text: "Waxaan ka dalbaday 50kg oo Muus Afgooye ah. Gaarsiintu waxay ahayd degdeg ah, tayaduna way sarreysay.",
    date: "24 Luulyo 2026"
  },
  {
    id: 2,
    name: "Fadumo Axmed",
    role: "Gurijooge · Hargeisa",
    initial: "F",
    rating: 5,
    text: "Saliidda sisinka Beledweyne waa mid aad u saafi ah. Wadahadalka beeraleyduna waa mid toos ah.",
    date: "22 Luulyo 2026"
  },
  {
    id: 3,
    name: "Dr. Khadar Cumar",
    role: "Makhaayad · Garowe",
    initial: "K",
    rating: 5,
    text: "Yaanyada Jowhar waa mid bislaatay oo caafimaad leh. Dalabkaygu wuxuu ku yimid 24 saacadood gudahood.",
    date: "20 Luulyo 2026"
  }
];

const translations = {
  so: {
    postProduce: "Ku iibi alaab",
    heroTitle: "Si toos ah ugu xidhi beeraleyda iyo suuqyada Soomaaliyeed",
    heroDesc: "Midho, khadraad, badar iyo saliid cusub — toos uga iibso beerta, dhexdhexaadiye la'aan.",
    shopNow: "Ka gal suuqa",
    joinAsFarmer: "Is-diiwaangeli",
    regTitle: "Is-diiwaangeli beeraley ahaan",
    regHint: "Buuxi 4 xogood oo fudud — dabadeed waxaad ku iibin kartaa alaabtaada.",
    regName: "Magaca buuxa",
    regPhone: "Telefoonka (EVC)",
    regRegion: "Gobolka / Beerta",
    regFarm: "Magaca beerta",
    regExp: "Khibradda (sano)",
    regProduce: "Wax soo saarka ugu badan",
    regPass: "Furaha sirta",
    regSubmit: "Diiwaangeli akoonka",
    navRegister: "Diiwaan",
    successTitle: "Akoonka waa la sameeyay!",
    successPost: "Ku iibi alaabtaada hadda",
    sellBtn: "Ku iibi alaab",
    postTitle: "Ku iibi wax soo saarkaaga",
    postAs: "Waxaad ku iibinaysaa sidii:",
    postProduceName: "Magaca alaabta",
    postCategory: "Qaybta",
    postPrice: "Qiimaha USD",
    postUnit: "Halbeegga",
    postRegion: "Gobolka",
    postFarmerName: "Magaca beeraleyda",
    postSubmit: "Daabac alaabta",
    howItWorksTitle: "Sida loo dalbado",
    howItWorksSub: "Saddex tallaabo oo fudud oo aad toos ugu iibsan kartid beeraleyda.",
    step1Title: "Dooro alaabta",
    step1Desc: "Ka dooro khadraad, midho, badar ama saliid suuqa beeraleyda.",
    step2Title: "La hadal ama dalbo",
    step2Desc: "Si toos ah ula fariimo beeraleyda ama xaqiiji dalabkaaga.",
    step3Title: "Hel oo bixi",
    step3Desc: "Gaadiidka ayaa kuu keenaya; bixi EVC Plus ama lacag caddaan ah.",
    regionBarTitle: "Gobollada wax soo saarka",
    showAllRegions: "Muuji dhammaan",
    allRegions: "Dhammaan",
    catAll: "Dhammaan",
    catVeg: "Khadraad & Midho",
    catGrains: "Badar & Galley",
    catOil: "Saliid & Caano",
    optAllRegions: "Dhammaan gobollada",
    marketplaceTitle: "Wax soo saarka beeraleyda",
    marketplaceSub: "Raadso magaca ama dooro gobolka",
    reviewsTitle: "Qiimaynta macaamiisha",
    reviewsSub: "Waxa ganacsatada iyo qoysasku ka yidhaahdeen",
    addReviewBtn: "Ku dar faallo",
    navHome: "Guriga",
    navMarket: "Suuqa",
    navCart: "Alaabta",
    navChat: "Hadalka",
    footerBrandText: "Suuq dijitaal ah oo beeraleyda Soomaaliyeed si toos ah ugu xira macaamiisha.",
    footerKeyRegions: "Gobollada",
    footerProduce: "Wax soo saarka",
    footerSupport: "Caawinaad",
    orderBtn: "Dalbo",
    chatBtn: "Wada hadal",
    cartBtn: "+",
    cartTitle: "Alaabtaada",
    subtotal: "Wadarta guud",
    checkout: "Xaqiiji iibsiga",
    qr1: "Jumlad?",
    qr2: "Gaadiid?",
    qr3: "Maanta?",
    chatPlaceholder: "Qor fariintaada...",
    send: "Dir",
    resultsFound: "alaab ayaa la helay",
    emptyTitle: "Wax lama helin",
    emptyHint: "Isku day magac kale ama nadiifi shaandhaynta.",
    resetFilters: "Soo celi dhammaan"
  },
  en: {
    postProduce: "Sell produce",
    heroTitle: "Connect Somali farmers directly with markets",
    heroDesc: "Fresh fruit, vegetables, grains and oil — buy straight from the farm, no middlemen.",
    shopNow: "Browse market",
    joinAsFarmer: "Register",
    regTitle: "Register as a farmer",
    regHint: "Fill 4 simple fields — then you can sell your produce.",
    regName: "Full name",
    regPhone: "Phone (EVC)",
    regRegion: "Region / Farm area",
    regFarm: "Farm name",
    regExp: "Experience (years)",
    regProduce: "Main produce type",
    regPass: "Password",
    regSubmit: "Create farmer account",
    navRegister: "Register",
    successTitle: "Account created!",
    successPost: "Sell your produce now",
    sellBtn: "Sell produce",
    postTitle: "List your produce",
    postAs: "Posting as:",
    postProduceName: "Produce name",
    postCategory: "Category",
    postPrice: "Price USD",
    postUnit: "Unit",
    postRegion: "Region",
    postFarmerName: "Farmer name",
    postSubmit: "Publish listing",
    howItWorksTitle: "How ordering works",
    howItWorksSub: "Three simple steps to buy produce directly from local farmers.",
    step1Title: "Pick produce",
    step1Desc: "Choose vegetables, fruit, grains or sesame oil from the marketplace.",
    step2Title: "Chat or order",
    step2Desc: "Message the farmer directly or confirm your order online.",
    step3Title: "Receive & pay",
    step3Desc: "Delivery arrives at your door — pay with EVC Plus or cash.",
    regionBarTitle: "Production regions",
    showAllRegions: "Show all",
    allRegions: "All",
    catAll: "All",
    catVeg: "Veg & Fruit",
    catGrains: "Grains & Corn",
    catOil: "Oil & Dairy",
    optAllRegions: "All regions",
    marketplaceTitle: "Farm produce listings",
    marketplaceSub: "Search by name or filter by region",
    reviewsTitle: "Customer reviews",
    reviewsSub: "What traders and households are saying",
    addReviewBtn: "Add review",
    navHome: "Home",
    navMarket: "Market",
    navCart: "Cart",
    navChat: "Chat",
    footerBrandText: "A digital marketplace connecting Somali farmers directly with buyers.",
    footerKeyRegions: "Regions",
    footerProduce: "Produce",
    footerSupport: "Support",
    orderBtn: "Order",
    chatBtn: "Chat",
    cartBtn: "+",
    cartTitle: "Your cart",
    subtotal: "Subtotal",
    checkout: "Proceed to Checkout",
    qr1: "Bulk price?",
    qr2: "Delivery?",
    qr3: "Today?",
    chatPlaceholder: "Type your message...",
    send: "Send",
    resultsFound: "items found",
    emptyTitle: "No produce found",
    emptyHint: "Try another keyword or clear your filters.",
    resetFilters: "Show all produce"
  }
};

let products = [...initialProducts];
let reviews = [...initialReviews];
let cart = [];
let activeCategory = "all";
let activeRegion = "all";
let searchQuery = "";
let currentCurrency = "USD";
const SOS_RATE = 26000;
let currentFarmerChat = null;
let currentChatProduct = null;
let chatMessagesStore = {};
let currentOrderProduct = null;
let lastConfirmedOrder = null;
let currentLang = "so";
let registeredFarmers = [];
let currentFarmerAccount = null;
window._profileProductId = 101;
window.lastConfirmedOrder = null;

const REGION_FULL = {
  Afgooye: "Shabeellaha Hoose (Afgooye)",
  Jowhar: "Shabeellaha Dhexe (Jowhar)",
  Balcad: "Shabeellaha Dhexe (Balcad)",
  Beledweyne: "Hiiraan (Beledweyne)",
  Qoryooley: "Shabeellaha Hoose (Qoryooley)",
  Kismayo: "Jubbada Hoose (Kismayo)"
};

function loadFarmerSession() {
  try {
    registeredFarmers = JSON.parse(localStorage.getItem("bd_farmers") || "[]");
    const savedId = localStorage.getItem("bd_current_farmer");
    if (savedId) {
      currentFarmerAccount = registeredFarmers.find((f) => String(f.id) === String(savedId)) || null;
    }
  } catch (_) {
    registeredFarmers = [];
    currentFarmerAccount = null;
  }
}

function saveFarmerSession() {
  try {
    localStorage.setItem("bd_farmers", JSON.stringify(registeredFarmers));
    if (currentFarmerAccount) {
      localStorage.setItem("bd_current_farmer", String(currentFarmerAccount.id));
    } else {
      localStorage.removeItem("bd_current_farmer");
    }
  } catch (_) {
    /* ignore quota */
  }
}

function updateFarmerHeaderUI() {
  const joinBtn = document.querySelector(".hero-buttons [data-i18n='joinAsFarmer']");
  const headerReg = document.getElementById("headerRegisterBtn");
  const headerSell = document.getElementById("headerSellBtn");

  if (currentFarmerAccount) {
    const short = currentFarmerAccount.name.split(" ")[0];
    if (joinBtn) {
      joinBtn.textContent = currentLang === "so" ? `Beeraley: ${short}` : `Farmer: ${short}`;
      joinBtn.onclick = () => openFarmerPostModal();
    }
    if (headerReg) {
      headerReg.style.display = "none";
    }
    if (headerSell) {
      headerSell.style.display = "inline-flex";
      const label = headerSell.querySelector("[data-i18n='postProduce']");
      if (label) label.textContent = translations[currentLang].postProduce;
    }
  } else {
    if (joinBtn) {
      joinBtn.textContent = translations[currentLang].joinAsFarmer;
      joinBtn.onclick = () => openFarmerRegisterModal();
    }
    if (headerReg) {
      headerReg.style.display = "inline-flex";
      const label = headerReg.querySelector("[data-i18n='joinAsFarmer']");
      if (label) label.textContent = translations[currentLang].joinAsFarmer;
    }
    if (headerSell) headerSell.style.display = "none";
  }
}

function showRegError(msg) {
  const box = document.getElementById("regError");
  if (!box) {
    showToast(msg);
    return;
  }
  box.hidden = false;
  box.textContent = msg;
}

function initApp() {
  loadFarmerSession();
  renderProducts();
  renderReviews();
  updateCartUI();
  setupEventListeners();
  updateFarmerHeaderUI();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

function formatCurrency(usdPrice) {
  if (currentCurrency === "SOS") {
    return `${Math.round(usdPrice * SOS_RATE).toLocaleString()} SOS`;
  }
  return `$${Number(usdPrice).toFixed(2)}`;
}

function toggleCurrency() {
  currentCurrency = currentCurrency === "USD" ? "SOS" : "USD";
  const badge = document.getElementById("currencyToggleBtn");
  if (badge) badge.textContent = currentCurrency;
  renderProducts();
  updateCartUI();
  if (currentOrderProduct) updateOrderTotal();
  showToast(currentLang === "so" ? `Lacagta: ${currentCurrency}` : `Currency: ${currentCurrency}`);
}

/** English / Somali keywords → substrings expected in product titles */
const SEARCH_ALIASES = {
  banana: ["muus"],
  bananas: ["muus"],
  tomato: ["yaanyo"],
  tomatoes: ["yaanyo"],
  watermelon: ["qaro"],
  watermelons: ["qaro"],
  qarram: ["qaro"],
  mango: ["cambe"],
  mangoes: ["cambe"],
  onion: ["basasha"],
  onions: ["basasha"],
  papaya: ["babaay"],
  papayas: ["babaay"],
  oil: ["saliid", "sisin"],
  sesame: ["sisin"],
  corn: ["galley", "gallay"],
  maize: ["galley", "gallay"],
  gallay: ["galley"],
  milk: ["caano"]
};

/** Category-level synonyms (UI labels / English) → product.category */
const CATEGORY_QUERY = {
  midho: "khadraad",
  fruit: "khadraad",
  fruits: "khadraad",
  vegetable: "khadraad",
  vegetables: "khadraad",
  grain: "badar",
  grains: "badar",
  badar: "badar",
  khadraad: "khadraad",
  saliid: "saliid"
};

function productMatchesQuery(p, q) {
  if (!q) return true;
  const haystack = [p.title, p.farmer.name, p.region, p.regionFull, p.category]
    .join(" ")
    .toLowerCase();
  if (haystack.includes(q)) return true;

  if (q.length < 2) return false;

  const title = p.title.toLowerCase();
  for (const [alias, tokens] of Object.entries(SEARCH_ALIASES)) {
    if (!(alias.startsWith(q) || q.includes(alias))) continue;
    if (tokens.some((t) => title.includes(t))) return true;
  }

  for (const [alias, cat] of Object.entries(CATEGORY_QUERY)) {
    if (!(alias.startsWith(q) || q.includes(alias))) continue;
    if (p.category === cat) return true;
  }

  return false;
}

function getFilteredProducts() {
  const q = searchQuery.trim().toLowerCase();
  return products.filter((p) => {
    const matchCategory = activeCategory === "all" || p.category === activeCategory;
    const matchRegion =
      activeRegion === "all" ||
      p.region.toLowerCase().includes(activeRegion.toLowerCase()) ||
      p.regionFull.toLowerCase().includes(activeRegion.toLowerCase());
    return matchCategory && matchRegion && productMatchesQuery(p, q);
  });
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const meta = document.getElementById("resultsMeta");
  if (!grid) return;

  const filtered = getFilteredProducts();
  const t = translations[currentLang];

  if (meta) {
    meta.textContent = `${filtered.length} ${t.resultsFound}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>${t.emptyTitle}${searchQuery ? `: “${searchQuery}”` : ""}</h3>
        <p>${t.emptyHint}</p>
        <button type="button" class="btn-primary" onclick="resetFilters()">${t.resetFilters}</button>
      </div>`;
    return;
  }

  grid.innerHTML = filtered
    .map((p, i) => {
      const main = formatCurrency(p.priceUSD);
      const sub =
        currentCurrency === "USD"
          ? `${Math.round(p.priceUSD * SOS_RATE).toLocaleString()} SOS`
          : `$${p.priceUSD.toFixed(2)}`;
      return `
      <article class="product-card" style="animation-delay:${Math.min(i * 0.04, 0.35)}s">
        <div class="card-img-wrap">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
          <span class="badge-fresh">${p.harvestDate}</span>
          <span class="badge-region">${p.region}</span>
        </div>
        <div class="card-content">
          <div class="farmer-snippet" onclick="openFarmerProfileModal(${p.id})" role="button" tabindex="0">
            <div class="farmer-avatar">${p.farmer.initial}</div>
            <span>${p.farmer.name}${p.farmer.verified ? " ✓" : ""}</span>
          </div>
          <h3 class="product-title">${p.title}</h3>
          <div class="product-price-row">
            <div><span class="product-price">${main}</span><span class="price-unit">/ ${p.unit}</span></div>
            <div class="price-sos">${sub}</div>
          </div>
          <div class="rating-row">
            <span>★ ${p.rating}</span>
            <span style="color:var(--muted)">(${p.reviewsCount})</span>
            <span style="margin-left:auto;color:var(--leaf);font-size:0.75rem">${currentLang === "so" ? "Ugu yar" : "Min"} ${p.minOrder}</span>
          </div>
          <div class="card-actions">
            <button type="button" class="btn-card-order" onclick="openOrderModal(${p.id})">${t.orderBtn}</button>
            <button type="button" class="btn-card-chat" onclick="openChatDrawer(${p.id})">${t.chatBtn}</button>
            <button type="button" class="btn-card-cart" onclick="addToCart(${p.id})" title="${currentLang === "so" ? "Ku dar alaabta" : "Add to cart"}" aria-label="${currentLang === "so" ? "Ku dar alaabta" : "Add to cart"}">+</button>
          </div>
        </div>
      </article>`;
    })
    .join("");
}

function resetFilters() {
  searchQuery = "";
  activeCategory = "all";
  activeRegion = "all";

  ["headerSearchInput", "searchInput"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  const regionSelect = document.getElementById("regionSelect");
  if (regionSelect) regionSelect.value = "all";

  document.querySelectorAll(".category-pills .pill").forEach((p, idx) => {
    p.classList.toggle("active", idx === 0);
  });
  updateRegionCardHighlight("all");
  renderProducts();
}

function renderReviews() {
  const container = document.getElementById("reviewsGrid");
  if (!container) return;
  container.innerHTML = reviews
    .map(
      (r) => `
    <article class="review-card">
      <div class="review-user">
        <div class="user-img">${r.initial}</div>
        <div class="user-info">
          <h4>${r.name}</h4>
          <p>${r.role} · ${r.date}</p>
        </div>
      </div>
      <div class="rating-row" style="margin-bottom:0.45rem">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
      <p class="review-text">“${r.text}”</p>
    </article>`
    )
    .join("");
}

function handleSearch(value, options = {}) {
  searchQuery = value || "";
  const headerSearch = document.getElementById("headerSearchInput");
  const mainSearch = document.getElementById("searchInput");
  if (headerSearch && headerSearch.value !== searchQuery) headerSearch.value = searchQuery;
  if (mainSearch && mainSearch.value !== searchQuery) mainSearch.value = searchQuery;
  renderProducts();

  const shouldScroll = options.scroll !== false && searchQuery.trim().length > 0;
  if (shouldScroll) {
    document.getElementById("marketplace")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setupEventListeners() {
  document.querySelectorAll(".category-pills .pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".category-pills .pill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.dataset.category;
      renderProducts();
    });
  });

  const regionSelect = document.getElementById("regionSelect");
  if (regionSelect) {
    regionSelect.addEventListener("change", (e) => {
      activeRegion = e.target.value;
      updateRegionCardHighlight(activeRegion);
      renderProducts();
      document.getElementById("marketplace")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  ["headerSearchInput", "searchInput"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el || el._searchBound) return;
    el._searchBound = true;
    el.addEventListener("input", (e) => {
      handleSearch(e.target.value, { scroll: id === "headerSearchInput" });
    });
    el.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      e.preventDefault();
      handleSearch(e.target.value, { scroll: true });
    });
  });
}

function updateRegionCardHighlight(regionName) {
  document.querySelectorAll(".region-chip").forEach((card) => {
    card.classList.toggle("active", card.dataset.region === regionName);
  });
}

function selectQuickRegion(regionName) {
  activeRegion = regionName;
  const regionSelect = document.getElementById("regionSelect");
  if (regionSelect) {
    const hasOption = [...regionSelect.options].some((o) => o.value === regionName);
    regionSelect.value = hasOption ? regionName : "all";
  }
  updateRegionCardHighlight(regionName);
  renderProducts();
  document.getElementById("marketplace")?.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast(currentLang === "so"
    ? `Gobolka: ${regionName === "all" ? "Dhammaan" : regionName}`
    : `Region: ${regionName === "all" ? "All" : regionName}`);
}

function addToCart(productId) {
  const item = products.find((p) => p.id === productId);
  if (!item) return;
  const existing = cart.find((c) => c.id === productId);
  if (existing) existing.qty += 1;
  else cart.push({ ...item, qty: 1 });
  updateCartUI();
  showToast(currentLang === "so"
    ? `${item.title} waa lagu daray alaabtaada`
    : `${item.title} added to cart`);
}

function updateCartQty(productId, delta) {
  const idx = cart.findIndex((c) => c.id === productId);
  if (idx < 0) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById("cartBadge");
  const mobileBadge = document.getElementById("mobileCartBadge");
  if (badge) badge.textContent = String(totalItems);
  if (mobileBadge) mobileBadge.textContent = String(totalItems);

  const cartContainer = document.getElementById("cartBody");
  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div style="text-align:center;padding:3rem 1rem;color:var(--muted)">
        <p>${currentLang === "so" ? "Alaabtaadu waa madhan" : "Your cart is empty"}</p>
      </div>`;
    const sub = document.getElementById("cartSubtotalUSD");
    if (sub) sub.textContent = formatCurrency(0);
    return;
  }

  let subtotal = 0;
  cartContainer.innerHTML = cart
    .map((item) => {
      const itemTotal = item.priceUSD * item.qty;
      subtotal += itemTotal;
      return `
      <div class="cart-item">
        <img src="${item.image}" alt="" class="cart-item-img" />
        <div class="cart-item-details">
          <h4>${item.title}</h4>
          <p>${formatCurrency(item.priceUSD)} / ${item.unit}</p>
        </div>
        <div class="cart-qty-controls">
          <button type="button" class="qty-btn" onclick="updateCartQty(${item.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button type="button" class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
        </div>
      </div>`;
    })
    .join("");

  const subEl = document.getElementById("cartSubtotalUSD");
  if (subEl) subEl.textContent = formatCurrency(subtotal);
}

function openCartDrawer() {
  closeModals();
  document.getElementById("drawerOverlay")?.classList.add("active");
  document.getElementById("cartDrawer")?.classList.add("active");
}

function proceedCartCheckout() {
  if (cart.length === 0) {
    showToast(currentLang === "so" ? "Alaabtaadu waa madhan" : "Your cart is empty");
    return;
  }
  closeModals();
  openOrderModal(cart[0].id);
}

function openFarmerProfileModal(productId) {
  const p = products.find((prod) => prod.id === productId);
  if (!p) return;
  window._profileProductId = productId;
  document.getElementById("farmerProfileName").textContent = p.farmer.name;
  document.getElementById("farmerProfileAvatar").textContent = p.farmer.initial;
  document.getElementById("farmerProfileRegion").textContent = p.regionFull;
  document.getElementById("farmerProfileExperience").textContent = p.farmer.experience;
  document.getElementById("farmerProfileHarvest").textContent = p.farmer.totalHarvest;
  document.getElementById("modalOverlay")?.classList.add("active");
  document.getElementById("farmerProfileModal")?.classList.add("active");
}

function openOrderModal(productId) {
  const p = products.find((prod) => prod.id === productId);
  if (!p) return;
  currentOrderProduct = p;
  document.getElementById("modalProductTitle").textContent = p.title;
  document.getElementById("modalFarmerName").textContent = `${p.farmer.name} · ${p.regionFull}`;
  document.getElementById("modalPricePerUnit").textContent = `${formatCurrency(p.priceUSD)} / ${p.unit}`;
  document.getElementById("orderQtyInput").value = "1";
  updateOrderTotal();
  closeModals();
  document.getElementById("modalOverlay")?.classList.add("active");
  document.getElementById("orderModal")?.classList.add("active");
}

function updateOrderTotal() {
  if (!currentOrderProduct) return;
  const qty = parseFloat(document.getElementById("orderQtyInput").value) || 1;
  const citySelect = document.getElementById("orderCitySelect");
  const cityKey = citySelect ? citySelect.value.toLowerCase() : "muqdisho";
  const feeUSD = deliveryFees[cityKey] || 3;
  const grand = currentOrderProduct.priceUSD * qty + feeUSD;
  document.getElementById("modalTransportFee").textContent = formatCurrency(feeUSD);
  document.getElementById("modalTotalPrice").textContent = formatCurrency(grand);
}

function closeModals() {
  document.querySelectorAll(".modal-overlay, .modal-box, .drawer-overlay, .side-drawer").forEach((el) => {
    el.classList.remove("active");
  });
}

function submitOrderRequest(e) {
  if (e?.preventDefault) e.preventDefault();
  if (!currentOrderProduct) return false;

  const qty = parseFloat(document.getElementById("orderQtyInput").value) || 1;
  const address = document.getElementById("orderAddressInput").value.trim();
  const phone = document.getElementById("orderPhoneInput").value.trim();
  const citySelect = document.getElementById("orderCitySelect");
  const city = citySelect ? citySelect.options[citySelect.selectedIndex].text : "Muqdisho";
  const payMethod = document.getElementById("orderPaymentMethodSelect").value;

  if (!phone || !address) {
    showToast(currentLang === "so" ? "Buuxi telefoonka iyo cinwaanka" : "Provide phone and address");
    return false;
  }

  const feeUSD = deliveryFees[citySelect.value.toLowerCase()] || 3;
  const produceCostUSD = currentOrderProduct.priceUSD * qty;
  const totalUSD = produceCostUSD + feeUSD;
  const orderNum = Math.floor(10000 + Math.random() * 90000);

  lastConfirmedOrder = {
    orderNum,
    product: currentOrderProduct,
    qty,
    city,
    address,
    phone,
    payMethod,
    produceCostUSD,
    feeUSD,
    totalUSD,
    date: new Date().toLocaleString()
  };
  window.lastConfirmedOrder = lastConfirmedOrder;

  closeModals();

  if (payMethod.includes("EVC") || payMethod.includes("Dahab")) {
    openEvcSimulatorModal(phone, totalUSD);
  } else {
    showInvoiceModal();
  }
  return false;
}

function openEvcSimulatorModal(phone, totalUSD) {
  document.getElementById("evcPhoneDisplay").textContent = phone;
  document.getElementById("evcAmountDisplay").textContent = formatCurrency(totalUSD);
  document.getElementById("evcPinInput").value = "";
  document.getElementById("modalOverlay")?.classList.add("active");
  document.getElementById("evcModal")?.classList.add("active");
}

function processEvcPinSubmit(e) {
  if (e?.preventDefault) e.preventDefault();
  const pin = document.getElementById("evcPinInput").value;
  if (!pin || pin.length < 4) {
    showToast(currentLang === "so" ? "Geli PIN-ka 4-ta lambar" : "Enter a 4-digit PIN");
    return false;
  }
  closeModals();
  showToast(currentLang === "so" ? "EVC Plus waa la ansixiyay" : "EVC Plus payment approved");
  setTimeout(showInvoiceModal, 700);
  return false;
}

function showInvoiceModal() {
  if (!lastConfirmedOrder) return;
  const o = lastConfirmedOrder;
  document.getElementById("invOrderNum").textContent = `#${o.orderNum}`;
  document.getElementById("invDate").textContent = o.date;
  document.getElementById("invFarmer").textContent = `${o.product.farmer.name} (${o.product.region})`;
  document.getElementById("invBuyerPhone").textContent = `${o.phone} · ${o.city}`;
  document.getElementById("invProduceTitle").textContent = `${o.product.title} × ${o.qty} ${o.product.unit}`;
  document.getElementById("invProduceCost").textContent = formatCurrency(o.produceCostUSD);
  document.getElementById("invTransportFee").textContent = formatCurrency(o.feeUSD);
  document.getElementById("invTotalPaid").textContent = formatCurrency(o.totalUSD);

  document.getElementById("modalOverlay")?.classList.add("active");
  document.getElementById("invoiceModal")?.classList.add("active");

  if (chatMessagesStore[o.product.farmer.name] || true) {
    sendSimulatedFarmerMsg(
      o.product.farmer.name,
      currentLang === "so"
        ? `Asc! Waxaan helnay bixinta #${o.orderNum}. Gaadiidka wuxuu u socdaa ${o.city}.`
        : `Hello! Payment for #${o.orderNum} received. Delivery heading to ${o.city}.`
    );
  }
}

function printReceipt() {
  window.print();
}

function openChatDrawer(productId) {
  const p = products.find((prod) => prod.id === productId);
  if (!p) return;
  closeModals();
  currentFarmerChat = p.farmer;
  currentChatProduct = p;
  document.getElementById("chatFarmerName").textContent = p.farmer.name;
  document.getElementById("chatFarmerRegion").textContent = p.region;
  document.getElementById("chatFarmerAvatar").textContent = p.farmer.initial;

  if (!chatMessagesStore[p.farmer.name]) {
    chatMessagesStore[p.farmer.name] = [
      {
        sender: "farmer",
        text:
          currentLang === "so"
            ? `Asc! Waxaan ahay ${p.farmer.name} · ${p.regionFull}. Waxaan iibinayaa ${p.title} ($${p.priceUSD.toFixed(2)}/${p.unit}). Sideen kuu caawin karaa?`
            : `Hi! I'm ${p.farmer.name} from ${p.regionFull}. I have fresh ${p.title} at $${p.priceUSD.toFixed(2)}/${p.unit}. How can I help?`
      }
    ];
  }

  renderChatMessages();
  document.getElementById("drawerOverlay")?.classList.add("active");
  document.getElementById("chatDrawer")?.classList.add("active");
}

function renderChatMessages() {
  if (!currentFarmerChat) return;
  const container = document.getElementById("chatMessages");
  const msgs = chatMessagesStore[currentFarmerChat.name] || [];
  container.innerHTML = msgs
    .map((m) => `<div class="msg-bubble ${m.sender === "user" ? "msg-outgoing" : "msg-incoming"}">${m.text}</div>`)
    .join("");
  container.scrollTop = container.scrollHeight;
}

function sendUserChatMessage(textToSend) {
  const input = document.getElementById("chatInput");
  const text = textToSend || input.value.trim();
  if (!text || !currentFarmerChat) return;

  const farmer = currentFarmerChat;
  const product = currentChatProduct || products[0];
  if (!chatMessagesStore[farmer.name]) chatMessagesStore[farmer.name] = [];
  chatMessagesStore[farmer.name].push({ sender: "user", text });
  if (!textToSend) input.value = "";
  renderChatMessages();

  setTimeout(() => {
    sendSimulatedFarmerMsg(farmer.name, generateSmartFarmerAiReply(text, farmer, product));
  }, 800);
}

function generateSmartFarmerAiReply(userText, farmer, product) {
  const t = userText.toLowerCase().trim();
  const so = currentLang === "so";
  const price = `$${Number(product.priceUSD).toFixed(2)}`;
  const unit = product.unit;
  const title = product.title;
  const region = product.regionFull || product.region;
  const phone = farmer.phone || "";
  const min = product.minOrder || `1 ${unit}`;
  const harvest = product.harvestDate || (so ? "Maanta" : "Today");
  const exp = farmer.experience || "";
  const harvestTotal = farmer.totalHarvest || "";
  const bulkPrice = (product.priceUSD * 0.85).toFixed(2);

  const feeHint = so
    ? "Gaadiidka: Muqdisho $2.50 · Afgooye $1 · Jowhar $4 · Balcad $3 · Beledweyne $8 · Kismayo $10."
    : "Delivery: Mogadishu $2.50 · Afgooye $1 · Jowhar $4 · Balcad $3 · Beledweyne $8 · Kismayo $10.";

  // Greeting
  if (/^(asc|asalaamu|salaam|salaan|hello|hi|hey|good\s?(morning|evening)|subax|galab|habeen)\b/.test(t) ||
      /^(asc[.!]?|hi[!]?|hello[!]?)$/.test(t)) {
    return so
      ? `Waalaikum assalaam! Waxaan ahay ${farmer.name}. Waxaan iibinayaa ${title} (${price}/${unit}). Maxaan kuu qaban karaa?`
      : `Waalaikum assalaam! I'm ${farmer.name}. I sell ${title} (${price}/${unit}). How can I help?`;
  }

  // Thanks / bye
  if (/mahadsanid|waad mahadsan|thanks|thank you|shukran|nabadgelyo|bye|goodbye/.test(t)) {
    return so
      ? `Mahadsanid adigana! Haddii aad rabto, riix "Dalbo" si aad u xaqiijiso. Allah ha ku barakeeyo.`
      : `You're welcome! Tap "Order" anytime to confirm. Blessings.`;
  }

  // Phone / contact (before price — avoid "immisa" stealing these)
  if (/telefoon|phone|whatsapp|lambarka|number|wac\b|la\s+xiriir\b|contact|call\b/.test(t)) {
    return so
      ? `Telefoonkayga waa ${phone || "la heli doonaa rasiidka"}. Waxaad sidoo kale halkan igu soo qori kartaa ama riixi Dalbo.`
      : `My phone is ${phone || "on the receipt"}. You can also message here or tap Order.`;
  }

  // Farmer experience / who are you
  if (/khibrad|experience|sanad|yaad tahay|magacaaga|who are|verified|xaqiijiy/.test(t)) {
    return so
      ? `Waxaan ahay ${farmer.name}${farmer.verified ? " (la xaqiijiyey ✓)" : ""}. Khibrad: ${exp || "sanado badan"}. Wax soo saar: ${harvestTotal || "tiro badan"}. Gobol: ${region}.`
      : `I'm ${farmer.name}${farmer.verified ? " (verified ✓)" : ""}. Experience: ${exp || "many years"}. Harvest: ${harvestTotal || "large volume"}. Region: ${region}.`;
  }

  // Min order / quantity / stock
  if (/ugu\s*yar|minimum|min order|tirada|quantity|\bqty\b|stock|haystaan|jidhaa|available|heli\s+karaa|boqol|\bton\b/.test(t)) {
    return so
      ? `Dalabka ugu yar waa ${min}. Hadda waxaan haystaa tiro ku filan (qiyaas ${harvestTotal || "badan"}). Sheeg inta aad rabto — waan kuu diyaarinayaa.`
      : `Minimum order is ${min}. Stock is available (about ${harvestTotal || "plenty"}). Tell me how much you need.`;
  }

  // How to order
  if (/sidee|sida\s+loo|dalbo|order|iibs|buy|checkout|samee\s+dalab|aan\s+dalbo/.test(t)) {
    return so
      ? `Si aad u dalbatid: (1) Riix badhanka "Dalbo" (2) Geli tirada, magaalada iyo cinwaanka (3) Dooro EVC ama lacag marka la keeno (4) Xaqiiji. Ama ii sheeg tirada — waan kuu caawinayaa.`
      : `To order: (1) Tap "Order" (2) Enter qty, city and address (3) Choose EVC or cash on delivery (4) Confirm. Or tell me the quantity here.`;
  }

  // Location / farm
  if (/halkee|beerta|location|goobta|xaggee|where|gobol|degaan|cinwaan/.test(t)) {
    return so
      ? `Beertaydu waxay ku taala ${region}. Waxaan ka soo diraa toos beerta — dhexdhexaadiye ma jiro.`
      : `Our farm is in ${region}. We ship straight from the farm — no middlemen.`;
  }

  // Payment
  if (/evc|bixin|pay|payment|zaad|sahad|e-?dahab|premier|wallet|caddaan|kaarka|cash\s+on/.test(t)) {
    return so
      ? `Waxaan aqbalnaa EVC Plus, E-Dahab, Premier Wallet / IBS, iyo lacag marka la keeno. Telefoonka EVC: ${phone || "wac chat-kan"}.`
      : `We accept EVC Plus, E-Dahab, Premier Wallet / IBS, and cash on delivery. EVC phone: ${phone || "ask in chat"}.`;
  }

  // Delivery / timing / cities
  if (/gaadiid|keen|delivery|gaarsiin|transport|berri|saacad|wakhti|when|arrive|soo\s+geli|keeni|muqdisho|hargeisa|garowe|maanta\s+ma|immisa\s+saac/.test(t)) {
    return so
      ? `Haa, gaadiid ayaan leeyahay. Gaadiidka maanta ka baxaya ${product.region}; inta badan 24 saacadood gudahood ayaad heli kartaa. ${feeHint}`
      : `Yes, we deliver. Trucks leave ${product.region} today — usually within 24 hours. ${feeHint}`;
  }

  // Quality / freshness / organic
  if (/cusub|bisil|bislaat|organic|dabiici|quality|tayo|fiican|wanaagsan|caafimaad|fresh|ripe|macaan|qalalan/.test(t)) {
    return so
      ? `${title} waa mid dabiici ah oo tayadiisu sarraysa. Waxaa la gooyay: ${harvest}. Qiimaynta macaamiisha: ★ ${product.rating} (${product.reviewsCount} faallo).`
      : `${title} is natural and high quality. Harvested: ${harvest}. Rating: ★ ${product.rating} (${product.reviewsCount} reviews).`;
  }

  // Product info / what do you sell
  if (/waxaad\s+iibin|maxaad\s+iibin|maxaad\s+leedahay|what\s+do\s+you|iibinays|alaabtaada|product|muus|yaanyo|saliid|galley|cambe|qaro/.test(t)) {
    return so
      ? `Hadda waxaan iibinayaa: ${title} — ${price}/${unit}, gobolka ${product.region}, ugu yar ${min}. Goosashada: ${harvest}.`
      : `Right now I sell: ${title} — ${price}/${unit}, from ${product.region}, min ${min}. Harvest: ${harvest}.`;
  }

  // Negotiation / lower price
  if (/hoos|yarays|dhin|reduce|lower|nego|gorgortan|qiimo\s+yar|ka\s+dhig/.test(t)) {
    return so
      ? `Haddii aad qaadatid 50+ ${unit}, qiimaha wuxuu noqonayaa $${bulkPrice}/${unit} (15% dhimis). Tirada yar qiimaheedu waa ${price}.`
      : `For 50+ ${unit}, price becomes $${bulkPrice}/${unit} (15% off). Smaller orders stay at ${price}.`;
  }

  // Price / bulk / discount
  if (/bishiis|jumlad|qiimo|qiimaha|price|cost|dhimis|cheap|bulk|how\s+much|discount|immisa|meeqa/.test(t)) {
    return so
      ? `1 ${unit} waa ${price}. Ugu yar: ${min}. Jumlad (50+ ${unit}) waxaan kuu dhimi karaa 15% → $${bulkPrice}/${unit}.`
      : `1 ${unit} is ${price}. Minimum: ${min}. Bulk (50+ ${unit}) gets 15% off → $${bulkPrice}/${unit}.`;
  }

  // Returns / problems
  if (/celin|return|qaldan|cabasho|problem|issue|complaint|khalad|ma\s+fiicna/.test(t)) {
    return so
      ? `Haddii alaabtu qaldanto, wac ${phone || "chat-kan"} 24h gudahood — waan beddeli ama kuu celinaynaa. Macmiilkaagu waa muhiim.`
      : `If anything is wrong, call ${phone || "this chat"} within 24h — we'll replace or refund. Your satisfaction matters.`;
  }

  // Yes / confirmation
  if (/^(haa|haan|yes|ok|okay|wll|waayahay|diyaar|aan\s+sameeyo)[.!]?$/.test(t)) {
    return so
      ? `Fiican! Riix "Dalbo" oo geli tirada iyo cinwaanka — ama ii sheeg tirada aad rabto.`
      : `Great! Tap "Order" and enter qty + address — or tell me how much you need.`;
  }

  // No
  if (/^(maya|no|nope)[.!]?$/.test(t)) {
    return so
      ? `Ok, wax dhib ah ma leh. Haddii aad su'aal kale qabtid (qiimo, gaadiid, tayo) weydii — waan jawaabayaa.`
      : `No problem. Ask anytime about price, delivery, or quality — I'll answer.`;
  }

  // Fallback — still useful, not a dead end
  return so
    ? `Waan ku fahmay. ${title} waa ${price}/${unit} · ${region} · ugu yar ${min}. Weydii qiimaha, gaadiidka, bixinta, ama tirada — waan ka jawaabayaa. Ama riix Dalbo.`
    : `Got it. ${title} is ${price}/${unit} · ${region} · min ${min}. Ask about price, delivery, payment, or quantity — or tap Order.`;
}

function sendQuickReply(replyText) {
  sendUserChatMessage(replyText);
}

function sendSimulatedFarmerMsg(farmerName, text) {
  if (!chatMessagesStore[farmerName]) chatMessagesStore[farmerName] = [];
  chatMessagesStore[farmerName].push({ sender: "farmer", text });
  if (currentFarmerChat && currentFarmerChat.name === farmerName) renderChatMessages();
}

function openReviewModal() {
  closeModals();
  document.getElementById("modalOverlay")?.classList.add("active");
  document.getElementById("reviewModal")?.classList.add("active");
}

function submitReview(e) {
  if (e?.preventDefault) e.preventDefault();
  const name = document.getElementById("reviewNameInput").value.trim();
  const role = document.getElementById("reviewRoleInput").value.trim() || "Macaamiil";
  const rating = parseInt(document.getElementById("reviewRatingSelect").value, 10);
  const text = document.getElementById("reviewTextInput").value.trim();
  if (!name || !text) {
    showToast("Buuxi magaca iyo faallada");
    return false;
  }
  reviews.unshift({
    id: Date.now(),
    name,
    role,
    initial: name.charAt(0).toUpperCase(),
    rating,
    text,
    date: currentLang === "so" ? "Maanta" : "Today"
  });
  document.getElementById("reviewNameInput").value = "";
  document.getElementById("reviewRoleInput").value = "";
  document.getElementById("reviewTextInput").value = "";
  closeModals();
  renderReviews();
  showToast(currentLang === "so" ? "Faalladaada waa la daabacay" : "Review posted");
  return false;
}

function openFarmerRegisterModal() {
  closeModals();
  if (currentFarmerAccount) {
    showToast(
      currentLang === "so"
        ? `Waxaad horay ugu diiwaangashan tahay: ${currentFarmerAccount.name}`
        : `Already registered as: ${currentFarmerAccount.name}`
    );
    openFarmerPostModal();
    return;
  }
  const form = document.getElementById("farmerRegisterForm");
  if (form) form.reset();
  const err = document.getElementById("regError");
  if (err) {
    err.hidden = true;
    err.textContent = "";
  }
  document.getElementById("modalOverlay")?.classList.add("active");
  document.getElementById("farmerRegisterModal")?.classList.add("active");
  setTimeout(() => document.getElementById("regFullName")?.focus(), 100);
}

function submitFarmerRegister(e) {
  if (e?.preventDefault) e.preventDefault();

  const name = document.getElementById("regFullName").value.trim();
  const phoneRaw = document.getElementById("regPhone").value.trim();
  const region = document.getElementById("regRegion").value;
  const farmName = document.getElementById("regFarmName").value.trim();

  const err = document.getElementById("regError");
  if (err) {
    err.hidden = true;
    err.textContent = "";
  }

  if (!name) {
    showRegError(currentLang === "so" ? "Fadlan geli magacaaga" : "Please enter your name");
    document.getElementById("regFullName")?.focus();
    return false;
  }
  if (!phoneRaw) {
    showRegError(currentLang === "so" ? "Fadlan geli telefoonkaaga" : "Please enter your phone");
    document.getElementById("regPhone")?.focus();
    return false;
  }

  const phoneDigits = phoneRaw.replace(/\D/g, "");
  if (phoneDigits.length < 7) {
    showRegError(currentLang === "so" ? "Lambarka telefoonka ma saxna (ugu yaraan 7 lambar)" : "Phone number is too short");
    document.getElementById("regPhone")?.focus();
    return false;
  }

  if (!region) {
    showRegError(currentLang === "so" ? "Fadlan dooro gobolka" : "Please select a region");
    document.getElementById("regRegion")?.focus();
    return false;
  }

  if (!farmName) {
    showRegError(currentLang === "so" ? "Fadlan geli magaca beerta" : "Please enter farm name");
    document.getElementById("regFarmName")?.focus();
    return false;
  }

  const existing = registeredFarmers.find(
    (f) => f.phone.replace(/\D/g, "") === phoneDigits
  );
  if (existing) {
    currentFarmerAccount = existing;
    saveFarmerSession();
    updateFarmerHeaderUI();
    closeModals();
    showFarmerSuccess(existing, true);
    return false;
  }

  const farmer = {
    id: Date.now(),
    name,
    phone: phoneRaw,
    region,
    regionFull: REGION_FULL[region] || `${region} Farm`,
    farmName,
    experience: 1,
    produceType: "khadraad",
    password: "",
    initial: name.charAt(0).toUpperCase(),
    verified: true,
    createdAt: new Date().toISOString()
  };

  registeredFarmers.push(farmer);
  currentFarmerAccount = farmer;
  saveFarmerSession();
  updateFarmerHeaderUI();
  closeModals();
  showFarmerSuccess(farmer, false);
  return false;
}

function showFarmerSuccess(farmer, returning) {
  const title = document.getElementById("successTitle");
  const msg = document.getElementById("successMsg");
  const postBtn = document.getElementById("successPostBtn");

  if (title) {
    title.textContent = returning
      ? currentLang === "so"
        ? "Soo dhawoow mar kale!"
        : "Welcome back!"
      : translations[currentLang].successTitle;
  }
  if (msg) {
    msg.textContent =
      currentLang === "so"
        ? `${farmer.name} · ${farmer.farmName} · ${farmer.region}. Hadda waxaad ku iibin kartaa wax soo saarkaaga.`
        : `${farmer.name} · ${farmer.farmName} · ${farmer.region}. You can now list your produce.`;
  }
  if (postBtn) {
    postBtn.textContent = translations[currentLang].successPost;
  }

  document.getElementById("modalOverlay")?.classList.add("active");
  document.getElementById("farmerSuccessModal")?.classList.add("active");
  showToast(
    currentLang === "so"
      ? `Hambalyo! ${farmer.name} waa la diiwaangeliyay`
      : `Success! ${farmer.name} is registered`
  );
}

function openFarmerPostModal() {
  if (!currentFarmerAccount) {
    showToast(
      currentLang === "so"
        ? "Marka hore is-diiwaangeli beeraley ahaan"
        : "Please register as a farmer first"
    );
    openFarmerRegisterModal();
    return;
  }

  closeModals();

  const banner = document.getElementById("postFarmerBanner");
  const asName = document.getElementById("postAsFarmerName");
  const nameGroup = document.getElementById("postFarmerNameGroup");
  const nameInput = document.getElementById("postFarmerNameInput");
  const regionInput = document.getElementById("postRegionInput");
  const catSelect = document.getElementById("postCategorySelect");

  if (banner) banner.style.display = "block";
  if (asName) asName.textContent = `${currentFarmerAccount.name} · ${currentFarmerAccount.farmName}`;
  if (nameGroup) nameGroup.style.display = "none";
  if (nameInput) {
    nameInput.value = currentFarmerAccount.name;
    nameInput.required = false;
  }
  if (regionInput) regionInput.value = currentFarmerAccount.region;
  if (catSelect) catSelect.value = currentFarmerAccount.produceType || "khadraad";

  document.getElementById("modalOverlay")?.classList.add("active");
  document.getElementById("farmerPostModal")?.classList.add("active");
}

function submitNewProduct(e) {
  if (e?.preventDefault) e.preventDefault();

  if (!currentFarmerAccount) {
    showToast(currentLang === "so" ? "Marka hore is-diiwaangeli" : "Register first");
    openFarmerRegisterModal();
    return false;
  }

  const title = document.getElementById("postTitleInput").value.trim();
  const category = document.getElementById("postCategorySelect").value;
  const price = parseFloat(document.getElementById("postPriceInput").value);
  const unit = document.getElementById("postUnitInput").value.trim() || "Kg";
  const region = document.getElementById("postRegionInput").value.trim() || currentFarmerAccount.region;
  const farmerName = currentFarmerAccount.name;

  if (!title || !price || !region) {
    showToast(currentLang === "so" ? "Buuxi dhammaan xogta" : "Fill in all fields");
    return false;
  }

  products.unshift({
    id: Date.now(),
    title,
    category,
    priceUSD: price,
    unit,
    region,
    regionFull: REGION_FULL[region] || currentFarmerAccount.regionFull || `${region} Farm`,
    farmer: {
      name: farmerName,
      phone: currentFarmerAccount.phone,
      initial: currentFarmerAccount.initial,
      experience: `${currentFarmerAccount.experience} Sano`,
      totalHarvest: "5 Ton",
      verified: true,
      farmName: currentFarmerAccount.farmName
    },
    image:
      category === "badar"
        ? "assets/corn.png"
        : category === "saliid"
          ? "assets/sesame_oil.png"
          : "assets/tomatoes.png",
    rating: 5.0,
    reviewsCount: 1,
    harvestDate: currentLang === "so" ? "Maanta" : "Today",
    minOrder: `1 ${unit}`
  });

  ["postTitleInput", "postPriceInput"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  closeModals();
  resetFilters();
  renderProducts();
  showToast(currentLang === "so" ? "Alaabtaada waa lagu daray suuqa" : "Your produce is listed");
  document.getElementById("marketplace")?.scrollIntoView({ behavior: "smooth" });
  return false;
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 280);
  }, 3200);
}

function toggleTheme() {
  const body = document.body;
  const next = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", next);
  showToast(
    currentLang === "so"
      ? `Muuqaalka: ${next === "dark" ? "mugdi" : "iftiin"}`
      : `Theme: ${next}`
  );
}

function toggleLanguage() {
  currentLang = currentLang === "so" ? "en" : "so";
  const langBtn = document.getElementById("langToggleBtn");
  if (langBtn) langBtn.textContent = currentLang === "so" ? "SO" : "EN";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
  });

  const headSearch = document.getElementById("headerSearchInput");
  if (headSearch) {
    headSearch.placeholder =
      currentLang === "so"
        ? "Raadso muus, yaanyo, saliid, galley..."
        : "Search bananas, tomatoes, oil, corn...";
  }
  const mainSearch = document.getElementById("searchInput");
  if (mainSearch) {
    mainSearch.placeholder =
      currentLang === "so" ? "Raadso muus, yaanyo..." : "Search bananas, tomatoes...";
  }

  ["qr1", "qr2", "qr3"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = translations[currentLang][id];
  });
  const chatInput = document.getElementById("chatInput");
  if (chatInput) chatInput.placeholder = translations[currentLang].chatPlaceholder;
  const chatSendBtn = document.getElementById("chatSendBtn");
  if (chatSendBtn) chatSendBtn.textContent = translations[currentLang].send;
  const cartHeaderTitle = document.getElementById("cartHeaderTitle");
  if (cartHeaderTitle) cartHeaderTitle.textContent = translations[currentLang].cartTitle;
  const cartSubtotalLabel = document.getElementById("cartSubtotalLabel");
  if (cartSubtotalLabel) cartSubtotalLabel.textContent = translations[currentLang].subtotal;
  const cartCheckoutBtn = document.getElementById("cartCheckoutBtn");
  if (cartCheckoutBtn) cartCheckoutBtn.textContent = translations[currentLang].checkout;

  renderProducts();
  updateFarmerHeaderUI();
  showToast(currentLang === "so" ? "Luuqad: Soomaali" : "Language: English");
}

Object.assign(window, {
  handleSearch,
  toggleCurrency,
  toggleTheme,
  toggleLanguage,
  openChatDrawer,
  openCartDrawer,
  openOrderModal,
  openFarmerProfileModal,
  openReviewModal,
  openFarmerPostModal,
  openFarmerRegisterModal,
  closeModals,
  submitOrderRequest,
  processEvcPinSubmit,
  submitReview,
  submitNewProduct,
  submitFarmerRegister,
  showFarmerSuccess,
  selectQuickRegion,
  updateCartQty,
  addToCart,
  proceedCartCheckout,
  sendUserChatMessage,
  sendQuickReply,
  printReceipt,
  resetFilters,
  updateOrderTotal,
  get currentFarmerAccount() {
    return currentFarmerAccount;
  },
  get registeredFarmers() {
    return registeredFarmers;
  }
});
