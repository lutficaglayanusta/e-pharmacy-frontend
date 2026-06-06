import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "./components/RestrictedRoute";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selector";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const MedicineStorePage = lazy(() => import("./pages/MedicineStorePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));
import axios from "axios";

function App() {

  const dispatch = useDispatch()

  const isRefreshing = useSelector(selectIsRefreshing)


  useEffect(() => {
    console.log('1 - useEffect çalıştı');
  
    axios.get('/auth/refresh')
    .then(res => console.log('2 - refresh response:', res))
    .catch(err => console.log('3 - refresh error:', err.response));
    dispatch(refresh())
  },[dispatch])


  return isRefreshing ? (
    <p>Loading...</p>
  ) : (
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
