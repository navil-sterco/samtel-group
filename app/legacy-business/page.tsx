import Link from "next/link";
export const metadata = { title: "Legacy Business" };
export default function Page() {
  return (
    <>
      <section className="inner-section">
        <div className="container">
          <div className="col-lg-10 mx-auto">
            <div className="inner-text">
              <h1>{"Legacy Business"}</h1>
              <blockquote>
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
                <li className="breadcrumb-item">
                  <Link href="#">{"Home"}</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="#">{"Business"}</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {"Legacy Business"}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="legacy_sec">
        <div className="container">
          <div className="col-lg-10 mx-auto">
            <div className="abt_cont">
              <h4>{"History of Consumer Electronics Business"}</h4>
              <blockquote
                className="fade-up"
                data-delay="0.4"
                data-duration="1"
              >
                {
                  "More than five decades ago, Samtel’s first picture tube plant was set up on the outskirts of Delhi in 1973."
                }
              </blockquote>
            </div>
          </div>
        </div>
        <div className="container-full">
          <div className="legacy_grid">
            <div className="legacy_cont">
              <p>
                {
                  "With strategic tie-ups with renowned players such as Mitsubishi (for setting up CPT manufacturing lines) and Corning (for glass plant), Samtel dominated the Colour Picture Tube manufacturing industry in India, later becoming one of the largest manufacturers of color picture tubes worldwide."
                }
              </p>
              <p>
                {
                  "The Company manufactured picture tubes for color televisions for brands such as Samsung, LG, BPL and Onida."
                }
              </p>
              <div className="legacy_counter">
                <h3>
                  {"65 "}
                  <sup>{"+"}</sup>
                </h3>
                <p>
                  {"Years of Legacy, "}
                  <br />
                  {"Innovation and Excellence"}
                </p>
              </div>
            </div>
            <figure className="fade-up" data-delay="0.4" data-duration="1.4">
              <img
                src="/images/legacy-business-img2.webp"
                alt="banner"
                className="img-fluid w-100"
              />
            </figure>
          </div>
          <div className="legacy_grid2">
            <figure className="fade-up" data-delay="0.4" data-duration="1.4">
              <img
                src="/images/legacy-business-img2.webp"
                alt="banner"
                className="img-fluid w-100"
              />
            </figure>
            <div className="legacy_cont2">
              <p>
                {
                  "The plant was set up in Ghaziabad, followed by four production lines for manufacturing of Color picture tubes. Samtel also set up its own electron gun manufacturing plant and deflection yoke manufacturing plants in Ghaziabad and Parwanoo, in factories owned by Samtel. Another initiative was taken at the same time to set up a glass manufacturing plant in Kota, in a JV with Corning Inc., USA."
                }
              </p>
              <p>
                {
                  "Due to technology obsolescence, the Group shifted its focus to other business ventures, and closed all its manufacturing units of picture tube related businesses."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="nurt_mind">
        <div className="container-full">
          <div className="col-lg-9 mx-auto">
            <div className="nurt_ttl">
              <h4>{"SAMTEL INDIA LIMITED"}</h4>
              <blockquote>
                {"Nurturing Minds, Empowering Future Generations."}
              </blockquote>
              <p>
                {
                  "Samtel India Limited (SIL) was incorporated on 28.06.1981 under the Indian Companies Act, 1956. SIL is a listed company and its equity shares are listed at BSE Ltd."
                }
              </p>
            </div>
          </div>
          <div className="nurt_banner">
            <figure className="fade-up" data-delay="0.4" data-duration="1.4">
              <img
                src="/images/legacy-business-img1.webp"
                alt="banner"
                className="img-fluid w-100"
              />
              <figcaption>
                <div className="container">
                  <div className="col-lg-10 mx-auto">
                    <div className="nurtin_cont">
                      <p>
                        {
                          "The company was into the manufacturing picture tubes for black & white television. However, due to change in technology and advent of new age televisions the business of the Company suffered losses and closed all its manufacturing units."
                        }
                      </p>
                      <div className="nurt_add">
                        <h4>
                          {"Registered Office"}
                          <span>
                            {
                              "1212, 12th Floor, 43, Chiranjiv Tower, Nehru Place, New Delhi – 110019"
                            }
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
