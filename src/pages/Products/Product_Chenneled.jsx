import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import khaya from "../../../src/assets/Img/pr0ducts/khaya.png";
import Asian from "../../../src/assets/Img/pr0ducts/Asian.png";
import BavarianBeech from "../../../src/assets/Img/pr0ducts/Bavarian.png";
import classic from "../../../src/assets/Img/pr0ducts/classic.png";
import largeImage from "../../../src/assets/Img/pr0ducts/Channeled/Channeled.png";

const Product_Chenneled = () => {
  return (
    <Layout>
      <div className="">
        <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
          <div className="h-[30vh] md:h-[40vh] w-[100%] bg-[#F5F5F5] flex flex-col items-center justify-end">
            <h1 className="md:text-xl text-sm uppercase text-[#4F8BAD] font-bold ">
              Acoustics
            </h1>
            <h2 className="md:text-5xl text-2xl text-center uppercase font-bold text-[#455D8B] p-4 ">
              AEROLITE Channeled wood works
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
                  <li>Auditorium</li>
                  <li>Meeting Rooms</li>
                  <li>Reception</li>
                  <li>Executive Cabins</li>
                  <li>Open Plan Workstations</li>
                  <li>Breakout Areas</li>
                  <li>Home Theatres</li>
                </ul>
              </div>
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
                    DESCRIPTION
                  </th>
                  <th className="px-4 py-2 border border-gray-300">
                    CHANNELED WOOD WORKS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">System</td>
                  <td className="px-4 py-2 border border-gray-300">
                    Aluminium Keel
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">Sizes</td>
                  <td className="px-4 py-2 border border-gray-300">
                    128mm x 2440mm x 15mm / Customised
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">NRC</td>
                  <td className="px-4 py-2 border border-gray-300">
                    0.40 / 0.85*
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">
                    Surface Finish
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    Laminated
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">
                    Edge Details
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    Tongue & Groove
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">Pattern</td>
                  <td className="px-4 py-2 border border-gray-300">
                    G13 / G21 / G28
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pt-5 ">
            <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
              Color option
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-x-10">
              <div className="border flex items-center py-2 gap-2">
                <img src={khaya} alt="khaya" />

                <h1 className="text-lg font-roboto">Khaya Mahagony</h1>
              </div>
              <div className="border flex items-center py-2 gap-2">
                <img src={Asian} alt="asian" />

                <h1 className="text-lg font-roboto">Asian Walnut Dark</h1>
              </div>
              <div className="border flex items-center py-2 gap-2">
                <img src={BavarianBeech} alt="khaya" />

                <h1 className="text-lg font-roboto">Bavarian Beech</h1>
              </div>
              <div className="border flex items-center py-2 gap-2">
                <img src={classic} alt="asian" />

                <h1 className="text-lg font-roboto">Classic Planked Walnut</h1>
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
              <li>Enables designers to create rich and warm interiors</li>
              <li>Easy to install on Wall & Ceiling</li>
              <li>Enhanced acoustical properties with Bottle neck holes</li>
              <li>backed with acoustical fleece</li>
              <li>With 50mm Glasswool of 48 kg/m Density</li>
              <li>Moisture resistant/HDF core is available on request.</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product_Chenneled;



