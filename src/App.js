import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);

  return (
    <div className="font-vazir">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
