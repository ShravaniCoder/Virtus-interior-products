import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Baffle1 from "../../../src/assets/Img/pr0ducts/Baffle1.png";
import Baffle from "../../../src/assets/Img/pr0ducts/Baffle.png";
import Box1 from "../../../src/assets/Img/pr0ducts/box1.png";
import Box2 from "../../../src/assets/Img/pr0ducts/box2.png";
import Box3 from "../../../src/assets/Img/pr0ducts/box3.png";


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
                <h1 className="md:text-5xl text-4xl font-semibold pt-2 pb-4 ">
                  AEROLITE BAFFLE
                </h1>
                <div className="px-3 py-1 border-b-8 border-l-8 border-[#FAC40B] w-56 half-top-border ">
                  <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
                    Application Areas
                  </h2>
                </div>

                <ul className="px-5 md:px-0 list-square py-4 text-lg">
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
        <div className="p-2 md:px-[2rem] lg:px-[2rem] xl:px-36">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-black">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-gray-300">LAY-IN</th>
                  <th className="px-4 py-2 border border-gray-300">PLAIN</th>
                  <th className="px-4 py-2 border border-gray-300">
                    STANDARD PERFORATED
                  </th>
                  <th className="px-4 py-2 border border-gray-300">
                    MICRO PERFORATED
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 py-2 border border-gray-300">
                    <div className="flex flex-col justify-center items-center">
                      <img src={Box1} alt="Lay-In" className="w-32 h-20" />
                    </div>
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 border-2"></div>
                      <p>No perforation</p>
                    </div>
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <div className="flex flex-col items-center">
                      <img src={Box2} alt="Lay-In" className="w-32 h-20" />
                      <p>2.5mm dia. Holes 16% Open area square pitch</p>
                    </div>
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <div className="flex flex-col items-center">
                      <img src={Box3} alt="Lay-In" className="w-32 h-20" />
                      <p>1.8mm dia. Holes 20% Open area diagonal pitch</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan="4"
                    className="px-4 py-2 border border-gray-300 text-center"
                  >
                    GALVANIZED STEEL
                  </td>
                </tr>
                {[
                  "600 x 600 x 0.5mm",
                  "600 x 1200 x 0.5mm",
                  "300 x 1200 x 0.5mm",
                ].map((size) => (
                  <tr key={size}>
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      {size}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      ✔
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      ✔
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      ✔
                    </td>
                  </tr>
                ))}
                <tr>
                  <td
                    colSpan="4"
                    className="px-4 py-2 border border-gray-300 text-center"
                  >
                    ALUMINIUM
                  </td>
                </tr>
                {[
                  "600 x 600 x 0.7mm",
                  "600 x 1200 x 0.7mm",
                  "300 x 1200 x 0.7mm",
                ].map((size) => (
                  <tr key={size}>
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      {size}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      ✔
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      ✔
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      ✔
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <section className="bg-[#f7f7f7] p-2 md:px-[2rem] lg:px-[2rem] xl:px-36">
        <div className="flex flex-col md:items-center md:flex-row md:h-[55vh] jmd:ustify-between font-montserrat">
          <div className="md:w-[50%] w-full">
            <div className="px-3 py-1 border-b-8 border-l-8 border-[#FAC40B] w-60 half-top-border">
              <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
                Features & Benefits
              </h2>
            </div>
            <ul className="list-square py-4 px-5 text-lg">
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

