
import { tilesData } from "../Data/Info";


const ProductCard = () => {

  return (
    <section className="grid grid-cols-1 md:grid-cols-4">
      {tilesData.map((menu, index) => (
        <div className="my-10 px-2" key={index}>
          <div className="border flex flex-col p-4 gap-2">
            <div>
              <img src={menu.image} alt={`Property ${index}`} className="" />
            </div>
            <div>
              <p className="text-lg font-bold">{menu.type}</p>
              <p className="text-lg">{menu.material}</p>
              <button className="mt-2 px-4 py-2 bg-[#5f3afc] text-xs font-semibold text-white rounded-3xl">
                {menu.button}
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductCard;
