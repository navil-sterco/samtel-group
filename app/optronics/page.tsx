import Link from "next/link";
export const metadata = { title: "Optronics" };
export default function Page() {
  return (
    <>
      <section className="inner-section">
        <div className="container">
          <div className="col-lg-10 mx-auto">
            <div className="inner-text">
              <h1>{"Optronics\n"}</h1>
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
                  {"Optronics"}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="company-sec1">
        <div className="container">
          <div className="col-lg-10 mx-auto">
            <div className="company-text">
              <figure>
                <img src="/images/coming-soon.webp" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
