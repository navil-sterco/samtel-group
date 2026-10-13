import Link from "next/link";
export const metadata = { title: "Investors Informations" };
export default function Page() {
  return (
    <>
      <section className="inner-section">
        <div className="container">
          <div className="col-lg-10 mx-auto">
            <div className="inner-text">
              <h1
                className="fade-up"
                data-delay="0.3"
                data-duration="1"
                style={
                  {
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: "1",
                    transform: "translate(0px, 0px)",
                  } as React.CSSProperties
                }
              >
                {"Investors Informations"}
              </h1>
              <blockquote
                className="fade-up"
                data-delay="0.3"
                data-duration="1.4"
              >
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
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
              className="fade-up"
              data-delay="0.3"
              data-duration="1"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="#">{"Home"}</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="#">{"Investors"}</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {"Financial Results"}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="products_systems_detail">
        <div className="container">
          <div className="products_systems_detail_grd">
            <div className="prodcut-nav">
              <ul>
                <li className="tab-item " data-category="airborne">
                  <Link href="/investors-informations">{"Annual Reports"}</Link>
                </li>
                <li className="tab-item active" data-category="naval">
                  <Link href="/financial-results">{"Financial Results"}</Link>
                </li>
                <li className="tab-item" data-category="land">
                  <Link href="/intimation-to-stock-exchange">
                    {"Intimation to Stock Exchange"}
                  </Link>
                </li>
                <li className="tab-item" data-category="optronics">
                  <Link href="/notice-of-board-meeting">
                    {"Notice of Board Meeting "}
                  </Link>
                </li>
                <li className="tab-item" data-category="space">
                  <Link href="#">
                    {"Newspaper Advertisement for Shareholders"}
                  </Link>
                </li>
                <li className="tab-item" data-category="unmanned">
                  <Link href="#">
                    {"Newspaper Advertisement Financial Results"}
                  </Link>
                </li>
                <li className="tab-item" data-category="railways">
                  <Link href="#">{"Share Holding Patterns"}</Link>
                </li>
                <li className="tab-item" data-category="testBench">
                  <Link href="#">
                    {"Secretarial Compliance Report for Equity Capital"}
                  </Link>
                </li>
                <li className="tab-item" data-category="customSolution">
                  <Link href="#">{"Notice To the Members"}</Link>
                </li>
                <li className="tab-item" data-category="corporate">
                  <Link href="#">{" Corporate Governance Report"}</Link>
                </li>
                <li className="tab-item" data-category="annual">
                  <Link href="#">{"Annual Compliance Report"}</Link>
                </li>
                <li className="tab-item" data-category="members">
                  <Link href="#">{"Members meetings"}</Link>
                </li>
              </ul>
            </div>
            <div className="pro_tab">
              <div className="tab_content_wrapper active" id="tab-naval">
                <div className="filter-new">
                  <label htmlFor="year">{"Financial Year wise Filter"}</label>
                  <select id="year" className="form-select" name="year">
                    <option value="">{"All Years"}</option>
                    <option>{"2024-2025"}</option>
                    <option>{" 2023-24"}</option>
                  </select>
                </div>
                <h3 className="fade-up" data-delay="0.3" data-duration="1">
                  {"Financial Results"}
                </h3>
                <div
                  className="quarterly fade-up"
                  data-delay="0.3"
                  data-duration="1"
                >
                  <h4 className="year-title">{"2025-26"}</h4>
                  <div className="quarterly-list">
                    <div className="quarterly-bx">
                      <div className="quarterly-txt">
                        <h5>{"Q1"}</h5>
                      </div>
                      <div className="anul_grid quarterly-results">
                        <div className="pdf-img">
                          <figure>
                            <figcaption>
                              <div className="pdf-text">
                                <p>{"Financial Results"}</p>
                                <p>
                                  <span>{"31.03.2026"}</span>
                                </p>
                              </div>
                              <img src="/images/pdficon.svg" alt="PDF Icon" />
                            </figcaption>
                          </figure>
                          <Link
                            href="#"
                            className="streched_link"
                            target="_blank"
                            rel="noopener"
                          ></Link>
                        </div>
                        <div className="pdf-img">
                          <figure>
                            <figcaption>
                              <div className="pdf-text">
                                <p>{"Financial Results"}</p>
                                <p>
                                  <span>{"31.03.2026"}</span>
                                </p>
                              </div>
                              <img src="/images/pdficon.svg" alt="PDF Icon" />
                            </figcaption>
                          </figure>
                          <Link
                            href="#"
                            className="streched_link"
                            target="_blank"
                            rel="noopener"
                          ></Link>
                        </div>
                      </div>
                    </div>
                    <div className="quarterly-bx">
                      <div className="quarterly-txt">
                        <h5>{"Q2"}</h5>
                      </div>
                      <div className="anul_grid quarterly-results">
                        <div className="pdf-img">
                          <figure>
                            <figcaption>
                              <div className="pdf-text">
                                <p>{"Financial Results"}</p>
                                <p>
                                  <span>{"31.03.2026"}</span>
                                </p>
                              </div>
                              <img src="/images/pdficon.svg" alt="PDF Icon" />
                            </figcaption>
                          </figure>
                          <Link
                            href="#"
                            className="streched_link"
                            target="_blank"
                            rel="noopener"
                          ></Link>
                        </div>
                        <div className="pdf-img">
                          <figure>
                            <figcaption>
                              <div className="pdf-text">
                                <p>{"Financial Results"}</p>
                                <p>
                                  <span>{"31.03.2026"}</span>
                                </p>
                              </div>
                              <img src="/images/pdficon.svg" alt="PDF Icon" />
                            </figcaption>
                          </figure>
                          <Link
                            href="#"
                            className="streched_link"
                            target="_blank"
                            rel="noopener"
                          ></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="quarterly-list">
                    <div className="quarterly-bx">
                      <div className="quarterly-txt">
                        <h5>{"Q3"}</h5>
                      </div>
                      <div className="anul_grid quarterly-results">
                        <div className="pdf-img">
                          <figure>
                            <figcaption>
                              <div className="pdf-text">
                                <p>{"Financial Results"}</p>
                                <p>
                                  <span>{"31.03.2026"}</span>
                                </p>
                              </div>
                              <img src="/images/pdficon.svg" alt="PDF Icon" />
                            </figcaption>
                          </figure>
                          <Link
                            href="#"
                            className="streched_link"
                            target="_blank"
                            rel="noopener"
                          ></Link>
                        </div>
                        <div className="pdf-img">
                          <figure>
                            <figcaption>
                              <div className="pdf-text">
                                <p>{"Financial Results"}</p>
                                <p>
                                  <span>{"31.03.2026"}</span>
                                </p>
                              </div>
                              <img src="/images/pdficon.svg" alt="PDF Icon" />
                            </figcaption>
                          </figure>
                          <Link
                            href="#"
                            className="streched_link"
                            target="_blank"
                            rel="noopener"
                          ></Link>
                        </div>
                      </div>
                    </div>
                    <div className="quarterly-bx">
                      <div className="quarterly-txt">
                        <h5>{"Q4"}</h5>
                      </div>
                      <div className="anul_grid quarterly-results">
                        <div className="pdf-img">
                          <figure>
                            <figcaption>
                              <div className="pdf-text">
                                <p>{"Financial Results"}</p>
                                <p>
                                  <span>{"31.03.2026"}</span>
                                </p>
                              </div>
                              <img src="/images/pdficon.svg" alt="PDF Icon" />
                            </figcaption>
                          </figure>
                          <Link
                            href="#"
                            className="streched_link"
                            target="_blank"
                            rel="noopener"
                          ></Link>
                        </div>
                        <div className="pdf-img">
                          <figure>
                            <figcaption>
                              <div className="pdf-text">
                                <p>{"Financial Results"}</p>
                                <p>
                                  <span>{"31.03.2026"}</span>
                                </p>
                              </div>
                              <img src="/images/pdficon.svg" alt="PDF Icon" />
                            </figcaption>
                          </figure>
                          <Link
                            href="#"
                            className="streched_link"
                            target="_blank"
                            rel="noopener"
                          ></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
