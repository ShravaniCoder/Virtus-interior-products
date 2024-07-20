import Layout from "../../components/Layout";
import largeImage from "../../../src/assets/Img/pr0ducts/Grille/grille.jpg";


const Product_grille = () => {
  return (
    <Layout>
      <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
        <div className="h-[30vh] md:h-[40vh] w-[100%] bg-[#F5F5F5] flex flex-col items-center justify-end">
          <h1 className="md:text-xl text-sm uppercase text-[#4F8BAD] font-bold ">
            Acoustics
          </h1>
          <h2 className="md:text-5xl text-2xl text-center uppercase font-bold text-[#455D8B] p-4 ">
            Aerolite wood works grille
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
        </div>
    </Layout>
  );
}

export default Product_grille;
