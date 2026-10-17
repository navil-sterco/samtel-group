import Link from "next/link";
export const metadata = { title: "Business" };
export default function Page() {
  return (
    <>
      <section className="inner-section">
        <div className="container">
          <div className="col-lg-10 mx-auto">
            <div
              className="inner-text fade-up"
              data-delay="0.3"
              data-duration="1"
            >
              <h1>{"Business"}</h1>
              <blockquote>
                {
                  " Samtel Group delivers advanced technologies and mission-critical solutions across Defence & Avionics, Railway Electronics, Space & Satellite, UAVs & Drones, and Optronics."
                }
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section className="breadcrumb-sec">
        <div className="container">
          <div className="col-lg-10 mx-auto">
            <nav
              style={
                { "--bs-breadcrumb-divider": "'>'" } as React.CSSProperties
              }
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="#">{"Home"}</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {"Business"}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="business_sec1">
        <div className="container">
          <div className="col-lg-10 mx-auto">
            <div
              className="business-txt fade-up"
              data-delay="0.3"
              data-duration="1.4"
            >
              <h2 className="font45">
                {"Diversified Companies Driving Innovation in Electronics, "}
                <span>{" Defense & Industrial Solutions"}</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="container-full">
          <div className="business_list_bx">
            <div className="business_list">
              <div className="business_img">
                <figure className="image">
                  <img src="/images/defence1.webp" className="img-fluid" />
                </figure>
              </div>
              <div
                className="business_text fade-up"
                data-delay="0.3"
                data-duration="1.5"
              >
                <h4 className="font30">{"Defence & Avionics"}</h4>
                <p>
                  {
                    "Supporting mission-critical airborne operations through indigenous avionics, advanced display systems, and high-reliability electronic technologies for modern aerospace and defence platforms."
                  }
                </p>
                <Link
                  href="https://samtel.vercel.app/category/airborne-systems"
                  target="_blank"
                  className="more_btn fade-up"
                  data-delay="0.6"
                  data-duration="1"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.1"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="business_list">
              <div className="business_img">
                <figure className="image">
                  <img src="/images/railway2.webp" className="img-fluid" />
                </figure>
              </div>
              <div
                className="business_text fade-up"
                data-delay="0.3"
                data-duration="1.8"
              >
                <h4 className="font30">{"Railway Electronics"}</h4>
                <p>
                  {
                    "Powering connected, intelligent, and efficient railway operations through advanced electronic systems and integrated digital solutions."
                  }
                </p>
                <Link
                  href="https://samtel.vercel.app/category/railways"
                  target="_blank"
                  className="more_btn fade-up"
                  data-delay="0.6"
                  data-duration="1"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.1"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="business_list_reve">
            <div className="business_list ">
              <div
                className="business_text fade-up"
                data-delay="0.3"
                data-duration="1.4"
              >
                <div className="business_left">
                  <h4 className="font30">{"Space & Satellite"}</h4>
                  <p>
                    {
                      "Advancing capabilities for a connected, intelligent, and increasingly space-enabled future through satellite communications and emerging space technologies."
                    }
                  </p>
                  <Link
                    href="https://samtel.vercel.app/category/space-satellite"
                    target="_blank"
                    className="more_btn fade-up"
                    data-delay="0.6"
                    data-duration="1"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.1"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="business_img">
                <figure className="image">
                  <img src="/images/space1.webp" className="img-fluid" />
                </figure>
              </div>
            </div>
            <div className="business_list">
              <div
                className="business_text fade-up"
                data-delay="0.3"
                data-duration="1.8"
              >
                <div className="business_left">
                  <h4 className="font30">{"UAVs & Drones"}</h4>
                  <p>
                    {
                      "Advancing autonomous capabilities through UAV technologies, mission-ready systems, and integrated solutions designed for evolving operational environments."
                    }
                  </p>
                  <Link
                    href="https://samtel.vercel.app/category/unmanned-systems"
                    target="_blank"
                    className="more_btn fade-up"
                    data-delay="0.6"
                    data-duration="1"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.1"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="business_img">
                <figure className="image">
                  <img src="/images/UAVs1.webp" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
          <div className="business_list_bx">
            <div className="business_list">
              <div className="business_img">
                <figure className="image">
                  <img src="/images/optronics1.webp" className="img-fluid" />
                </figure>
              </div>
              <div
                className="business_text fade-up"
                data-delay="0.3"
                data-duration="1.5"
              >
                <h4 className="font30">{"Optronics"}</h4>
                <p>
                  {
                    "Integrated EO/IR, imaging, tracking, stabilization and precision-motion capabilities for multi-domain applications."
                  }
                </p>
                <Link
                  href="https://samtel.vercel.app/category/land-tactical-systems"
                  target="_blank"
                  className="more_btn fade-up"
                  data-delay="0.6"
                  data-duration="1"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.1"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="business_list">
              <div className="business_img">
                <figure className="image">
                  <img src="/images/education1.webp" className="img-fluid" />
                </figure>
              </div>
              <div
                className="business_text fade-up"
                data-delay="0.3"
                data-duration="1.8"
              >
                <h4 className="font30">{"Education"}</h4>
                <p>
                  {
                    "As a key focus area of Samtel's social responsibility efforts for nearly four decades, through the schools run by Samtel, we invest in people and future generations."
                  }
                </p>
                <Link
                  href="https://samtel.vercel.app/sustainability-csr"
                  target="_blank"
                  className="more_btn fade-up"
                  data-delay="0.6"
                  data-duration="1"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.1"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="business_list_reve">
            <div className="business_list ">
              <div
                className="business_text fade-up"
                data-delay="0.3"
                data-duration="1.4"
              >
                <div className="business_left">
                  <h4 className="font30">{"Legacy Business"}</h4>
                  <p>
                    {
                      "Samtel’s well-established history of being India’s largest integrated manufacturer of a wide range of displays for consumer electronics, television, industrial, medical and professional applications."
                    }
                  </p>
                  <Link
                    href="/legacy-business"
                    className="more_btn fade-up"
                    data-delay="0.6"
                    data-duration="1"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.1"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="business_img">
                <figure className="image">
                  <img src="/images/space1.webp" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
