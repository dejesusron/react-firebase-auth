import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./pages/root-layout/index";
import SignIn from "./pages/sign-in/index";
import SignUp from "./pages/sign-up/index";
import Home from "./pages/home/index";
import ForgotPassword from "./pages/forgot-password/index";
import ProtectedRoute from "./pages/protected-route/index";
import { UserAuthContextProvider } from "./context/user-auth-context/index";

const App = () => {
  return (
    <>
      <div>
        <UserAuthContextProvider>
          <Router>
            <Routes>
              <Route element={<RootLayout />}>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route
                  path="/home"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Route>
            </Routes>
          </Router>
        </UserAuthContextProvider>
      </div>
    </>
  );
};

export default App;
