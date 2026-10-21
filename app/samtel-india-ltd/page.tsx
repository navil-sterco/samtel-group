import Link from "next/link";
export const metadata = { title: "Legacy Business" };
export default function Page() {
  return (
    <>
      <section className="inner-section">
        <div className="container">
          <div className="col-lg-10 mx-auto">
            <div className="inner-text">
              <h1>{"Samtel India Ltd"}</h1>
              <blockquote>
              
                {
                  "Samtel India Limited (SIL) was incorporated on 28.06.1981 under the Indian Companies Act, 1956. SIL is a listed company and its equity shares are listed at BSE Ltd."
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
                  {"Samtel India Ltd"}
                </li>
              </ol>
            </nav>
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
