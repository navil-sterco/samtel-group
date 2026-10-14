import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container-group">
          <div className="col-lg-10 mx-auto">
            <div className="footer-logo">
              <Link href="https://samtel-group.vercel.app/"> <img src="/images/mobile-logo.webp" alt="Facebook"  className="img-fluid"/></Link>
            </div>

            <div className="footer_grid">
              <div className="footer_left">
                <div className="footer_address">
                  <h4>Design and Production Facilities:</h4>
                  <p>2nd Floor, Plot No. 288-A, Udyog Vihar Phase-IV, Gurugram 122015, Haryana, INDIA.</p>
                  <p className="mobile"><img src="/images/phone.webp" alt="call"  className="img-fluid"/> <Link href="tel:+91 124 4682000"> +91 124 4682000</Link></p>
                  <p className="mobile"> <img src="/images/print.svg" alt="fax"  className="img-fluid"/> +91 124 4682029</p>
                </div>
                 <div className="footer_address">
                  <h4>Registered Office:</h4>
                  <p>1212, 12th Floor, 43, Chiranjiv Tower, Nehru Place, New Delhi - 110019</p>
                   <p className="mobile"><img src="/images/phone.webp" alt="call"  className="img-fluid"/> <Link href="tel:+91 11 40555700"> +91 11 40555700</Link></p>
                     <p className="mobile"> <img src="/images/print.svg" alt="fax"  className="img-fluid"/>+91 11 41555006</p>
                         
                </div>

                {/* <ul>
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
                </ul> */}
              </div>
              <div className="footer_right">
                <div className="social-icon">
                  <Link href="#">
                    <img src="/images/facebook-icon.svg" alt="Facebook" />
                  </Link>
                  <Link href="#">
                    <img src="/images/x-icon.svg" alt="X" />
                  </Link>
                  <Link href="#">
                    <img src="/images/youtube-icon.svg" alt="YouTube" />
                  </Link>
                  <Link href="#">
                    <img src="/images/instagram-icon.svg" alt="Instagram" />
                  </Link>
                  <Link href="#">
                    <img src="/images/linkdin-icon.svg" alt="LinkedIn" />
                  </Link>
                </div>
                <div className="copyright">
                  <p>
                    {"Copyright \u00a9 Samtel Avionics. All rights Reserved."}
                    <br />
                    {" Website Design and Development by "}
                    <Link href="#">{"Sterco"}</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="mobile-panel industries-panel" id="industriesPanel">
        <div className="mobile-panel-content">
          <div className="panel-title">
            <span>{"INDUSTRIES"}</span>
          </div>
          <div className="industries-grid">
            <Link href="/defence-and-avionics" className="industry-card1 airborne">
              <img src="/images/airborne.webp" alt="Airborne Systems" />
              <span>{"Airborne Systems"}</span>
            </Link>
            <Link href="/business" className="industry-card1 naval">
              <img src="/images/defence.webp" alt="Naval Systems" />
              <span>{"Naval Systems"}</span>
            </Link>
            <Link href="/space-and-satellite-communication" className="industry-card1 space">
              <img src="/images/space.webp" alt="Space and Satellite" />
              <span>{"Space & Satellite"}</span>
            </Link>
            <Link href="/uav-drones" className="industry-card1 unmanned">
              <img src="/images/unmanned.webp" alt="Unmanned Systems" />
              <span>{"Unmanned Systems"}</span>
            </Link>
            <Link href="/railway-electronics" className="industry-card1 railways">
              <img src="/images/railway.webp" alt="Railways" />
              <span>{"Railways"}</span>
            </Link>
            <Link href="/optronics" className="industry-card1 industrial">
              <img src="/images/optronics.webp" alt="Optronics" />
              <span>{"Optronics"}</span>
            </Link>
            <Link href="/education" className="industry-card1 land">
              <img src="/images/education-new.webp" alt="Education" />
              <span>{"Education"}</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mobile-panel contact-panel" id="contactPanel">
        <div className="mobile-panel-content">
          <section className="contact-section">
            <div className="panel-title">
              <span>{"CONTACT"}</span>
            </div>
            <div className="contact-list">
              <div className="contact-block">
                <h2>{"Design & Production Facilities"}</h2>
                <p>{"2nd Floor, Plot No. 288-A, Udyog Vihar Phase-IV, Gurugram 122015, Haryana, INDIA."}</p>
                <div className="contact-phone">
                  <a href="tel:+911244682000">{"+91 124 4682000"}</a>
                </div>
                <div className="contact-line" />
              </div>
              <div className="contact-block">
                <h2>{"Registered Office"}</h2>
                <p>{"1212, 12th Floor, 43, Chiranjiv Tower, Nehru Place, New Delhi - 110019"}</p>
                <div className="contact-phone">
                  <a href="tel:+911140555700">{"+91 11 40555700"}</a>
                </div>
                <div className="contact-line" />
              </div>
              <div className="contact-email-area">
                <div className="email-icon" aria-hidden="true">
                  {"\u2709"}
                </div>
                <p className="email-text">{"For Business queries, please contact:"}</p>
                <a className="email-link" href="mailto:marketing@samtelgroup.com">
                  {"marketing@samtelgroup.com"}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <nav className="mobile-menu" id="mobileMenu" aria-label="Mobile menu">
        <div className="mobile-menu-inner">
          <ul>
            <li className="mobile-menu-item has-submenu">
              <button className="submenu-toggle" type="button">
                <span>{"Who we are"}</span>
                <span className="menu-arrow">{"\u203a"}</span>
              </button>
              <div className="submenu">
                <Link href="/about">{"About"}</Link>
                <Link href="/legacy-business">{"Legacy Business"}</Link>
              </div>
            </li>
            <li className="mobile-menu-item has-submenu">
              <button className="submenu-toggle" type="button">
                <span>{"What we do"}</span>
                <span className="menu-arrow">{"\u203a"}</span>
              </button>
              <div className="submenu">
                <Link href="/business">{"Business"}</Link>
                <Link href="/education">{"Education"}</Link>
              </div>
            </li>
            <li className="mobile-menu-item has-submenu">
              <button className="submenu-toggle" type="button">
                <span>{"Industries"}</span>
                <span className="menu-arrow">{"\u203a"}</span>
              </button>
              <div className="submenu">
                <Link href="/defence-and-avionics">{"Defence & Avionics"}</Link>
                <Link href="/railway-electronics">{"Railway Electronics"}</Link>
                <Link href="/space-and-satellite-communication">{"Space & Satellite"}</Link>
                <Link href="/uav-drones">{"UAVs & Drones"}</Link>
              </div>
            </li>
            <li className="mobile-menu-item has-submenu">
              <button className="submenu-toggle" type="button">
                <span>{"Products & Solutions"}</span>
                <span className="menu-arrow">{"\u203a"}</span>
              </button>
              <div className="submenu">
                <Link href="/optronics">{"Optronics"}</Link>
                <Link href="/defence-and-avionics">{"Avionics"}</Link>
              </div>
            </li>
            <li className="mobile-menu-item has-submenu">
              <button className="submenu-toggle" type="button">
                <span>{"Technology"}</span>
                <span className="menu-arrow">{"\u203a"}</span>
              </button>
              <div className="submenu">
                <Link href="/space-and-satellite-communication">{"Space & Satellite"}</Link>
                <Link href="/uav-drones">{"Unmanned Systems"}</Link>
              </div>
            </li>
            <li className="mobile-menu-item has-submenu">
              <button className="submenu-toggle" type="button">
                <span>{"Media"}</span>
                <span className="menu-arrow">{"\u203a"}</span>
              </button>
              <div className="submenu">
                <Link href="#">{"News"}</Link>
                <Link href="#">{"Events"}</Link>
              </div>
            </li>
            <li className="mobile-menu-item">
              <Link href="/careers">{"Careers"}</Link>
            </li>
            <li className="mobile-menu-item">
              <Link href="/contact-us">{"Contact Us"}</Link>
            </li>
            <li className="mobile-menu-item">
              <Link href="#">{"Privacy Policy"}</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mobile-bottom-nav">
        <button className="bottom-nav-item industries-btn" id="industriesToggle" type="button">
          {"Industries"}
        </button>
        <button className="bottom-nav-item contact-btn" id="contactToggle" type="button">
          {"Contact"}
        </button>
        <button className="bottom-nav-item menu-btn" id="menuToggle" type="button">
          {"Menu"}
        </button>
      </div>
    </>
  );
}
