const Footer = () => {
  return (
    <footer className="bg-zinc-950 h-48 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h2 className="text-white mb-4 uppercase">A Family of Driven brands</h2>
        <div className="flex justify-center items-center mt-4">
            <a className="mr-8" href="">
                <img src="/src/assets/footer/db_logo.png" alt="" />
            </a>
            <a className="mr-8" href="">
                <img src="/src/assets/footer/abra-logo.png" alt="" />
            </a>
            <a className="mr-8" href="">
                <img src="/src/assets/footer/carstar-new-logo.png" alt="" />
            </a>
            <a className="mr-8" href="">
                <img src="/src/assets/footer/maaco-logo.png" alt="" />
            </a>
            <a className="mr-8" href="">
                <img src="/src/assets/footer/meineke-canada.png" alt="" />
            </a>
            <a className="mr-8" href="">
                <img src="/src/assets/footer/take5-logo2.png" alt="" />
            </a>
            <a className="mr-8" href="">
                <img src="/src/assets/footer/radiator-logo.png" alt="" />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
