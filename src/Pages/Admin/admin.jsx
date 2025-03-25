import { useState } from "react";
import { Home, Package, ShoppingCart, Users, Settings, LogOut } from "lucide-react";
import Orders from "./orders";
import Customers from "./customers";
  import Dashboard from "./dashboard";
  import Products from "./products";
  import Add from "./settings";
import { Button } from "../../Components/button";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const menuItems = [
    { name: "Dashboard", icon: Home, id: "dashboard" },
    { name: "Products", icon: Package, id: "products" },
    { name: "Orders", icon: ShoppingCart, id: "orders" },
    { name: "Customers", icon: Users, id: "customers" },
    { name: "Settings", icon: Settings, id: "settings" },
    { name: "Logout", icon: LogOut, id: "logout" },
  ];

  return (
    <div className="flex min-h-screen  pt-20 ">
      {/* Sidebar */}
      <div className="w-64 h-screen fixed top-0 left-0 bg-gray-800 p-5 shadow-lg pt-24">
        <h2 className="text-xl font-bold mb-5 text-white">Admin Panel</h2>
        <nav>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 w-full p-3 my-2 rounded-md text-gray-300 hover:bg-gray-700 transition ${activeTab === item.id ? "bg-gray-700 text-white" : ""
                }`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 bg-gray-900 ml-64">
        <header className="flex justify-between items-center mb-5 border-b border-gray-700 pb-3">
          <h1 className="text-2xl font-bold capitalize text-white">{activeTab}</h1>
        </header>

        <div>
          {activeTab === "dashboard" && (
            <Dashboard />


          )}
          {activeTab === "products" && <div className="text-white"><Products /></div>}
          {activeTab === "orders" && <div className="text-white">
            <Orders />
          </div>}
          {activeTab === "customers" && <div className="text-white"><Customers /></div>}
          {activeTab === "settings" && <div className="text-white"><Add/></div>}
        </div>
      </div>
    </div>
  );
}