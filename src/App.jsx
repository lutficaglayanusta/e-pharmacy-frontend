import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "./components/RestrictedRoute";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const MedicineStorePage = lazy(() => import("./pages/MedicineStorePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/medicine-store"
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/medicine-store"
              />
            }
          />
          <Route path="/medicine-store" element={<MedicineStorePage />} />
          <Route path="/medicine" element={<ProductsPage />} />
          <Route path="/medicine/:id" element={<ProductDetailsPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
