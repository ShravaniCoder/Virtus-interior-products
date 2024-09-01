import Layout from "../../components/Layout"
import { Link } from "react-router-dom";
import largeImage from "../../../src/assets/Img/pr0ducts/Mesh/Img1.jpg";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import smallImage from "../../../src/assets/Img/pr0ducts/Mesh/Img2.jpg";
import MeshS from "../../../src/assets/Img/pr0ducts/Mesh/Img2.png";
import Mesh2 from "../../../src/assets/Img/pr0ducts/Mesh/Img3.png";

const Product_PawlHook = () => {
  return (
    <Layout>
      <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
        <div className="h-[30vh] md:h-[40vh] w-[100%] bg-[#F5F5F5] flex flex-col items-center justify-end">
          <h1 className="md:text-xl text-sm uppercase text-[#4F8BAD] font-bold ">
            Customized Metal Ceiling
          </h1>
          <h2 className="md:text-5xl text-2xl text-center uppercase font-bold text-[#455D8B] p-4 ">
            MESH CEILING
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
                Mesh Ceilings
              </h2>

              <ul className="px-5 md:px-0 list-square py-4 text-lg text-[#3f4a5f] font-semibold">
                <li>
                  An expanded metal ceiling that creates a complimentary and an
                  open feel visual camouflaging the services above the same.
                  This flexible design can be used as accent borders, clouds or
                  full ceilings. The designs are made in a way that a series of
                  joints cover the vision and are remarkably versatile creating
                  a perfect ambience when lit up from the above. These come in
                  various designs to fit your space.
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
      <div className="py-5">
        <div className="p-2 md:px-[2rem] lg:px-[2rem] xl:px-36 font-montserrat">
          <div className="flex md:flex-row flex-col">
            <div className="md:w-[50%] w-full">
              <h2 className="text-sm md:text-xl uppercase text-[#0B2B3c] mt-2 font-bold">
                MESH Customized
              </h2>

              <h2 className=" font-montserrat text-[#3f4a5f] font-semibold py-3">
                Mesh products are woven wire ceilings available in below
                standard options.
              </h2>
              <img src={MeshS} alt="MeshS" />
            </div>
            <div className="md:w-[50%] w-full ml-5">
              <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2 font-bold">
                DIMENSIONS
              </h2>
              <h2 className="text-sm md:text-xl text-[#0B2B3c] mt-2">
                Tile size
              </h2>

              <ul className="list-square py-3 px-5 text-lg text-[#3f4a5f] font-semibold">
                <li>600 x 600 mm [L x W]</li>
                <li>600 x 1200 mm [L x W]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-[#f7f7f7] p-2 md:px-[2rem] lg:px-[2rem] xl:px-36">
        <div className="flex flex-col md:flex-row md:h-[55vh] jmd:ustify-between font-montserrat">
          <div className="md:w-[50%] w-full">
            <h2 className="text-base md:text-xl text-[#0B2B3c] mt-2 font-bold">
              SURFACE
            </h2>

            <ul className="list-square py-4 px-5 text-lg text-[#3f4a5f] font-semibold">
              <li>
                <span className="font-bold"> Woven wire mesh.</span> Expanded
                metal powder coated to white as standard but also available in
                required RAL shade to add accent to the space.
              </li>
            </ul>
          </div>
          <div className="md:w-[50%] ">
            <h2 className="text-base md:text-xl text-[#0B2B3c] mt-2 font-bold">
              SUSPENSION SYSTEM
            </h2>
            <h2 className=" font-montserrat text-[#3f4a5f] font-semibold py-3">
              15mm T grid and 24mm T grid, Hook On System
            </h2>
            <img src={Mesh2} alt="mesh2" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Product_PawlHook;
