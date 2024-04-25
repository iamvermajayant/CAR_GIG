import Card from "../compoents/ui/Card";
import "../css/section.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import cardsData from "../assets/data/cards";

const Services = () => {
  return (
    <>
      <section className="box h-[100vh] w-full flex justify-center items-stat bg-[url('/src/assets/car.jpg')] bg-no-repeat bg-cover bg-center">
        <div>
          <div className="flex justify-between h-[112vh] flex-col items-center">
            <h2 className="text-gray-300 font-extralight mt-28 text-8xl mr-12">
              Car Service
            </h2>
            <div className="flex w-[450px] p-4  flex-col items-center bg-blue-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
              <FaRegCalendarAlt size={45} color="#fff" />
              <h2 className="text-white text-2xl mt-4">Get A free Estimate</h2>
              <div className="flex flex-row gap-4 mt-6 mb-6">
                <input
                  type="text"
                  className="py-2 outline-none border-none px-1"
                  placeholder="Enter the city name"
                />
                {/* <button className="px-2  bg-gradient-to-tl from-red-500 to-red-800 outline-none text-white  ">Submit</button> */}
                <button className="px-2 bg-gradient-to-tl from-red-500 to-red-800 outline-none text-white hover:from-red-600 hover:to-red-900">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[30vh] bg-[#000000]">
        <h2 className="text-white text-5xl pt-36 text-center">
          <span className="text-red-600 font-bold hover:text-red-900 ease-in">
            CARSTAR
          </span>{" "}
          Services
        </h2>
        <p className="text-white text-center px-60 mt-12 font-semibold text-lg">
          CARSTAR features state-of-the-art unibody and frame repair equipment,
          expert painting, towing assistance, a nationwide warranty for most
          repairs, and takes pride in offering a clean, inviting environment.
          Our certified technicians are trained to work on all makes and models
          and participate in ongoing education programs on the latest vehicle
          technologies and materials.
        </p>
      </section>
      <section className="h-screen bg-[#000000]">
        <div className="flex justify-center items-center py-36 h-[100vh]">
          <div
            className="h-[60vh] w-full relative"
            style={{
              backgroundImage: "url('/src/assets/carstar-cares-star.jpg')",
              backgroundPosition: "50%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="text-white absolute flex items-center bottom-0 left-0 right-0 backdrop bg-black/30 h-[30vh] ">
              new Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              sit.
            </div>
          </div>
          <div
            className="h-[60vh] w-full relative flex justify-center"
            style={{
              backgroundImage: "url('/src/assets/national-warranty.jpg')",
              backgroundPosition: "50%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="text-white absolute flex items-center justify-center bottom-0 left-0 right-0 backdrop bg-black/30 h-[30vh]">
              new Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              sit.
            </div>
          </div>
          <div
            className="h-[60vh] w-full relative flex justify-center"
            style={{
              backgroundImage: "url('/src/assets/rental-car.jpg')",
              backgroundPosition: "50%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="text-white absolute flex items-center justify-center bottom-0 left-0 right-0 backdrop bg-black/30 h-[30vh] ">
              new Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              sit.
            </div>
          </div>
        </div>
      </section>
      <section className="h-full bg-[#000000] flex justify-center">
        <div className="w-fit grid justify-center grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        {cardsData.map((card, index)=>(
          <div key={index} className="flex justify-center">
          <Card title={card.title} desc={card.desc} cardimg={card.cardimg} />
        </div>
        ))}
        </div>
      </section>
    </>
  );
};

export default Services;
