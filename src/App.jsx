import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Category/Categories";
import Shirts from "./Pages/Category/Shirts";
import Shorts from "./Pages/Category/Shorts";
import Trousers from "./Pages/Category/Trousers";
import Latest from "./Pages/Latest";
import Deals from "./Pages/Deals";
import Navbar from "./Components/NavBar";
import Account from "./Pages/Account";
import Cart from "./Pages/Cart";
import AppProvider from "./AppProvider";
import AdminPanel from "./Pages/Admin/admin";


function App() {
  return (
    <AppProvider>
        <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  
      <Route path="/categories" element={<Categories />}>
          <Route path="shirts" element={<Shirts />} />
          <Route path="shorts" element={<Shorts />} />
          <Route path="trousers" element={<Trousers />} />

        </Route>
        <Route path="/latest" element={<Latest />}/>
        <Route path="/account"element={<Account/>}/>
        <Route path="/deals" element={<Deals />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
   
    </> 
    </AppProvider>
  
    
  );
}

export default App;
