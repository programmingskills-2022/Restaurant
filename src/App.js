import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "cart", element: <Cart /> },
        { path: "login", element: <Login /> },
      ],
    },
  ]);

  return (
    <div className="font-vazir">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
