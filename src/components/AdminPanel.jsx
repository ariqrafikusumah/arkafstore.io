import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminPanel() {
  const navigate = useNavigate();

  // Daftar diamond yang ada (misalnya diambil dari backend atau localStorage)
  const [diamonds, setDiamonds] = useState([
    { id: 1, label: "50 Diamond", price: "Rp 10.000" },
    { id: 2, label: "100 Diamond", price: "Rp 20.000" },
    { id: 3, label: "200 Diamond", price: "Rp 40.000" },
    { id: 4, label: "500 Diamond", price: "Rp 90.000" },
    { id: 5, label: "1000 Diamond", price: "Rp 175.000" },
  ]);
  const [newLabel, setNewLabel] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [editing, setEditing] = useState(null);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    navigate("/admin-login"); // Redirect ke halaman login
  };

  // Menambah diamond baru
  const handleAddDiamond = () => {
    const newDiamond = {
      id: diamonds.length + 1,
      label: newLabel,
      price: newPrice,
    };
    setDiamonds([...diamonds, newDiamond]);
    setNewLabel("");
    setNewPrice("");
  };

  // Mengubah diamond yang ada
  const handleEditDiamond = (id) => {
    const diamondToEdit = diamonds.find((diamond) => diamond.id === id);
    setNewLabel(diamondToEdit.label);
    setNewPrice(diamondToEdit.price);
    setEditing(id);
  };

  // Simpan perubahan diamond
  const handleSaveEdit = () => {
    setDiamonds((prevDiamonds) =>
      prevDiamonds.map((diamond) =>
        diamond.id === editing
          ? { ...diamond, label: newLabel, price: newPrice }
          : diamond
      )
    );
    setEditing(null);
    setNewLabel("");
    setNewPrice("");
  };

  // Menghapus diamond
  const handleDeleteDiamond = (id) => {
    setDiamonds(diamonds.filter((diamond) => diamond.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Admin Panel</h1>
        <p>Selamat datang, Admin!</p>

        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 mt-4"
        >
          Logout
        </button>

        {/* Daftar Diamond */}
        <h2 className="text-lg font-bold mt-6">Daftar Diamond</h2>
        <div className="space-y-2 mt-4">
          {diamonds.map((diamond) => (
            <div
              key={diamond.id}
              className="flex justify-between items-center bg-gray-50 p-2 rounded-md"
            >
              <span>
                {diamond.label} - {diamond.price}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditDiamond(diamond.id)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteDiamond(diamond.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Form untuk menambah atau mengedit diamond */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">
            {editing ? "Edit Diamond" : "Tambah Diamond"}
          </h3>
          <input
            type="text"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            placeholder="Label Diamond"
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
          />
          <input
            type="text"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            placeholder="Harga Diamond"
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
          />
          <button
            onClick={editing ? handleSaveEdit : handleAddDiamond}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            {editing ? "Simpan Perubahan" : "Tambah Diamond"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
