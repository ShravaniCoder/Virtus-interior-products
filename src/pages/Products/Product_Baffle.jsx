import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Baffle1 from "../../../src/assets/Img/pr0ducts/Baffle1.png";
import Baffle from "../../../src/assets/Img/pr0ducts/Baffle.png";



const Product_Baffle = () => {
  return (
    <Layout>
      <div className="bg-[#f7f7f7]">
        <div className="p-2 md:px-[2rem] lg:px-[2rem] xl:px-36">
          <div className="flex flex-col md:items-center py-2 md:flex-row h-auto md:justify-between font-montserrat">
            <div className="w-full md:w-[50%]">
              <Link to="/products">
                <h1 className="flex items-center gap-2 font-bold ">
                  <MdOutlineKeyboardDoubleArrowLeft className="text-blue-500 " />
                  Back to all products
                </h1>
              </Link>
              <div className="md:py-5 py-5 ">
                <h2 className="md:text-xl text-lg uppercase font-semibold text-[#4F8BAD]">
                  Standard Metal Ceiling
                </h2>
                <h1 className="md:text-5xl text-4xl text-[#445E8E] font-semibold pt-2 pb-4 ">
                  AEROLITE BAFFLE
                </h1>
                <div className="px-3 py-1 border-b-8 border-l-8 border-[#FAC40B] w-56 half-top-border ">
                  <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
                    Application Areas
                  </h2>
                </div>

                <ul className="px-5 md:px-0 list-square py-4 text-lg text-[#3f4a5f] font-semibold">
                  <li>Airports</li>
                  <li>Bus Terminals</li>
                  <li>Railway Stations</li>
                  <li>Corridors</li>
                  <li>Retail</li>
                  <li>Reception</li>
                  <li>Lobbies</li>
                  <li>Banquets</li>
                </ul>
              </div>
            </div>
            <div className="md:w-[50%]">
              <img
                src={Baffle}
                alt="Lay-In"
                className="w-full h-auto md:h-[65vh]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="p-2 md:px-[2rem] lg:px-[2rem] xl:px-36 font-montserrat">
          <div className="px-3 py-1 border-b-8 border-l-8 border-[#FAC40B] w-56 half-top-border">
            <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
              Available in sizes
            </h2>
          </div>
          <ul className="list-square py-3 px-5 text-lg text-[#3f4a5f] font-semibold">
            <li>25 x 100mm</li>
            <li>30 x 100mm</li>
            <li>50 x 100mm</li>
            <li>75 x 75mm</li>
            <li>25 x 75mm</li>
          </ul>
        </div>
      </div>

      <section className="bg-[#f7f7f7] p-2 md:px-[2rem] lg:px-[2rem] xl:px-36">
        <div className="flex flex-col md:items-center md:flex-row md:h-[55vh] jmd:ustify-between font-montserrat">
          <div className="md:w-[50%] w-full">
            <div className="px-3 py-1 border-b-8 border-l-8 border-[#FAC40B] w-60 half-top-border">
              <h2 className="text-base md:text-xl text-[#0B2B3c] mt-2 font-bold">
                Features & Benefits
              </h2>
            </div>
            <ul className="list-square py-4 px-5 text-lg text-[#3f4a5f] font-semibold">
              <li>A wide range of design options</li>
              <li>Can be customized to your needs</li>
              <li>Available in numerous RAL colors and wood grain colors</li>
              <li>
                Choose from a range of widths and heights which can be installed
                at a varied spacing
              </li>
              <li>Open space for integrated ceiling solution</li>
              <li>Easy installation with standard carriers</li>
              <li>
                Easy to install and offer easy access to maintenance and the
                installation of additional services such as lighting, sprinklers
                and climate control systems.
              </li>
            </ul>
          </div>
          <div className="md:w-[50%] ">
            <img src={Baffle1} alt="Lay-In" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product_Baffle;


