export const Routes = {
  PRODUCT: `/product`,
  CART: `/cart`,
  ERROR404: `/404`,
};

export const DEFAULT_ITEM = 0;
export const DEFAULT_ALLERGIES = 3;
export const MIN_SHIFT = 50;
export const PROMO_LENGTH = 8;
export const DEFAULT_PLACEHOLDER = "GHYU907H";

export const Products = [
  {
    name: "Just Milk Semi-Skimmed 6 x 1L (Case of 2)",
    img: [
      "img/product_1_1.png",
      "img/product_1_2.png",
      "img/product_1_3.png",
      "img/product_1_4.png",
    ],
    id: 1,
    price: 1.59,
    is_favorite: false,
    is_original: false,
    is_low_stock: false,
    low_stock: 3,
    special_offer: 0,
    is_allergy_free: false,
    allergies: [
      {
        name: "wheat",
        img: "img/allergy_wheat.svg",
        img_width: 19,
        img_height: 19,
      },
      {
        name: "milk",
        img: "img/allergy_milk.svg",
        img_width: 13,
        img_height: 15,
      },
      {
        name: "peanuts",
        img: "img/allergy_peanuts.svg",
        img_width: 15,
        img_height: 15,
      },
      {
        name: "fish",
      },
      {
        name: "beer",
      },
      {
        name: "cheese",
      },
    ],
    nutrition: {
      text:
        "<p>Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit. Ultrices at egestas tempus duis egestas semper dolor <b>morbi purus</b>. Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit. Ultrices at egestas tempus duis egestas semper dolor <b>morbi purus.</b></p>",
      list: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Ultrices at egestas tempus",
        "Duis egestas semper dolor morbi purus.",
      ],
      table: [
        { variable: "Kkal.", value: "28", RI: 4, misc: "Low" },
        { variable: "Proteins", value: "1.3 g", RI: 10, misc: "" },
        { variable: "Fats", value: "0 g", RI: 12, misc: "" },
        { variable: "Сarbs", value: "28", RI: 10, misc: "" },
        { variable: "Niacin", value: "6,4 mg", RI: 40, misc: "" },
        { variable: "Vitamin B6", value: "0,8 g", RI: 57, misc: "" },
        { variable: "Fats", value: "0 g", RI: 12, misc: "" },
        { variable: "Сarbs", value: "28", RI: 10, misc: "" },
      ],
    },
    ingridients:
      "<p>Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit. Ultrices at egestas tempus duis egestas semper dolor <b>morbi purus.</b></p>",
    other: {
      "Страна производства": "Россия",
      Состав: "цельное молоко",
      "Срок годности": "12 дн.",
      Изготовитель: 'ОАО "Компания "Юнимилк"',
      Жирность: "4.5 %",
      "Содержание лактозы": "обычное (более 1% лактозы)",
      "Витаминизированное/обогащенное": "нет",
    },
    related_products_id: [2, 3, 4, 5, 6],
  },
  {
    name: "Best-in 10 British Big Eggs",
    img: ["img/product_2_1.png"],
    id: 2,
    price: 1.59,
    is_favorite: false,
    is_original: false,
    is_low_stock: false,
    low_stock: 3,
    special_offer: 0,
    is_allergy_free: false,
    allergies: [
      {
        name: "wheat",
        img: "img/allergy_wheat.svg",
        img_width: 19,
        img_height: 19,
      },
      {
        name: "milk",
        img: "img/allergy_milk.svg",
        img_width: 13,
        img_height: 15,
      },
      {
        name: "peanuts",
        img: "img/allergy_peanuts.svg",
        img_width: 15,
        img_height: 15,
      },
      {
        name: "fish",
      },
      {
        name: "beer",
      },
      {
        name: "cheese",
      },
    ],
    nutrition: {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus.`,
      list: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Ultrices at egestas tempus",
        "Duis egestas semper dolor morbi purus.",
      ],
      table: [
        { variable: "Kkal.", value: "18", RI: 14, misc: "" },
        { variable: "Proteins", value: "1.3 g", RI: 10, misc: "" },
        { variable: "Fats", value: "0 g", RI: 12, misc: "" },
        { variable: "Сarbs", value: "28", RI: 10, misc: "" },
        { variable: "Niacin", value: "6,4 mg", RI: 40, misc: "" },
        { variable: "Vitamin B6", value: "0,8 g", RI: 57, misc: "" },
        { variable: "Fats", value: "0 g", RI: 12, misc: "" },
        { variable: "Сarbs", value: "28", RI: 10, misc: "" },
      ],
    },
    ingridients:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus. ",
    other: {
      "Страна производства": "Россия",
      Состав: "яйца",
      "Срок годности": "30 дн.",
      Изготовитель: 'ОАО "Компания "Юнимилк"',
    },
    related_products_id: [1, 3, 4],
  },
  {
    name: "Best-in 10 British Big Eggs",
    img: ["img/product_3_1.png"],
    id: 3,
    price: 1.69,
    is_favorite: false,
    is_original: false,
    is_low_stock: true,
    low_stock: 3,
    special_offer: 20,
    is_allergy_free: false,
    allergies: [],
    nutrition: {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus.",
      list: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Ultrices at egestas tempus",
        "Duis egestas semper dolor morbi purus.",
      ],
      table: [
        { variable: "Kkal.", value: "18", RI: 14, misc: "" },
        { variable: "Proteins", value: "1.3 g", RI: 10, misc: "" },
        { variable: "Fats", value: "0 g", RI: 12, misc: "" },
        { variable: "Сarbs", value: "28", RI: 10, misc: "" },
        { variable: "Niacin", value: "6,4 mg", RI: 40, misc: "" },
        { variable: "Vitamin B6", value: "0,8 g", RI: 57, misc: "" },
        { variable: "Fats", value: "0 g", RI: 12, misc: "" },
        { variable: "Сarbs", value: "28", RI: 10, misc: "" },
      ],
    },
    ingridients:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus. ",
    other: {
      "Страна производства": "Россия",
      Состав: "яйца",
      "Срок годности": "30 дн.",
      Изготовитель: 'ОАО "Компания "Юнимилк"',
    },
    related_products_id: [1, 2, 4],
  },
  {
    name: "Best-IN 10 British Big Eggs",
    img: ["img/product_3_1.png"],
    id: 4,
    price: 1.09,
    is_favorite: false,
    is_original: false,
    is_low_stock: false,
    low_stock: 3,
    special_offer: 0,
    is_allergy_free: true,
    allergies: [],
    nutrition: {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus.",
      list: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Ultrices at egestas tempus",
        "Duis egestas semper dolor morbi purus.",
      ],
      table: [
        { variable: "Kkal.", value: "18", RI: 14, misc: "" },
        { variable: "Proteins", value: "1.3 g", RI: 10, misc: "" },
        { variable: "Fats", value: "0 g", RI: 12, misc: "" },
        { variable: "Сarbs", value: "28", RI: 10, misc: "" },
        { variable: "Niacin", value: "6,4 mg", RI: 40, misc: "" },
        { variable: "Vitamin B6", value: "0,8 g", RI: 57, misc: "" },
        { variable: "Fats", value: "0 g", RI: 12, misc: "" },
        { variable: "Сarbs", value: "28", RI: 10, misc: "" },
      ],
    },
    ingridients:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus. ",
    other: {
      "Страна производства": "Россия",
      Состав: "яйца",
      "Срок годности": "30 дн.",
      Изготовитель: 'ОАО "Компания "Юнимилк"',
    },
    related_products_id: [1, 2, 3],
  },
  {
    name: "Best-IN 10 British Big Eggs",
    img: ["img/product_3_1.png"],
    id: 5,
    price: 1.09,
    is_favorite: false,
    is_original: false,
    is_low_stock: true,
    low_stock: 3,
    special_offer: 10,
    is_allergy_free: false,
    allergies: [],
    nutrition: {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus.",
      list: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Ultrices at egestas tempus",
        "Duis egestas semper dolor morbi purus.",
      ],
      table: [
        { variable: "Kkal.", value: "18", RI: 14, misc: "" },
        { variable: "Proteins", value: "1.3 g", RI: 10, misc: "" },
        { variable: "Fats", value: "0 g", RI: 12, misc: "" },
        { variable: "Сarbs", value: "28", RI: 10, misc: "" },
        { variable: "Niacin", value: "6,4 mg", RI: 40, misc: "" },
        { variable: "Vitamin B6", value: "0,8 g", RI: 57, misc: "" },
        { variable: "Fats", value: "0 g", RI: 12, misc: "" },
        { variable: "Сarbs", value: "28", RI: 10, misc: "" },
      ],
    },
    ingridients:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus. ",
    other: {
      "Страна производства": "Россия",
      Состав: "яйца",
      "Срок годности": "30 дн.",
      Изготовитель: 'ОАО "Компания "Юнимилк"',
    },
    related_products_id: [1, 2, 3],
  },
  {
    name: "Best-IN 10 British Big Eggs",
    img: ["img/product_3_1.png"],
    id: 6,
    price: 1.09,
    is_favorite: false,
    is_original: true,
    is_low_stock: false,
    low_stock: 3,
    special_offer: 0,
    is_allergy_free: false,
    allergies: [],
    nutrition: {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus.",
      list: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Ultrices at egestas tempus",
        "Duis egestas semper dolor morbi purus.",
      ],
      table: [
        { variable: "Kkal.", value: "18", RI: 14, misc: "" },
        { variable: "Proteins", value: "1.3 g", RI: 10, misc: "" },
        { variable: "Fats", value: "0 g", RI: 12, misc: "" },
        { variable: "Сarbs", value: "28", RI: 10, misc: "" },
        { variable: "Niacin", value: "6,4 mg", RI: 40, misc: "" },
        { variable: "Vitamin B6", value: "0,8 g", RI: 57, misc: "" },
        { variable: "Fats", value: "0 g", RI: 12, misc: "" },
        { variable: "Сarbs", value: "28", RI: 10, misc: "" },
      ],
    },
    ingridients:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices at egestas tempus duis egestas semper dolor morbi purus. ",
    other: {
      "Страна производства": "Россия",
      Состав: "яйца",
      "Срок годности": "30 дн.",
      Изготовитель: 'ОАО "Компания "Юнимилк"',
    },
    related_products_id: [1, 2, 3],
  },
];

export const Addresses = [
  { name: "SE1 6DR, 42 Newington Causeway...", city: "London" },
  { name: "ON M5V 3L9, 290 Bremner Blvd...", city: "Toronto" },
  { name: "Piazza San Marco, 351", city: "Venezia" },
];

export const Cart = [
  {
    product_id: 3,
    price: 1.69,
    count: 2,
  },
  {
    product_id: 1,
    price: 1.59,
    count: 12,
  },
];
