import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ComprasPage } from "./pages/ComprasPage";
import { CarritoPage } from "./pages/CarritoPage";
import { ProductosProvider } from "./context/ProductosProvider";
import { CarritoProvider } from "./context/CarritoProvider";

export const CaritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ComprasPage />} />
                        <Route path="/carrito" element={<CarritoPage />} />
                        <Route path="/*" element={<Navigate to='/' />} />
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    );
};