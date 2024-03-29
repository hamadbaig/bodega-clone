const productSection = document.querySelector(".all--products");
const paging = document.querySelector(".pagination");
const categorySection = document.querySelector(".ul");
const searchbar = document.querySelector(".search--bar");

const data = [
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b13f",
    },
    sku: 12,
    name: "Pollo Entero Ahumado AGUILAR® - Grande",
    image: "../img/goods_img/pollo_entero_aguilar.png",
    price: "37.50",
    category: "Carnes",
    catalog_submenu: "Proteina Animal y Vegana",
    quantity: 0,
    promoted: false,
    promoted_price: 37.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b140",
    },
    sku: 13,
    name: "Pollo Entero Ahumado AGUILAR® - Mediano",
    image: "../img/goods_img/pollo_entero_aguilar_mediano.png",
    price: "24.90",
    category: "Carnes",
    catalog_submenu: "Proteina Animal y Vegana",
    quantity: 10,
    promoted: false,
    promoted_price: 24.9,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b141",
    },
    sku: 14,
    name: "Pavo Entero Ahumado AGUILAR® - Grande",
    image: "../img/goods_img/pavo_entero_aguilar.png",
    price: "69.80",
    category: "Carnes",
    catalog_submenu: "Proteina Animal y Vegana",
    quantity: 10,
    promoted: false,
    promoted_price: 69.8,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b139",
    },
    sku: 6,
    name: "Pavo Entero Ahumado AGUILAR® - Mediano",
    image: "../img/goods_img/pavo_entero_aguilar_mediano.png",
    price: "54.75",
    category: "Carnes",
    catalog_submenu: "Proteina Animal y Vegana",
    quantity: 10,
    promoted: false,
    promoted_price: 54.75,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b13c",
    },
    sku: 9,
    name: "Cerdo Pierna Ahumada AGUILAR® - Grande",
    image: "../img/goods_img/cerdo_pierna_aguilar.png",
    price: "120.00",
    category: "Carnes",
    catalog_submenu: "Proteina Animal y Vegana",
    quantity: 100,
    promoted: false,
    promoted_price: 120,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b142",
    },
    sku: 15,
    name: "Cerdo Pierna Ahumada AGUILAR® - Mediana",
    image: "../img/goods_img/cerdo_pierna_aguilar_mediana.png",
    price: "97.50",
    category: "Carnes",
    catalog_submenu: "Proteina Animal y Vegana",
    quantity: 10,
    promoted: false,
    promoted_price: 88.9,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b134",
    },
    sku: 1,
    name: "Cordero Pierna Ahumada AGUILAR® - 2.5kg",
    image: "../img/goods_img/cordero_pierna_aguilar.png",
    price: "39.99",
    category: "Carnes",
    catalog_submenu: "Proteina Animal y Vegana",
    quantity: 10,
    promoted: false,
    promoted_price: 39.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b143",
    },
    sku: 16,
    name: "Cordero Rack Ahumado AGUILAR® - 2.5kg",
    image: "../img/goods_img/cordero_rack_aguilar.png",
    price: "39.99",
    category: "Carnes",
    catalog_submenu: "Proteina Animal y Vegana",
    quantity: 10,
    promoted: false,
    promoted_price: 39.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b145",
    },
    sku: 17,
    name: "Tomate Riñon - 1Kg",
    image: "../img/goods_img/tomate_rinon.png",
    price: "1.05",
    category: "Verduras",
    catalog_submenu: "Frutas y Verduras",
    quantity: 10,
    promoted: false,
    promoted_price: 1.05,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b146",
    },
    sku: 20,
    name: "Cebolla Perla - 1Kg",
    image: "../img/goods_img/cebolla_perla.png",
    price: "1.35",
    category: "Verduras",
    catalog_submenu: "Frutas y Verduras",
    quantity: 10,
    promoted: false,
    promoted_price: 1.35,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b147",
    },
    sku: 19,
    name: "Papa Chola - 1Kg",
    image: "../img/goods_img/papa_chola.png",
    price: "0.83",
    category: "Verduras",
    catalog_submenu: "Frutas y Verduras",
    quantity: 10,
    promoted: false,
    promoted_price: 0.83,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b148",
    },
    sku: 21,
    name: "Pimiento Verde - 1Kg",
    image: "../img/goods_img/pimiento_verde.png",
    price: "1.47",
    category: "Verduras",
    catalog_submenu: "Frutas y Verduras",
    quantity: 10,
    promoted: true,
    promoted_price: 1.34,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b144",
    },
    sku: 18,
    name: "Pimiento Rojo - 1Kg",
    image: "../img/goods_img/pimiento_rojo.png",
    price: "2.84",
    category: "Verduras",
    catalog_submenu: "Frutas y Verduras",
    quantity: 10,
    promoted: false,
    promoted_price: 2.84,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b14a",
    },
    sku: 23,
    name: "Manzana - 1Kg",
    image: "../img/goods_img/manzana.png",
    price: "2.89",
    category: "Frutas",
    catalog_submenu: "Frutas y Verduras",
    quantity: 10,
    promoted: false,
    promoted_price: 2.89,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b149",
    },
    sku: 22,
    name: "Pimiento Amarillo - 1Kg",
    image: "../img/goods_img/pimiento_amarillo.png",
    price: "3.45",
    category: "Verduras",
    catalog_submenu: "Frutas y Verduras",
    quantity: 10,
    promoted: true,
    promoted_price: 3.37,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b14b",
    },
    sku: 24,
    name: "Banano - 1Kg",
    image: "../img/goods_img/banano.png",
    price: "1.34",
    category: "Frutas",
    catalog_submenu: "Frutas y Verduras",
    quantity: 10,
    promoted: false,
    promoted_price: 1.34,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b13a",
    },
    sku: 7,
    name: "Pernilito de Pavo Fritz - 500gr",
    image: "../img/goods_img/pernilito_pavo_pronaca.png",
    price: "9.52",
    category: "Carnes",
    catalog_submenu: "Proteina Animal y Vegana",
    quantity: 10,
    promoted: false,
    promoted_price: 9.52,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b136",
    },
    sku: 3,
    name: "Beyond Sausage - 400gr",
    image: "../img/goods_img/salchichas_beyond.png",
    price: "15.20",
    category: "Vegano",
    catalog_submenu: "Proteina Animal y Vegana",
    quantity: 10,
    promoted: false,
    promoted_price: 15.2,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b14c",
    },
    sku: 25,
    name: "Papaya - 1Kg",
    image: "https://placehold.it/406x366",
    price: "3.12",
    category: "Frutas",
    catalog_submenu: "Frutas y Verduras",
    quantity: 0,
    promoted: false,
    promoted_price: 3.12,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b138",
    },
    sku: 5,
    name: "Jamón Glaseado de Pavo Fritz - 1Kg",
    image: "../img/goods_img/jamon_glaseado_pronaca.png",
    price: "19.40",
    category: "Carnes",
    catalog_submenu: "Proteina Animal y Vegana",
    quantity: 10,
    promoted: true,
    promoted_price: 16.2,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b13b",
    },
    sku: 8,
    name: "Angochagua Zuleta - 300gr",
    image: "../img/goods_img/angochagua_zuleta.png",
    price: "5.63",
    category: "Quesos",
    catalog_submenu: "Proteina Animal y Vegana",
    quantity: 10,
    promoted: false,
    promoted_price: 5.63,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b150",
    },
    sku: 30,
    name: "Fuze Tea",
    image: "https://placehold.it/406x366",
    price: "3.00",
    category: "Bebida",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: null,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b137",
    },
    sku: 4,
    name: "Lomitón de Cerdo Fritz - 1kg",
    image: "../img/goods_img/lomiton_cerdo_pronaca.png",
    price: "16.46",
    category: "Carnes",
    catalog_submenu: "Proteina Animal y Vegana",
    quantity: 10,
    promoted: false,
    promoted_price: 16.46,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b13e",
    },
    sku: 11,
    name: "Pategras Zuleta - 300gr",
    image: "../img/goods_img/pategras_zuleta.png",
    price: "5.63",
    category: "Quesos",
    catalog_submenu: "Proteina Animal y Vegana",
    quantity: 10,
    promoted: false,
    promoted_price: 5.63,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b14d",
    },
    sku: 27,
    name: "Agua Sin Gas - Splendor",
    image: "../img/bebidas_img/splendor_sin_gas.jpg",
    price: "3.00",
    category: "Agua",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: null,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b13d",
    },
    sku: 10,
    name: "Chuleta Ahumada Plumrose - 1.8kg ",
    image: "../img/goods_img/chuleta_ahumada_pronaca.png",
    price: "34.90",
    category: "Carnes",
    catalog_submenu: "Proteina Animal y Vegana",
    quantity: 0,
    promoted: true,
    promoted_price: 32.9,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b151",
    },
    sku: 26,
    name: "Sandía - 1Kg",
    image: "https://placehold.it/406x366",
    price: "4.12",
    category: "Frutas",
    catalog_submenu: "Frutas y Verduras",
    quantity: 0,
    promoted: false,
    promoted_price: 4.12,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b153",
    },
    sku: 31,
    name: "Coca Cola",
    image: "https://placehold.it/406x366",
    price: "3.00",
    category: "Gaseosa",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: null,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b152",
    },
    sku: 32,
    name: "Sprite",
    image: "https://placehold.it/406x366",
    price: "3.00",
    category: "Gaseosa",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: null,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b155",
    },
    sku: 35,
    name: "Cerveza Santa Rosa - IPA 500ml",
    image: "../img/bebidas_img/cerveza_santarosa_ipa.png",
    price: "4.99",
    category: "Cervezas",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 4.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b154",
    },
    sku: 33,
    name: "Cerveza Pilsener 6 pack 330ml",
    image: "../img/bebidas_img/cerveza_pilsener_six_pack.png",
    price: "8.99",
    category: "Cervezas",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 8.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b159",
    },
    sku: 38,
    name: "Whisky Ballantines 12 años 750ml",
    image: "../img/bebidas_img/whisky_ballantines.png",
    price: "39.99",
    category: "Whisky",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 39.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b15a",
    },
    sku: 40,
    name: "Whisky Old Parr 750ml",
    image: "../img/bebidas_img/whisky_old_parr.png",
    price: "56.99",
    category: "Whisky",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: true,
    promoted_price: 52.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b157",
    },
    sku: 36,
    name: "Cerveza Santa Rosa - White Ale 500ml",
    image: "https://placehold.it/406x366",
    price: "4.99",
    category: "Cervezas",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 4.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b158",
    },
    sku: 37,
    name: "Cerveza Santa Rosa - Extra Stout 500ml",
    image: "../img/bebidas_img/cerveza_santarosa_extrastout.png",
    price: "4.99",
    category: "Cervezas",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 4.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b135",
    },
    sku: 2,
    name: "Danbo Zuleta - 300gr",
    image: "../img/goods_img/danbo_zuleta.png",
    price: "5.63",
    category: "Quesos",
    catalog_submenu: "Proteina Animal y Vegana",
    quantity: 10,
    promoted: false,
    promoted_price: 5.63,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b15b",
    },
    sku: 39,
    name: "Whisky Black Owl 750ml",
    image: "../img/bebidas_img/whisky_black_owl.png",
    price: "16.99",
    category: "Whisky",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 16.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b15c",
    },
    sku: 41,
    name: "Johnnie Walker Black Label 750ml",
    image: "../img/bebidas_img/whisky_johnnie_black.png",
    price: "62.99",
    category: "Whisky",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 62.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b14e",
    },
    sku: 28,
    name: "Agua Con Gas - Güitig",
    image: "../img/bebidas_img/splendor_con_gas.jpg",
    price: "3.00",
    category: "Agua",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: null,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b15d",
    },
    sku: 42,
    name: "Johnnie Walker Red Label 750ml",
    image: "../img/bebidas_img/whisky_johnnie_red.png",
    price: "31.99",
    category: "Whisky",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: true,
    promoted_price: 29.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b156",
    },
    sku: 34,
    name: "Cerveza Club 6 pack 330ml",
    image: "../img/bebidas_img/cerveza_club_six_pack.png",
    price: "8.99",
    category: "Cervezas",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 8.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b15f",
    },
    sku: 45,
    name: "Ron Cienfuegos 750ml",
    image: "../img/bebidas_img/ron_cienfuegos.png",
    price: "16.50",
    category: "Ron",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: true,
    promoted_price: 15.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b160",
    },
    sku: 44,
    name: "Ron Abuelo 750ml",
    image: "../img/bebidas_img/ron_cienfuegos.png",
    price: "14.50",
    category: "Ron",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 14.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b15e",
    },
    sku: 43,
    name: "Whisky Chivas Regal 750ml",
    image: "../img/bebidas_img/whisky_chivas_regal.png",
    price: "59.99",
    category: "Whisky",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: true,
    promoted_price: 54.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b163",
    },
    sku: 47,
    name: "Ron Estelar 750ml",
    image: "../img/bebidas_img/ron_estelar.png",
    price: "11.99",
    category: "Ron",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 11.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b165",
    },
    sku: 50,
    name: "Aguardiente Antioqueño 750ml",
    image: "https://placehold.it/406x366",
    price: "21.49",
    category: "Aguardiente",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 21.49,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b166",
    },
    sku: 51,
    name: "Caña Manabita 750ml",
    image: "https://placehold.it/406x366",
    price: "11.99",
    category: "Aguardiente",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 11.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b162",
    },
    sku: 48,
    name: "Ron Appleton Blanco 750ml",
    image: "../img/bebidas_img/ron_cienfuegos.png",
    price: "17.50",
    category: "Ron",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 17.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b16e",
    },
    sku: 59,
    name: "Skyy Vodka 750ml",
    image: "../img/bebidas_img/vodka_skyy.png",
    price: "17.50",
    category: "Vodka",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 0,
    promoted: true,
    promoted_price: 16.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b16f",
    },
    sku: 60,
    name: "Tequila El Charro Silver 750ml",
    image: "../img/bebidas_img/tequila_charro_silver.png",
    price: "21.49",
    category: "Tequila",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 21.49,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b170",
    },
    sku: 61,
    name: "Tequila El Charro Gold 750ml",
    image: "../img/bebidas_img/tequila_charro_gold.png",
    price: "21.49",
    category: "Tequila",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 21.49,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b16b",
    },
    sku: 56,
    name: "Gin Liova",
    image: "../img/bebidas_img/gin_liova.jpg",
    price: "18.50",
    category: "Gin",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 18.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b171",
    },
    sku: 62,
    name: "Tequila Espuela Agave 750ml",
    image: "..img/Tequila-El-Charro-Gold-750-ML.webp",
    price: "18.99",
    category: "Tequila",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: true,
    promoted_price: 15.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b172",
    },
    sku: 63,
    name: "Bidú 20 Shots Pack",
    image: "../img/bebidas_img/shots_bidu.png",
    price: "9.99",
    category: "Coctéles Listos",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 9.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b98",
    },
    sku: 63,
    name: "Bidú 20 Shots hammad",
    image: "../img/bebidas_img/shots_bidu.png",
    price: "9.99",
    category: "Coctéles Listos",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 9.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b169",
    },
    sku: 54,
    name: "Gin Under 1000ml",
    image: "../img/bebidas_img/gin_under.png",
    price: "18.99",
    category: "Gin",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: true,
    promoted_price: 14.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b173",
    },
    sku: 64,
    name: "Zhumir Switch Daiquiri Shark 1500ml",
    image: "../img/bebidas_img/switch_daiquiri.jpg",
    price: "5.50",
    category: "Coctéles Listos",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 5.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b173",
    },
    sku: 64,
    name: "Zhumir Switch Daiquiri Shark 1500ml",
    image: "../img/bebidas_img/switch_daiquiri.jpg",
    price: "5.50",
    category: "Coctéles Listos",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 5.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b173",
    },
    sku: 64,
    name: "Zhumir Switch Daiquiri Shark 1500ml",
    image: "../img/bebidas_img/switch_daiquiri.jpg",
    price: "5.50",
    category: "Coctéles Listos",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 5.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b173",
    },
    sku: 64,
    name: "Zhumir Switch Daiquiri Shark 1500ml",
    image: "../img/bebidas_img/switch_daiquiri.jpg",
    price: "5.50",
    category: "Coctéles Listos",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 5.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b174",
    },
    sku: 65,
    name: "Zhumir Switch Mexquila Mi Guey 1500ml",
    image: "../img/bebidas_img/switch_mexquila.jpg",
    price: "5.50",
    category: "Coctéles Listos",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 5.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b164",
    },
    sku: 49,
    name: "Norteño 750ml",
    image: "../img/bebidas_img/aguardiente_norteño.png",
    price: "10.50",
    category: "Aguardiente",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 10.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b176",
    },
    sku: 67,
    name: "Zhumir Switch Naranja 1500ml",
    image: "../img/bebidas_img/switch_naranja.jpg",
    price: "5.50",
    category: "Coctéles Listos",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 5.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b177",
    },
    sku: 68,
    name: "Zhumir Switch Durazno 1500ml",
    image: "../img/bebidas_img/switch_durazno.jpg",
    price: "5.50",
    category: "Coctéles Listos",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 5.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b175",
    },
    sku: 66,
    name: "Zhumir Switch Maracuyá 1500ml",
    image: "../img/bebidas_img/switch_maracuya.jpg",
    price: "5.50",
    category: "Coctéles Listos",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 5.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b178",
    },
    sku: 69,
    name: "Zhumir Pink Sandía 700 ml",
    image: "../img/bebidas_img/zhumir_pink.jpg",
    price: "14.50",
    category: "Coctéles Listos",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: true,
    promoted_price: 12.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b17a",
    },
    sku: 71,
    name: "Zhumir Plug 1250ml",
    image: "../img/bebidas_img/zhumir_plug.jpg",
    price: "11.50",
    category: "Coctéles Listos",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 11.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b17b",
    },
    sku: 72,
    name: "Zhumir Piña Colada 700ml",
    image: "../img/bebidas_img/zhumir_piñacolada.png",
    price: "13.99",
    category: "Coctéles Listos",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 13.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b179",
    },
    sku: 70,
    name: "Zhumir Durazno 700ml",
    image: "../img/bebidas_img/zhumir_durazno.jpg",
    price: "7.50",
    category: "Coctéles Listos",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 7.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b17c",
    },
    sku: 73,
    name: "Venetto Sandía",
    image: "../img/bebidas_img/venetto_sandia.jpg",
    price: "6.50",
    category: "Coctéles Listos",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 6.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b17d",
    },
    sku: 74,
    name: "Venetto Cereza",
    image: "../img/bebidas_img/venetto_cereza.jpg",
    price: "6.50",
    category: "Coctéles Listos",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 0,
    promoted: false,
    promoted_price: 6.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b181",
    },
    sku: 80,
    name: "Canasto Navideño 1",
    image: "https://placehold.it/406x366",
    price: "19.99",
    category: "Canasto de Temporada",
    catalog_submenu: "Canastos Surtidos Listos",
    quantity: 10,
    promoted: false,
    promoted_price: 19.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b180",
    },
    sku: 78,
    name: "Canasto de Carnes, Embutidos y Verduras",
    image: "https://placehold.it/406x366",
    price: "29.99",
    category: "Canasto Semanal",
    catalog_submenu: "Canastos Surtidos Listos",
    quantity: 0,
    promoted: false,
    promoted_price: 29.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b182",
    },
    sku: 79,
    name: "Canasto de Huevos, Lácteos y Verduras",
    image: "https://placehold.it/406x366",
    price: "24.99",
    category: "Canasto Semanal",
    catalog_submenu: "Canastos Surtidos Listos",
    quantity: 10,
    promoted: false,
    promoted_price: 24.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b168",
    },
    sku: 53,
    name: "Zhumir Seco Oro",
    image: "../img/bebidas_img/zhumir_seco.jpg",
    price: "7.50",
    category: "Aguardiente",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 7.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b16c",
    },
    sku: 57,
    name: "Vodka Russkaya 750ml",
    image: "../img/bebidas_img/vodka_russkaya.png",
    price: "13.99",
    category: "Vodka",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 13.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b16d",
    },
    sku: 58,
    name: "Vodka Liova 750ml",
    image: "../img/bebidas_img/vodka_liova.jpg",
    price: "17.50",
    category: "Vodka",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 17.5,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b167",
    },
    sku: 52,
    name: "Paisa Azul Sin Azúcar 750ml",
    image: "../img/bebidas_img/aguardiente_paisa.png",
    price: "12.99",
    category: "Aguardiente",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 12.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b184",
    },
    sku: 77,
    name: "Canasto de Frutas y Verduras",
    image: "https://placehold.it/406x366",
    price: "19.99",
    category: "Canasto Semanal",
    catalog_submenu: "Canastos Surtidos Listos",
    quantity: 10,
    promoted: false,
    promoted_price: 19.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b183",
    },
    sku: 81,
    name: "Canasta Básica 'Fundación Don Julio'",
    image: "https://placehold.it/406x366",
    price: "39.99",
    category: "Canasto Semanal",
    catalog_submenu: "Canastos Surtidos Listos",
    quantity: 1,
    promoted: true,
    promoted_price: 29.99,
  },
  {
    _id: {
      $oid: "5f45ab7b4ea96d3265e5b16a",
    },
    sku: 55,
    name: "Gin Wembley 750ml",
    image: "../img/bebidas_img/gin_wembley.png",
    price: "17.99",
    category: "Gin",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 17.99,
  },
  {
    _id: {
      $oid: "5fbbe73b5b71d446bc353a99",
    },
    sku: 82,
    name: "Canasto Navideño 2",
    image: "https://placehold.it/406x366",
    price: "34.99",
    category: "Canasto de Temporada",
    catalog_submenu: "Canastos Surtidos Listos",
    quantity: 10,
    promoted: false,
    promoted_price: 34.99,
  },
  {
    _id: {
      $oid: "5fbbe7675b71d446bc353a9a",
    },
    sku: 83,
    name: "Canasto Navideño 3",
    image: "https://placehold.it/406x366",
    price: "49.99",
    category: "Canasto de Temporada",
    catalog_submenu: "Canastos Surtidos Listos",
    quantity: 10,
    promoted: false,
    promoted_price: 49.99,
  },
  {
    _id: {
      $oid: "5fbdbf861c0d643b707be8a6",
    },
    sku: 29,
    name: "Cerveza Santa Rosa - Honey Strong Golden Ale 500ml",
    image: "https://placehold.it/406x366",
    price: "4.99",
    category: "Cervezas",
    catalog_submenu: "Jugos, Bebidas y Licores",
    quantity: 10,
    promoted: false,
    promoted_price: 4.99,
  },
];

// var sort = "null";
// const itemsPerPage = 12;
// let currentPage = 1;
// updateCartQuantity();
// debugger;

// function renderProducts(page, Product, format) {
//   debugger;
//   sort = format;
//   var currentdata = Product;
//   if (sort == "lowToHigh") {
//     currentdata.sort((a, b) => a.price - b.price);
//   } else if (sort == "highToLow") {
//     currentdata.sort((a, b) => b.price - a.price);
//   } else {
//     currentdata = Product;
//   }
//   const startIndex = (page - 1) * itemsPerPage;
//   const endIndex = page * itemsPerPage;
//   const productsForPage = currentdata.slice(startIndex, endIndex);
//   const productHTMLArray = productsForPage.map(
//     (product) => `
//     <div id=${product._id.$oid} class="pro">
//         <div class="pro--img">
//             <img src="${product.image}" alt="">
//         </div>
//         <div class="pro--desc">
//             <h3>${product.name}</h3>
//             <h3>${product.category}</h3>
//             <h3>${product.price}$</h3>
//         </div>
//         <div class="pro--btn">
//         <button class="btn  add-to-cart"  onclick="Addtocart('${product.name}', '${product.image}', ${product.price}, '${product._id.$oid}'); return false;"><i class="fas fa-shopping-cart"></i>ANADIR</button>

//         </div>
//     </div>
// `
//   );

//   productSection.innerHTML = productHTMLArray;
//   const totalPages = Math.ceil(currentdata.length / itemsPerPage);
//   console.log(currentdata);
//   const pageNumbers = Array.from(
//     { length: totalPages },
//     (_, index) => index + 1
//   );
//   const paginationHTML = pageNumbers

//     .map(
//       (number) => `
//     <button class="pagenumber ${
//       page === number ? "active-1" : ""
//     }" data-page="${number}">
//       ${number}
//     </button>
//   `
//     )
//     .join("");
//   paging.innerHTML = paginationHTML;
//   document.querySelectorAll(".pagenumber").forEach((button) => {
//     button.addEventListener("click", (event) => {
//       const clickedPage = parseInt(
//         event.currentTarget.getAttribute("data-page"),
//         10
//       );
//       renderProducts(clickedPage, currentdata, sort);
//     });
//   });
// }
// renderProducts(currentPage, data, sort);
// function handleSortChange(selectedValue) {
//   let sortOrder;
//   if (selectedValue === "lowToHigh") {
//     sortOrder = "asc";
//   } else if (selectedValue === "highToLow") {
//     sortOrder = "desc";
//   }

//   renderProducts(1, data, sortOrder);
// }
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// if (!cart) {
//   cart = [];
// }

// localStorage.setItem("cart", JSON.stringify(cart));

// function Addtocart(name, image, price, id) {
//   let cartData = JSON.parse(localStorage.getItem("cart")) || [];

//   let num = 1;
//   const existingProductIndex = cartData.findIndex(
//     (product) => product.id === id
//   );

//   if (existingProductIndex !== -1) {
//     cartData[existingProductIndex].quantity =
//       (cartData[existingProductIndex].quantity || 1) + 1;
//   } else {
//     const productData = {
//       name: name,
//       image: image,
//       price: price,
//       id: id,
//       quantity: num,
//       total: num * price,
//     };
//     cartData.push(productData);
//   }

//   localStorage.setItem("cart", JSON.stringify(cartData));

//   console.log("Updated Cart Data:", cartData);
//   updateCartQuantity();
//   alert(`${name} has been added to your cart!`);
// }

// function updateCartQuantity() {
//   const cartQuantityElement = document.getElementById("cartQuantity");
//   let cartlength = JSON.parse(localStorage.getItem("cart"));
//   cartQuantityElement.textContent = cartlength.length;
//   console.log(cartlength.length);
// }
// debugger;
// renderCategory();

// function renderCategory() {
//   const categories = {};

//   data.forEach((product) => {
//     const category = product.category;
//     categories[category] = (categories[category] || 0) + 1;
//   });

//   const categoryHTMLArray = Object.entries(categories).map(
//     ([category, count]) => `
//     <li >
//       <a href="#">
//         <h3 class="li"onclick="handleCategoryClick('${category}'); return false;">${category} (${count})</h3>
//       </a>
//     </li>
//   `
//   );

//   const allCategoryHTML = categoryHTMLArray.join("");
//   categorySection.innerHTML = allCategoryHTML;
// }

// // cart section

// var categoryProduct = [];
// function handleCategoryClick(category) {
//   categoryProduct = [];

//   for (var i = 0; i < data.length; i++) {
//     if (data[i].category == category) categoryProduct.push(data[i]);
//   }
//   renderProducts(currentPage, categoryProduct, sort);
//   const totalPages = Math.ceil(categoryProduct.length / itemsPerPage);

//   const pageNumbers = Array.from(
//     { length: totalPages },
//     (_, index) => index + 1
//   );

//   console.log(categoryProduct);
//   const paginationHTML = pageNumbers
//     .map(
//       (number) => `
//     <button class="pagenumber"onclick="renderProducts(${number},categoryProduct,sort); return false;">${number}</button>
//   `
//     )
//     .join("");

//   paging.innerHTML = paginationHTML;
// }
// function search() {
//   var inputvalue = document.getElementById("searchInput").value.toLowerCase();
//   const filteredData = data.filter((item) => {
//     const itemName = item.name.toLowerCase();
//     return itemName.includes(inputvalue);
//   });

//   // Render the filtered data
//   renderProducts(currentPage, filteredData, sort);
// }
// const dataArray = [
//   /* Your array of data goes here */
// ];
// const minRangeSlider = document.getElementById("min-range-slider");
// const maxRangeSlider = document.getElementById("max-range-slider");
// const selectedRangeElement = document.getElementById("selected-range");
// const filteredDataElement = document.getElementById("filtered-data");
// function updateFilteredData() {
//   const min = parseInt(minRangeSlider.value);
//   const max = parseInt(maxRangeSlider.value);

//   const filteredData = data.filter(
//     (item) => parseFloat(item.price) >= min && parseFloat(item.price) <= max
//   );

//   // Display the selected range
//   selectedRangeElement.textContent = `${min} - ${max}`;

//   renderProducts(currentPage, filteredData, sort);
// }

// // Initial update
// // updateFilteredData();

// // Add event listener to update on slider change
// minRangeSlider.addEventListener("input", updateFilteredData);
// maxRangeSlider.addEventListener("input", updateFilteredData);
let sort = null;
const itemsPerPage = 12;
let currentPage = 1;
updateCartQuantity();
debugger;

function renderProducts(page, Product, format) {
  debugger;
  sort = format;
  const currentData = [...Product]; // Create a copy to avoid modifying the original array
  if (sort === "lowToHigh") {
    currentData.sort((a, b) => a.price - b.price);
  } else if (sort === "highToLow") {
    currentData.sort((a, b) => b.price - a.price);
  }
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  const productsForPage = currentData.slice(startIndex, endIndex);
  const productHTMLArray = productsForPage.map(
    (product) => `
    <div id=${product._id.$oid} class="pro">
        <div class="pro--img">
            <img src="${product.image}" alt="">
        </div>
        <div class="pro--desc">
            <h3>${product.name}</h3>
            <h3>${product.category}</h3>
            <h3>${product.price}$</h3>
        </div>
        <div class="pro--btn">
        <button class="btn add-to-cart" onclick="addToCart('${product.name}', '${product.image}', ${product.price}, '${product._id.$oid}'); return false;"><i class="fas fa-shopping-cart"></i>ANADIR</button>
        </div>
    </div>
  `
  );

  productSection.innerHTML = productHTMLArray.join("");
  const totalPages = Math.ceil(currentData.length / itemsPerPage);
  console.log(currentData);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const paginationHTML = pageNumbers
    .map(
      (number) => `
    <button class="pagenumber ${
      page === number ? "active-1" : ""
    }" data-page="${number}">
      ${number}
    </button>
  `
    )
    .join("");
  paging.innerHTML = paginationHTML;
  document.querySelectorAll(".pagenumber").forEach((button) => {
    button.addEventListener("click", (event) => {
      const clickedPage = parseInt(
        event.currentTarget.getAttribute("data-page"),
        10
      );
      renderProducts(clickedPage, currentData, sort);
    });
  });
  renderCategory(currentData);
}

renderProducts(currentPage, data, sort);

function handleSortChange(selectedValue) {
  renderProducts(1, data, selectedValue);
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (!cart) {
  cart = [];
}

localStorage.setItem("cart", JSON.stringify(cart));

function addToCart(name, image, price, id) {
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];
  let num = 1;
  const existingProductIndex = cartData.findIndex(
    (product) => product.id === id
  );

  if (existingProductIndex !== -1) {
    cartData[existingProductIndex].quantity =
      (cartData[existingProductIndex].quantity || 1) + 1;
  } else {
    const productData = {
      name: name,
      image: image,
      price: price,
      id: id,
      quantity: num,
      total: num * price,
    };
    cartData.push(productData);
  }

  localStorage.setItem("cart", JSON.stringify(cartData));
  console.log("Updated Cart Data:", cartData);
  updateCartQuantity();
  alert(`${name} has been added to your cart!`);
}

function updateCartQuantity() {
  const cartQuantityElement = document.getElementById("cartQuantity");
  let cartLength = JSON.parse(localStorage.getItem("cart")) || [];
  cartQuantityElement.textContent = cartLength.length;
  console.log(cartLength.length);
}

debugger;
renderCategory(data);

// function renderCategory() {
//   const categories = {};

//   data.forEach((product) => {
//     const category = product.category;
//     categories[category] = (categories[category] || 0) + 1;
//   });

//   const categoryHTMLArray = Object.entries(categories).map(
//     ([category, count]) => `
//     <li>
//       <a href="#">
//         <h3 class="li" onclick="handleCategoryClick('${category}'); return false;">${category} (${count})</h3>
//       </a>
//     </li>
//   `
//   );

//   const allCategoryHTML = categoryHTMLArray.join("");
//   categorySection.innerHTML = allCategoryHTML;
// }
function renderCategory(currentdata) {
  const categories = {};

  data.forEach((product) => {
    const category = product.category;
    const categoryCount = currentdata.filter(
      (item) => item.category === category
    ).length;
    categories[category] = categoryCount;
  });

  const categoryHTMLArray = Object.entries(categories).map(
    ([category, count]) => `
    <li>
      <a href="#">
        <h3 class="li" onclick="handleCategoryClick('${category}'); return false;">${category} (${count})</h3>
      </a>
    </li>
  `
  );

  const allCategoryHTML = categoryHTMLArray.join("");
  categorySection.innerHTML = allCategoryHTML;
}
// Cart section

let categoryProduct = [];

function handleCategoryClick(category) {
  categoryProduct = data.filter((item) => item.category === category);
  renderProducts(currentPage, categoryProduct, sort);
  // const totalPages = Math.ceil(categoryProduct.length / itemsPerPage);

  // const pageNumbers = Array.from(
  //   { length: totalPages },
  //   (_, index) => index + 1
  // );

  // console.log(categoryProduct);
  // const paginationHTML = pageNumbers
  //   .map(
  //     (number) => `
  //   <button class="pagenumber" onclick="renderProducts(${number}, categoryProduct, sort); return false;">${number}</button>
  // `
  //   )
  //   .join("");

  // paging.innerHTML = paginationHTML;
}

function search() {
  var inputvalue = document.getElementById("searchInput").value.toLowerCase();
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(inputvalue)
  );
  renderProducts(currentPage, filteredData, sort);
}

const minRangeSlider = document.getElementById("min-range-slider");
const maxRangeSlider = document.getElementById("max-range-slider");
const selectedRangeElement = document.getElementById("selected-range");
const filteredDataElement = document.getElementById("filtered-data");

function updateFilteredData() {
  const min = parseInt(minRangeSlider.value);
  const max = parseInt(maxRangeSlider.value);

  const filteredData = data.filter(
    (item) => parseFloat(item.price) >= min && parseFloat(item.price) <= max
  );

  selectedRangeElement.textContent = `${min} - ${max}`;

  renderProducts(currentPage, filteredData, sort);
}

minRangeSlider.addEventListener("input", updateFilteredData);
maxRangeSlider.addEventListener("input", updateFilteredData);
