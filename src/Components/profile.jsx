import {useState} from 'react'
import { User, Mail, Package, LogOut } from 'lucide-react'
import { Button } from './button'

const Profile = () => {
  const [activeTab, setActiveTab] = useState("account"); 

  const menuItems = [
    { name: "My Accont", icon: User, id: "account" },
    { name: "Orders", icon: Package, id: "orders" },
    { name: "Inbox", icon: Mail, id: "inbox" },
    { name: "Logout", icon: LogOut, id: "logout" },
    // { name: "Settings", icon: Settings, id: "settings" },
  ];


  return (
    <div className="flex min-h-screen pt-20 ">
      {/* Sidebar */}
      <div className="w-64 h-screen fixed top-0 left-0 text-gray-800 p-5 shadow-lg pt-24">
        <h2 className="text-xl font-bold mb-5 bg-white">Hi user</h2>
        <nav>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 w-full p-3 my-2 rounded-md text-gray-800 hover:bg-blue-700 transition ${activeTab === item.id ? "bg-blue-700 text-white" : ""
                }`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 bg-white ml-64">
        <header className="flex justify-between items-center mb-5 border-b border-gray-700 pb-3">
          <h1 className="text-2xl font-bold capitalize text-gray-700">{activeTab}</h1>
        </header>

        <div>
          {activeTab === "dashboard" && (
            <Dashboard />


          )}
          {activeTab === "orders" && <div className="text-white">see your orders here</div>}
          {activeTab === "inbox" && <div className="text-white">
            see your messages here
          </div>}
          
        </div>
      </div>
    </div>
  )
}

export default Profile
