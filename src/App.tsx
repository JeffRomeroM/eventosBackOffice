import { Route, Routes } from "react-router-dom"
import { GastronomiesPage } from "./pages/GastronomiesPage"
import { Home } from "./components/home/Home"
import { useEffect } from "react";
import { CommercialsPage } from "./pages/CommercialsPage";
import { CssBaseline } from "@mui/material";
import Header from "./components/header/Header";
import { SportPage } from "./pages/SportPage";

function App() {
  return (
    <>
    <CssBaseline />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductItem />}/>  */}
        <Route path="gastronomias" element={<GastronomiesPage />} />
        <Route path="comerciales" element={<CommercialsPage />} />
        <Route path="deportes" element={<SportPage />} />
      </Routes>
    </>
    
  )
}

export default App;
