// Data game dengan rate untuk menghitung harga
const games = {
  "mobile-legends": {
    name: "Mobile Legends",
    image:
      "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/MLBB-2025-tiles-178x178.jpg", // Tambahkan gambar untuk game
    items: [
      {
        id: 4,
        label: "Weekly Diamond Passmond",
        rate: 1665 * 0.9,
        price: 27804,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/100x100/MLBB_Weekly_Diamond_Pass.png",
      },
      {
        id: 5,
        label: "5 Diamond",
        rate: 1665 * 0.9,
        price: 1665 * 0.9,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/10_MLBB_NewDemom.png",
      },
      {
        id: 12,
        label: "12 Diamond (11 + 1 Bonus)",
        rate: 3900 * 0.9,
        price: 3900 * 0.9,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/10_MLBB_NewDemom.png",
      },
      {
        id: 19,
        label: "19 Diamond (17 + 2 Bonus)",
        rate: 6600 * 0.9,
        price: 6600 * 0.9,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/10_MLBB_NewDemom.png",
      },
      {
        id: 28,
        label: "28 Diamond (25 + 3 Bonus)",
        rate: 9000 * 0.9,
        price: 9000 * 0.9,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/10_MLBB_NewDemom.png",
      },
      {
        id: 44,
        label: "44 Diamond (40 + 4 Bonus)",
        rate: 14000 * 0.9,
        price: 14000 * 0.9,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/50_MLBB_NewDemom.png",
      },
      {
        id: 59,
        label: "59 Diamond (53 + 6 Bonus)",
        rate: 18000 * 0.9,
        price: 18000 * 0.9,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/50_MLBB_NewDemom.png",
      },
      {
        id: 85,
        label: "85 Diamond (77 + 8 Bonus)",
        rate: 26000 * 0.9,
        price: 26000 * 0.9,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/50_MLBB_NewDemom.png",
      },
      {
        id: 170,
        label: "170 Diamond (154 + 16 Bonus)",
        rate: 51000 * 0.9,
        price: 51000 * 0.9,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/150x250_MLBB_NewDemom.png",
      },
      {
        id: 240,
        label: "240 Diamond (217 + 23 Bonus)",
        rate: 72000 * 0.9,
        price: 72000 * 0.9,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/150x250_MLBB_NewDemom.png",
      },
      {
        id: 296,
        label: "296 Diamond (356 + 40 Bonus)",
        rate: 89000 * 0.9,
        price: 89000 * 0.9,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/150x250_MLBB_NewDemom.png",
      },
      {
        id: 408,
        label: "408 Diamond (387 + 41 Bonus)",
        rate: 123000 * 0.9,
        price: 123000 * 0.9,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/150x250_MLBB_NewDemom.png",
      },
      {
        id: 568,
        label: "568 Diamond (508 + 66 Bonus)",
        rate: 167000 * 0.9,
        price: 167000 * 0.9,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/500_MLBB_NewDemom.png",
      },
      {
        id: 875,
        label: "875 Diamond (774 + 101 Bonus)",
        rate: 256000 * 0.9,
        price: 256000 * 0.9,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/500_MLBB_NewDemom.png",
      },
      {
        id: 2010,
        label: "2010 Diamond (1708 + 302 Bonus)",
        rate: 555000 * 0.9,
        price: 555000 * 0.9,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/1500_MLBB_NewDemom.png",
      },
      {
        id: 4830,
        label: "4830 Diamond (4930 + 827 Bonus)",
        rate: 1322000 * 0.9,
        price: 1322000 * 0.9,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/150x150/2500_MLBB_NewDemom.png",
      },
    ],
    requiresZoneID: true, // Mobile Legends memerlukan Zone ID
  },
  "free-fire": {
    name: "Free Fire",
    image:
      "https://cdn.unipin.com/images/icon_product_pages/1658817763-icon-200x200_icon%20ff.jpg", // Tambahkan gambar untuk game
    items: [
      {
        id: 1,
        label: "5 Diamonds",
        rate: 901 / 5,
        price: 901,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/FreeFire/Freefire_diamonds.png",
      },
      {
        id: 5,
        label: "5 Diamonds",
        rate: 901 / 5,
        price: 901,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/FreeFire/Freefire_diamonds.png",
      },
      {
        id: 12,
        label: "12 Diamonds",
        rate: 1802 / 12,
        price: 1802,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/FreeFire/Freefire_diamonds.png",
      },
      {
        id: 50,
        label: "50 Diamonds",
        rate: 7207 / 50,
        price: 7207,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/FreeFire/Freefire_diamonds.png",
      },
      {
        id: 70,
        label: "70 Diamonds",
        rate: 9009 / 70,
        price: 9009,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/FreeFire/Freefire_diamonds.png",
      },
      {
        id: 140,
        label: "140 Diamonds",
        rate: 18018 / 140,
        price: 18018,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/FreeFire/Freefire_diamonds.png",
      },
      {
        id: 720,
        label: "720 Diamonds",
        rate: 90090 / 720,
        price: 90090,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/FreeFire/Freefire_diamonds.png",
      },
      {
        id: 1450,
        label: "1450 Diamonds",
        rate: 180180 / 1450,
        price: 180180,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/FreeFire/Freefire_diamonds.png",
      },
      {
        id: 2180,
        label: "2180 Diamonds",
        rate: 270270 / 2180,
        price: 270270,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/FreeFire/Freefire_diamonds.png",
      },
      {
        id: 3640,
        label: "3640 Diamonds",
        rate: 450450 / 3640,
        price: 450450,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/FreeFire/Freefire_diamonds.png",
      },
      {
        id: 7290,
        label: "7290 Diamonds",
        rate: 900901 / 7290,
        price: 900901,
        image:
          "https://cdn1.codashop.com/S/content/common/images/denom-image/FreeFire/Freefire_diamonds.png",
      },
    ],
    requiresZoneID: false, // Free Fire tidak memerlukan Zone ID
  },
  "pubg-mobile": {
    name: "PUBG Mobile",
    image:
      "https://cdn1.codashop.com/S/content/mobile/images/product-tiles/pubgm_tile_aug2024.jpg", // Tambahkan gambar untuk game
    items: [
      {
        id: 30,
        label: "30 UC",
        rate: 6650 / 30,
        price: 6650,
        image:
          "https://cdn.midasbuy.com/images/apps/pubgm/1599546007887MVeNUtB6.png",
      },
      {
        id: 60,
        label: "60 UC",
        rate: 13194 / 60,
        price: 13194,
        image:
          "https://cdn.midasbuy.com/images/apps/pubgm/1599546007887MVeNUtB6.png",
      },
      {
        id: 300,
        label: "300 UC (300 + 25 Bonus)",
        rate: 66492 / 300,
        price: 66492,
        image:
          "https://cdn.midasbuy.com/images/apps/pubgm/1599546030876PIvqwGaa.png",
      },
      {
        id: 600,
        label: "600 UC (600 + 60 Bonus)",
        rate: 132984 / 600,
        price: 132984,
        image:
          "https://cdn.midasbuy.com/images/apps/pubgm/1599546041426W8hmErMS.png",
      },
      {
        id: 1500,
        label: "1500 UC (1500 + 300 Bonus)",
        rate: 332459 / 1500,
        price: 332459,
        image:
          "https://cdn.midasbuy.com/images/apps/pubgm/1599546052747L5gSu7VB.png",
      },
      {
        id: 3000,
        label: "3000 UC (3000 + 850 Bonus)",
        rate: 664918 / 3000,
        price: 664918,
        image:
          "https://cdn.midasbuy.com/images/apps/pubgm/1599546052747L5gSu7VB.png",
      },
      {
        id: 6000,
        label: "6000 UC (6000 + 2100 Bonus)",
        rate: 1329833 / 6000,
        price: 1329833,
        image:
          "https://cdn.midasbuy.com/images/apps/pubgm/1599546071746KqkIhrzG.png",
      },
    ],
    requiresZoneID: false, // PUBG Mobile memerlukan Zone ID
  },
};

export default games;
