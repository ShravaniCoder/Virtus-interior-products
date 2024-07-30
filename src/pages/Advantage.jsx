import { useState } from "react";
import Layout from "../components/Layout";
import banner from "../../src/assets/Img/advantage/banner (3).png";
import humidity from "../../src/assets/Img/advantage/humidy.jpg";
import acoustic from "../../src/assets/Img/advantage/acoustic.jpg";
import terminate from "../../src/assets/Img/advantage/terminate.jpg";
import CloudDropdown from "../../src/components/AdvantageDropdown";

const Advantage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleDropdownClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const dropdownData = [
    {
      title: "1. HUMIDITY AND WATER RESISTANCE",
      content: [
        "AEROLITE METALWORKS CEILINGS HAVE 100% RH RESISTANCE AND ARE NOT AFFECTED BY MOISTURE, WATER AND EXTREMES OF TEMPERATURE. SO, THE CEILING DOES NOT SOFTEN AND SAG IN HIGH HUMIDITY ENVIRONMENTS. AEROLITE CAN BE STORED, INSTALLED AND USED UNDER ALL WEATHER CONDITIONS INCLUDING IN NON AIR- CONDITIONED BUILDINGS. THERE IS ALSO NO NEED TO CONTROL THE TEMPERATURE VARIATIONS OR TO MAINTAIN ANY SPECIFIED TEMPERATURE OR HUMIDITY LEVEL IN THE ROOM BY USING HEATERS, DEHUMIDIFIERS, VENTILATORS, AIR CONDITIONERS, ETC. THIS ENABLES QUICK AND EASY INSTALLATION OF THE CEILING AND EARLY OCCUPATION AND USE OF THE BUILDING. MW.",
        "AEROLITE CEILINGS DO NOT LOSE THEIR PHYSICAL INTEGRITY EVEN IN THE CASE OF CONDENSATION FROM AIR CONDITIONING DUCTS OR IN CASE OF ANY LEAKAGE OF WATER FROM THE MAIN CEILING ABOVE THE SUSPENDED CEILING AND CAN BE SAFELY USED EVEN IN INDUSTRIAL AND SEMI EXPOSED LOCATIONS.",
      ],
      image: humidity,
    },
    {
      title: "2. ACOUSTICS",
      content: [
        `AEROLITE METALWORKS IS A SOUND ABSORBING MATERIAL THAT NEITHER TRANSMITS NOR AUGMENTS SOUND. THUS AEROLITE METALWORKS ARE PERFECT FOR ADJUSTING THE ACOUSTICS IN AREAS COVERED BY THE CEILING BY USING TILES WITH PERFORATION, OR IN COMBINATION WITH PLAIN, STD PERFORATED, MICROPERFORATED DESIGN TILES. IT IS ESSENTIAL TO DEFINE THE ACOUSTICS REQUIREMENT EARLY IN THE DESIGN STAGE. THE FOLLOWING SHOULD BE CONSIDERED I.E., THE APPLIED BUILDING MATERIALS, SURFACES WITHIN THE ROOM, VOLUME OF THE ROOM, SOFT FURNISHING AND FINALLY THE PROPOSED USE OF THE ROOM.`,
        `THERE ARE TWO ASPECTS OF ACOUSTICS: THE SOUND ABSORPTION PERFORMANCE OF THE TILE WHICH DEALS WITH THE REDUCTION OF SOUND EMANATING FROM WITHIN THE ROOM, AND MEASURED AS THE NOISE REDUCTION COEFFICIENT (NRC) (FROM 0.1 TO 1) AND SOUND ATTENUATION (STA) WHICH DEALS WITH THE TRANSMISSION OF SOUND BETWEEN ADJACENT AREAS AND MEASURED IN DECIBELS (DB).`,
      ],
      image: acoustic,
    },
    {
      title: "3. DURABILITY",
      content: [
        "AEROLITE METALWORKS HAVE HIGH FLEXURAL STRENGTH, AS A RESULT OF THEIR COMPOSITION AND MANUFACTURING PROCESS. AEROLITE METALWORKS MINIMIZES DAMAGE IN HANDLING, TRANSPORT, STORAGE AND INSTALLATION OF THE TILES, BESIDES FACILITATING DEMOUNTABILITY AS PER SERVICE REQUIREMENTS.",
      ],
    },
    {
      title: "4. LIGHT REFLECTANCE",
      content: [
        "THE EXCELLENT LIGHT REFLECTANCE OF AEROLITE METALWORKS HELPS TO MINIMIZE LIGHTING OPERATING EXPENSES BESIDES ENSURING MAXIMUM EFFECTIVENESS OF INDIRECT LIGHTING.",
      ],
    },
    {
      title: "5. TERMITE RESISTANCE",
      content: [
        "AEROLITE CEILINGS ARE MADE FROM INORGANIC MATERIALS AND ARE IMMUNE TO TERMITE ATTACK.",
      ],
      image : terminate,
    },
  ];
  return (
    <Layout>
      <section className="mb-5 relative flex items-center font-lato">
        <img
          className="h-[30vh] md:h-[40vh] w-[100%] object-cover"
          src={banner}
          alt="banner"
        />
      </section>
      <section className="p-2 md:px-[2rem] lg:px-[2rem] xl:px-36 font-roboto">
        <div className="flex md:flex-row flex-col">
          <div className=" bg-white relative">
            <div className="bg-white bg-opacity-75 p-6 rounded-md shadow-lg text-left">
              <h1 className=" text-lg">
                AEROLITE METALWORKS IS THE INDIA’S FIRST CUSTOMIZED METAL
                CEILING SOLUTION WITH SEVERAL UNIQUE FEATURES AND MEETS ALL THE
                REQUIREMENTS OF AN IDEAL CEILING FROM A BUILDING DESIGNER’S
                PERSPECTIVE WITH SPECIAL ATTENTION TO SERVICES ABOVE CEILING.
              </h1>
              <p className=" text-lg mt-4">
                AEROLITE METALWORKS ARE AVAILABLE IN A PLEASING RANGE OF SURFACE
                TEXTURES AND DESIGN OPTIONS TO MEET THE MOST DEMANDING AND
                CREATIVE REQUIREMENTS OF TODAY&#39;S INTERIORS. THE DESIGN RANGE
                IS AVAILABLE IN A WIDE RANGE OF GEOMETRIC PATTERNS WITH SUBTLE
                RELIEF AND PRESENTS A WEALTH OF EXCITING POSSIBILITIES, WHICH
                CAN BE USED TO CREATE TRULY INSPIRING AND IMPRESSIVE INTERIORS.
              </p>
            </div>
          </div>
        </div>

        <section className="py-10">
          <h1 className="text-slate-900 lg:text-5xl text-4xl font-bold text-center mb-7">
            What we offer
          </h1>
          {dropdownData.map((dropdown, index) => (
            <CloudDropdown
              key={index}
              title={dropdown.title}
              image={dropdown.image}
              content={dropdown.content}
              isOpen={openIndex === index}
              onClick={() => handleDropdownClick(index)}
            />
          ))}
        </section>

        
      </section>
    </Layout>
  );
};

export default Advantage;
