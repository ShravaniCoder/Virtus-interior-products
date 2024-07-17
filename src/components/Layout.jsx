import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GoToTop from "./GoToTop";
import ScrollToTop from "./ScrollToTop";



const Layout = ({ children }) => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      <div>{children}</div>
      <GoToTop />
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
