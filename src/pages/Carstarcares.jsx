import carbannerimg from "../assets/carstar-foundation-logo.png";
import carsustanibility from '../assets/sustainability-logo.png';
import soapsitup from '../assets/soaps-it-up.png';
import cflogo from '../assets/cf-logo.png';



const Carstarcares = () => {
  return (
    <section className="flex flex-col">
      <div className="h-[250px] mt-[6rem] w-full flex justify-center items-start bg-[url('/src/assets/carstar-cares-banner.jpg')] bg-no-repeat bg-cover"></div>
      <div className="bg-white w-full flex px-24 inset-0 border-b-2 shadow py-3 text-sm">
        Home / Carstar Cares / Services
      </div>
      <div className="flex flex-col justify-center h-full px-24 bg-black pt-12">
        <h2 className="text-red-600 font-bold hover:text-red-900 ease-in text-5xl">
          CARSTAR
          <span className="text-white ml-2 font-normal">Cares</span>
        </h2>
        <p className="text-white mt-2 mb-12">
          One of the key tenets of our CARSTAR business philosophy is caring for
          the communities we work and live in. We demonstrate this through the
          CARSTAR Foundation, where funds raised go towards cystic fibrosis
          research, care and advocacy. In addition to our cystic fibrosis
          fundraising efforts, CARSTAR also works with local groups across
          Canada to donate vehicles to those in need, sponsor community causes
          and help protect our environment.
        </p>
      </div>
      <div className="flex flex-col justify-center h-full px-24 bg-[#212122] pt-6">
        <h2 className="text-red-600 font-bold hover:text-red-900 ease-in text-5xl">
          CARSTAR
          <span className="text-white ml-2 font-normal">Cares</span>
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center">
            <p className="text-white">
              One of the key tenets of our CARSTAR business philosophy is caring
              for the communities we work and live in. We demonstrate this
              through the CARSTAR Foundation, where funds raised go towards
              cystic fibrosis research, care and advocacy. In addition to our
              cystic fibrosis fundraising efforts, CARSTAR also works with local
              groups across Canada to donate vehicles to those in need, sponsor
              community causes and help protect our environment.
            </p>
            <img
              src={carbannerimg}
              alt=""
              className="h-32 w-[350px] mb-16 ml-4"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full px-24 bg-[#000] pt-6">
        <h2 className="text-red-600 font-bold hover:text-red-900 ease-in text-5xl">
          CARSTAR
          <span className="text-white ml-2 font-normal">Cares</span>
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center">
            <p className="text-white">
              One of the key tenets of our CARSTAR business philosophy is caring
              for the communities we work and live in. We demonstrate this
              through the CARSTAR Foundation, where funds raised go towards
              cystic fibrosis research, care and advocacy. In addition to our
              cystic fibrosis fundraising efforts, CARSTAR also works with local
              groups across Canada to donate vehicles to those in need, sponsor
              community causes and help protect our environment.
            </p>
            <img
              src={cflogo}
              alt=""
              className="h-32 w-[350px] mb-16 ml-4"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full px-24 bg-[#000] pt-6">
        <h2 className="text-red-600 font-bold hover:text-red-900 ease-in text-5xl">
          CARSTAR
          <span className="text-white ml-2 font-normal">Cares</span>
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center">
            <p className="text-white">
              One of the key tenets of our CARSTAR business philosophy is caring
              for the communities we work and live in. We demonstrate this
              through the CARSTAR Foundation, where funds raised go towards
              cystic fibrosis research, care and advocacy. In addition to our
              cystic fibrosis fundraising efforts, CARSTAR also works with local
              groups across Canada to donate vehicles to those in need, sponsor
              community causes and help protect our environment.
            </p>
            <img
              src={soapsitup}
              alt=""
              className="h-32 w-[350px] mb-16 ml-4"
            />
          </div>
        </div>
      </div><div className="flex flex-col justify-center h-full px-24 bg-[#000] pt-6">
        <h2 className="text-red-600 font-bold hover:text-red-900 ease-in text-5xl">
          CARSTAR
          <span className="text-white ml-2 font-normal">Cares</span>
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-center">
            <p className="text-white">
              One of the key tenets of our CARSTAR business philosophy is caring
              for the communities we work and live in. We demonstrate this
              through the CARSTAR Foundation, where funds raised go towards
              cystic fibrosis research, care and advocacy. In addition to our
              cystic fibrosis fundraising efforts, CARSTAR also works with local
              groups across Canada to donate vehicles to those in need, sponsor
              community causes and help protect our environment.
            </p>
            <img
              src={carsustanibility}
              alt=""
              className="h-32 w-[350px] mb-16 ml-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carstarcares;
