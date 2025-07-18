import { useState,  useEffect } from "react";
import { User, Mail, Package, LogOut } from "lucide-react";
//import { UserContext } from "../Contexts/Auth/authProvider";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();

  const fetchUserDetails = async () => {
    const userID = localStorage.getItem("userID"); // Get ID from localStorage
    console.log(`'id':${userID}`)
    if (!userID) return;
  
    try {
      const response = await fetch(`http://localhost:8080/user?id=${userID}`);
      const user = await response.json();
      setUserData(user); // Set user's name in state variable
  
      console.log(userData.firtstName); // Access user's name
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  
  useEffect(() => {
    fetchUserDetails();
  });
  

  //const userID = localStorage.getItem("userID");

   // Logout function
  const handleLogout = () => {
    localStorage.clear();
   // localStorage.removeItem(userID);
     // Clear localStorage
    navigate("/"); // Redirect to home
  };

  const menuItems = [
    { name: "My Accont", icon: User, id: "account" },
    { name: "Orders", icon: Package, id: "orders" },
    { name: "Inbox", icon: Mail, id: "inbox" },
  ];

  return (
    <div className="flex min-h-[94vh] w-full pt-20 ">
      {/* Sidebar */}
      <div className="w-64 h-screen fixed top-0 left-0 text-gray-800 p-5 shadow-lg pt-24">
        <h2 className="text-xl font-bold mb-5 bg-white">Hi {userData.firtstName}</h2>
        <nav>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 w-full p-3 my-2 rounded-md text-gray-800 hover:bg-blue-700 transition ${
                activeTab === item.id ? "bg-blue-700 text-white" : ""
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </button>
          ))}
          <button 
          onClick={handleLogout}
          className="flex items-center gap-2 w-full p-3 my-2 rounded-md text-gray-800 hover:bg-blue-700 transition ">
            <LogOut className="w-5 h-5"/>
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 bg-white ml-64 ">
        <header className="flex justify-between items-center mb-5 border-b border-gray-700 pb-3">
          <h1 className="text-2xl font-bold capitalize text-gray-700">
            {activeTab}
          </h1>
        </header>

        <div>
          
          {activeTab === "orders" && (
            <div className="text-white">see your orders here</div>
          )}
          {activeTab === "inbox" && (
            <div className="text-white">see your messages here</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
