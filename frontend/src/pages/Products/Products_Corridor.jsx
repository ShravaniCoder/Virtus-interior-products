import Box4 from "../../../src/assets/Img/pr0ducts/CoBox.png";
import Box2 from "../../../src/assets/Img/pr0ducts/CBox1.png";
import Box3 from "../../../src/assets/Img/pr0ducts/CBox2.png";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import corridor from "../../../src/assets/Img/pr0ducts/corridor.png";
import largeImage from "../../../src/assets/Img/pr0ducts/Corridor/Img1.png";
import smallImage from "../../../src/assets/Img/homepage/Img10.jpg";

const Products_Corridor = () => {
  return (
    <Layout>
      <div className="">
        <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
          <div className="h-[30vh] md:h-[40vh] w-[100%] bg-[#F5F5F5] flex flex-col items-center justify-end">
            <h1 className="md:text-2xl uppercase text-sm text-[#4F8BAD] font-bold ">
              Plumage
            </h1>
            <h2 className="md:text-6xl text-3xl text-center uppercase font-bold text-[#455D8B] p-4 ">
              Corridor-PlANKS
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
                  Rectangular panels & planks
                </h2>

                <ul className="px-5 md:px-0 list-square py-4 text-lg text-[#3f4a5f] font-semibold">
                  <li>
                    The Corridor planks are designed with a free span of up to
                    2.4 meters making the ceiling ideal for corridors and narrow
                    rooms. The ceiling is installed without any cross runners or
                    suspension hangers providing a freedom in planning process
                    when placing pipes, ventilation and cables. Its quick to
                    install; 3 times faster than the traditional T-grid ceiling
                    system adding much more aesthetical value to narrow spaces.
                  </li>
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
        <div className="p-2 md:px-[2rem] lg:px-[2rem] xl:px-36 font-montserrat">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-[50%] w-full">
              <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
                Plank size
              </h2>

              <ul className="list-square py-3 px-5 text-lg text-[#3f4a5f] font-semibold">
                <li>300 x 1200 - 2400 mm [W x L]</li>
                <li>400 x 1200 - 2400 mm [W x L]</li>
                <li>600 x 1200 - 2400 mm [W x L]</li>
              </ul>
            </div>
            <div className="md:w-[50%] w-full">
              <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
                PERFORATION AND ACOUSTICS
              </h2>

              <h2 className=" font-montserrat text-[#3f4a5f] font-semibold py-3">
                Metal panels are available perforated with acoustic fleece or
                non-perforated. We offer the following perforations.
              </h2>
              <h2 className=" font-montserrat text-[#3f4a5f] font-semibold pb-3">
                For other available perforations please contact us.
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-black">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border border-gray-300">
                        PLAIN
                      </th>
                      <th className="px-4 py-2 border border-gray-300">
                        STANDARD PERFORATED
                      </th>
                      <th className="px-4 py-2 border border-gray-300">
                        MICRO PERFORATED
                      </th>
                      <th className="px-4 py-2 border border-gray-300">
                        MICRO PERFORATED
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
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
                          <p>1.5mm dia. Holes 18% Open area diagonal pitch</p>
                        </div>
                      </td>
                      <td className="px-4 py-2 border border-gray-300">
                        <div className="flex flex-col items-center">
                          <img src={Box4} alt="Lay-In" className="w-32 h-20" />
                          <p>1.8mm dia. Holes 20% Open area diagonal pitch</p>
                        </div>
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
              SURFACE
            </h2>

            <ul className="list-square py-4 px-5 text-lg text-[#3f4a5f] font-semibold">
              <li>
                <span className="font-bold">
                  {" "}
                  Galvanized steel and aluminum.
                </span>{" "}
                The thickness of the material depends on the structural
                requirements. The galvanized steel and aluminum can be
                powder-coated in white matt (similar to RAL 9016) or according
                to customer specifications. The coating thickness is approx. 60
                μm. As standard, the planks are designed with a square edge and
                supports a minimal design achievement over installation.
              </li>
            </ul>
          </div>
          <div className="md:w-[50%] ">
            <h2 className="text-base md:text-xl text-[#0B2B3c] mt-2 font-bold">
              SUSPENSION SYSTEM
            </h2>

            <img src={corridor} alt="Cplank" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products_Corridor;
