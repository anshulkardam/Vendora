import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import { Login } from "./pages/auth/login";
import { Signup } from "./pages/auth/signup";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<AuthLayout />} >
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}
