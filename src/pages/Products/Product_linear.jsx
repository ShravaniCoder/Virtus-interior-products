import Layout from "../../components/Layout";

const Product_linear = () => {
  return (
    <Layout>
      <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
        <div className="h-[30vh] md:h-[40vh] w-[100%] bg-[#F5F5F5] flex flex-col items-center justify-end">
          <h1 className="md:text-xl text-sm uppercase text-[#4F8BAD] font-bold ">
            Acoustics
          </h1>
          <h2 className="md:text-5xl text-2xl text-center uppercase font-bold text-[#455D8B] p-4 ">
            Aerolite wood works linear
          </h2>
        </div>
      </section>
    </Layout>
  );
}

export default Product_linear;
