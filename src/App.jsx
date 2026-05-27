import { Suspense,lazy } from "react"
import { Route, Routes } from "react-router-dom"
import RestrictedRoute from "./components/RestrictedRoute"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

const LoginPage = lazy(() => import("./pages/LoginPage"))
const RegisterPage = lazy(() => import("./pages/RegisterPage"))

function App() {
  

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo="/medicine" />} />
          <Route path="/register" element={<RestrictedRoute component={RegisterPage} redirectTo="/medicine" />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
