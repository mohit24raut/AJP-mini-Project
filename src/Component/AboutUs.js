import "./AboutUs.css";

export default function About()
{
        return (
            <>
              <div className="container-fluid">
                <section className="hero">
                  <div className="heading">
                    <h1 style={{ display: "flex", justifyContent: "center" }}>
                      About Us
                    </h1>
                  </div>
                  <div className="row">
                    <div
                      className="col-sm-12 col-md-5 my-5 border"
                      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
                    >
                      <h2 className="hero-content-h2">CDAC Cooking Gas</h2>
                      <p style={{ textAlign: "justify" }} className="hero-content-p">
                      CDAC Cooking Gas has played a major role in India’s transition to cleaner fuels from the time it started marketing Liquified Petroleum Gas (LPG) in 1975. Brand Indane was conceived in 1974 to bring modern cooking to Indian kitchens and the first Indane LPG connection was released on 22nd October 1975 in Mumbai. From a humble beginning of a consumer base of around 2,000 in 1975, the brand has grown into a super brand that rules nearly 16 crore kitchens. As a matter of fact, every second cooking gas connection in India is an CDAC Cooking Gas.
                      </p>
                    </div>
                    <div className="col-sm-12 col-md-7   ">
                      <img
                        src="/AboutUs.jpeg"
                        alt=""
                        className="imgOldPerson"
                        style={{ height: "300px", width:"100%" }}
                      />
                    </div>
                  </div>
                </section>
              </div>
              <div className="container-fluid">
                <div className="row my-4">
                  <div
                    className="col-md-4 border"
                    style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
                  >
                    <div className="details">
                      <h2>Aim</h2>
                      <p style={{ textAlign: "justify" }}>
                        CDAC has now become one of the largest packed-LPG brands in the world, with CDAC gas as the second-largest marketer of LPG globally. CDAC is a Consumer Superbrand as conferred by the Superbrands Council of India. It is a brand synonymous with safety, reliability, and convenience.
                        To improve LPG penetration in the country and help better the lives of rural masses, CDACGas undertook the task of achieving 100% LPG penetration in the country in December 2015. Vyachakurahalli in Chikkaballapur district in Karnataka became the country’s first smokeless village, entering into the Limca Book of Records-2017.
                      </p>
                      <a href="https://egramswaraj.gov.in/">read more</a>
                    </div>
                  </div>
                  <div
                    className="col-md-4 border"
                    style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
                  >
                    <div className="details">
                      <h2>Mission</h2>
                      <p style={{ textAlign: "justify" }}>
                      CDAC Cooking Gas mission statement is "Taking the lead to fuel india's energy needs CDAC Cooking Gas's cross-country pipeline network facilitates crude oil transportation to refineries and finished products to high-demand centres in an efficient, economical, and environment-friendly manner."
                      </p>
                      <a href="https://egramswaraj.gov.in/">read more</a>
                    </div>
                  </div>
                  <div
                    className="col-md-4 border"
                    style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)" }}
                  >
                    <div className="details">
                      <h2>Vision</h2>
                      <p style={{ textAlign: "justify" }}>
                          Every COCian, present and future, must embody these revitalized values that will steer us towards greater heights. We encourage each one of you to reflect on how you bring these values to life every day. This self-reflection and awareness will ensure that our internal compass is always pointed towards our North Star. These new values will also be reflected on our company website as a public commitment to all our stakeholders.
                          From this day forward, let us recommit ourselves to our values of Care, Innovation, Passion, Trust, and Nation-first with renewed fervor as we embark on this new era. Welcome to the future of CDAC Cooking Gas.
                      </p>
                      <a href="https://egramswaraj.gov.in/">read more</a>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="container">
                <div className=" row justify-content-center">
                    <div className="col-sm-4 border 2px">
                        <img src="https://iocl.com/images/static/banner-3.jpg" className="gasimg"/>
                    </div>
                    <div className="col-sm-4 border 2px">
                        <img src="https://iocl.com/images/static/pmyu-tollfree.jpg" className="gasimg"/>
                    </div>
                    <div className="col-sm-4 border 2px ">
                        <img src="https://iocl.com/images/static/lpg-help-line.jpg" className="gasimg"/>
                    </div>
                </div>
              </div>
              <div
                className="details"
                style={{ display: "flex", justifyContent: "center", color: "Coral" }}
              >
                <h1 style={{ height: "10px" }}>OUR TEAM</h1>
              </div>
              <br />
              <br />
              <div
                className="row justify-content-center p-5 border border-5 border-shadow p-3 mb-5 bg-dark-subtle rounded"
                style={{
                  boxSizing: "border-box",
                  margin: "0%",
                  padding: "0%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="col-sm-12 col-md-3">
                  <div className="card">
                    <img
                      src="WhatsApp Image 2023-06-11 at 23.30.08.jpeg"
                      className="card-img-top imgUs"
                      alt=""
                    />
                    <div className="card-body">
                      <h5>Aniket Raut</h5>
                      <p className="card-text">
                        Currently Pursuing PGDAC from CDAC MUMBAI
                      </p>
                    </div>
                  </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="col-sm-12 col-md-3">
                  <div className="card">
                    <img
                      src="IMG_20220206_133448_673.jpg"
                      className="card-img-top imgUs"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Mohit Raut</h5>
                      <p className="card-text">
                        Currently Pursuing PGDAC from CDAC MUMBAI
                      </p>
                    </div>
                  </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="col-sm-12 col-md-3">
                  <div className="card">
                    <img
                      src="IMG_20200411_131612_581.jpg"
                      className="card-img-top imgUs"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">Aniket Ghargate</h5>
                      <p className="card-text">
                        Currently Pursuing PGDAC from CDAC MUMBAI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div
                className="row bg-dark justify-content-center align-item-center"
                style={{
                  boxSizing: "border-box",
                  margin: "0%",
                  padding: "1vh",
                }}
              >
                <div className="col-sm-6 ">
                  <p className="page">
                    Content on this website is owned, updated, and managed by the 
                    CDAC Cooking Gas pvt lmt, Government of India.
                  </p>
                  <p className="page">Designed and Developed by CDAC Mumbai</p>
                  <p className="page">Follow Us On</p>
                </div>
                <div className="col-sm-5 ">
                  <p className="page">
                    Toll FREE Number: 1800-2333-555
                  </p>
                  <p className="page">Commercial LPG Helpline No. 1860-5991-111</p>
                  <p className="page">Last updated on 03/07/2023 01:10 PM</p>
                </div>
                <div className="col-sm-1">
                  <img src="https://1.bp.blogspot.com/-3hatBLgnA6M/VwnzLx9ZcqI/AAAAAAAAE74/z5dQE1VgjFg4sWJ4yp2laew6sOfwVV0Sg/s1600/wsscc-to-support-swachh-bharat-slider.png" className="swachimg"/>
                </div>
              </div>
            </>
          );
}