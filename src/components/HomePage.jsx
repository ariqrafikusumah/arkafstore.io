import { useState } from "react";
import { useNavigate } from "react-router-dom";
import games from "../data/GamesData";
import paymentMethods from "../data/PaymentMethods";

function HomePage() {
  const [game, setGame] = useState("mobile-legends");
  const [userID, setUserID] = useState("");
  const [zoneID, setZoneID] = useState("");
  const [amount, setAmount] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("Dana");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null); // Store order details for confirmation
  const [currentIndex, setCurrentIndex] = useState(0); // For the carousel image index

  const banners = [
    "./img/banner-arkafstore.png", // Replace with actual banner images
    "./img/banner-arkafstore-2.png", // Replace with actual banner images
    "./img/banner-arkafstore.png", // Replace with actual banner images
  ];

  const navigate = useNavigate();

  const goToAdminLogin = () => {
    navigate("/admin-login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedGame = games[game].name;
    const selectedPayment = paymentMethods.find(
      (pm) => pm.name === paymentMethod
    );
    const selectedItem = games[game].items.find((item) => item.id === amount);
    const itemLabel = selectedItem ? selectedItem.label : "";
    const itemPrice = selectedItem ? selectedItem.price : 0;

    // Calculate the surcharge (0.7% of item price)
    const surcharge = itemPrice * 0.007;

    // Round the surcharge and totalPrice to the nearest even number
    const roundedSurcharge = Math.round(surcharge / 2) * 2;
    const totalPrice = Math.round((itemPrice + roundedSurcharge) / 2) * 2;

    // Create the order details message
    let message = `Halo, saya ingin order \n*${selectedGame}*\n`;
    message += `User ID: ${userID} `;
    if (games[game].requiresZoneID) {
      message += `(${zoneID})\n`;
    }
    message += `Jumlah: ${itemLabel}\n`;
    message += `Harga: ${itemPrice.toLocaleString()} IDR\n`;
    message += `PPN 0.7%: ${roundedSurcharge.toLocaleString()} IDR\n`;
    message += `Total Pembayaran: *${totalPrice.toLocaleString()} IDR*\n`;
    message += `Metode Pembayaran: ${paymentMethod}\n`;
    message += `Tujuan Transfer: ${selectedPayment.account}`;

    // Set order details for confirmation
    setOrderDetails({
      message,
      selectedGame,
      itemLabel,
      itemPrice,
      roundedSurcharge,
      totalPrice,
      paymentMethod,
      selectedPayment,
      userID, // Include userID
      zoneID, // Include zoneID
    });
    setShowConfirmation(true);
  };

  const handleConfirmOrder = () => {
    const whatsappUrl = `https://wa.me/6281281444295?text=${encodeURIComponent(
      orderDetails.message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCancelOrder = () => {
    setShowConfirmation(false); // Close the confirmation screen
  };

  // Function to change the carousel image
  const changeImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  // Set an interval to change the banner every 5 seconds
  useState(() => {
    const interval = setInterval(changeImage, 5000);
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Carousel Banner */}
        <h1 className="text-2xl font-bold text-center mb-6 text-purple-500">
          <img
            src="./img/favicon.png"
            alt="logo"
            className="w-8 h-8 inline-block"
          />{" "}
          ARKAFSTORE
        </h1>
        <div className="relative mb-6">
          <img
            src={banners[currentIndex]}
            alt="Banner"
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
        {/* <button
          onClick={goToAdminLogin}
          className=" bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 mt-4 mb-6"
        >
          Login
        </button> */}
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
          {games[game].requiresZoneID && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ( Zone ID )
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
                  <p className="text-xs text-gray-500">
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

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-semibold mb-4">Konfirmasi Order</h2>
              <p>
                <strong>Game:</strong> {orderDetails.selectedGame}
              </p>
              {/* Show User ID and Zone ID */}
              <p>
                <strong>User ID:</strong> {orderDetails.userID}
              </p>
              {games[game].requiresZoneID && (
                <p>
                  <strong>Zone ID:</strong> {orderDetails.zoneID}
                </p>
              )}
              <p>
                <strong>Jumlah:</strong> {orderDetails.itemLabel}
              </p>
              <p>
                <strong>Harga:</strong>{" "}
                {orderDetails.itemPrice.toLocaleString()} IDR
              </p>
              <p>
                <strong>PPN 0.7%:</strong>{" "}
                {orderDetails.roundedSurcharge.toLocaleString()} IDR
              </p>
              <p>
                <strong>Total Pembayaran:</strong>{" "}
                {orderDetails.totalPrice.toLocaleString()} IDR
              </p>
              <p>
                <strong>Metode Pembayaran:</strong> {orderDetails.paymentMethod}
              </p>
              <p>
                <strong>Tujuan Transfer:</strong>{" "}
                {orderDetails.selectedPayment.account}
              </p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={handleCancelOrder}
                  className="bg-gray-300 px-4 py-2 rounded-md"
                >
                  Batal
                </button>
                <button
                  onClick={handleConfirmOrder}
                  className="bg-purple-600 text-white px-4 py-2 rounded-md"
                >
                  Konfirmasi
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
