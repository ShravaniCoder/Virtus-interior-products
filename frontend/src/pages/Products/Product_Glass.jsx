
import Layout from "../../components/Layout";
import banner from "../../../src/assets/Img/pr0ducts/Partition/Glass.jpg";
import STL2 from "../../../src/assets/Img/pr0ducts/Partition/STL 25.jpg";
import STL4 from "../../../src/assets/Img/pr0ducts/Partition/STL 45.jpg";
import SWL from "../../../src/assets/Img/pr0ducts/Partition/SWL.jpg";
import S2G from "../../../src/assets/Img/pr0ducts/Partition/S2G.jpg";

const Product_Glass = () => {
  return (
    <Layout>
      <div className="">
        <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
          <div className="h-[30vh] md:h-[40vh] w-[100%] bg-[#F5F5F5] flex flex-col items-center justify-end">
            <h1 className="md:text-2xl uppercase text-sm text-[#4F8BAD] font-bold ">
             Plumage 
            </h1>
            <h2 className="md:text-6xl text-4xl font-bold text-[#455D8B] p-4 ">
              Glass Partition
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
          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-6">
            <div className="md:pb-20 pb-6">
              <div className="bg-white border rounded">
                <div className="relative">
                  <img
                    src={STL2}
                    alt="contactus"
                    className="lg:w-full md:h-[55vh]"
                  />
                  <div className="p-4">
                    <h1 className="text-2xl font-bold py-4">STL - 25</h1>
                    <p className="text-base">
                      We&apos;ve revisited office partitions, unveiling a
                      catalog that reflects a new style and taste with five
                      collections for diverse space division. A prime example is
                      &quot;Plumage Metalium&quot; featuring a sleek 25x25mm
                      system designed for 3mtr. height with 10 or 12 mm glass
                      sheets. The gasket insert provides an STC up to 36 DB,
                      showcasing Italian passion and creativity. Additionally,
                      our single-panel partition, accommodating 10 or 12 mm
                      glass sheets, ensures excellent adjustment and up to 36db
                      sound reduction. The system, with a built-in groove line,
                      allows a 15 mm level adjustment on-site, featuring
                      connections of &quot;T&quot; and &quot;L&quot; joints in
                      aluminum/acrylic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:pb-20 pb-6">
              <div className="bg-white border rounded">
                <div className="relative">
                  <img
                    src={STL4}
                    alt="contactus"
                    className="lg:w-full md:h-[55vh]"
                  />
                  <div className="p-4">
                    <h1 className="text-2xl font-bold py-4">STL - 45</h1>
                    <p className="text-base">
                      A single-panel partition that accommodates 10 or 12 mm
                      glass sheets. The 45 mm glazing bead profile allows
                      excellent adjustment during leveling while maintaining an
                      extremely contained visual impact. The vertical
                      connections between glass modules are made of methacrylate
                      or aluminum profiles. This system offers up to 36db sound
                      reduction, as mentioned in our test reports, depending on
                      the built-in glass type. The system has the groove line
                      inbuilt to maintain the groove across the periphery and
                      also allows level adjustment at the site up to 15 mm. The
                      system has the connections of &quot;T&quot; and
                      &quot;L&quot; joints in aluminum/acrylic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" md:pb-20 pb-6">
              <div className="bg-white border rounded">
                <div className="relative">
                  <img
                    src={SWL}
                    alt="contactus"
                    className="lg:w-full md:h-[55vh]"
                  />
                  <div className="p-4">
                    <h1 className="text-2xl font-bold py-4">SWL - 75</h1>
                    <p className="text-base">
                      We always try to offer unique products to our customers.
                      SWL 75 Partition System is the perfect blend of elegant
                      wide line profile and stability. It is a single glass
                      partition system which can accommodate 10mm or 12mm glass
                      panels. A wide line system with 75mm profile not only adds
                      the aesthetics but is also functionally superior. The flat
                      base of the profile ensure proper installation on wall and
                      floor with all compatibility to all types of transition
                      profiles I, L and T. The Door profile is also available in
                      same size for better system synchronization. All aluminum
                      profiles can be made available in Silver/Black anodizing
                      or also in powder coating shades. This system offers upto
                      36db sound reduction depending upon the type of the built
                      in glass.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" md:pb-20 pb-6">
              <div className="bg-white border rounded">
                <div className="relative">
                  <img
                    src={S2G}
                    alt="contactus"
                    className="lg:w-full md:h-[55vh]"
                  />
                  <div className="p-4">
                    <h1 className="text-2xl font-bold py-4">S2G - 75</h1>
                    <p className="text-base">
                      Acoustics is the key into our projects and considering
                      this fact, PLUMAGE has introduced new series in double
                      glazed partition family. A combination of slick design in
                      wideline and higher acoustical advantage makes this system
                      more useful. S2G 75 Partition System is a double glass
                      partition system which can accommodate 10 mm or 12 mm
                      glass panels. A wide line system of 75 mm width and 25 mm
                      of height offers added aesthetics to your office
                      interiors. All types of transition profiles like I, L and
                      T are compatible with this system also. System profiles
                      can be made available in Silver/Black anodizing or also in
                      powder coating shades. This system offers up to 48db sound
                      reduction depending upon the type of the built in glass.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product_Glass;