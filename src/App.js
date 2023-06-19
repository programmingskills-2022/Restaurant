import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { useContext, useEffect, useState } from "react";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ItemsContext from "./context/ItemsContext";

function App() {
  const { lang, dic } = useContext(ItemsContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "cart", element: <Cart /> },
        {
          path: "login",
          element: <RootLayout />,
          children: [
            { index: true, element: <Login /> },
            { path: "new", element: <Register /> },
            { path: "profile", element: <Profile /> },
          ],
        },
      ],
    },
  ]);

  useEffect(() => {
    document.body.classList.toggle("ltr");
    document.body.classList.toggle("rtl");
  }, [lang]);

  return (
    <div className={`${lang ? "font-vazir" : "font-sans"}`}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
