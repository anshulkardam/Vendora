import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import { Login } from "./pages/auth/login";
import { Signup } from "./pages/auth/signup";
import { AdminLayout } from "./components/admin/layout";
import { AdminDashboard } from "./pages/admin/dashboard";
import { AdminOrders } from "./pages/admin/orders";
import { AdminFeatures } from "./pages/admin/features";
import { AdminProducts } from "./pages/admin/products";
import { ShopLayout } from "./components/shop/layout";
import { NotFound } from "./pages/not-found";
import { HomePage } from "./pages/shop/homepage";
import { ShopListing } from "./pages/shop/listing";
import { Account } from "./pages/shop/account";
import { Checkout } from "./pages/shop/checkout";
import { NotAuthorized } from "./pages/not-authorized";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<AuthLayout />} >
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />} >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>
        <Route path="/shop" element={<ShopLayout />} >
          <Route path="homepage" element={<HomePage />} />
          <Route path="listing" element={<ShopListing />} />
          <Route path="account" element={<Account />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="/not-authorized" element={<NotAuthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
