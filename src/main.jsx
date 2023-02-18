import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import GalleryDetail from "./components/GalleryDetail";
import { UserContextProvider } from "./context/userContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/gallery/:id" element={<GalleryDetail />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
