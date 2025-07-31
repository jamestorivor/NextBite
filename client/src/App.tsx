// import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ChooseEatery from "./pages/ChooseEatery";
import Login from "./pages/Login";
import MainMenu from "./pages/MainMenu";
import NotFound from "./pages/NotFound";
import SampleEatery from "./pages/SampleEatery";
import InsideEatery from "./pages/InsideEatery";
import Account from "./pages/Account";
import Signup from "./pages/Signup";
import AuthProvider from "./contexts/AuthContext";
import LoggedInRoutes from "./components/LoggedInRoutes";
import LoggedOutRoutes from "./components/LoggedOutRoutes";
import Layout from "./components/Layout";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <AuthProvider>
        <Layout>
          <Routes>
            {/* logged out routes */}
            <Route element={<LoggedOutRoutes />}>
              <Route path="/login" element={<Login />}></Route>
              

              <Route path="/sign up" element={<Signup />}></Route>
            </Route>

            {/* logged in routes */}
            <Route element={<LoggedInRoutes />}>
              <Route path="/menu" element={<MainMenu />}></Route>
              <Route path="/choose" element={<ChooseEatery />}></Route>
              <Route path="/random" element={<SampleEatery />}></Route>
              <Route path="/account" element={<Account />}></Route>
              <Route path="/settings" element={<Settings />}></Route>
              <Route path="/inside" element={<InsideEatery />}></Route>
            </Route>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </>
  );
}

export default App;

// const dropDown = loggedIn
//   ? ["Menu", "Choose", "Random", "Account"]
//   : ["Info", "Login", "Sign up"];
