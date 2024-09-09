
import Layout from "../components/Layout";
import banner from "../../src/assets/Img/about/Picture4.png";
import Quality1 from "../../src/assets/Img/quality/Quality.png";

const Quality = () => {
  return (
    <Layout>
      <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
        <img
          className="h-[30vh] md:h-[40vh] w-[100%] object-cover"
          src={banner}
          alt="banner"
        />
      </section>
      <section className="p-2 md:px-[2rem] lg:px-[2rem] xl:px-36 font-montserrat">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-10 border shadow-2xl rounded-2xl">
          <div className="border-r p-5 shadow-2xl rounded-bl-2xl rounded-tl-2xl bg-[#fdfdf7]">
            <h1 className="font-semibold text-lg">
              Quality Assurance from A Project Matrix and Virtus Interior
              Products from Aerolite
            </h1>
            <p className="mb-2">
              Aerolite Industries places primary priority on maintaining high
              quality standards. The standards we maintain have helped gain the
              trust and reputation from our customers. We invest substantial
              resources in acquiring modern testing equipment in a
              fully-equipped state of the art laboratory to test the strength,
              environmental friendliness and a host of physical properties of
              our tiles.
            </p>
            <h1 className="font-semibold text-lg">
              Rigid Controls and Testing Methods at &quot;Aerolite&quot;
            </h1>
            <p className="mb-2">
              Aerolite Industries places primary priority on maintaining high
              quality standards. The standards we maintain have helped gain the
              trust and reputation from our customers. We invest substantial
              resources in acquiring modern testing equipment in a
              fully-equipped state of the art laboratory to test the strength,
              environmental friendliness and a host of physical properties of
              our tiles.
            </p>
            <h1 className="font-semibold text-lg">
              Certifications and Approvals
            </h1>
            <p className="mb-4">
              &quot;Aerolite&quot; also invests heavily in obtaining approvals
              of testing agencies and laboratories worldwide to further ensure
              the quality of its product and its manufacturing process.
            </p>
          </div>
          <div>
            <img src={Quality1} alt="quality" className="h-auto rounded-2xl" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quality;
