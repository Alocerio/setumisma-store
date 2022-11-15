import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Catalogo from "./pages/Catalogo";

import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [catalogo, setCatalogo] = useState([]);
  const [cart, setCart] = useState([]);
  const userCollectionRef = collection(db, "catalogo");
  useEffect(() => {
    const getCatalogo = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data);
      setCatalogo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCatalogo();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/tienda"
          element={
            <Catalogo cart={cart} setCart={setCart} catalogo={catalogo} />
          }
        />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
