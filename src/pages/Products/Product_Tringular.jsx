import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Tringular1 from "../../../src/assets/Img/pr0ducts/Tringular1.png";
import largeImage from "../../../src/assets/Img/pr0ducts/Tringular/Img1.jpg";



const Product_Tringular = () => {
  return (
    <Layout>
      <div className="">
        <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
          <div className="h-[30vh] md:h-[40vh] w-[100%] bg-[#F5F5F5] flex flex-col items-center justify-end">
            <h1 className="md:text-xl text-sm text-[#4F8BAD] font-bold ">
              STANDARD METAL CEILING
            </h1>
            <h2 className="md:text-5xl uppercase text-2xl text-center font-bold text-[#455D8B] p-4 ">
              AEROLITE TRIANGULAR Open Cell
            </h2>
          </div>
        </section>
        <div className="p-2 md:px-[2rem] lg:px-[2rem] xl:px-36">
          <div className="bg-beige flex md:min-h-screen justify-center">
            <div className="relative w-full h-full flex items-start justify-end mb-20">
              <img
                src={largeImage}
                alt="Large"
                className=" md:w-[100%] md:h-[100vh] h-[55vh] object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col md:items-center py-2 md:flex-row h-auto md:justify-between font-montserrat">
            <div className="w-full md:w-[50%]">
              <Link to="/products">
                <h1 className="flex items-center gap-2 font-bold ">
                  <MdOutlineKeyboardDoubleArrowLeft className="text-blue-500 " />
                  Back to all products
                </h1>
              </Link>
              <div className="md:py-5 py-5 ">
                <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
                  Application Areas
                </h2>

                <ul className="px-5 md:px-0 list-square py-4 text-lg text-[#3f4a5f] font-semibold">
                  <li>Airports</li>
                  <li>Entertainment</li>
                  <li>Restaurants</li>
                  <li>Retail</li>
                  <li>Shopping malls</li>
                  <li>Lounge Area</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="p-2 md:px-[2rem] lg:px-[2rem] xl:px-36">
          <h2 className="text-center font-montserrat text-[#3f4a5f] font-semibold">
            Triangular open cell is specially designed to break free from the
            monotonous box design. Tricell is a range of Aluminium and
            Galvanized Steel, Triangular open cell ceiling panels designed to
            lay onto our 15mm Tee Grid. Access is gained by simply lifting the
            panels out of the grid.
          </h2>
        </div>
      </div>

      <section className="bg-[#f7f7f7] p-2 md:px-[2rem] lg:px-[2rem] xl:px-36">
        <div className="flex flex-col md:items-center md:flex-row md:h-[55vh] md:justify-between font-montserrat">
          <div className="md:w-[50%] w-full">
            <h2 className="text-base md:text-xl text-[#0B2B3c] mt-2 font-bold">
              Features & Benefits
            </h2>

            <ul className="list-square py-4 px-5 text-lg text-[#3f4a5f] font-semibold">
              <li>Intended for smoke extraction and airflow management</li>
              <li>Simple access to the ceiling void</li>
              <li>Impactful, unbroken and monolithic appearance</li>
              <li>Lightweight, quick and easy to install</li>
            </ul>
          </div>
          <div className="md:w-[50%] ">
            <img src={Tringular1} alt="Lay-In" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product_Tringular;
