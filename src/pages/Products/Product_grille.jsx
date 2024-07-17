import Layout from "../../components/Layout"
import banner from "../../../src/assets/Img/pr0ducts/Grille/Img1.jpg";

const Product_grille = () => {
  return (
    <Layout>
      <section className="mb-10 relative flex items-center bg-[#807f7c] font-lato">
        <img
          className="h-[30vh] md:h-[40vh] w-[100%] object-cover"
          src={banner}
          alt="banner"
        />
      </section>
    </Layout>
  );
}

export default Product_grille;
