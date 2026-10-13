import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div className="container-group">
        <div className="col-lg-10 mx-auto">
          <div className="footer_grid">
            <div className="footer_left">
              <ul>
                <li>
                  <Link href="/about">{"About"}</Link>
                </li>
                <li>
                  <Link href="/education">{"Education"}</Link>
                </li>
                <li>
                  <Link href="/business">{"Business "}</Link>
                </li>
                <li>
                  <Link href="/investors-informations">{"Investors"}</Link>
                </li>
                <li>
                  <Link href="/careers">{"Careers"}</Link>
                </li>
                <li>
                  <Link href="/contact-us">{"Contact Us"}</Link>
                </li>
              </ul>
            </div>
            <div className="footer_right">
              <div className="social-icon">
                <Link href="#">
                  <img src="/images/facebook-icon.svg" />
                </Link>
                <Link href="#">
                  <img src="/images/x-icon.svg" />
                </Link>
                <Link href="#">
                  <img src="/images/youtube-icon.svg" />
                </Link>
                <Link href="#">
                  <img src="/images/instagram-icon.svg" />
                </Link>
                <Link href="#">
                  <img src="/images/linkdin-icon.svg" />
                </Link>
              </div>
              <div className="copyright">
                <p>
                  {"Copyright © Samtel Avionics. All rights Reserved."}
                  <br />
                  {
                    " Website Design and Development\n                                by\n                                "
                  }
                  <Link href="#">{"Sterco"}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
