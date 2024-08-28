
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Soft1 from "../../../src/assets/Img/pr0ducts/Soft Fibre/Img2.png";
import Soft2 from "../../../src/assets/Img/pr0ducts/Soft Fibre/Img2.jpg";
import largeImage from "../../../src/assets/Img/pr0ducts/Soft Fibre/Img1.jpg";


const Product_SoftFibre = () => {
  return (
    <Layout>
      <div className="">
        <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
          <div className="h-[30vh] md:h-[40vh] w-[100%] bg-[#F5F5F5] flex flex-col items-center justify-end">
            <h1 className="md:text-2xl text-sm text-[#4F8BAD] font-bold ">
              Acoustics
            </h1>
            <h2 className="md:text-6xl text-4xl font-bold text-[#455D8B] p-4 ">
              AEROLITE SOFT FIBRE
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
                  <li>Theatre</li>
                  <li>Auditorium</li>
                  <li>Conference Room</li>
                  <li>Home Theatres</li>
                  <li>Office</li>
                  <li>Meeting Room</li>
                </ul>
              </div>
            </div>
            <div className="md:w-[50%]">
              <img
                src={Soft2}
                alt="Lay-In"
                className="w-full h-auto md:h-[65vh]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="p-2 md:px-[2rem] lg:px-[2rem] xl:px-36 font-montserrat">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-[50%] w-full">
              <div className="overflow-x-auto p-4">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border border-gray-300">
                        DESCRIPTION
                      </th>
                      <th className="px-4 py-2 border border-gray-300">
                        SOFT FIBRE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">
                        System
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        Impeller Clip
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">
                        Sizes
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        600mm x 600mm x 25mm x 50mm | 1200mm x 600mm x 25mm
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">
                        Substrate
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        Fiber Glass
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">NRC</td>
                      <td className="px-4 py-2 border border-gray-300">0.9</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">
                        Relative Humidity
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        Upto 90%
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">
                        Fire Classification
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        Class 0/class 1 as per BS476 PT-6&7
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">
                        Surface Finish
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        Fabric Wrapped
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">
                        Edge Details
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        Square Edge
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">
                        Density
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        90kg/m³
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-[50%] w-full">
              <div className="overflow-x-auto p-4">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr>
                      <th
                        className="px-4 py-2 border border-gray-300"
                        colSpan="2"
                      >
                        RECOMMENDED NO. OF IMPALERS PER PANEL
                      </th>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border border-gray-300">Size</th>
                      <th className="px-4 py-2 border border-gray-300">
                        No. of impalers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">
                        600 x 600 x 25mm
                      </td>
                      <td className="px-4 py-2 border border-gray-300 text-center">
                        3
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">
                        600 x 1200 x 25mm
                      </td>
                      <td className="px-4 py-2 border border-gray-300 text-center">
                        4
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300">
                        600 x 1800 x 25mm
                      </td>
                      <td className="px-4 py-2 border border-gray-300 text-center">
                        5
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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
              <li>Excellent accoustic properties</li>
              <li>Durable and Vacuumable fabric</li>
              <li>Reduce noise and Reverberation</li>
              <li>High sound absorption</li>
              <li>Easy to install</li>
              <li>Available in wide range of sizes & shades</li>
            </ul>
          </div>
          <div className="md:w-[50%] ">
            <img src={Soft1} alt="Soft" className="w-full h-[54vh]" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product_SoftFibre;
