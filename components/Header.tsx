"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  return (
    <>
      <section className={pathname === "/" ? "header" : "header inner-header"}>
        <div className="container-group">
          <div className="header_nav">
            <div className="logo">
              <Link href="/">
                <figure>
                  <img
                    src="/images/group-logo.webp"
                    className="img-fluid"
                    alt="Logo"
                  />
                </figure>
              </Link>
            </div>
            <nav className="main-nav">
              <ul>
                <li className="site_dropdown">
                  <Link href="#">{"Group Companies"}</Link>
                  <ul className="site_dropdown_menu">
                    <li>
                      <Link href="#">{"Samtel Avionics"}</Link>
                    </li>
                    <li>
                      <Link href="#">{"SDHS"}</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/about">{"About"}</Link>
                </li>
                <li>
                  <Link href="/business">{"Business"}</Link>
                </li>
                <li className="site_dropdown">
                  <Link href="#">{"Investors "}</Link>
                  <ul className="site_dropdown_menu">
                    <li>
                      <Link href="/investors-informations">
                        {" Investors Informations"}
                      </Link>
                    </li>
                    <li>
                      <Link href="/company-informations">
                        {"Company Informations"}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/careers">{"Careers"}</Link>
                </li>
                <li>
                  <Link href="/contact-us">{"Contact Us"}</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <section className="mobile-logo-bar" aria-label="Samtel home">
        <Link href="/">
          <img src="/images/group-logo.webp" className="img-fluid" alt="Logo" />
        </Link>
      </section>
      <div className="nav-overlay" />
    </>
  );
}
