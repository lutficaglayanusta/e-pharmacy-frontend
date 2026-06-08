import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "./components/RestrictedRoute";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selector";
import PrivateRoute from "./components/PrivateRoute";
import Modal from 'react-modal';

const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const MedicineStorePage = lazy(() => import("./pages/MedicineStorePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const HomePage = lazy(() => import("./pages/HomePage"))

Modal.setAppElement('#root');

function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading...</p>
  ) : (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/cart"
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
          <Route
            path="/cart"
            element={
              <PrivateRoute component={<CartPage />} redirectTo="/login" />
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
