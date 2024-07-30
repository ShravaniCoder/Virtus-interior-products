import Layout from "../../components/Layout";
import banner from "../../../src/assets/Img/pr0ducts/F-plank/Img1.jpg";


const Product_EntranceMats = () => {
  return (
    <Layout>
      <div className="">
        <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
          <div className="h-[30vh] md:h-[40vh] w-[100%] bg-[#F5F5F5] flex flex-col items-center justify-end">
            <h1 className="md:text-xl text-sm text-[#4F8BAD] font-bold ">
              Expansion Joint Cover
            </h1>
            <h2 className="md:text-6xl text-4xl font-bold text-[#455D8B] p-4 ">
              ENTRANCE MATS
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
          <div className=" font-montserrat">
            <div className="w-full">
              <div>
                <p>
                  The right solution for every entrance. We have been innovating
                  entrance flooring continuously to provide a versatile
                  portfolio of beautiful entrance matting solutions. Explore our
                  solutions with our representative to check on right fit for
                  your project and eventually reduce maintenance costs while
                  keeping your building occupants safe.{" "}
                </p>
                <h1 className="text-xl font-semibold py-4">
                  Expansion Joint Systems
                </h1>
                <p>
                  Thermal and seismic expansion joint cover systems for floors,
                  walls and ceilings, exterior facades and car parks. Pinnacle
                  also has a brand of Glass & Partition System “Sonic”.
                </p>
                <p>
                  At Pinnacle we provide solutions and ensure successful
                  installation over a spectrum of business sectors across the
                  country like Education, Retail, Airports & Train Stations,
                  Commercial Healthcare, Shopping Centers, Car Parks, Sports &
                  Leisure Housing and Hotels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Product_EntranceMats;
