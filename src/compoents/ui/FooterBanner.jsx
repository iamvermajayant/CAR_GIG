import carLogo from '../../assets/carstar-logo.webp'

const FooterBanner = () => {
  return (
    <div className="h-[30vh] w-full flex flex-col justify-center items-start bg-[url('src/assets/footer/footer-carbon.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="flex w-full flex-row items-start justify-start">
            <img src={carLogo} alt="" />
            <ul>
                <li>hi</li>
                <li>hello</li>
            </ul>
            <ul>
                <li>hi</li>
                <li>hi</li>
                <li>hell</li>
            </ul>
            <ul>
                <li>hi</li>
                <li>hi</li>
                <li>hell</li>
                <li>hell no</li>
            </ul>
        </div>
        <div>

        </div>
    </div>
  )
}

export default FooterBanner