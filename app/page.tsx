import Link from "next/link";
export const metadata = { title: "Samtel Group" };
export default function Page() {
  return (
    <>
      <section className="home_banner2">
        <div className="banner_caption">
          <div className="container-group">
            <div className="banner_title">
              <p>
                <b>{"50 Years"}</b>
                {" of partnering in "}
              </p>
              <p>{"India’s success story"}</p>
              <em>
                {
                  "India’s Leading High-Technology Design, Development and Manufacturing"
                }
              </em>
            </div>
          </div>
        </div>
      </section>
      <section className="experiance_location">
        <div className="container">
          <div className="col-lg-10 mx-auto">
            <div className="experties_boxes">
              <div
                className="epxert_item fade-up"
                data-delay="0.3"
                data-duration="1"
              >
                <h3>
                  {"50 "}
                  <sup>{"+"}</sup>
                </h3>
                <p>{"Years of Expertise"}</p>
              </div>
              <div
                className="epxert_item fade-up"
                data-delay="0.3"
                data-duration="1.4"
              >
                <h3>
                  {"3000 "}
                  <sup>{"+"}</sup>
                </h3>
                <p>{"Employees"}</p>
              </div>
              <div
                className="epxert_item fade-up"
                data-delay="0.3"
                data-duration="1.8"
              >
                <h3>{"14"}</h3>
                <p>{"Plants"}</p>
              </div>
              <div
                className="epxert_item fade-up"
                data-delay="0.3"
                data-duration="2.2"
              >
                <h3>{"12"}</h3>
                <p>{"Locations"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home_line">
        <div className="down_btn">
          <div className="line-section">
            <div className="line-wrap">
              <span className="line-progress"></span>
            </div>
          </div>
        </div>
      </section>
      <section className="who_we">
        <div className="container">
          <div className="font_title">
            <p className="fade-up" data-delay="0.4" data-duration="1">
              {"OUR DIVISIONS"}
            </p>
            <blockquote className="fade-up" data-delay="0.4" data-duration="1">
              {"Diversified Companies Driving Innovation in "}
              <br />
              <b>{"Electronics, Defense & Industrial Solutions"}</b>
            </blockquote>
          </div>
        </div>
        <div
          className="portfolio-grid fade-up"
          data-delay="0.4"
          data-duration="1"
        >
          <div className="grid-row-top">
            <div className="system-tile">
              <div
                className="tile-backdrop"
                style={
                  {
                    backgroundImage: "url('/images/airborne.webp')",
                  } as React.CSSProperties
                }
              ></div>
              <div className="tile-info-wrapper">
                <figure>
                  <img
                    src="/images/defence-avionics.webp"
                    className="img-fluid"
                  />
                </figure>
                <h3>{"Defence & Avionics"}</h3>
                <p>
                  {
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"
                  }
                </p>
              </div>
              <div className="tile-action-trigger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke=""
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="system-tile">
              <div
                className="tile-backdrop"
                style={
                  {
                    backgroundImage: "url('/images/railways1.webp')",
                  } as React.CSSProperties
                }
              ></div>
              <div className="tile-info-wrapper">
                <figure>
                  <img
                    src="/images/railway-electronics.webp"
                    className="img-fluid"
                  />
                </figure>
                <h3>{"Railway Electronics"}</h3>
                <p>
                  {
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"
                  }
                </p>
              </div>
              <div className="tile-action-trigger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke=""
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="system-tile">
              <div
                className="tile-backdrop"
                style={
                  {
                    backgroundImage: "url('/images/land.webp')",
                  } as React.CSSProperties
                }
              ></div>
              <div className="tile-info-wrapper">
                <figure>
                  <img src="/images/optronics.webp" className="img-fluid" />
                </figure>
                <h3>{"Optronics"}</h3>
                <p>
                  {
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"
                  }
                </p>
              </div>
              <div className="tile-action-trigger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke=""
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="system-tile">
              <div
                className="tile-backdrop"
                style={
                  {
                    backgroundImage: "url('/images/space.webp')",
                  } as React.CSSProperties
                }
              ></div>
              <div className="tile-info-wrapper">
                <figure>
                  <img src="/images/satellite.webp" className="img-fluid" />
                </figure>
                <h3>{"Space & Satellite Communications"}</h3>
                <p>
                  {
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"
                  }
                </p>
              </div>
              <div className="tile-action-trigger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke=""
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="grid-row-bottom">
            <div className="system-tile">
              <div
                className="tile-backdrop"
                style={
                  {
                    backgroundImage: "url('/images/unmanned.webp')",
                  } as React.CSSProperties
                }
              ></div>
              <div className="tile-info-wrapper">
                <figure>
                  <img
                    src="/images/unmanned-systems1.webp"
                    className="img-fluid"
                  />
                </figure>
                <h3>{"Unmanned Systems (UAVs & Drones)"}</h3>
                <p>
                  {
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"
                  }
                </p>
              </div>
              <div className="tile-action-trigger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke=""
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="system-tile">
              <div
                className="tile-backdrop"
                style={
                  {
                    backgroundImage: "url('/images/education-new.webp')",
                  } as React.CSSProperties
                }
              ></div>
              <div className="tile-info-wrapper">
                <figure>
                  <img src="/images/education.webp" className="img-fluid" />
                </figure>
                <h3>{"Education"}</h3>
                <p>
                  {
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"
                  }
                </p>
              </div>
              <div className="tile-action-trigger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke=""
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="system-tile">
              <div
                className="tile-backdrop"
                style={
                  {
                    backgroundImage: "url('/images/legacy-new.webp')",
                  } as React.CSSProperties
                }
              ></div>
              <div className="tile-info-wrapper">
                <figure>
                  <img
                    src="/images/legacy-business.webp"
                    className="img-fluid"
                  />
                </figure>
                <h3>{"Legacy Business"}</h3>
                <p>
                  {
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque"
                  }
                </p>
              </div>
              <div className="tile-action-trigger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke=""
                    strokeWidth="1.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
                  <div className="mb_ind_grid">
                    <blockquote>Learn more about industrial sectors</blockquote>
                    <div className="mobile-trigger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 6L15 12L9 18" stroke="" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <Link className="streched_link" href="https://samtel.vercel.app/industries" target="_blank">link</Link>
                  </div>

          </div>
        </div>
      </section>
      <section
        className="happenings-section fade-up"
        data-delay="0.4"
        data-duration="1"
      >
        <div className="container">
          <div className="happening-header">
            <div className="font_title">
              <p className="fade-up" data-delay="0.4" data-duration="1">
                {"HAPPENINGS"}
              </p>
              <blockquote
                className="fade-up"
                data-delay="0.5"
                data-duration="1"
              >
                {"News, Events, Insight and more"}
              </blockquote>
            </div>
            <Link
              href="/newsroom"
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
        <div
          className="slider-outer-wrapper fade-up"
          data-delay="0.7"
          data-duration="1"
        >
          <div className="swiper happenings-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="happening-image">
                  <img
                    src="/images/news2.webp"
                    className="img-fluid"
                    alt="Samtel Avionics"
                  />
                </div>
                <div className="happening-content">
                  <h3>
                    {
                      "Private defence makers push for deeper Indian innovation and export muscle\n"
                    }
                  </h3>
                  <span className="happening-date">{"September 09, 2026"}</span>
                </div>
                <Link className="streched_link" href="#"></Link>
              </div>
              <div className="swiper-slide">
                <div className="happening-image">
                  <img
                    src="/images/news4.webp"
                    className="img-fluid"
                    alt="Samtel Avionics"
                  />
                </div>
                <div className="happening-content">
                  <h3>
                    {
                      "Samtel Avionics and Japan's BULL sign MoU on Space debris mitigation solutions\n"
                    }
                  </h3>
                  <span className="happening-date">{"September 08, 2026"}</span>
                </div>
                <Link className="streched_link" href="#"></Link>
              </div>
              <div className="swiper-slide">
                <div className="happening-image">
                  <img
                    src="/images/news3.webp"
                    className="img-fluid"
                    alt="Samtel Avionics"
                  />
                </div>
                <div className="happening-content">
                  <h3>
                    {
                      "Samtel Avionics appoints Bharti Airtel veteran Akhil Gupta as Strategic Advisor"
                    }
                  </h3>
                  <span className="happening-date">{"September 03, 2026"}</span>
                </div>
                <Link className="streched_link" href="#"></Link>
              </div>
              <div className="swiper-slide">
                <div className="happening-image">
                  <img
                    src="/images/news1.webp"
                    className="img-fluid"
                    alt="Samtel Avionics"
                  />
                </div>
                <div className="happening-content">
                  <h3>
                    {
                      "How homegrown avionics are becoming critical to India’s defence manufacturing push"
                    }
                  </h3>
                  <span className="happening-date">{"August 30, 2026"}</span>
                </div>
                <Link className="streched_link" href="#"></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="samtel_social fade-up"
        data-delay="0.4"
        data-duration="1"
      >
        <div className="container-group">
          <h4>{"SAMTEL SOCIAL"}</h4>
          <div className="row">
            <div
              className="col-lg-4 fade-up"
              data-delay="0.7"
              data-duration="1"
            >
              <div className="scoail_item">
                <div className="scoicl_icon">
                  <figure>
                    <img src="/images/linkdin_img.svg" className="img-fluid" />
                  </figure>
                </div>
                <div className="social_box">
                  <h5>{"Business today goes beyond markets"}</h5>
                  <p>
                    {
                      "Samtel Avionics recently participated in a closed-door discussion with the CII National\n                                Council and CII Northern Region,"
                    }
                  </p>
                  <figure>
                    <img src="/images/social_pic1.webp" className="img-fluid" />
                  </figure>
                </div>
                <Link className="streched_link" href="#"></Link>
              </div>
            </div>
            <div
              className="col-lg-4 fade-up"
              data-delay="0.7"
              data-duration="1.3"
            >
              <div className="scoail_item">
                <div className="scoicl_icon">
                  <figure>
                    <img src="/images/x-icon1.svg" className="img-fluid" />
                  </figure>
                </div>
                <div className="social_box">
                  <h6>{"Posts from Samtel"}</h6>
                  <figure>
                    <img src="/images/social_pic2.webp" className="img-fluid" />
                  </figure>
                </div>
                <Link className="streched_link" href="#"></Link>
              </div>
            </div>
            <div
              className="col-lg-4 fade-up"
              data-delay="0.7"
              data-duration="1.6"
            >
              <div className="scoail_item">
                <div className="scoicl_icon">
                  <figure>
                    <img src="/images/youtube-icon.svg" className="img-fluid" />
                  </figure>
                </div>
                <div className="social_box">
                  <figure>
                    <img src="/images/social_pic3.webp" className="img-fluid" />
                  </figure>
                </div>
                <Link className="streched_link" href="#"></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

