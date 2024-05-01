import carLogo from "../../assets/carstar-logo.webp";

const FooterBanner = () => {
  return (
    <div className="h-[30vh] w-full flex flex-col justify-center items-start bg-[url('src/assets/footer/footer-carbon.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="flex w-full flex-row items-start justify-evenly">
        <img src={carLogo} alt="titlelogo" />
        <div className="flex flex-row items-start justify-around w-1/3 text-sm text-white">
          <ul className="uppercase font-semibold px-6">
            <li className="hover:underline">Our services</li>
            <li className="hover:underline">why carstar</li>
            <li className="hover:underline">faqs</li>
            <li className="hover:underline">customer service</li>
          </ul>
          <ul className="uppercase font-semibold">
            <li className="hover:underline">press and news</li>
            <li className="hover:underline">locations</li>
            <li className="hover:underline">carrers</li>
            <li className="hover:underline">Charitable</li>
            <li className="hover:underline">foundation</li>
          </ul>
          <ul className="uppercase font-semibold">
            <li className="hover:underline">Franchise opportunities</li>
            <li className="hover:underline">fleet services</li>
            <li className="hover:underline">carstar Blog</li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FooterBanner;
