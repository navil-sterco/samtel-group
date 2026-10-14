import Link from "next/link";
export const metadata = { title: "About" };
export default function Page() {
  return (
    <>
      <section className="inner-section">
        <div className="container">
          <div className="col-lg-10 mx-auto">
            <div className="inner-text">
              <h1 className="fade-up" data-delay="0.4" data-duration="1">
                {"About"}
              </h1>
              <blockquote
                className="fade-up"
                data-delay="0.4"
                data-duration="1.4"
              >
                {
                  "Five Decades of Innovation and Engineering Excellence, Delivering Advanced, Reliable Solutions for Mission-Critical Platforms Across Diverse Domains."
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
                <li
                  className="breadcrumb-item fade-up"
                  data-delay="0.4"
                  data-duration="1"
                >
                  <Link href="#">{"Home"}</Link>
                </li>
                <li
                  className="breadcrumb-item active fade-up"
                  data-delay="0.4"
                  data-duration="1.4"
                  aria-current="page"
                >
                  {"About"}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="abt_one">
        <div className="container">
          <div className="col-lg-10 mx-auto">
            <div className="abt_cont">
              <blockquote
                className="fade-up"
                data-delay="0.4"
                data-duration="1"
              >
                {
                  "Samtel is a five-decade old Group with a multi-dimensional presence in various domains, and is a leading Indian provider of state-of-the-art solutions tailored for demanding operational environments."
                }
              </blockquote>
            </div>
          </div>
        </div>
        <div className="container-full">
          <div className="abt_grid">
            <div className="abt_list">
              <p className="fade-up" data-delay="0.4" data-duration="1.4">
                {
                  "Its portfolio covers Defence Avionics, Railway Electronics, Satellite Technology, and Unmanned Aerial Vehicles (UAVs)."
                }
              </p>
              <p className="fade-up" data-delay="0.4" data-duration="1.8">
                {
                  "The company offers comprehensive, end-to-end capabilities, including design, development, manufacturing, testing, qualification, maintenance, and complete lifecycle management for mission-critical platforms."
                }
              </p>
              <p className="fade-up" data-delay="0.4" data-duration="2.2">
                {
                  "SA’s strong engineering capabilities, coupled with robust quality systems and decades of manufacturing experience, enable it to deliver reliable, high-performance products that meet global standards."
                }
              </p>
            </div>
            <figure className="fade-up" data-delay="0.4" data-duration="1.4">
              <img
                src="/images/abt-banner-img2.webp"
                alt="banner"
                className="img-fluid w-100"
              />
            </figure>
          </div>
        </div>
        <div className="container-full">
          <div
            className="abt_banner fade-up"
            data-delay="0.4"
            data-duration="1.4"
          >
            <figure>
              <img
                src="/images/abt-banner-img.webp"
                alt="banner"
                className="img-fluid w-100"
              />
            </figure>
          </div>
        </div>
        <div className="container-full">
          <div className="edu_grid">
            <figure className="fade-up" data-delay="0.4" data-duration="1.4">
              <img
                src="/images/abt-banner-img1.webp"
                alt="banner"
                className="img-fluid w-100"
              />
            </figure>
            <div className="edu_list">
              <h4 className="fade-up" data-delay="0.4" data-duration="1.4">
                {"EDUCATION"}
              </h4>
              <blockquote
                className="fade-up"
                data-delay="0.4"
                data-duration="1.8"
              >
                {"Nurturing Minds, "}
                <span>{"Empowering Future"}</span>
                {" Generations."}
              </blockquote>
              <p className="fade-up" data-delay="0.4" data-duration="2.2">
                {
                  "As a key focus area of Samtel's social responsibility efforts for nearly four decades, through the schools run by Samtel, we invest in people and future generations"
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
      </section>
    </>
  );
}
