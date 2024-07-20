import Brochure from "../../public/Aerolite Brochure.pdf"

const BrochurePage = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <iframe
        src={Brochure}
        title="Brochure"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default BrochurePage;
