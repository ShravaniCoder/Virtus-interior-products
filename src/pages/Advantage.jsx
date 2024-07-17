

import Layout from "../components/Layout";
import banner from "../../src/assets/Img/advantage/banner (3).png";
import humidity from "../../src/assets/Img/advantage/humidy.jpg";
import acoustic from "../../src/assets/Img/advantage/acoustic.jpg";
import terminate from "../../src/assets/Img/advantage/terminate.jpg";

const Advantage = () => {
  return (
    <Layout>
      <section className="mb-5 relative flex items-center bg-[#807f7c] font-lato">
        
        <img
          className="h-[30vh] md:h-[40vh] w-[100%] object-cover"
          src={banner}
          alt="banner"
        />
      </section>
      <section className="p-2 md:px-[2rem] lg:px-[2rem] xl:px-36 font-roboto">
        <div className="bg-gradient-to-r from-[#455F87] to-[#81aad1] shadow-2xl text-white text-base px-10 py-3 rounded-tl-extraLarge rounded-br-extraLarge">
          <p className="p-3 text-left font-extrabold">
            AEROLITE METALWORKS IS THE INDIA’S FIRST CUSTOMIZED METAL CEILING
            SOLUTION WITH SEVERAL UNIQUE FEATURES AND MEETS ALL THE REQUIREMENTS
            OF AN IDEAL CEILING FROM A BUILDING DESIGNER’S PERSPECTIVE WITH
            SPECIAL ATTENTION TO SERVICES ABOVE CEILING.
          </p>
          <p className="p-3 font-bold">
            AEROLITE METALWORKS ARE AVAILABLE IN A PLEASING RANGE OF SURFACE
            TEXTURES AND DESIGN OPTIONS TO MEET THE MOST DEMANDING AND CREATIVE
            REQUIREMENTS OF TODAY&#39;S INTERIORS. THE DESIGN RANGE IS AVAILABLE
            IN A WIDE RANGE OF GEOMETRIC PATTERNS WITH SUBTLE RELIEF AND
            PRESENTS A WEALTH OF EXCITING POSSIBILITIES, WHICH CAN BE USED TO
            CREATE TRULY INSPIRING AND IMPRESSIVE INTERIORS.
          </p>
        </div>
        <div className="bg-[#fdfde5] p-4 rounded-tr-extraLarge shadow-2xl flex space-x-6 mt-4 font-roboto">
          <div className="flex-1">
            <h2 className="text-[#455F87] text-xl font-medium mb-2">
              HUMIDITY AND WATER RESISTANCE
            </h2>
            <hr className="border-[#E5901F] mb-4" />
            <div className="flex flex-col gap-2 md:flex-row">
              <div className="flex flex-col md:w-[85%]">
                <p className="text-gray-700 text-base mb-4">
                  AEROLITE METALWORKS CEILINGS HAVE 100% RH RESISTANCE AND ARE
                  NOT AFFECTED BY MOISTURE, WATER AND EXTREMES OF TEMPERATURE.
                  SO, THE CEILING DOES NOT SOFTEN AND SAG IN HIGH HUMIDITY
                  ENVIRONMENTS. AEROLITE CAN BE STORED, INSTALLED AND USED UNDER
                  ALL WEATHER CONDITIONS INCLUDING IN NON AIR- CONDITIONED
                  BUILDINGS. THERE IS ALSO NO NEED TO CONTROL THE TEMPERATURE
                  VARIATIONS OR TO MAINTAIN ANY SPECIFIED TEMPERATURE OR
                  HUMIDITY LEVEL IN THE ROOM BY USING HEATERS, DEHUMIDIFIERS,
                  VENTILATORS, AIR CONDITIONERS, ETC. THIS ENABLES QUICK AND
                  EASY INSTALLATION OF THE CEILING AND EARLY OCCUPATION AND USE
                  OF THE BUILDING. MW.
                </p>
                <p className="text-gray-700 text-base">
                  AEROLITE CEILINGS DO NOT LOSE THEIR PHYSICAL INTEGRITY EVEN IN
                  THE CASE OF CONDENSATION FROM AIR CONDITIONING DUCTS OR IN
                  CASE OF ANY LEAKAGE OF WATER FROM THE MAIN CEILING ABOVE THE
                  SUSPENDED CEILING AND CAN BE SAFELY USED EVEN IN INDUSTRIAL
                  AND SEMI EXPOSED LOCATIONS.
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={humidity}
                  alt="humidity"
                  className="border-4 border-black/70 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fdfde5] p-4 shadow-2xl flex space-x-6 mt-4 font-roboto">
          <div className="flex-1">
            <h2 className="text-[#455F87] text-xl font-medium mb-2">
              ACOUSTICS
            </h2>
            <hr className="border-[#E5901F] mb-4" />
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-col md:w-[85%]">
                <p className="text-gray-700 text-base mb-4">
                  AEROLITE METALWORKS IS A SOUND ABSORBING MATERIAL THAT NEITHER
                  TRANSMITS NOR AUGMENTS SOUND. THUS AEROLITE METALWORKS ARE
                  PERFECT FOR ADJUSTING THE ACOUSTICS IN AREAS COVERED BY THE
                  CEILING BY USING TILES WITH PERFORATION, OR IN COMBINATION
                  WITH PLAIN, STD PERFORATED , MICROPERFORATED DESIGN TILES. IT
                  IS ESSENTIAL TO DEFINE THE ACOUSTICS REQUIREMENT EARLY IN THE
                  DESIGN STAGE. THE FOLLOWING SHOULD BE CONSIDERED i.e., THE
                  APPLIED BUILDING MATERIALS, SURFACES WITHIN THE ROOM, VOLUME
                  OF THE ROOM, SOFT FURNISHINFG AND FINALLY THE PROPOSED USE OF
                  THE ROOM.
                </p>
                <p className="text-gray-700 text-base ">
                  THERE ARE TWO ASPECTS OF ACOUSTICS: THE SOUND ABSORPTION
                  PERFORMANCE OF THE TILE WHICH DEALS WITH THE REDUCTION OF
                  SOUND EMANATING FROM WITHIN THE ROOM, AND MEASURED AS THE
                  NOISE REDUCTION COEFFICIENT ( NRC ) (FROM 0.1 TO 1) AND SOUND
                  ATTENUATION (STA) WHICH DEALS WITH THE TRANSMISSION OF SOUND
                  BETWEEN ADJACENT AREAS AND MEASURED IN DECIBETS (DB).
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={acoustic}
                  alt="acoustic"
                  className="border-4 border-black/70 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#fdfde5] p-4 shadow-2xl rounded-br-extraLarge flex space-x-6 mt-4 font-roboto">
          <div className="flex-1">
            <h2 className="text-[#455F87] text-xl font-medium mb-2">
              DURABILITY
            </h2>
            <hr className="border-[#E5901F] mb-4" />
            <p className="text-gray-700 text-base mb-4">
              AEROLITE METALWORKS HAVE HIGH FLEXURAL STRENGTH, AS A RESULT OF
              THEIR COMPOSITION AND MANUFACTURING PROCESS. AEROLITE METALWORKS
              MINIMIZES DAMAGE IN HANDLING, TRANSPORT, STORAGE AND INSTALLATION
              OF THE TILES, BESIDES FACILITATING DEMOUNTABILITY AS PER SERVICE
              REQUIREMENTS.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#455F87] to-[#81aad1] mb-4 shadow-xl text-black/70 text-base px-10 mt-4 py-3 rounded-tr-extraLarge rounded-bl-extraLarge">
          <div className="flex-1">
            <h2 className="text-white text-xl font-medium mb-2">
              LIGHT REFLECTANCE
            </h2>
            <hr className="border-[#E5901F] mb-4" />
            <p className="text-white/95 text-base mb-4">
              THE EXCELLENT LIGHT REFLECTANCE OF AEROLITE METALWORKS HELPS TO
              MINIMIZE LIGHTING OPERATING EXPENSES BESIDES ENSURING MAXIMUM
              EFFECTIVENESS OF INDIRECT LIGHTING.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-white text-xl font-medium mb-2">
              TERMITE RESISTANCE:
            </h2>
            <hr className="border-[#E5901F] mb-4" />
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-col md:w-[85%]">
                <p className="text-white/95 text-base mb-4">
                  AEROLITE CEILINGS ARE MADE FROM INORGANIC MATERIALS AND ARE
                  IMMUNE TO TERMITE ATTACK.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={terminate}
                  alt="acoustic"
                  className="border-4 border-black/70 h-[20vh]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Advantage;
