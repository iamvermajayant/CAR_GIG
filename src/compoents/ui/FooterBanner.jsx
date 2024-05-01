import carLogo from "../../assets/carstar-logo.webp";

const FooterBanner = () => {
  return (
    <div className="h-[30vh] w-full flex flex-col justify-center items-start bg-[url('src/assets/footer/footer-carbon.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="flex w-full flex-row items-start justify-items-start">
        <img src={carLogo} alt="titlelogo" />
        <div className="flex flex-row items-start justify-around w-1/3 text-sm text-white">
          <ul className="uppercase font-semibold">
            <li>Our services</li>
            <li>why carstar</li>
            <li>faqs</li>
            <li>customer service</li>
          </ul>
          <ul className="uppercase font-semibold">
            <li>press and news</li>
            <li>locations</li>
            <li>carrers</li>
            <li>Charitable</li>
            <li>foundation</li>
          </ul>
          <ul className="uppercase font-semibold">
            <li>Franchise opportunities</li>
            <li>fleet services</li>
            <li>carstar Blog</li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FooterBanner;
