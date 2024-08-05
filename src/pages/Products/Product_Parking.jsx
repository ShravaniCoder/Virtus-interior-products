import Layout from "../../components/Layout";
import banner from "../../../src/assets/Img/pr0ducts/Expansion Joints Cover/Expansion Joints Cover.jpg";

const Product_Parking = () => {
  return (
    <Layout>
      <div className="mb-10">
        <section className=" relative flex items-center bg-[#807f7c] font-lato">
          <div className="h-[30vh] md:h-[40vh] w-[100%] bg-[#F5F5F5] flex flex-col items-center justify-end">
            <h1 className="md:text-3xl text-sm text-[#4F8BAD] font-bold ">
              Joints Cover System
            </h1>
            <h2 className="md:text-6xl text-4xl font-bold text-[#455D8B] p-4 ">
              Parking
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
            <h1 className="text-3xl font-semibold py-4 text-[#455D8B]">
              PARKING
            </h1>
            <span className="py-6">
              <h1 className="text-2xl font-semibold py-4 text-[#4F8BAD]">
                PZB Series | 50-100mm joints | 19mm recess mounted | EPDM
                elastomer block
              </h1>{" "}
            </span>
            <div>
              <h1 className="text-xl font-semibold py-4">
                VERSATILE AND STRAIGHTFORWARD
              </h1>
              <p>
                PZB is a waterproof, one-piece extruded EPDM elastomeric seal
                with integral nosings, which is bonded to the substrate with
                high strength epoxy adhesive. PZB is much stronger than
                traditional elastomeric concrete systems providing a truly
                trouble-free long-term joint solution.
              </p>
              <h1 className="text-xl font-semibold py-4">APPLICATION AREAS</h1>
              <ul className="list-square px-5 ">
                <li>Retro-fit applications, parking, stadiums.</li>
                <li>
                  &quot;Colors, Fittings, Accessories to be discussed with our
                  representative&quot;
                </li>
              </ul>
            </div>
          </div>
          <div className=" font-montserrat">
            <span className="py-6">
              <h1 className="text-2xl font-semibold py-4 text-[#4F8BAD]">
                PPDS Series | 50mm joints | 30-90mm recess mounted | aluminum
                with gasket
              </h1>{" "}
            </span>
            <div>
              <h1 className="text-xl font-semibold py-4">
                WATER-PROOF JOINT SYSTEM
              </h1>
              <p>
                Resistant to traffic, snow and rain, this is the joint cover of
                choice for exterior car parks. Its weldable EPDM central gasket
                completely water-proofs the cover while its sturdy aluminum side
                frames and stainless steel capping makes it extremely hard
                wearing.
              </p>
              <h1 className="text-xl font-semibold py-4">APPLICATION AREAS</h1>
              <ul className="list-square px-5 ">
                <li>
                  Open air car parks or structures exposed to rain and snow.
                </li>
                <li>
                  I hope this is helpful! Let me know if you have any other
                  questions.
                </li>
              </ul>
            </div>
          </div>
          <div className=" font-montserrat">
            <span className="py-6">
              <h1 className="text-2xl font-semibold py-4 text-[#4F8BAD]">
                PHB Series | 25-100mm joints | flush surface mounted | EPDM
                elastomer
              </h1>{" "}
            </span>
            <div>
              <h1 className="text-xl font-semibold py-4">
                WATERTIGHT PARKING JOINTS
              </h1>
              <p>
                This one piece extruded EPDM seal creates a watertight system
                when used with high strength epoxy adhesive. Its serrated edges
                create epoxy reservoirs and improve adhesion to joint walls. The
                closed cell design allows the system to achieve ±50% movement
                capability.
              </p>
              <h1 className="text-xl font-semibold py-4">APPLICATION AREAS</h1>
              <ul className="list-square px-5 ">
                <li>Parking, warehouses, storage facilities</li>
                <li>
                  &quot;Colors, Fittings, Accessories to be discussed with our
                  representative&quot;
                </li>
              </ul>
            </div>
          </div>
          <div className=" font-montserrat">
            <span className="py-6">
              <h1 className="text-2xl font-semibold py-4 text-[#4F8BAD]">
                PPTC Series | 150-250mm joints | 38mm recess | metal seismic
                cover with damper system
              </h1>{" "}
            </span>
            <div>
              <h1 className="text-xl font-semibold py-4">
                HEAVY DUTY, SEISMIC PERFORMANCE
              </h1>
              <p>
                A heavy duty, seismic cover for large expansion joints of up to
                25 cm or even more upon request. A clever engineered damper
                system allows the central cover plate to move freely during
                seismic events while preventing flapping and clanging noise on
                passing vehicles.
              </p>
              <h1 className="text-xl font-semibold py-4">APPLICATION AREAS</h1>
              <ul className="list-square px-5 ">
                <li>Large seismic joints of car parks.</li>
                <li>
                  &quot;Colors, Fittings, Accessories to be discussed with our
                  representative&quot;
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product_Parking;
