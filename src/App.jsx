import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Category/Categories";
import Shoe from "./Pages/Category/Shoe";
import Clothing from "./Pages/Category/Clothing";
import Latest from "./Pages/Latest";
import Navbar from "./Components/NavBar";
import Account from "./Pages/Account";


function App() {
  return (
    <>
   
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  
      <Route path="/categories" element={<Categories />}>
          <Route path="shoes" element={<Shoe />} />
          <Route path="clothes" element={<Clothing />} />
        </Route>
        <Route path="/latest" element={<Latest />}/>
        <Route path="/account"element={<Account/>}/>
      </Routes>
   
    </>
    
  );
}

export default App;
