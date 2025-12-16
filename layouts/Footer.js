import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
const Footer = ({ bg = true, margin = 160, footer , dark }) => {
  switch (footer) {
    case 1:
      return <Footer1 bg={bg} margin={margin} />;
    case 2:
      return <Footer2 bg={bg} margin={margin} />;
    case 3:
      return <Footer3 bg={bg} margin={margin} />;

    default:
      return <Footer1 bg={bg} margin={margin} />;
  }
};
const dark= false
export default Footer;

const Footer1 = ({ bg = true, margin = 160 }) => {
  return (
    <footer className={`${bg ? "mil-footer-with-bg" : ""} mil-p-${margin}-0 `}>
      <div className="container">
      <div className="!mb-10">
            <h6 className="mil-mb-60">Newsletter</h6>
            <p className="mil-text-xs mil-soft mil-mb-15">
              Subscribe to get the latest news form us
            </p>
            <form id="subscribeForm" className="mil-subscripe-form-footer">
              <input className="mil-input !bg-[#91B2B0] !text-white" name="EMAIL" type="email" placeholder="Email" autoComplete="off" />
              <button type="submit">
                <i className="far fa-envelope-open mil-dark" />
              </button>
              <div className="mil-checkbox-frame mil-mt-15">
                <div className="mil-checkbox">
                  <input type="checkbox" id="checkbox" className="!mb-2" defaultChecked="" />
                  <label htmlFor="checkbox" />
                </div>
                <p className="mil-text-xs mil-soft">
                  Subscribe to get the latest news
                </p>
              </div>
            </form>
          </div>
        <div className="row gap-10">
          <div className="col-xl-3 ">
            <a href="#." className="hidden md:block  ">
              <img src={dark ? "img/logo-light.png" : "img/indhanpay_logo.png"} alt="Plax" width={80} height={200} />
            </a>
<div className="video-container rounded-lg overflow-hidden shadow-2xl  mb-2">
  <div className="relative w-full " style={{ paddingBottom: '56.25%' }}>
    <iframe 
      src="https://www.youtube.com/embed/w64AIAjnKXE?si=sYvSYSc8xZH-Y_3O" 
      className="absolute top-0 left-0 w-full h-full"
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  </div>
</div>
            <div className="flex gap-5 w-full justify-center  ">
       <a href="https://instagram.com/indhanpay" target="_blank" rel="noopener noreferrer">
         <FaInstagram className="!text-[2rem] !text-black !text-center hover:!text-gray-600 transition-colors"/>
       </a>
       <a href="https://www.linkedin.com/company/indhan-paygate/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
         <FaLinkedin className="!text-[2rem] !text-black !text-center hover:!text-gray-600 transition-colors"/>
       </a>
       <a href="https://youtube.com/@indhanpay" target="_blank" rel="noopener noreferrer">
         <FaYoutube className="!text-[2rem] !text-black !text-center hover:!text-gray-600 transition-colors"/>
       </a>
       <a href="https://facebook.com/indhanpay" target="_blank" rel="noopener noreferrer">
         <FaFacebook className="!text-[2rem] !text-black !text-center hover:!text-gray-600 transition-colors"/>
       </a>
       </div>
          </div>
          <div className="col-xl-3 ">
            <h6 className="mil-mb-60">Usefull Links</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="/">Home</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="about">About Us</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="contact">Contact Us</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="services">Services</Link>
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                <Link href="price">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60">Help</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-soft mil-mb-15">
              2nd Floor, Winway World Offices, Scheme No. 54, PU-4 Commercial, Vijay Nagar, Indore, Indore, Madhya Pradesh, 452010
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
              +91 1169311430
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                info@indhanpay.com
              </li>
            </ul>
          </div>
       
        </div>
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-6">
              <p className="mil-text-s mil-soft">
                © 2025 InDhanPay 
                {/* &amp; Fintech Design */}
              </p>
            </div>
            <div className="col-xl-6">
              <p className="mil-text-s mil-text-right mil-sm-text-left mil-soft">
              Powered by {" "}
                <a href="https://www.indhanpay.com" target="blank">
                  InDhan PayGate Private Limited
                  {/* bslthemes */}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
const Footer3 = ({ bg = true, margin = 160 }) => {
  return (
    <footer className="mil-footer-dark-2 mil-p-160-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <a href="#." className="mil-footer-logo mil-mb-60">
              <img src="img/indhanpay_logo.png" alt="Plax" width={88} height={92} />
            </a>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60 mil-soft">Usefull Links</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="/">Home</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="about">About Us</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="contact">Contact Us</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="services">Services</Link>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <Link href="price">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60 mil-soft">Help</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-pale mil-mb-15">
              InDhanPay,CIDI Office, SGSITS Campus, 23 Park Road ,Indore<br />
              Madhya Pradesh 452003, INDIA
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
              +91 1169311430
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
              info@indhanpay.com
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-80">
            <h6 className="mil-mb-60 mil-soft">Newsletter</h6>
            <p className="mil-text-xs mil-pale mil-mb-15">
              Subscribe to get the latest news form us
            </p>
            <form className="mil-subscripe-form-footer">
              <input className="mil-input" type="email" placeholder="Email" />
              <button type="submit">
                <i className="far fa-envelope-open mil-dark" />
              </button>
              <div className="mil-checkbox-frame mil-mt-15">
                <div className="mil-checkbox">
                  <input type="checkbox" id="checkbox" defaultChecked="" />
                  <label htmlFor="checkbox" />
                </div>
                <p className="mil-text-xs mil-pale">
                  Subscribe to get the latest news
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-6">
              <p className="mil-text-s mil-pale">
              © 2025 InDhanPay 
                {/* © 2024 Plax Finance &amp; Fintech Design */}
              </p>
            </div>
            <div className="col-xl-6">
              <p className="mil-text-s mil-text-right mil-sm-text-left mil-pale">
                Powered by{" "}
                <a href="https://www.indhanpay.com" target="blank">
                InDhan PayGate Private Limited
                  {/* bslthemes */}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer className="mil-footer-dark mil-p-160-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mil-mb-60 mil-footer-space-fix">
            <a href="#." className="mil-footer-logo mil-logo-2 mil-mb-60">
              <img src="img/logo-light.png" alt="Plax" width={83} height={32} />
            </a>
            <ul className="mil-footer-list mil-footer-list-2">
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href="/">Home</Link>
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href="about">About Us</Link>
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href="contact">Contact Us</Link>
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href="services">Services</Link>
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                <Link href="price">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-dark-soft mil-mb-15">
              InDhanPay,CIDI Office, SGSITS Campus, 23 Park Road ,Indore<br />
              Madhya Pradesh 452003, INDIA
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
                +91 1169311430
              </li>
              <li className="mil-text-m mil-dark-soft mil-mb-15">
              info@indhanpay.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-6">
              <p className="mil-text-s mil-dark-soft">
                © 2025 InDhanPay 
                {/* &amp; Fintech Design */}
              </p>
            </div>
            <div className="col-xl-6">
              <p className="mil-text-s mil-text-right mil-sm-text-left mil-dark-soft">
                Developed by{" "}
                <a href="https://indhanpay.com" target="blank">
                  InDhan PayGate Private Limited
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
