import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Quality from "./pages/Quality";
import Clients from "./pages/Clients";
import Products from "./pages/Products";
import Product_LayIn from "./pages/Products/Product-LayIn";
import Product_CPlank from "./pages/Products/Product_CPlank";
import Product_OpenCell from "./pages/Products/Product_OpenCell";
import Product_ClipIn from "./pages/Products/Product_ClipIn";
import Product_Chenneled from "./pages/Products/Product_Chenneled";
import Product_FPlank from "./pages/Products/Product_FPlank";
import Products_Corridor from "./pages/Products/Products_Corridor";
import Product_PawlHook from "./pages/Products/Product_PawlHook";
import Product_Baffle from "./pages/Products/Product_Baffle";
import Product_Tringular from "./pages/Products/Product_Tringular";
import Advantage from "./pages/Advantage";
import BrochurePage from "./components/BrochurePage";
import Product_SoftFibre from "./pages/Products/Product_SoftFibre";
import OurGallery from "./pages/OurGallery";
import Product_EntranceMats from "./pages/Products/Product_EntranceMats";


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    //contactus
    {
      path: "/enquiry",
      element: <ContactUs />,
    },
    //ourGallery
    {
      path: "/ourGallery",
      element: <OurGallery />,
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
      path: "/product_Corridor-planks",
      element: <Products_Corridor />,
    },
    //Custom pawl & hook on system
    {
      path: "/product_Mesh Ceiling",
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
    {
      path: "/Brochure.pdf",
      element: <BrochurePage />,
    },
    {
      path: "/Product_SoftFibre",
      element: <Product_SoftFibre />,
    },
    {
      path: "/product_EntranceMats",
      element: <Product_EntranceMats />
    }
  ]);
  return (
    <div className="w-full overflow-hidden font-roboto">
      
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
