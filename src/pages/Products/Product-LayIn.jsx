import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Lay1 from "../../../src/assets/Img/pr0ducts/Lay1.png";
import Box1 from "../../../src/assets/Img/pr0ducts/box1.png";
import Box2 from "../../../src/assets/Img/pr0ducts/LayIn/box2.png";
import Box3 from "../../../src/assets/Img/pr0ducts/LayIn/box3.png";
import largeImage from "../../../src/assets/Img/pr0ducts/LayIn/IMG1.jpg";



const Product_LayIn = () => {
  return (
    <Layout>
      <div className="">
        <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
          <div className="h-[30vh] md:h-[40vh] w-[100%] bg-[#F5F5F5] flex flex-col items-center justify-end">
            <h1 className="md:text-xl text-sm text-[#4F8BAD] font-bold ">
              STANDARD METAL CEILING
            </h1>
            <h2 className="md:text-6xl text-4xl font-bold text-[#455D8B] p-4 ">
              AEROLITE LAY IN
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

                <ul className="px-5 md:px-0 list-square py-4 text-lg text-[#3f4a5f] font-semibold">
                  <li>Transportation & Airports</li>
                  <li>Educational</li>
                  <li>Healthcare</li>
                  <li>Commercial Buildings</li>
                  <li>Hi-Rise & Office</li>
                  <li>Financial & Banking</li>
                  <li>Malls & Residential</li>
                  <li>Kitchen & Dietary</li>
                  <li>Laundry</li>
                </ul>
              </div>
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
                      <p className="text-center">No perforation</p>
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
            <h2 className="text-base md:text-xl text-[#0B2B3c] mt-2 font-bold">
              Features & Benefits
            </h2>

            <ul className="list-square py-4 px-5 text-lg text-[#3f4a5f] font-semibold">
              <li>Durable and washable polyester powder finish</li>
              <li>Wide range of standard perforation patterns</li>
              <li>Wide range of wooden patterns</li>
              <li>Easy access for service maintenance</li>
              <li>Robust and easy to clean</li>
              <li>High sound absorption and sound attenuation</li>
              <li>Environment friendly and recyclable</li>
              <li>Available in 15mm & 24mm Grid Visual</li>
            </ul>
          </div>
          <div className="md:w-[50%] ">
            <img src={Lay1} alt="Lay-In" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Product_LayIn;
