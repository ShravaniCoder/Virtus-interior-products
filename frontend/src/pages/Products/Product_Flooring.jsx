import Layout from "../../components/Layout";
import banner from "../../../src/assets/Img/pr0ducts/Flooring/Flooring.jpg";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import Baffle from "../../../src/assets/Img/pr0ducts/Flooring/Img1.jpg";
import home1 from "../../../src/assets/Img/pr0ducts/Flooring/hom1.jpg";
import home2 from "../../../src/assets/Img/pr0ducts/Flooring/hom2.jpg";

const Product_Flooring = () => {
  return (
    <Layout>
      <div className="">
        <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
          <div className="h-[30vh] md:h-[40vh] w-[100%] bg-[#F5F5F5] flex flex-col items-center justify-end">
            <h1 className="md:text-2xl text-sm text-[#4F8BAD] font-bold ">
              Healthcare Vinyl Flooring
            </h1>
            <h2 className="md:text-6xl text-4xl font-bold text-[#455D8B] p-4 ">
              Flooring
            </h2>
          </div>
        </section>
        <div className="p-2 md:px-[2rem] lg:px-[2rem] xl:px-36">
          <div className="bg-beige flex md:min-h-screen justify-center">
            <div className="relative w-full h-full flex items-start justify-end mb-10">
              <img
                src={banner}
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
                  <li>Healthcare</li>
                  <li>Educational</li>
                  <li>Hi-Rise & Office</li>
                  <li>Malls & Residential</li>
                  <li>Transportation</li>
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
      <section className="bg-white p-2 md:px-[2rem] lg:px-[2rem] xl:px-36">
        <div className="flex flex-col md:items-center md:flex-row md:h-[55vh] md:justify-between font-montserrat">
          <div className="md:w-[50%] ">
            <img src={home1} alt="Lay-In" className="w-full h-auto" />
          </div>
          <div className="md:w-[50%] w-full md:pl-10">
            <h2 className="text-base md:text-2xl text-[#0B2B3c] mt-2 font-bold">
              Homogeneous Flooring – Directional
            </h2>

            <ul className="list-square py-4 px-5 text-lg text-[#3f4a5f] font-semibold">
              <li>
                Homogeneous vinyl flooring is in standard 2mm*2m*20m sheet form,
                whose pattern is directional design.
              </li>
              <li>
                Floor surface adopt PUR protect treatment which increase anti
                pollution performance, wear resistance can reach P-T class.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white p-2 md:px-[2rem] lg:px-[2rem] xl:px-36">
        <div className="flex flex-col md:items-center md:flex-row md:h-[55vh] md:justify-between font-montserrat">
          <div className="md:w-[50%] w-full">
            <h2 className="text-base md:text-2xl capitalize text-[#0B2B3c] mt-2 font-bold">
              Homogeneous Flooring – Non-Directional
            </h2>

            <ul className="list-square py-4 px-5 text-lg text-[#3f4a5f] font-semibold">
              <li>
                Homogeneous vinyl flooring is in standard 2mm*2m*20m sheet form,
                whose pattern is non-directional design.
              </li>
              <li>
                Floor surface adopt PUR protect treatment which increase anti
                pollution performance, wearing resistance can reach P-T class.
              </li>
            </ul>
          </div>
          <div className="md:w-[50%]">
            <img src={home2} alt="Lay-In" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product_Flooring;