import Link from "next/link";
export const metadata = { title: "Company Informations" };
export default function Page() {
  return (
    <>
      <section className="inner-section">
        <div className="container">
          <div className="col-lg-10 mx-auto">
            <div className="inner-text">
              <h1 className="fade-up" data-delay="0.3" data-duration="1">
                {"Company Informations"}
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
                  {"Company Informations"}
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
                <li className="tab-item active">
                  <Link href="/company-informations">
                    {"Registered Office Address/Details"}
                  </Link>
                </li>
                <li className="tab-item">
                  <Link href="#">{"RTA Contact Details"}</Link>
                </li>
                <li className="tab-item">
                  <Link href="#">
                    {"Board of Directors and Key Managerial Perosonals"}
                  </Link>
                </li>
                <li className="tab-item">
                  <Link href="#">
                    {
                      "Code of conduct of Board of Directors and Senior Management Personnel"
                    }
                  </Link>
                </li>
                <li className="tab-item">
                  <Link href="#">
                    {
                      "Composition of Board and Committees of Board of Directors"
                    }
                  </Link>
                </li>
                <li className="tab-item">
                  <Link href="#">
                    {"Contact Details for Shareholders Grievance Redressal"}
                  </Link>
                </li>
                <li className="tab-item">
                  <Link href="#">{"Credit Rating"}</Link>
                </li>
                <li className="tab-item">
                  <Link href="#">
                    {
                      "Details of Key Managerial Personnel who are authorized for the purpose of determining materiality"
                    }
                  </Link>
                </li>
                <li className="tab-item">
                  <Link href="#">{"Details of Business"}</Link>
                </li>
                <li className="tab-item">
                  <Link href="#">{" Familiarization Programm"}</Link>
                </li>
                <li className="tab-item">
                  <Link href="#">
                    {
                      "Term and Conditions of Appointment of Independent Directors"
                    }
                  </Link>
                </li>
                <li className="tab-item">
                  <Link href="#">{"Investor Presentation"}</Link>
                </li>
                <li className="tab-item">
                  <Link href="#">{"Investor Presentation"}</Link>
                </li>
                <li className="tab-item">
                  <Link href="#">{"Various Policies"}</Link>
                </li>
                <li className="tab-item">
                  <Link href="#">{"Financial Statement of Subsidiary"}</Link>
                </li>
                <li className="tab-item">
                  <Link href="#">
                    {
                      " Brief Profile of Board of Directors including Directorship and Full-time Positions in Body Corporates"
                    }
                  </Link>
                </li>
                <li className="tab-item">
                  <Link href="#">{" Compulsory Demat of Physical Shares"}</Link>
                </li>
                <li className="tab-item">
                  <Link href="#">{" Merger"}</Link>
                </li>
                <li className="tab-item">
                  <Link href="#">
                    {" Policies - Related parties transections & others"}
                  </Link>
                </li>
                <li className="tab-item">
                  <Link href="#">{" Unpaid & Unclaimed Dividend Amount"}</Link>
                </li>
                <li className="tab-item">
                  <Link href="#">{" Vision & Mission"}</Link>
                </li>
                <li className="tab-item">
                  <Link href="#">{"Tax On Dividend"}</Link>
                </li>
                <li className="tab-item">
                  <Link href="#">{"Online Dispute Resolution"}</Link>
                </li>
                <li className="tab-item">
                  <Link href="#">{"CSR Annual Action Plan"}</Link>
                </li>
                <li className="tab-item">
                  <Link href="#">{"Rights Issue"}</Link>
                </li>
                <li className="tab-item">
                  <Link href="#">{"Other Compliances\n"}</Link>
                </li>
              </ul>
            </div>
            <div className="pro_tab">
              <div className="tab_content_wrapper active">
                <h3 className="fade-up" data-delay="0.3" data-duration="1">
                  {"Registered Office Address/Details"}
                </h3>
                <div className="notice-text">
                  <blockquote
                    className="fade-up"
                    data-delay="0.3"
                    data-duration="1"
                  >
                    {
                      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley"
                    }
                  </blockquote>
                  <p className="fade-up" data-delay="0.3" data-duration="1">
                    {
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. \n"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
