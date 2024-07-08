import { useState } from "react";
import { tilesData } from "../Data/Info";
import Dropdown from "../components/Dropdown";
import ProductCard from "../components/ProductCard";
import Layout from "../components/Layout";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const productTypes = {
  "Standard Metal Ceiling": [
    "Aerolite Lay In",
    "Aerolite Clip In",
    "Aerolite Open Cell",
    "Aerolite Baffle",
    "TRIANGULAR Open Cell",
  ],
  Acoustics: [
    "Aerolite wood works linear",
    "Aerolite wood works grille",
    "Channeled wood works",
  ],
  "Customized Metal Ceiling": [
    "C-plancks",
    "F-plancks",
    "Corridor planks",
    "Custom pawl & hook on system",
  ],
};

const FilterSearch = () => {
  const [selectedProductLine, setSelectedProductLine] =
    useState("All products");
  const [selectedMaterial, setSelectedMaterial] = useState("All materials");
  const [selectedProductType, setSelectedProductType] =
    useState("All product types");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleProductLineChange = (productLine) => {
    setSelectedProductLine(productLine);
    setSelectedProductType("All product types"); // Reset product type on product line change
  };

  const handleMaterialChange = (material) => {
    setSelectedMaterial(material);
    setSelectedProductType("All product types"); // Reset product type on material change
  };

  const handleProductTypeChange = (productType) => {
    setSelectedProductType(productType);
  };

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const filteredTilesData = tilesData.filter((tile) => {
    return (
      (selectedProductLine === "All products" ||
        tile.line === selectedProductLine) &&
      (selectedMaterial === "All materials" ||
        tile.material === selectedMaterial) &&
      (selectedProductType === "All product types" ||
        tile.productType === selectedProductType) &&
      (searchKeyword === "" ||
        tile.line.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        tile.material.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        tile.productType.toLowerCase().includes(searchKeyword.toLowerCase()))
    );
  });

  // Dynamic product types based on selected product line and material
  const getProductTypes = () => {
    if (selectedMaterial === "Metal" && productTypes[selectedProductLine]) {
      return productTypes[selectedProductLine];
    } else if (selectedMaterial === "All materials") {
      return ["All product types"];
    } else {
      return ["No specific types"];
    }
  };

  return (
    <Layout>
      <div className="px-4 sm:px-10 md:px-[2rem] lg:px-[2rem] xl:px-36 md:pt-5 font-montserrat">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div>
            <Dropdown
              options={["All products", ...Object.keys(productTypes)]}
              selectedOption={selectedProductLine}
              onSelect={handleProductLineChange}
            />
          </div>
          <div>
            <Dropdown
              options={[
                "All materials",
                "Metal",
                "Mineral & soft fibre",
                "Wood Design",
                "Wool Wool",
              ]}
              selectedOption={selectedMaterial}
              onSelect={handleMaterialChange}
            />
          </div>
          <div>
            <Dropdown
              options={getProductTypes()}
              selectedOption={selectedProductType}
              onSelect={handleProductTypeChange}
            />
          </div>
          <div className="relative text-sm">
            <input
              type="text"
              placeholder="Product name"
              value={searchKeyword}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:border-transparent"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        {filteredTilesData.length === 0 && (
          <div>
            <ProductCard />
          </div>
        )}
      </div>
      <div className="bg-gray-50 font-montserrat">
        <div className="px-4 sm:px-10 md:px-[2rem] lg:px-[2rem] xl:px-36">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
            {filteredTilesData.map((menu, index) => (
              <div className="my-6 px-2" key={index}>
                <div className="border border-gray-200 shadow-md flex flex-col">
                  <Link to={menu.link}>
                    <div className="overflow-hidden group relative">
                      <img
                        src={menu.image}
                        alt={`Property ${index}`}
                        className="object-cover h-[35vh] w-full object-center transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:bg-black/40 transition-opacity duration-300 group-hover:opacity-100">
                        <h1 className="text-white hover:underline">
                          See Product Details
                        </h1>
                      </div>
                    </div>
                  </Link>
                  <div className="px-4 py-2 bg-white">
                    <p className="text-lg font-medium">{menu.productType}</p>
                    
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default FilterSearch;
