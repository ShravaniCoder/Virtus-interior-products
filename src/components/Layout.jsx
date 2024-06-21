import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
