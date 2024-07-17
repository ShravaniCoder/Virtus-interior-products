import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Features from "./pages/Features";
import Quality from "./pages/Quality";
import Clients from "./pages/Clients";
import Products from "./pages/Products";
import Product_LayIn from "./pages/Products/Product-LayIn";
import Product_linear from "./pages/Products/Product_linear";
import Product_CPlank from "./pages/Products/Product_CPlank";
import Product_OpenCell from "./pages/Products/Product_OpenCell";
import Product_ClipIn from "./pages/Products/Product_ClipIn";
import Product_grille from "./pages/Products/Product_grille";
import Product_Chenneled from "./pages/Products/Product_Chenneled";
import Product_FPlank from "./pages/Products/Product_FPlank";
import Products_Corridor from "./pages/Products/Products_Corridor";
import Product_PawlHook from "./pages/Products/Product_PawlHook";
import Product_Baffle from "./pages/Products/Product_Baffle";
import Product_Tringular from "./pages/Products/Product_Tringular";
import Advantage from "./pages/Advantage";


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    //about
    {
      path: "/about",
      element: <AboutUs />,
    },
    //contactus
    {
      path: "/contactus",
      element: <ContactUs />,
    },
    //features
    {
      path: "/Application Areas",
      element: <Features />,
    },
    //advantage
    {
      path: "/advantage",
      element: <Advantage />,
    },
    //quality
    {
      path: "/quality",
      element: <Quality />,
    },
    //clients
    {
      path: "/clients",
      element: <Clients />,
    },
    //products
    {
      path: "/products",
      element: <Products />,
    },
    //LayIn
    {
      path: "/product_LayIn",
      element: <Product_LayIn />,
    },
    //Linear
    {
      path: "/product_Aerolite-wood-works-linear",
      element: <Product_linear />,
    },
    //C-planks
    {
      path: "/product_C-planks",
      element: <Product_CPlank />,
    },
    //OpenCell
    {
      path: "/product_OpenCell",
      element: <Product_OpenCell />,
    },
    //ClipIn
    {
      path: "/product_ClipIn",
      element: <Product_ClipIn />,
    },
    // grille
    {
      path: "/product_Aerolite-wood-works-grille",
      element: <Product_grille />,
    },
    //Channeled
    {
      path: "/product_Channeled-wood-works",
      element: <Product_Chenneled />,
    },
    //FPlanks
    {
      path: "/product_F-Planks",
      element: <Product_FPlank />,
    },
    //Corridor plancks
    {
      path: "/product_Corridor-plancks",
      element: <Products_Corridor />,
    },
    //Custom pawl & hook on system
    {
      path: "/product_Custom-pawl-&-hook-on-system",
      element: <Product_PawlHook />,
    },
    // Baffle
    {
      path: "/product_Baffle",
      element: <Product_Baffle />,
    },
    // Tringular Open Cell
    {
      path: "/product_TringularOpenCell",
      element: <Product_Tringular />,
    },
  ]);
  return (
    <div className="w-full overflow-hidden font-roboto">
      
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
