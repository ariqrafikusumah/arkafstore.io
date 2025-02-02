import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [game, setGame] = useState("mobile-legends");
  const [userID, setUserID] = useState("");
  const [zoneID, setZoneID] = useState("");
  const [amount, setAmount] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("Dana");

  const navigate = useNavigate();

  const goToAdminLogin = () => {
    navigate("/admin-login");
  };

  // Data game dengan rate untuk menghitung harga
  const games = {
    "mobile-legends": {
      name: "Mobile Legends",
      image: "./public/img/MLBB_icon.webp", // Tambahkan gambar untuk game
      items: [
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
      image: "./public/img/FF_icon.jfif", // Tambahkan gambar untuk game
      items: [
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
        {
          id: 36500,
          label: "36500 Diamonds",
          rate: 4504505 / 36500,
          price: 4504505,
          image:
            "https://cdn1.codashop.com/S/content/common/images/denom-image/FreeFire/Freefire_diamonds.png",
        },
        {
          id: 73100,
          label: "73100 Diamonds",
          rate: 9009009 / 73100,
          price: 9009009,
          image:
            "https://cdn1.codashop.com/S/content/common/images/denom-image/FreeFire/Freefire_diamonds.png",
        },
      ],
      requiresZoneID: false, // Free Fire tidak memerlukan Zone ID
    },
    "pubg-mobile": {
      name: "PUBG Mobile",
      image: "/public/img/PUBG_icon.png", // Tambahkan gambar untuk game
      items: [
        {
          id: 60,
          label: "60 UC",
          rate: 14000 / 60,
          price: 14000,
          image:
            "https://cdn.midasbuy.com/images/apps/pubgm/1599546007887MVeNUtB6.png",
        },
        {
          id: 300,
          label: "300 UC (300 + 25 Bonus)",
          rate: 70000 / 300,
          price: 70000,
          image:
            "https://cdn.midasbuy.com/images/apps/pubgm/1599546030876PIvqwGaa.png",
        },
        {
          id: 600,
          label: "600 UC (600 + 60 Bonus)",
          rate: 140000 / 600,
          price: 140000,
          image:
            "https://cdn.midasbuy.com/images/apps/pubgm/1599546041426W8hmErMS.png",
        },
        {
          id: 1500,
          label: "1500 UC (1500 + 300 Bonus)",
          rate: 350000 / 1500,
          price: 350000,
          image:
            "https://cdn.midasbuy.com/images/apps/pubgm/1599546052747L5gSu7VB.png",
        },
        {
          id: 3000,
          label: "3000 UC (3000 + 850 Bonus)",
          rate: 700000 / 3000,
          price: 700000,
          image:
            "https://cdn.midasbuy.com/images/apps/pubgm/1599546052747L5gSu7VB.png",
        },
        {
          id: 6000,
          label: "6000 UC (6000 + 2100 Bonus)",
          rate: 1400000 / 6000,
          price: 1400000,
          image:
            "https://cdn.midasbuy.com/images/apps/pubgm/1599546071746KqkIhrzG.png",
        },
      ],
      requiresZoneID: false, // PUBG Mobile memerlukan Zone ID
    },
  };

  const paymentMethods = [
    { name: "Dana", account: "081281444295" },
    { name: "Ovo", account: "081281444295" },
    { name: "Gopay", account: "081281444295" },
    { name: "Shopeepay", account: "081281444295" },
    { name: "LinkAja", account: "081281444295" },
    { name: "Mandiri", account: "1560014469532" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedGame = games[game].name;
    const selectedPayment = paymentMethods.find(
      (pm) => pm.name === paymentMethod
    );

    // Membuat pesan berdasarkan game yang dipilih
    let message = `Halo, saya ingin top-up ${selectedGame}:\n\n`;
    message += `User ID: ${userID}\n`;
    if (games[game].requiresZoneID) {
      message += `Zone ID: ${zoneID}\n`;
    }
    message += `Jumlah: ${amount} ${
      game === "pubg-mobile" ? "UC" : "Diamond"
    }\n`;
    message += `Metode Pembayaran: ${paymentMethod}\n`;
    message += `Tujuan Transfer: ${selectedPayment.account}`;

    const whatsappUrl = `https://wa.me/6281281444295?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-purple-500">
          Top-Up di ARKAFSTORE
        </h1>

        {/* Tombol untuk pergi ke halaman Admin Login */}
        <button
          onClick={goToAdminLogin}
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 mt-4 mb-6"
        >
          Admin Login
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pilih Game
            </label>
            <div className="grid grid-cols-3 gap-2">
              {Object.keys(games).map((key) => (
                <div
                  key={key}
                  onClick={() => {
                    setGame(key);
                    setAmount(null);
                  }}
                  className={`p-4 border rounded-lg cursor-pointer text-center ${
                    game === key
                      ? "bg-purple-600 text-white border-purple-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <img
                    src={games[key].image}
                    alt={games[key].name}
                    className="w-16 h-16 mx-auto mb-2"
                  />
                  <span className="text-sm font-medium">{games[key].name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              User ID
            </label>
            <input
              type="text"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Menampilkan Zone ID hanya jika game memerlukannya */}
          {games[game].requiresZoneID && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Zone ID
              </label>
              <input
                type="text"
                value={zoneID}
                onChange={(e) => setZoneID(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pilih Voucher
            </label>
            <div className="grid grid-cols-3 gap-2">
              {games[game].items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setAmount(item.id)}
                  className={`p-4 border rounded-lg cursor-pointer text-center ${
                    amount === item.id
                      ? "bg-purple-600 text-white border-purple-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-16 h-16 mx-auto mb-2"
                  />
                  <span className="text-sm font-medium">{item.label}</span>
                  <p className="text-xs text-white-500">
                    {item.price.toLocaleString()} IDR
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pilih Metode Pembayaran
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              {paymentMethods.map((method) => (
                <option key={method.name} value={method.name}>
                  {method.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mt-6"
          >
            🛒 Pesan Sekarang
          </button>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
