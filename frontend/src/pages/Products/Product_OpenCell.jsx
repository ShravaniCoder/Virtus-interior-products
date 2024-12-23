import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import OpenCell1 from "../../../src/assets/Img/pr0ducts/opencell1.png";
import Box1 from "../../../src/assets/Img/pr0ducts/opencellbox.png";
import Box2 from "../../../src/assets/Img/pr0ducts/OBox1.png";
import Box3 from "../../../src/assets/Img/pr0ducts/OBox2.png";
import Box4 from "../../../src/assets/Img/pr0ducts/OBox3.png";
import Box5 from "../../../src/assets/Img/pr0ducts/OBox4.png";
import largeImage from "../../../src/assets/Img/about/Picture3.jpg";
import smallImage from "../../../src/assets/Img/pr0ducts/OpenCell/Img1.jpg";


const Product_ClipIn = () => {
  return (
    <Layout>
      <div className="">
        <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
          <div className="h-[30vh] md:h-[40vh] w-[100%] bg-[#F5F5F5] flex flex-col items-center justify-end">
            <h1 className="md:text-xl text-sm text-[#4F8BAD] font-bold ">
              AEROLITE
            </h1>
            <h2 className="md:text-6xl text-4xl font-bold text-[#455D8B] p-4 ">
              COSTOMIZED OPEN CELL
            </h2>
          </div>
        </section>
        <div className="p-2 md:px-[2rem] lg:px-[2rem] xl:px-36">
          <div className="bg-beige flex md:min-h-screen justify-center">
            <div className="relative w-full h-full flex items-start justify-end mb-20">
              <img
                src={largeImage}
                alt="Large"
                className=" md:w-[100%] md:h-[100vh] h-[55vh]"
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

                <ul className="px-5 md:px-0 list-square py-4  text-[#3f4a5f] font-semibold text-lg">
                  <li>Airports</li>
                  <li>Entertainment</li>
                  <li>Educational</li>
                  <li>Healthcare</li>
                  <li>Restaurants</li>
                  <li>Retail</li>
                  <li>Shopping malls</li>
                  <li>Electrical Rooms</li>
                </ul>
              </div>
            </div>
            <div className="md:w-[50%]">
              <img
                src={smallImage}
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
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-gray-300">
                    Lay-in grid ceiling
                  </th>
                  <th className="px-4 py-2 ">Open Cell</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">
                    <div className="flex justify-center items-center">
                      <img src={Box1} alt="Lay-In" className="w-32 h-20" />
                    </div>
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <div className="flex flex-col items-center">
                      <img src={Box2} alt="Lay-In" className="w-32 h-20" />
                      <p>75*75mm</p>
                    </div>
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <div className="flex flex-col items-center">
                      <img src={Box3} alt="Lay-In" className="w-32 h-20" />
                      <p>100*100mm</p>
                    </div>
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <div className="flex flex-col items-center">
                      <img src={Box4} alt="Lay-In" className="w-32 h-20" />
                      <p>100*150mm</p>
                    </div>
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <div className="flex flex-col items-center">
                      <img src={Box5} alt="Lay-In" className="w-32 h-20" />
                      <p>100*200mm</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan="4"
                    className="px-4 py-2 border border-gray-300 text-center"
                  >
                    GI LAY-IN GRID CEILING
                  </td>
                </tr>
                {["600 x 600 x 0.5mm"].map((size) => (
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
                    ALUMINIUM LAY-IN GRID CEILING
                  </td>
                </tr>
                {["600 x 600 x 0.7mm"].map((size) => (
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
            <h2 className="text-base md:text-xl text-[#0B2B3c] mt-2 font-bold">
              Features & Benefits
            </h2>

            <ul className="list-square py-4 px-5 text-lg text-[#3f4a5f] font-semibold">
              <li>Easy integration with MEP services</li>
              <li>Quick installation</li>
              <li>Accessible ceiling panel for T15 Lay-in</li>
              <li>Wide variety of modules and sizes</li>
              <li>Creates a modern, open look for a space</li>
              <li>
                Available in white, RAL shades made available upon request
              </li>
            </ul>
          </div>
          <div className="md:w-[50%] ">
            <img
              src={OpenCell1}
              alt="Lay-In"
              className="w-full h-[30vh] md:h-[52vh]"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product_ClipIn;
